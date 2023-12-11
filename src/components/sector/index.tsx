import React from "react";
import SectorCarousel, { Loading as LoadingCarousel } from "./sector-carousel";
import { Link } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";
import { useQuery } from "react-query";
import Gallery from "@/components/gallery/opening";

import { get, getImages } from "@/fetch/sectors";
import { ISector } from "@/interfaces/api/sector";
import { ISectorImages } from "@/interfaces/api/sector-images";

interface ISectorProps {
  id: string;
  name: string;
  color: string;
  description: string;
  clickable?: boolean;
  className?: string;
}

export default function Sector(props: ISectorProps) {
  const { id, clickable, className } = props;
  const { isLoading, data } = useQuery(["sectorsImages", id], async () =>
    getImages(id)
  );

  if (isLoading) return <LoadingItem className={className} />;

  const sectorImages = data?.data as ISectorImages[];

  return (
    <div className="flex flex-col gap-4">
      {clickable ? (
        <Link to={`setores/${id}`}>
          <SectorHeader {...props} />
        </Link>
      ) : (
        <SectorHeader {...props} />
      )}
      <div className="w-full h-fit">
        <SectorCarousel
          className={className}
          images={sectorImages.map((image) => ({
            legend: image.legenda,
            thumbnailSrc: `${
              import.meta.env.VITE_STORAGE_IMAGES
            }/promarket/Setores/Principal/${image.fileName}__preview.webp`,
            src: `${
              import.meta.env.VITE_STORAGE_IMAGES
            }/promarket/Setores/Principal/${image.fileName}_.webp`,
            markers: image.produtos.map((i) => ({
              x: i.x,
              y: i.y,
              placeholder: i.produto.codigo,
              productId: i.produtoId,
            })),
          }))}
        />
      </div>
    </div>
  );
}

interface ISectorHeaderProps {
  id: string;
  className?: string;
  showText?: boolean;
}

export function SectorHeader(props: ISectorHeaderProps) {
  const { id, className, showText = false } = props;

  const { isLoading, data: queryData } = useQuery(
    ["sectors", id],
    async () => await get(id as string)
  );
  const data = queryData?.data as ISector;

  if (isLoading)
    return (
      <LoadingItem
        className={className}
        withCarousel={false}
        showText={showText}
      />
    );

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex gap-4">
        <div
          className="h-6 w-8 rounded-md"
          style={{ background: data.cor }}
        ></div>
        <strong className="text-slate-800">{data.nome}</strong>
      </div>
      {showText ? <p className="">{data.descricao}</p> : null}
    </div>
  );
}

export function LoadingItem(props: {
  className?: string;
  withCarousel?: boolean;
  showText?: boolean;
}) {
  const { className, withCarousel = true, showText } = props;
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="w-full h-6 bg-slate-300 animate-pulse rounded-md" />
      {showText ? (
        <div className="w-full h-32 md:h-4 bg-slate-300 animate-pulse rounded-md" />
      ) : null}
      {withCarousel ? <LoadingCarousel /> : null}
    </div>
  );
}

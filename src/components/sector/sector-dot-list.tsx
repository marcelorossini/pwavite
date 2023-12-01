import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { isMobileOnly } from "react-device-detect";

import SectorDotDesktop from "@/components/sector/sector-dot-list-desktop";

import { getAll } from "@/fetch/sectors";

import { ISector } from "@/interfaces/api/sector";

interface ISectorDotList {
  className?: string;
}

export default function SectorDotList(props: ISectorDotList) {
  const { className = "" } = props;
  const { isLoading, data } = useQuery(["sectors"], getAll);

  if (isLoading) return <Loading className={className} />;

  const sectors = data?.data as ISector[];

  return (
    <div>
      {isMobileOnly ? (
        <ul
          className={`w-full flex gap-2 overflow-x-auto scrollbar-hide ${className}`}
        >
          {sectors.map((sector) => (
            <Item
              key={sector.id}
              name={sector.nome}
              url={`/setores/${sector.id}`}
              image={sector.icone}
            />
          ))}
        </ul>
      ) : (
        <SectorDotDesktop
          items={sectors.map((sector) => (
            <Item
              key={sector.id}
              name={sector.nome}
              url={`/setores/${sector.id}`}
              image={sector.icone}
            />
          ))}
        />
      )}
    </div>
  );
}

interface ISectorItemProps {
  name: string;
  image: string;
  url: string;
}

function Item(props: ISectorItemProps) {
  const { name, image, url } = props;

  return (
    <li className="w-full h-full flex flex-col items-center gap-2">
      <Link to={url}>
        <div className="w-20 flex flex-col gap-2 relative overflow-hidden">
          <div className="w-full h-full aspect-square rounded-full bg-slate-200 relative">
            {image ? (
              <img
                src={`${
                  import.meta.env.VITE_STORAGE_IMAGES
                }/promarket/Setores/Icones/${image}`}
                alt={name}
                className="p-2"
              />
            ) : null}
          </div>
          <small className="w-full h-8 text-xs line-clamp-2 text-center subpixel-antialiased leading-tight">
            {name}
          </small>
        </div>
      </Link>
    </li>
  );
}

function Loading(props: ISectorDotList) {
  const { className } = props;
  return (
    <ul
      className={`w-full flex gap-2 overflow-x-auto scrollbar-hide ${className}`}
    >
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
    </ul>
  );
}

function LoadingItem() {
  return (
    <li className="w-full h-full flex flex-col gap-2">
      <div className="w-20 flex flex-col gap-2 relative">
        <div className="w-full h-full aspect-square rounded-full bg-slate-300 animate-pulse" />
        <small className="w-full h-8 bg-slate-300 animate-pulse rounded-md" />
      </div>
    </li>
  );
}

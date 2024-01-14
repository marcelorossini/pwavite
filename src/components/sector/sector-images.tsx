import React from "react";
import { useQuery } from "react-query";
import { get, getImages } from "@/fetch/sectors";
import { ISector } from "@/interfaces/api/sector";
import { ISectorImages } from "@/interfaces/api/sector-images";
import ImageWithLegend from "@/components/image/image-with-legend";
import ImageProductMarker, {
  IImageMarker,
} from "@/components/image/image-product-marker";
import Lightbox from "@/components/lightbox";

export default function SectorImages(props: { id: string }) {
  const { id } = props;
  const [lightboxCarouselOpen, setLightboxCarouselOpen] =
    React.useState<boolean>(false);
  const [lightboxCarouselSlide, setLightboxCarouselSlide] =
    React.useState<number>(0);  
  const { isLoading, data } = useQuery(["sectorsImages", id], async () =>
    await getImages(id)
  );

  if (isLoading) return <Loading />; //<LoadingItem withCarousel={false} />;

  const sectorImages = data?.data as ISectorImages[];
  console.log(sectorImages)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
      {sectorImages.map((image, index) => (
        <div className="relative" key={image.fileName}>
          <ImageProductMarker
            markers={image.produtos.map((i) => ({
              x: i.x,
              y: i.y,
              placeholder: i.produto.codigo,
              productId: i.produto.id,
            }))}
          />
          <ImageWithLegend
            legend={image.legenda}
            src={`${
              import.meta.env.VITE_STORAGE_IMAGES
            }/promarket/Imagens/${image.fileName}_.webp`}
            onClick={() => {
              setLightboxCarouselSlide(index);
              setLightboxCarouselOpen(true);
            }}
          />
        </div>
      ))}
      <Lightbox
        key={id}
        isOpen={lightboxCarouselOpen}
        onClose={() => setLightboxCarouselOpen(false)}
        index={lightboxCarouselSlide}
        images={sectorImages.map((image) => ({
          title: null,
          description: image.legenda,
          src: `${
            import.meta.env.VITE_STORAGE_IMAGES
          }/promarket/Imagens/${image.fileName}_.webp`,
        }))}
      />
    </div>
  );
}

export function Loading() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
    </div>
  );
}

import { useQuery } from "react-query";
import { get, getImages } from "@/fetch/sectors";
import { ISector } from "@/interfaces/api/sector";
import { ISectorImages } from "@/interfaces/api/sector-images";
import ImageWithLegend from "@/components/image/image-with-legend";
import ImageProductMarker, {
  IImageMarker,
} from "@/components/image/image-product-marker";

export default function SectorImages(props: { id: string }) {
  const { id } = props;

  const { isLoading, data } = useQuery(["sectorsImages", id], async () =>
    getImages(id)
  );

  if (isLoading) return <Loading />; //<LoadingItem withCarousel={false} />;

  const sectorImages = data?.data as ISectorImages[];

  return (
    <div className="flex flex-col gap-6 py-6">
      {sectorImages.map((image) => (
        <div className="relative" key={image.fileName}>
          <ImageProductMarker
            markers={image.produtos.map((i) => ({
              x: i.x,
              y: i.y,
              placeholder: i.produto.codigo,
              productId: i.produtoId,
            }))}
          />
          <ImageWithLegend
            legend={image.legenda}
            src={`${
              import.meta.env.VITE_STORAGE_IMAGES
            }/promarket/Setores/Principal/${image.fileName}_.webp`}
          />
        </div>
      ))}
    </div>
  );
}

export function Loading() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
    </div>
  );
}

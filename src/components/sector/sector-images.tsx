import { useQuery } from "react-query";
import { get, getImages } from "@/fetch/sectors";
import { ISector } from "@/interfaces/api/sector";
import { ISectorImages } from "@/interfaces/api/sector-images";
import ImageWithLegend from "@/components/image/image-with-legend";

export default function SectorImages(props: { id: string }) {
  const { id } = props;

  const { isLoading, data } = useQuery(["sectorsImages", id], async () =>
    getImages(id)
  );

  if (isLoading) return <Loading/>; //<LoadingItem withCarousel={false} />;

  const sectorImages = data?.data as ISectorImages[];

  return (
    <div className="flex flex-col gap-2 py-4">
      {sectorImages.map((image) => (
        <ImageWithLegend
          legend={image.legenda}
          src={`${
            import.meta.env.VITE_STORAGE_IMAGES
          }/promarket/Setores/Principal/${image.fileName}_.webp`}
        />
      ))}
    </div>
  );
}

export function Loading() {
  return <div className="flex flex-col gap-2 py-4">
    <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse"/>
    <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse"/>
    <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse"/>
    <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse"/>
    <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse"/>
    <div className="w-full h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse"/>
  </div>;
}

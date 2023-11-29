import CachedImage from "@/components/cached-image";

export default function ImageWithLegend({
  src,
  legend,
}: {
  src: string;
  legend?: string;
}) {
  return (
    <div className="w-full aspect-[4/3] relative overflow-hidden">
      <CachedImage
        src={src}
        alt=""
        className="w-full h-full object-cover"
        loading="eager"
      />

      <strong className="absolute bottom-0 left-0 px-4 py-2 text-white text-shadow-lg">
        {legend}
      </strong>
    </div>
  );
}
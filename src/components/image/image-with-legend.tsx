import CachedImage from "@/components/image/cached-image";

export default function ImageWithLegend({
  src,
  legend,
  onClick
}: {
  src: string;
  legend?: string;
  onClick?: () => void;
}) {
  return (
    <div className="w-full aspect-[4/3] relative overflow-hidden" onClick={onClick}>
      <CachedImage
        src={src}
        alt=""
        className="w-full h-full object-cover"
        loading="eager"
      />

      <p className="absolute bottom-0 left-0 px-4 py-2 text-white text-shadow-lg font-medium">
        {legend}
      </p>
    </div>
  );
}

import CachedImage from "@/components/image/cached-image";
import { MdFullscreen } from "react-icons/md";

export default function ImageWithLegend({
  src,
  legend,
  onClick,
  loading,
  className,
}: {
  src: string;
  legend?: string;
  onClick?: () => void;
  loading?: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} w-full aspect-[4/3] relative overflow-hidden`}
      onClick={onClick}
    >
      <CachedImage
        src={src}
        alt=""
        className="w-full h-full object-cover"
        loading={loading || "eager"}
      />

      <p className="absolute bottom-0 left-0 px-4 py-2 text-white font-medium">
        <span className="relative z-[1]">{legend}</span>
        {!!legend ? (
          <div className="absolute z-0 top-0 left-0 w-full h-full bg-black blur-xl opacity-30">
            <span className="invisible">{legend}</span>
          </div>
        ) : null}
      </p>
      <div className="absolute top-0 right-0 text-white p-1 cursor-pointer">
        <MdFullscreen size={25}/>
      </div>
    </div>
  );
}

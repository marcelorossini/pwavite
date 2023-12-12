import React from "react";

import ImageProductMarker, {
  IImageMarker,
} from "@/components/image/image-product-marker";
import ImageWithLegend from "@/components/image/image-with-legend";
import { isMobileOnly } from "react-device-detect";


import Slider from "@/components/slider";

const sliderSettings = {
  0: {
    slidesPerView: 1.2,
    spaceBetween: 16,
  },
  768: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 16,
  },
};

interface IImages {
  thumbnailSrc: string;
  src: string;
  legend?: string;
  markers?: IImageMarker[];
}

interface ISectorCarousel {
  images: IImages[];
  className?: string;
}

export default function SectorCarousel(props: ISectorCarousel) {
  const { images, className } = props;

  return (
    <Slider
      data={images}
      className={className}
      breakpoints={sliderSettings}
      lightbox={true}
      imageComponent={({data, onClick}) => {
        return (
          <>
            <ImageProductMarker
              markers={data.markers || ([] as IImageMarker[])}
            />
            <ImageWithLegend
              src={data.thumbnailSrc}
              legend={data.legend}
              onClick={onClick}
              loading="lazy"
            />
          </>
        );
      }}
      autoplay={{
        // @ts-ignore
        enabled: !isMobileOnly,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true,
        delay: 5000,
      }}
    />
  );
}

export function Loading() {
  return (
    <div className="w-full flex gap-4 overflow-hidden">
      <div className="w-5/6 sm:w-1/2 md:w-1/3 h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-5/6 sm:w-1/2 md:w-1/3 h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-5/6 sm:w-1/2 md:w-1/3 h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-5/6 sm:w-1/2 md:w-1/3 h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
    </div>
  );
}

import React from "react";
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { isMobileOnly } from "react-device-detect";

import Lightbox from "@/components/lightbox";
import ImageProductMarker, {
  IImageMarker,
} from "@/components/image/image-product-marker";
import ImageWithLegend from "@/components/image/image-with-legend";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const sliderSettings = {
  0: {
    slidesPerView: 1.2,
    spaceBetween: 24,
  },
  768: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 24,
  },
  1024: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 24,
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
}

export default function SectorCarousel(props: ISectorCarousel) {
  const { images } = props;
  const [lightboxCarouselOpen, setLightboxCarouselOpen] =
    React.useState<boolean>(false);
  const [lightboxCarouselSlide, setLightboxCarouselSlide] =
    React.useState<number>(0);

  const swiperRef = React.useRef<any>();

  return (
    <div className="relative">
      <PrevButton swiperRef={swiperRef} />
      <Swiper
        ref={swiperRef}
        breakpoints={sliderSettings}
        loop
        modules={[Navigation, Autoplay]}
        pagination={{ clickable: true }}
        style={{ paddingLeft: isMobileOnly ? "24px" : "" }}
        autoplay={{
          // @ts-ignore
          enabled: !isMobileOnly,
          stopOnLastSlide: false,
          pauseOnMouseEnter: true,
          delay: 5000,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ImageProductMarker
              markers={image.markers || ([] as IImageMarker[])}
            />
            <ImageWithLegend
              src={image.thumbnailSrc}
              legend={image.legend}
              onClick={() => {
                setLightboxCarouselSlide(index);
                setLightboxCarouselOpen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <NextButton swiperRef={swiperRef} />
      <Lightbox
        isOpen={lightboxCarouselOpen}
        onClose={() => setLightboxCarouselOpen(false)}
        index={lightboxCarouselSlide}
        images={images.map((image) => ({
          title: null,
          description: image.legend,
          src: image.src,
        }))}
      />
    </div>
  );
}

function PrevButton({ swiperRef }: any) {
  return (
    <button
      className="hidden md:flex absolute top-0 left-0 z-10 w-10 h-full items-center justify-center"
      onClick={() => swiperRef.current.swiper.slidePrev()}
    >
      <HiOutlineChevronLeft
        size={40}
        className="text-white drop-shadow-[0_0_10px_rgb(0,0,0,1)] transition-all hover:scale-125"
      />
    </button>
  );
}

function NextButton({ swiperRef }: any) {
  return (
    <button
      className="hidden md:flex absolute top-0 right-0 z-10 w-10 h-full items-center justify-center"
      onClick={() => swiperRef.current.swiper.slideNext()}
    >
      <HiOutlineChevronRight
        size={40}
        className="text-white drop-shadow-[0_0_10px_rgb(0,0,0,1)] transition-all hover:scale-125"
      />
    </button>
  );
}

export function Loading() {
  return (
    <div className="w-full flex gap-6 overflow-hidden">
      <div className="w-5/6 sm:w-1/2 md:w-1/3 h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-5/6 sm:w-1/2 md:w-1/3 h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-5/6 sm:w-1/2 md:w-1/3 h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-5/6 sm:w-1/2 md:w-1/3 h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
    </div>
  );
}

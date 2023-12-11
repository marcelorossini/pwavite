import React from "react";
import {
  Swiper,
  SwiperSlide,
  useSwiper,
  SwiperRef,
  SwiperProps,
} from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { isMobileOnly } from "react-device-detect";

import Lightbox from "@/components/lightbox";
import { IImageMarker } from "@/components/image/image-product-marker";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

interface IImages {
  thumbnailSrc: string;
  src: string;
  legend?: string;
  markers?: IImageMarker[];
}

interface ISlider extends SwiperProps {
  data: any;
  lightbox?: boolean;
  imageComponent: (props: {
    data: any;
    index: number;
    onClick: () => void;
  }) => React.ReactNode;
  className?: string;
  buttonsOptions?: {
    color?: string;
    rightClassName?: string;
    leftClassName?: string;
  };
}

export default function Slider(props: ISlider) {
  const {
    data,
    lightbox = false,
    imageComponent,
    className,
    buttonsOptions,
    ...restOfProps
  } = props;
  const [lightboxCarouselOpen, setLightboxCarouselOpen] =
    React.useState<boolean>(false);
  const [lightboxCarouselSlide, setLightboxCarouselSlide] =
    React.useState<number>(0);

  const swiperRef = React.useRef<any>();

  React.useEffect(() => {
    if (!swiperRef.current) return;
    if (!restOfProps?.initialSlide) return;
    swiperRef.current.swiper.slideTo(restOfProps.initialSlide);
  }, [restOfProps?.initialSlide]);

  return (
    <div className={className}>
      <div className="relative">
        <PrevButton swiperRef={swiperRef} options={buttonsOptions} />
        <Swiper
          ref={swiperRef}
          loop
          modules={[Navigation, Autoplay, FreeMode]}
          pagination={{ clickable: true }}
          {...restOfProps}
        >
          {
            // @ts-ignore
            data.map((image, index) => (
              <SwiperSlide key={index}>
                {imageComponent({
                  data: image,
                  index: index,
                  onClick: () => {
                    setLightboxCarouselSlide(index);
                    setLightboxCarouselOpen(true);
                  },
                })}
              </SwiperSlide>
            ))
          }
        </Swiper>
        <NextButton swiperRef={swiperRef} options={buttonsOptions} />
        <Lightbox
          isOpen={lightboxCarouselOpen}
          onClose={() => setLightboxCarouselOpen(false)}
          index={lightboxCarouselSlide}
          images={
            // @ts-ignore
            data.map((image) => ({
              title: null,
              description: image?.legend,
              src: image?.src,
            }))
          }
        />
      </div>
    </div>
  );
}

function PrevButton({ swiperRef, options }: any) {
  return (
    <button
      className={
        options?.leftClassName
          ? options?.leftClassName
          : "hidden md:flex absolute top-0 left-0 z-10 w-10 h-full items-center justify-center"
      }
      onClick={() => swiperRef.current.swiper.slidePrev()}
    >
      <HiOutlineChevronLeft
        size={30}
        className={`${
          options?.color ? `text-[${options?.color}]` : "text-white"
        }  drop-shadow-[0_0_10px_rgb(0,0,0,1)] transition-all hover:scale-125`}
      />
    </button>
  );
}

function NextButton({ swiperRef, options }: any) {
  return (
    <button
      className={
        options?.rightClassName
          ? options?.rightClassName
          : "hidden md:flex absolute top-0 right-0 z-10 w-10 h-full items-center justify-center"
      }
      onClick={() => swiperRef.current.swiper.slideNext()}
    >
      <HiOutlineChevronRight
        size={30}
        className={`${
          options?.color ? `text-[${options?.color}]` : "text-white"
        }  drop-shadow-[0_0_10px_rgb(0,0,0,1)] transition-all hover:scale-125`}
      />
    </button>
  );
}

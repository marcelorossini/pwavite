import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import CachedImage from "@/components/cached-image";
import { ISectorImages } from "@/interfaces/api/sector-images";
import Lightbox from "@/components/lightbox";

// Import Swiper styles
import "swiper/css";

interface IImages {
  thumbnailSrc: string;
  src: string;
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

  return (
    <div>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={10}
        navigation
        loop
        modules={[Navigation, Autoplay]}
        pagination={{ clickable: true }}
        style={{ paddingLeft: "24px" }}
        /*
        autoplay={{
          stopOnLastSlide: false,
        }}
        */
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              setLightboxCarouselSlide(index);
              setLightboxCarouselOpen(true);
            }}
          >
            <CarouselImage
              src={image.thumbnailSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
        isOpen={lightboxCarouselOpen}
        onClose={() => setLightboxCarouselOpen(false)}
        index={lightboxCarouselSlide}
        images={images.map((image) => ({
          title: null,
          description: null,
          src: image.src,
        }))}
      />
    </div>
  );
}

interface ICarouselImage {
  src: string;
}

export function CarouselImage({ src }: ICarouselImage) {
  return (
    <div className="w-full aspect-[4/3] relative overflow-hidden">
      <CachedImage
        src={src}
        alt=""
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>
  );
}

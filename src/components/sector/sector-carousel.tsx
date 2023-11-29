import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import CachedImage from "@/components/cached-image";
import { ISectorImages } from "@/interfaces/api/sector-images";
import Lightbox from "@/components/lightbox";
import ImageProductDot from "@/components/image/image-product-dot";
import ImageWithLegend from "@/components/image/image-with-legend";


// Import Swiper styles
import "swiper/css";

interface IImages {
  thumbnailSrc: string;
  src: string;
  legend?: string;
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
        spaceBetween={24}
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
            <ImageProductDot/>
            <ImageWithLegend src={image.thumbnailSrc} legend={image.legend} />
          </SwiperSlide>
        ))}
      </Swiper>
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
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function Carousel() {
  return (
    <div>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={10}
        navigation
        loop
        modules={[Navigation, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          stopOnLastSlide: false,
        }}
      >
        <SwiperSlide>
          <CarouselImage src="https://pmkt.blob.core.windows.net/promarket/Produtos/Principal/8fc5134de9814fd09a1edb7d8a1822bf_.png" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src="https://pmkt.blob.core.windows.net/promarket/Produtos/Principal/9f208458f2664195ab6d54ff74e8358f_.png" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src="https://pmkt.blob.core.windows.net/promarket/Produtos/Principal/d7aa9946f54c4e3e96e179d04997585f_.png" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src="https://pmkt.blob.core.windows.net/promarket/Produtos/Principal/a579036ef75e4ca1904c874050943b10_.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

interface ICarouselImage {
  src: string;
}

export function CarouselImage({ src }: ICarouselImage) {
  return (
    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-md">
      <img src={src} alt="" className="object-cover"/>
    </div>
  )
}

import React from "react";
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { isMobileOnly } from "react-device-detect";

import Slider from "@/components/slider";

const sliderSettings = {
  0: {
    slidesPerView: 3.7,
    slidesPerGroup: 1,
  },
  590: {
    slidesPerView: 5.7,
    slidesPerGroup: 1,
  },
  690: {
    slidesPerView: 6.7,
    slidesPerGroup: 7,
  },
  767: {
    slidesPerView: 7,
    slidesPerGroup: 7,
  },
  790: {
    slidesPerView: 8,
    slidesPerGroup: 8,
  },
  890: {
    slidesPerView: 9,
    slidesPerGroup: 9,
  },
  990: {
    slidesPerView: 10,
    slidesPerGroup: 10,
  },
  1190: {
    slidesPerView: 12,
    slidesPerGroup: 12,
  },
  1290: {
    slidesPerView: 14,
    slidesPerGroup: 14,
  },
};

export default function SectorCarousel({
  items,
  initialSlide,
}: {
  items: React.ReactNode[];
  initialSlide?: number;
}) {

  return (
    <div className="relative md:px-8 xl:px-0">
      <Slider
        data={items}
        breakpoints={sliderSettings}
        initialSlide={initialSlide}
        imageComponent={({ data, index, onClick }) => {
          return <SwiperSlide key={index}>{data}</SwiperSlide>;
        }}
        buttonsOptions={{
          color: "#59729C",
          leftClassName: 'hidden md:flex absolute top-0 left-[-2.5rem] h-full pb-4 z-10 w-10 justify-start items-center pl-2',
          rightClassName: 'hidden md:flex absolute top-0 right-[-2.5rem] h-full pb-4 z-10 w-10 justify-end items-center pr-2'
        }}
      />
    </div>
  );
}

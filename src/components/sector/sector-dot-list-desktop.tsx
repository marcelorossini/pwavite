import React from "react";
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const sliderSettings = {
  0: {
    slidesPerView: 5,
    slidesPerGroup: 5
  },  
  590: {
    slidesPerView: 6,
    slidesPerGroup: 6
  },  
  690: {
    slidesPerView: 7,
    slidesPerGroup: 7
  },  
  790: {
    slidesPerView: 8,
    slidesPerGroup: 8
  },  
  890: {
    slidesPerView: 9,
    slidesPerGroup: 9
  },  
  990: {
    slidesPerView: 10,
    slidesPerGroup: 10
  },  
  1190: {
    slidesPerView: 12,
    slidesPerGroup: 12
  },  
  1290: {
    slidesPerView: 14,
    slidesPerGroup: 14
  }
};

export default function SectorCarousel({
  items,
}: {
  items: React.ReactNode[];
}) {
  const swiperRef = React.useRef<any>();

  return (
    <div className="relative px-6 xl:px-0">
      <PrevButton swiperRef={swiperRef} />
      <Swiper ref={swiperRef} breakpoints={sliderSettings} loop>
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <NextButton swiperRef={swiperRef} />
    </div>
  );
}

function PrevButton({ swiperRef }: any) {
  return (
    <button
      className="flex absolute top-7 left-0 xl:left-[-2.5rem] z-50 w-10 justify-start"
      onClick={() => swiperRef.current.swiper.slidePrev()}
    >
      <HiOutlineChevronLeft
        size={30}
        className="text-[#59729C] transition-all hover:scale-125"
      />
    </button>
  );
}

function NextButton({ swiperRef }: any) {
  return (
    <button
      className="flex absolute top-6 right-0 xl:right-[-2.5rem] z-50 w-10 justify-end"
      onClick={() => swiperRef.current.swiper.slideNext()}
    >
      <HiOutlineChevronRight
        size={30}
        className="text-[#59729C] transition-all hover:scale-125"
      />
    </button>
  );
}

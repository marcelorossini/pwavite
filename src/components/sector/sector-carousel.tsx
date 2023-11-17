"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import { useQuery } from "react-query";

import { getImages } from "@/fetch/sectors";
import { ISectorImages } from "@/interfaces/api/sector-images";
// Import Swiper styles
import "swiper/css";

interface ISectorCarousel {
  id: string;
}
export default function SectorCarousel(props: ISectorCarousel) {
  const { id } = props;
  const { isLoading, data } = useQuery(["sectorsImages", id], async () =>
    getImages(id)
  );

  if (isLoading) return <div>Loading...</div>;
  const sectorImages = data?.data as ISectorImages[];
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
        autoplay={{
          stopOnLastSlide: false,
        }}
      >
        {sectorImages.map((sectorImage) => (
          <SwiperSlide key={sectorImage.id}>
            <CarouselImage
              src={`${
                import.meta.env.VITE_STORAGE_IMAGES
              }/promarket/Setores/Principal/${
                sectorImage.fileName
              }__preview.webp`}
            />
          </SwiperSlide>
        ))}
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
      <img src={src} alt="" className="w-full h-full object-cover" loading="eager" />
    </div>
  );
}

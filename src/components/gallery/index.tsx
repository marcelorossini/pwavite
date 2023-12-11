import React from "react";
import Slider from "@/components/slider";
import Lightbox from "@/components/lightbox";

const sliderSettings = {
  0: {
    slidesPerView: 3.7,
  },
  590: {
    slidesPerView: 5.7,
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

export default function Gallery() {
  const [lightboxCarouselOpen, setLightboxCarouselOpen] =
    React.useState<boolean>(false);

  return (
    <>
      <Slider
        data={[
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ]}
        breakpoints={sliderSettings}
        spaceBetween={8}
        imageComponent={({ data, onClick }) => {
          return (
            <ImagemInauguracoes
              onClick={() => {
                setLightboxCarouselOpen(true);
              }}
            />
          );
        }}
      />
      <Lightbox
        isOpen={lightboxCarouselOpen}
        onClose={() => setLightboxCarouselOpen(false)}
        images={[]}
      />
    </>
  );
}

function ImagemInauguracoes(props: any) {
  return (
    <div
      {...props}
      className={`w-full shrink-0 relative aspect-[9/16] border rounded-md overflow-hidden`}
    >
      <img
        src="https://pmkt.blob.core.windows.net/promarket/Produtos/Principal/bb8b58fe6fcf4ae0bda54b01abdad135__preview.png"
        alt=" "
        className="w-full h-full top-0 left-0 object-cover"
      />
      <div className="absolute bottom-0 left-0 px-2 py-1 font-medium text-sm text-white text-shadow-md">
        NOME LOJA
      </div>
    </div>
  );
}

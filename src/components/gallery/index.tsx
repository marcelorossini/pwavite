import React from "react";

interface IImages {
  src: string;
}

interface ISectorCarousel {
  images: IImages[];
}

const teste = {
  2: [["col-span-6", "col-span-6"]],
  3: [],
  4: [],
  5: [
    [
      "row-span-2 col-span-4",
      "col-span-4 max-h-48",
      "col-span-4 max-h-48",
      "col-span-4 max-h-48",
      "col-span-4 max-h-48",
    ],
    [
      "col-span-4 max-h-48",
      "row-span-2 col-span-4",
      "col-span-4 max-h-48",
      "col-span-4 max-h-48",
      "col-span-4 max-h-48",
    ],
    [
      "col-span-4 max-h-48",
      "col-span-4 max-h-48",
      "row-span-2 col-span-4",
      "col-span-4 max-h-48",
      "col-span-4 max-h-48",
    ],
  ],
  6: [],
};

export default function GalleryComponent(props: ISectorCarousel) {
  const { images } = props;
  const imageDispositionArray = teste[5];
  const arrayFinal = getRandomFromArray(imageDispositionArray);

  return (
    <div className="grid grid-flow-row-dense grid-cols-12 gap-2">
      {images.map((image, index) => (
        <ItemGrid key={index} className={`${arrayFinal[index]}`} src={image.src} />
      ))}
    </div>
  );
}

function ItemGrid(props: { className: string; src: string }) {
  const { className, src } = props;
  return (
    <>
      <div className={`relative ${className}`}>
        <img src={src} className="w-full h-full object-cover" />
        <strong className="absolute bottom-0 left-0 px-4 py-2 text-white text-shadow-lg">
          TESTE
        </strong>
      </div>
    </>
  );
}

function getRandomFromArray(originalArray: any[]) {
  if ((originalArray?.length || 0) == 0) return undefined;
  const random = Math.floor(Math.random() * originalArray.length);
  return originalArray[random];
}

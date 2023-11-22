import React from "react";
import { useAppStore } from "@/stores/app";
import Component, { IImages, ILightboxProps } from "./component";
import { convertToOfflineImage } from "@/utils/image";

export default function LightboxComponent(props: ILightboxProps) {
  const { images } = props;
  const [slides, setSlides] = React.useState<IImages[]>([]);
  const { isOnline } = useAppStore();

  async function getOfflineImages() {
    for await (const image of images) {
      const offlineSrc = await convertToOfflineImage(image.src);
      setSlides((oldState) => [
        ...oldState,
        {
          ...image,
          src: offlineSrc,
        },
      ]);
    }
  }

  React.useEffect(() => {
    if (isOnline) {
      setSlides(images);
    } else {
      getOfflineImages();
    }
  }, [isOnline]);

  return <Component {...props} images={slides} />;
}

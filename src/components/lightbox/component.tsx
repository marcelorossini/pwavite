import React from "react";
import Lightbox from "yet-another-react-lightbox";
import { Zoom, Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

export interface IImages {
  src: string;
  title?: string | any;
  description?: string | any;
}
export interface ILightboxProps {
  images: IImages[];
  isOpen: boolean;
  onClose: (value: boolean) => void;
  index?: number
}

export default function LightboxComponent(props: ILightboxProps) {
  const { images, isOpen, onClose, index } = props;

  return (
    <Lightbox
      open={isOpen}
      close={() => onClose(false)}
      plugins={[Zoom, Captions]}
      slides={images}
      index={index}
      controller={{ closeOnPullDown: true }}
      carousel={{
        padding: 0,
        spacing: 0
      }}
      zoom={{
        maxZoomPixelRatio: 2,
      }}
      render={{
        buttonPrev: () => null,
        buttonNext: () => null,
      }}
    />
  );
}

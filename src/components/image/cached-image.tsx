import React from "react";
import { getStoreDataByKey, Stores, IStoreImages } from "@/utils/db";
import { CiImageOff } from "react-icons/ci";
import { useAppStore } from "@/stores/app";
import { convertToOfflineImage } from "@/utils/image";
import { ImSpinner8 } from "react-icons/im";

enum ImageState {
  Started = "started",
  Loadded = "loadded",
  Error = "error",
  Removed = "exclude",
}

export default function CachedImage(props: any) {
  const {
    src: srcProps,
    className: classNameProps = "",
    loading: loadingProps,
  } = props;

  const { isOnline } = useAppStore();
  const [imageState, setImageState] = React.useState<ImageState>();
  const refImage = React.useRef();

  React.useEffect(() => {
    async function getImage() {
      const el = refImage.current;
      // Arquivo
      if (!srcProps) return;
      // Se online
      if (isOnline) return;
      // Se imagem já carregada
      if (imageState == ImageState.Loadded) return;
      if (!el) return;

      try {
        const cachedImage = await convertToOfflineImage(srcProps);
        // @ts-ignore
        el.src = cachedImage;
        setImageState((oldState) => ImageState.Loadded);
      } catch (error) {
        setImageState((oldState) => ImageState.Error);
      }
    }
    getImage();
  }, [, srcProps, isOnline]);

  // Default
  return (
    <div className={`${classNameProps} relative`}>
      <img
        ref={refImage}
        {...props}
        className={`${classNameProps} ${
          imageState != ImageState.Loadded ? "opacity-0" : ""
        }`}
        src={srcProps}
        onLoad={() => setImageState((oldState) => ImageState.Loadded)}
        onError={() => setImageState((oldState) => ImageState.Error)}
        onAbort={() => setImageState((oldState) => ImageState.Error)}
        draggable={false}
      />
      <WrapperIcon
        imageState={imageState as ImageState}
        condition={undefined}
      >
        <ImSpinner8 className="animate-spin text-orange-600" />
      </WrapperIcon>
      <WrapperIcon
        imageState={imageState as ImageState}
        condition={ImageState.Error}
      >
        <CiImageOff size={32} className="text-orange-600" />
      </WrapperIcon>
    </div>
  );
}

function WrapperIcon({
  imageState,
  condition,
  children,
}: {
  imageState: ImageState;
  condition?: ImageState;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`transition-all opacity-0 ${
        imageState == condition ? "flex bg-slate-100 opacity-100" : "hidden"
      } absolute top-0 left-0 w-full h-full  items-center justify-center`}
    >
      {children}
    </div>
  );
}
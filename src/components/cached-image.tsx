import React from "react";
import { getStoreDataByKey, Stores, IStoreImages } from "@/utils/db";
import { CiImageOff } from "react-icons/ci";

interface ICachedImage extends HTMLImageElement {
  src: string;
}

export default function CachedImage(props: any) {
  const {
    src: urlImage,
    className: classNameProps = "",
    loading: loadingProps,
  } = props;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [base64Image, setBase64Image] = React.useState<string>("");

  React.useEffect(() => {
    async function getOfflineImage() {
      if (window.navigator.onLine && !isError) return;
      try {
        setIsLoading((oldState) => true);
        const cachedImage = await getStoreDataByKey<IStoreImages>(
          Stores.Images,
          urlImage
        );
        if (!cachedImage?.imageBase64) throw new Error("Sem imagem em cache");
        setBase64Image(cachedImage.imageBase64);
      } catch (error) {
        console.error(urlImage, error);
        setIsError((oldState) => true);
      }      
      setIsLoading((oldState) => false);
    }
    getOfflineImage();
  }, [, isError]);

  // Se imagem em cache
  if (!!base64Image) return <img {...props} src={base64Image} />;

  // Se houve erro
  if (isError)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CiImageOff size={56} className="text-blue-700" />
      </div>
    );

  // Default
  return (
    <>
      {isLoading ? (
        <div className="w-full h-full bg-slate-300 animate-pulse rounded-md" />
      ) : null}
      <img
        {...props}
        className={`${classNameProps} ${isLoading ? "hidden" : ""}`}
        loading={!window.navigator.onLine ? "eager" : loadingProps}
        //onLoad={() => setIsLoading((oldState) => false)}
        //onError={() => setIsError((oldState) => true)}
      />
    </>
  );
}

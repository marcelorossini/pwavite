import React from "react";
import { getStoreDataByKey, Stores, IStoreImages } from "@/utils/db";
import { CiImageOff } from "react-icons/ci";
import { useAppStore } from "@/stores/app";

export default function CachedImage(props: any) {
  const {
    src: srcProps,
    className: classNameProps = "",
    loading: loadingProps,
  } = props;

  const { isOnline } = useAppStore();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [base64Image, setBase64Image] = React.useState<string>("");

  React.useEffect(() => {
    async function getOfflineImage() {
      if (isOnline) return
      try {
        //setIsLoading((oldState) => true);
        const cachedImage = await getStoreDataByKey<IStoreImages>(
          Stores.Images,
          srcProps
        );
        if (!cachedImage?.imageBase64) throw new Error("Sem imagem em cache");
        setBase64Image(cachedImage.imageBase64);
      } catch (error) {
        setIsError((oldState) => true);
      }
      //setIsLoading((oldState) => false);
    }
    getOfflineImage();
  }, [isOnline]);

  /*
  // Se houve erro
  if (!isOnline && isError)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CiImageOff size={56} className="text-blue-700" />
      </div>
    );
*/

  // Default
  return (
    <>
      {/*      
      <div className={`w-full h-full bg-slate-300 animate-pulse rounded-md ${!isLoading ? 'hidden' : ''}`} />
      */}
      <img
          {...props}
          className={`${classNameProps} ${isLoading ? "bg-slate-300 animate-pulse" : ""}`}
          loading={!isOnline ? "eager" : loadingProps}
          onLoad={() => setIsLoading((oldState) => false)}
          src={!isOnline && !!base64Image ? base64Image : srcProps}
        />
    </>
  );
}

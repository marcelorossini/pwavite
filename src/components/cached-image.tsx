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
      setIsError(oldState => false)
      if (!srcProps) return;
      if (isOnline) return;
      setIsLoading(oldState => true)
      try {
        const cachedImage = await getStoreDataByKey<IStoreImages>(
          Stores.Images,
          srcProps.trim()
        );
        if (!cachedImage?.imageBase64) throw new Error("Sem imagem em cache");
        setBase64Image((oldState) => cachedImage.imageBase64);
      } catch (error) {
        setIsError(oldState => true)
      }
      setIsLoading(oldState => true)
    }
    getOfflineImage();
  }, [srcProps, isOnline]);

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
      {isOnline ? (
        <img
          {...props}
          className={`${classNameProps} ${isLoading ? "bg-slate-200" : ""}`}
          onLoad={() => setIsLoading((oldState) => false)}
          src={srcProps}
        />
      ) : (
        <img
          {...props}
          loading={"eager"}
          className={`${classNameProps} ${isLoading ? "bg-slate-200" : ""}`}
          onLoad={() => setIsLoading((oldState) => false)}
          src={base64Image}
        />
      )}
    </>
  );
}

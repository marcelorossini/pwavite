import React from "react";
import { getStoreDataByKey, Stores, IStoreImages } from "@/utils/db";
import { CiImageOff } from "react-icons/ci";
import { useAppStore } from "@/stores/app";
import { convertToOfflineImage } from "@/utils/image";
import Loading from '@/assets/loading.svg'

export default function CachedImage(props: any) {
  const {
    src: srcProps,
    className: classNameProps = "",
    loading: loadingProps,
  } = props;

  const { isOnline } = useAppStore();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [srcFinal, setSrcFinal] = React.useState<string>("");

  React.useEffect(() => {
    async function getImage() {
      setIsError((oldState) => false);
      setIsLoading((oldState) => true);

      if (!srcProps) return;
      if (isOnline) {
        setSrcFinal((oldState) => srcProps);
      } else {
        // Get offline
        try {
          const cachedImage = await convertToOfflineImage(srcProps);
          setSrcFinal((oldState) => cachedImage);
        } catch (error) {
          setIsError((oldState) => true);
        }
      }
    }
    getImage();
  }, [, srcProps, isOnline]);

  // Se houve erro
  /*
  if (isError)
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-100">
        <CiImageOff size={56} className="text-blue-700" />
      </div>
    );
*/
  // Default
  return (
    <>
      <img
        {...props}
        className={`${classNameProps} ${
          !isLoading ? "" : "bg-slate-200"
        }`}
        src={srcFinal}
        original-url={srcProps}
        loading={isOnline ? loadingProps : "eager"}
        onLoad={() => setIsLoading(oldState => false)}
      />
      <div className={`${isLoading ? 'flex': 'hidden'} absolute top-0 left-0 w-full h-full  items-center justify-center`}>
        <img src={Loading} className="w-7" />
      </div>
    </>
  );
}

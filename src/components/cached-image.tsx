import React from "react";
import { getStoreDataByKey, Stores, IStoreImages } from "@/utils/db";
import { CiImageOff } from "react-icons/ci";
import { useAppStore } from "@/stores/app";
import { convertToOfflineImage } from "@/utils/image";

export default function CachedImage(props: any) {
  const {
    src: srcProps,
    className: classNameProps = "",
    loading: loadingProps,
  } = props;

  const { isOnline } = useAppStore();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isOffilineError, setIsOfflineError] = React.useState<boolean>(false);
  const [isOnlineError, setIsOnlineError] = React.useState<boolean>(false);
  const [isOnlineLoaded, setIsOnlineLoaded] = React.useState<boolean>(false);
  const [srcBase64, setSrcBase64] = React.useState<string>("");

  React.useEffect(() => {
    async function getImage() {
      setIsOfflineError((oldState) => false);
      setIsLoading((oldState) => true);

      if (!isOnline) {
        try {
          const cachedImage = await convertToOfflineImage(srcProps);
          setSrcBase64((oldState) => cachedImage);
        } catch (error) {
          setIsOfflineError((oldState) => true);
        }
      }
      setIsLoading((oldState) => false);
    }
    getImage();
  }, [, srcProps, isOnline]);

  // Default
  return (
    <>
      {(isOnline || isOnlineLoaded) ? (
        <>
          {!isOnlineError ? (
            <img
              {...props}
              className={`${classNameProps} ${
                !isLoading ? "" : "bg-slate-200"
              }`}
              src={srcProps}
              onLoad={() => {
                setIsLoading((oldState) => false)
                setIsOnlineLoaded((oldState) => true)
              }
            }
              onError={() => {
                setIsLoading((oldState) => false);
                setIsOnlineError((olsState) => true);
              }}
            />
          ) : (
            <ErrorComponent />
          )}
        </>
      ) : (
        <>
          {!isOffilineError ? (
            <img
              {...props}
              className={`${classNameProps} ${
                !isLoading ? "" : "bg-slate-200"
              }`}
              src={srcBase64}
              original-url={srcProps}
              loading={"eager"}
            />
          ) : (
            <ErrorComponent />
          )}
        </>
      )}
    </>
  );
}

function ErrorComponent() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <CiImageOff size={56} className="text-blue-700" />
    </div>
  );
}

import React from "react";
import { getStoreDataByKey, Stores, IStoreImages } from "@/utils/db";
import isOnline from "is-online";

interface ICachedImage extends HTMLImageElement {
  src: string;
}

export default function CachedImage(props: any) {
  const { src: urlImage } = props;
  const refImage = React.useRef();


  async function getOfflineImage() {
    //const isOnlineResponse = await isOnline();
    //if (!isOnlineResponse) return;
    const imageElement = refImage.current;
    const cachedImage = await getStoreDataByKey<IStoreImages>(
      Stores.Images,
      urlImage
    );
    // @ts-ignore
    imageElement.src = cachedImage.imageBase64;    
  }

  // @ts-ignore
  return <img ref={refImage} {...props} onError={() => getOfflineImage} />;
}

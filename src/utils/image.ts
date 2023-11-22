import { Stores, addData, getStoreDataByKey, IStoreImages } from "@/utils/db";
import { MD5 } from "crypto-js";

export async function imageUrlToBase64(url: string): Promise<string> {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((onSuccess, onError) => {
    try {
      const reader = new FileReader();
      reader.onload = function () {
        onSuccess(this.result as string);
      };
      reader.readAsDataURL(blob);
    } catch (e) {
      onError(e);
    }
  });
}

export async function imageToBlob(url: string): Promise<Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
}

export async function imageToCache(url: string) {
  const base64image = await imageToBlob(url);

  await addData(Stores.Images, {
    url: formatUrl(url),
    imageBase64: base64image,
  });
}

export async function convertToOfflineImage(url: string): Promise<string> {
  const cachedImage = await getStoreDataByKey<IStoreImages>(
    Stores.Images,
    formatUrl(url)
  );
  if (!cachedImage?.imageBase64) throw new Error("Sem imagem em cache");

  return new Promise((onSuccess, onError) => {
    try {
      const reader = new FileReader();
      reader.onload = function () {
        onSuccess(this.result as string);
      };
      reader.readAsDataURL(cachedImage.imageBase64 as any);
    } catch (e) {
      onError(e);
    }
  });
}

export function formatUrl(url: string) {
  return url.trim().toLocaleLowerCase();
}

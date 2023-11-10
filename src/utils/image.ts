import { Stores, addData } from "@/utils/db";

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

export async function imageToCache(url: string) {
  const base64image = await imageUrlToBase64(url);

  await addData(Stores.Images, {
    url: url,
    imageBase64: base64image
  });
}
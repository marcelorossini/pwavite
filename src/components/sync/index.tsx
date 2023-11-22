import React, { useEffect } from "react";

const LOCALSTORAGE_KEY = "last_sinc";
import isOnline from "is-online";
import dayjs from "dayjs";
import { clearDatabase } from "@/utils/db";

import { ImSpinner8 } from "react-icons/im";

import {
  getAll as getAllProducts,
  get as getProduct,
  getAllBySector as getAllProductsBySector,
} from "@/fetch/products";
import {
  getAll as getAllSectors,
  get as getSector,
  getImages as getSectorImages,
} from "@/fetch/sectors";
import {
  getByProductId as getFinishingByProductId,
  getAll as getAllFinishing,
} from "@/fetch/finishing";
import { getByProductId as getDimensionsByProductId } from "@/fetch/dimensions";
import { get as getProductImages } from "@/fetch/products-images";

import { imageToCache } from "@/utils/image";

//import { generateCache as generateCacheProductList } from "@/components/product/product-list";

async function syncProcess() {
  // Verifica qual a ultima atualização realizada
  const storedValue = localStorage.getItem(LOCALSTORAGE_KEY);
  // Se a atualiação foi no dia anterior, atualiza novamente
  if (!!storedValue) {
    const now = dayjs();
    const diff = now.diff(storedValue, "day");
    if (diff == 0) return;
  }

  // Se está online
  const isOnlineResponse = await isOnline();
  if (!isOnlineResponse) return;

  // Todos setores
  const { data: sectors } = await getAllSectors();
  for await (const sector of sectors) {
    if (!!sector?.id) {
      await getSector(sector?.id);
      await getAllProductsBySector(sector?.id);
      await generateSectorsImageCache(sector?.id);
    }
  }

  // Todos produtos
  const { data: products } = await getAllProducts();
  for await (const productData of products) {
    await getProduct(productData.id);
    await generateProductImageCache(productData.id);
    await getFinishingByProductId(productData.id);
    await getDimensionsByProductId(productData.id);
  }

  // Acabamentos
  await generateFinishingImageCache();

  localStorage.setItem(LOCALSTORAGE_KEY, dayjs().format());
}

export default function Sync() {
  const [inProgress, setInProgress] = React.useState<boolean>(false);

  useEffect(() => {
    async function sync() {
      setInProgress(true);
      await syncProcess();
      setInProgress(false);
    }
    sync();
  }, []);

  return (
    <div>{inProgress ? <ImSpinner8 className="animate-spin" /> : null}</div>
  );
}

export function ClearButton() {
  return (
    <button
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-24"
      onClick={async () => {
        await clearCache();
        window.location.reload();
      }}
    >
      Limpar cache
    </button>
  );
}

export async function clearCache() {
  await clearDatabase();
  localStorage.clear();
}

export async function generateProductImageCache(id: string) {
  const productsImages = await getProductImages(id);

  await Promise.allSettled([
    ...productsImages.data.map((product) =>
      imageToCache(
        `${import.meta.env.VITE_STORAGE_IMAGES}/promarket/Produtos/Principal/${
          product.fileName
        }_.webp`
      )
    ),
    ...productsImages.data.map((product) =>
      imageToCache(
        `${import.meta.env.VITE_STORAGE_IMAGES}/promarket/Produtos/Principal/${
          product.fileName
        }__small.webp`
      )
    ),
  ]);
}

export async function generateSectorsImageCache(id: string) {
  const sectorImages = await getSectorImages(id);

  await Promise.allSettled(
    sectorImages.data.map((sectorImage) =>
      imageToCache(
        `${import.meta.env.VITE_STORAGE_IMAGES}/promarket/Setores/Principal/${
          sectorImage.fileName
        }__preview.webp`
      )
    )
  );
}

export async function generateFinishingImageCache() {
  const finishingImages = await getAllFinishing();

  await Promise.allSettled(
    finishingImages.data.map((finishingImage) =>
      imageToCache(
        `${import.meta.env.VITE_STORAGE_IMAGES}/promarket/Acabamentos/${
          finishingImage.fileName
        }__small.png`
      )
    )
  );
}

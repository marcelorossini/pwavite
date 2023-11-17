import React, { useEffect } from "react";

const LOCALSTORAGE_KEY = "last_sinc";
import isOnline from "is-online";
import dayjs from "dayjs";
import { clearDatabase } from "@/utils/db";

import { ImSpinner8 } from "react-icons/im";

import {
  getAll as getAllProducts,
  getByCode as getProductByCode,
} from "@/fetch/products";
import { getAll as getAllSectors, get as getSector } from "@/fetch/sectors";
import { getByProductId as getFinishingByProductId } from "@/fetch/finishing";
import { getByProductId as getDimensionsByProductId } from "@/fetch/dimensions";

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

  const { data: products } = await getAllProducts();

  for await (const productData of products) {
    if (!!productData?.codigo) {
      await getProductByCode(productData.codigo);
    }
    await getFinishingByProductId(productData.id);
    await getDimensionsByProductId(productData.id);
  }

  const { data: sectors, info: infoSectors } = await getAllSectors();

  //getSector
  for await (const sector of sectors) {
    if (!!sector?.id) {
      await getSector(sector?.id);
    }
  }

  //await generateCacheProductList();

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
    sync()
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
        await clearCache()
        window.location.reload();
      }}
    >
      Limpar cache
    </button>
  );
}

export async function clearCache() {
  await clearDatabase()
  localStorage.clear()  
}
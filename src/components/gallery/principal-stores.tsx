import React from "react";
import { useQuery } from "react-query";
import { GetAllPrincipal } from "@/fetch/stores";
import { IStore } from "@/interfaces/api/store";
import { isMobileOnly } from "react-device-detect";
import ImageWithLegend from "@/components/image/image-with-legend";

export default function PrincipalStores() {
  const { isLoading, data } = useQuery(["GetAllPrincipal"], GetAllPrincipal);

  if (isLoading) return <>loading</>;

  if ((data?.data?.length || 0) == 0) return <>Sem dados</>;

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {data?.data.map((store, index) => {
          let className = "";
          if (!isMobileOnly) {
            className = "col-span-2";
          } else {
            if ((index + 1) % 3 == 0) className = "col-span-2";
          }
          return (
            <StoreImage key={store.id} className={className} data={store} />
          );
        })}
      </div>
    </div>
  );
}

/*
        <StoreImage className="col-span-2" />
        <StoreImage className="col-span-2" />
        <StoreImage className="col-span-6" />
        <StoreImage className="col-span-3" />
        <StoreImage className="col-span-3" />
        <StoreImage className="col-span-6" />
        <StoreImage className="col-span-2" />
        <StoreImage className="col-span-2" />
        <StoreImage className="col-span-2" />
*/

interface IStoreImage {
  className?: string;
  data: IStore;
}

function StoreImage(props: IStoreImage) {
  const { className, data } = props;
  return (
    <ImageWithLegend
      className={className}
      src={`${import.meta.env.VITE_STORAGE_IMAGES}/promarket/Imagens/${
        data?.redeImagem?.find((i) => !!i.capa)?.imagem?.fileName
      }__preview.webp`}
      legend={data.nome}
      loading="lazy"
    />
  );
}

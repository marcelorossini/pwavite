import React from "react";
import { useQuery } from "react-query";

import Sector, { LoadingItem } from ".";

import { getAll } from "@/fetch/sectors";

interface ISectorList {
  className?: string;
}

export default function SectorList(props: ISectorList) {
  const { className } = props;
  const { isLoading, data } = useQuery(["sectors"], getAll);

  if (isLoading) return <Loading className={className} />;

  return (
    <>
      {data?.data?.map((sector: any) => (
        <Sector
          key={sector.id}
          id={sector.id}
          name={sector.nome}
          color={sector.cor}
          description={sector.descricao}
          clickable={true}
          className={className}
        />
      ))}
    </>
  );
}

export function Loading(props: ISectorList) {
  return (
    <>
      <LoadingItem {...props}/>
      <LoadingItem {...props}/>
      <LoadingItem {...props}/>
      <LoadingItem {...props}/>
      <LoadingItem {...props}/>      
      <LoadingItem {...props}/>      
    </>
  );
}
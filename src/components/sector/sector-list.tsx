import React from "react";
import { useQuery } from "react-query";

import Sector from ".";

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
      {data?.data.map((sector: any) => (
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

export function LoadingItem(props: ISectorList) {
  const { className } = props
  return <div className={`flex flex-col gap-4 ${className}`}>
    <div className="w-full h-6 bg-slate-300 animate-pulse rounded-md"/>
    <div className="w-full h-4 bg-slate-300 animate-pulse rounded-md"/>
    <div className="w-full flex gap-2 overflow-hidden">
      <div className="w-5/6 h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
      <div className="w-5/6 h-full shrink-0 aspect-[4/3] bg-slate-300 animate-pulse" />
    </div>    
  </div>;
}

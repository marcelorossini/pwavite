import React from "react";
import { useQuery } from "react-query";

import Sector from ".";

import { getAll } from "@/fetch/sectors";

export default function SectorList() {
  const { isLoading, data } = useQuery(["sectors"], getAll);

  if (isLoading) return <div>Loading...</div>;

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
        />
      ))}
    </>
  );
}

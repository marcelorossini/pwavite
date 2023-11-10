import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import Layout from "@/components/layout";
import { SectorHeader } from "@/components/sector/index";
import SectorDotList from "@/components/sector/sector-dot-list";
import Tabs from "@/components/tabs";
import ProductList from "@/components/product/product-list";

import { HiOutlinePhotograph } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";

import { get, getImages as getSectorImages } from "@/fetch/sectors";

import { ISector } from "@/interfaces/api/sector";

type ISetorParams = {
  id: string;
};


export default function Setor() {
  const { id } = useParams<ISetorParams>();
  const { isLoading, data: queryData } = useQuery(["sectors", id], async () => await get(id as string));
  const data = queryData?.data as ISector
  console.log(data)

  if (isLoading) return <div>Carregando...</div>;

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <SectorDotList />
        <SectorHeader
          id={data.id}
          name={data.nome}
          description={data.descricao}
          color={data.cor}
        />
        <Tabs
          items={[
            {
              id: "fotos",
              name: "FOTOS DE LOJA",
              icon: <HiOutlinePhotograph />,
              component: <>a</>,
            },
            {
              id: "tecnico",
              name: "TÉCNICO",
              icon: <TbListDetails />,
              component: <ProductList />,
            },
          ]}
          default="fotos"
          alignCenter={true}
        />        
      </div>
    </Layout>
  );
}
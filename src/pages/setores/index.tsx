import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import Layout from "@/components/layout";
import { SectorHeader } from "@/components/sector/index";
import SectorDotList from "@/components/sector/sector-dot-list";
import Tabs from "@/components/tabs";
import ProductListBySector from "@/components/product/product-list-by-sector";
import SectorImages from "@/components/sector/sector-images";

import { HiOutlinePhotograph } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";

type ISetorParams = {
  id: string;
};

export default function Setor() {
  const { id } = useParams<ISetorParams>();

  return (
    <Layout defaultPadding={false}>
      <div className="flex flex-col gap-4 py-4">
        <SectorDotList className="px-4 min-xl:px-0" />
        <div className="flex flex-col gap-4 px-4 min-xl:px-0">
          <SectorHeader id={id as string} showText={true}/>
          <Tabs
            items={[
              {
                id: "fotos",
                name: "FOTOS DE LOJA",
                icon: <HiOutlinePhotograph />,
                component: <SectorImages id={id as string} />,
              },
              {
                id: "tecnico",
                name: "TÉCNICO",
                icon: <TbListDetails />,
                component: <ProductListBySector sectorId={id as string} />,
              },
            ]}
            default="fotos"
            alignCenter={true}
          />
        </div>
      </div>
    </Layout>
  );
}

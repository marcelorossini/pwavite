import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import Layout from "@/components/layout";
import { SectorHeader } from "@/components/sector/index";
import SectorDotList from "@/components/sector/sector-dot-list";
import Tabs from "@/components/tabs";
import ProductListBySector from "@/components/product/product-list-by-sector";

import { HiOutlinePhotograph } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";

type ISetorParams = {
  id: string;
};

export default function Setor() {
  const { id } = useParams<ISetorParams>();
  /*
      <div className="flex flex-col gap-6 py-6">
        <SectorDotList className="px-6" />
        <SectorList className="px-6"/>
      </div>
*/

  return (
    <Layout defaultPadding={false}>
      <div className="flex flex-col gap-6 py-6">
        <SectorDotList className="px-6" />
        <div className="flex flex-col gap-6 px-6">
          <SectorHeader id={id as string} />
          <Tabs
            items={[
              {
                id: "fotos",
                name: "FOTOS DE LOJA",
                icon: <HiOutlinePhotograph />,
                component: <></>,
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

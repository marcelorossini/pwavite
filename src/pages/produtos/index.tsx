"use client";
import React from "react";
import { useParams } from "react-router-dom";
import CachedImage from "@/components/cached-image";

import { SectorHeader } from "@/components/sector/index";
import ProductList from "@/components/product/product-list";
import Select from "@/components/forms/select";
import Layout from "@/components/layout";
import { useQuery } from "react-query";
import { getAllBySector } from "@/fetch/products";
import { getByCode } from "@/fetch/products";
import { getAll as getAllFinishing } from "@/fetch/finishing";

import { IFinishing } from "@/interfaces/api/finishing";
import { IProduct } from "@/interfaces/api/product";

interface IProdutoProps {}

export default function Produto(props: IProdutoProps) {
  let { codigo } = useParams();

  const { isLoading: isLoadingProduct, data: dataProduct } = useQuery(
    ["product", codigo],
    async () => getByCode(codigo as string)
  );
  const product = dataProduct?.data as IProduct;

  const { isLoading: isLoadingFinishing, data: dataFinishing } = useQuery(
    ["finishing"],
    getAllFinishing
  );
  const finishing = dataFinishing?.data as IFinishing[];

  return (
    <Layout>
      {isLoadingProduct || isLoadingFinishing ? (
        "Carregando..."
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <strong>{product.nome?.toUpperCase()}</strong>
            <small>{product.codigo}</small>
          </div>
          {/*IMAGENS*/}
          <div className="grid grid-cols-4 gap-4">
            {/*PRINCIPAL*/}
            <div className="col-span-3 aspect-square">
              <div className="relative aspect-square overflow-hidden">
                {!!product?.imagemPrincipal ? (
                  <CachedImage
                    src={`${
                      import.meta.env.VITE_STORAGE_IMAGES
                    }/promarket/Produtos/Principal/${
                      product.imagemPrincipal
                    }__preview.png`}
                    alt="img"
                    className="w-full h-full top-0 left-0 object-contain"
                  />
                ) : null}
              </div>
            </div>
            {/*VARIACOES*/}
            <div className="relative overflow-auto">
              <div className="flex gap-4 flex-col absolute top-0 left-0 w-full">
                <OtherImages />
                <OtherImages />
                <OtherImages />
                <OtherImages />
                <OtherImages />
                <OtherImages />
                <OtherImages />
              </div>
            </div>
            {/*LOJAS*/}
            <div className="col-span-4 w-full overflow-auto">
              <div className="flex flex-nowrap">
                <StoreImages />
                <StoreImages />
                <StoreImages />
                <StoreImages />
                <StoreImages />
                <StoreImages />
                <StoreImages />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Box name="Acabamentos">
              <div className="w-full overflow-auto">
                <div className="flex flex-nowrap">
                  {finishing.map((finish) => (
                    <FinishImages
                      key={finish.fileName}
                      filename={finish.fileName}
                    />
                  ))}
                </div>
              </div>
            </Box>
            <Box name="Dimensões (m)">
              <Select />
            </Box>
            <Box>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
                Adicionar à lista
              </button>
            </Box>
            {!!product?.diferenciais ? (
              <Box name="Diferenciais">
                <p
                  dangerouslySetInnerHTML={{
                    __html: product?.diferenciais || "",
                  }}
                ></p>
              </Box>
            ) : (
              <></>
            )}
            <Box name="Especificações">
              <p>
                Lorem opsumLorem opsumLorem opsumLorem opsum opsumLore Lorem
                opsumLorem opsumLorem opsumLorem opsum
              </p>
            </Box>
          </div>

          <hr />

          <SectorHeader id="" name="ADEGA" description="asdasd" color="red" />
          <ProductList />
        </div>
      )}
    </Layout>
  );
}

interface IBoxProps {
  name?: string;
  children: React.ReactNode;
}

function Box(props: IBoxProps) {
  const { name, children } = props;
  return (
    <div>
      {!!name ? (
        <label>
          <strong>{name}</strong>
        </label>
      ) : null}
      <div className="h-full w-full">{children}</div>
    </div>
  );
}

function StoreImages() {
  return (
    <div className="w-[calc(25%-.75rem)] mr-4 shrink-0">
      <div className="relative aspect-square border rounded-md overflow-hidden">
        <img
          src="https://pmkt.blob.core.windows.net/promarket/Produtos/Principal/bb8b58fe6fcf4ae0bda54b01abdad135__preview.png"
          alt="img"
          className="w-full h-full top-0 left-0 object-cover"
        />
      </div>
    </div>
  );
}

function OtherImages() {
  return (
    <div className="relative aspect-square overflow-hidden">
      <img
        src="https://pmkt.blob.core.windows.net/promarket/Produtos/Principal/ff659d4fc0f14625a76f5da4490e2073__preview.png"
        alt="img"
        className="w-full h-full top-0 left-0 object-contain"
      />
    </div>
  );
}

interface IFinishImagesProps {
  filename: string;
}
function FinishImages(props: IFinishImagesProps) {
  const { filename } = props;
  return (
    <div className="w-[15%] mr-3 shrink-0">
      <div className="relative aspect-square border rounded-md overflow-hidden">
        <img
          src={`https://pmkt.blob.core.windows.net/promarket/Acabamentos/${filename}__small.png`}
          alt="img"
          className="w-full h-full top-0 left-0 object-cover select-none"
        />
      </div>
    </div>
  );
}

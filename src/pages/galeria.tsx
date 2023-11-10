import React from "react";
import Layout from "../components/layout";

export default function Gallery() {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <strong className="text-blue-700">Últimas inaugurações</strong>
          <div className="w-full h-full">
            <div className="flex gap-2 flex-nowrap overflow-auto">
              <ImagemInauguracoes />
              <ImagemInauguracoes />
              <ImagemInauguracoes />
              <ImagemInauguracoes />
              <ImagemInauguracoes />
              <ImagemInauguracoes />
              <ImagemInauguracoes />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <strong className="text-blue-700">Principais Redes</strong>
          <div className="w-full h-full">
            <div className="grid grid-cols-2 gap-2">
              <ImagemLoja />
              <ImagemLoja />
              <ImagemLoja className="col-span-2" />
              <ImagemLoja />
              <ImagemLoja />
              <ImagemLoja className="col-span-2" />
              <ImagemLoja />
              <ImagemLoja />
              <ImagemLoja className="col-span-2" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

interface IImagemLoja {
  className?: string;
}

function ImagemLoja(props: IImagemLoja) {
  const { className } = props;
  return (
    <div
      className={`w-full relative aspect-[4/3] border rounded-md overflow-hidden ${className}`}
    >
      <img
        src="https://pmkt.blob.core.windows.net/promarket/Produtos/Principal/bb8b58fe6fcf4ae0bda54b01abdad135__preview.png"
        alt="img"
        className="w-full h-full top-0 left-0 object-cover"
      />
      <div className="absolute bottom-0 left-0 px-2 py-1 font-medium text-sm text-white text-shadow-md">
        NOME LOJA
      </div>
    </div>
  );
}

function ImagemInauguracoes() {
  return (
    <div
      className={`w-[25%] shrink-0 relative aspect-[9/16] border rounded-md overflow-hidden`}
    >
      <img
        src="https://pmkt.blob.core.windows.net/promarket/Produtos/Principal/bb8b58fe6fcf4ae0bda54b01abdad135__preview.png"
        alt="img"        
        className="w-full h-full top-0 left-0 object-cover"
      />
      <div className="absolute bottom-0 left-0 px-2 py-1 font-medium text-sm text-white text-shadow-md">
        NOME LOJA
      </div>
    </div>
  );
}

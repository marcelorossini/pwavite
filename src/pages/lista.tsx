import React from "react";
import Layout from "@/components/layout";
import { HiOutlineTrash } from "react-icons/hi2";
import { InputComponent } from "@/components/forms";

export default function Favoritos() {
  return (
    <Layout>
      <div>
        <Actions />
        <ul className="flex flex-col divide-y">
          <ListaItem
            nome="EXPOSITOR LATERAL PATAMAR  h=2,10m"
            codigoProduto="EXP90017"
          />
        </ul>
        <Actions />
      </div>
    </Layout>
  );
}

interface IListaItem {
  nome: string;
  codigoProduto: string;
}

function ListaItem(props: IListaItem) {
  const { nome, codigoProduto } = props;
  /*
  <li className="grid grid-cols-4 first:pt-0 last:pb-0 py-4 gap-4">
  */
  return (
    <li className="grid grid-cols-4 py-4 gap-4">
      <div className="relative pt-[100%] aspect-square overflow-hidden">
        <img
          src="https://pmkt.blob.core.windows.net/promarket/Produtos/Principal/ff659d4fc0f14625a76f5da4490e2073__preview.png"
          alt=" "
          className="w-full h-full top-0 left-0 object-cover"
        />
      </div>
      <div className="col-span-3 flex flex-col">
        <strong>{nome}</strong>
        <small>{codigoProduto}</small>
        <InputComponent name="Dimensões">campo</InputComponent>
        <InputComponent name="Acabamento">campo</InputComponent>
      </div>
      <div className="col-span-4">
        <div className="flex gap-4">
          <textarea className="border w-full h-14 p-2" placeholder="Observações" />
          <div className="flex items-center justify-end p-4 bg-red-500 rounded-md">
            <HiOutlineTrash size={25} className="text-white" />
          </div>
        </div>
      </div>
    </li>
  );
}

function Actions() {
  return (
    <div className="w-full flex gap-2">
      <button className="grow text-blue-500 border border-blue-500 text-sm py-2 rounded-md">
        Limpar
      </button>
      <button className="grow bg-blue-500 text-white text-sm py-2 rounded-md">
        Salvar
      </button>
      <button className="grow bg-blue-800 text-white text-sm py-2 rounded-md">
        Enviar Lista
      </button>
    </div>
  );
}

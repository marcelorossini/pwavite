import React from "react";
import { Link } from "react-router-dom";

import { IProduct } from "@/interfaces/api/product";

import CachedImage from "@/components/image/cached-image";

interface IQueryParamsProps {
  [key: string]: any;
}

interface IProductListProps {
  data: IProduct[];
  queryParams?: IQueryParamsProps;
}

export default function ProductList(props: IProductListProps) {
  const { data, queryParams = {} } = props;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4">
      {data.map((product) => (
        <ProductCard key={product.id} data={product} queryParams={queryParams}/>
      ))}
    </div>
  );
}

interface IProductCard {
  data: IProduct;
  queryParams?: IQueryParamsProps;
}
export function ProductCard(props: IProductCard) {
  const { data, queryParams = {}  } = props;
  const { id, codigo, nome, imagemPrincipal, imagemVariacaoPrincipal } = data;

  const queryString = (new URLSearchParams(queryParams)).toString()
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-full aspect-[4/3] relative overflow-hidden">
        <Link to={`/produtos/${id}${!!queryString ? `?${queryString}` : ''}`} className="contents" preventScrollReset>
          <CachedImage
            src={`${
              import.meta.env.VITE_STORAGE_IMAGES
            }/promarket/Produtos/Variacoes/${imagemVariacaoPrincipal}__small.webp`}      
            alt=""
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>
      <strong className="h-5">{codigo}</strong>
    </div>
  );
}
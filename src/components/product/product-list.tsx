import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import { getAllBySector } from "@/fetch/products";
import { IProduct } from "@/interfaces/api/product";
import { imageToCache } from "@/utils/image";

import CachedImage from "@/components/cached-image";

export default function ProductList() {
  const { isLoading, data: queryData } = useQuery(["products"], getAllBySector);
  const data = queryData?.data as IProduct[];

  React.useEffect(() => {
    //generateCache()
  }, [])

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}

interface IProductCard {
  data: IProduct;
}
export function ProductCard(props: IProductCard) {
  const { data } = props;
  const { codigo, nome, imagemPrincipal, imagemVariacaoPrincipal } = data;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-full aspect-[4/3] relative">
        <Link to={`/produtos/${codigo}`}>
          <CachedImage
            src={`${
              import.meta.env.VITE_STORAGE_IMAGES
            }/promarket/Produtos/Principal/${imagemPrincipal}__preview.png`}
            alt="logo"
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>
      <strong>{codigo}</strong>
    </div>
  );
}

export async function generateCache() {
  const products = await getAllBySector();

  await Promise.allSettled(
    products.data.map((product) =>
      imageToCache(
        `${import.meta.env.VITE_STORAGE_IMAGES}/promarket/Produtos/Principal/${
          product.imagemPrincipal
        }__preview.png`
      )
    )
  );
}

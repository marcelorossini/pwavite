import React from "react";
import { useQuery } from "react-query";

import { getAllBySector } from "@/fetch/products";
import { IProduct } from "@/interfaces/api/product";

import ProductList from "./product-list";

interface IProductListBySectorProps {
  sectorId: string;
}

export default function ProductListBySector(props: IProductListBySectorProps) {
  const { sectorId } = props;
  const { isLoading, data: queryData } = useQuery(
    ["products", sectorId],
    async () => await getAllBySector(sectorId)
  );

  if (isLoading) return <p>Loading...</p>;

  const data = queryData?.data as IProduct[];

  return <ProductList data={data} />;
}

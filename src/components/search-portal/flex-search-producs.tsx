import React from "react";
import { useQuery } from "react-query";
import { IProduct } from "@/interfaces/api/product";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/stores/app";
// @ts-ignore
import Document from "flexsearch/dist/module/document";
import removeAccents from "remove-accents";

import CachedImage from "@/components/cached-image";
import { getAll } from "@/fetch/products";

interface IFlexSearchProductsProps {
  query?: string;
}
export default function FlexSearchProducts(props: IFlexSearchProductsProps) {
  const { query } = props;
  const { isLoading, data: queryData } = useQuery(["products"], getAll);

  if (isLoading) return <></>;

  return (
    <FlexSearchProductsAux query={query} data={queryData?.data as IProduct[]} />
  );
}

interface IFlexSearchProductsAuxProps {
  query?: string;
  data: IProduct[];
}
export function FlexSearchProductsAux(props: IFlexSearchProductsAuxProps) {
  const { query, data } = props;
  const [results, setResults] = React.useState<IProduct[]>([]);

  // Cria documento
  const [index, setIndex] = React.useState(
    new Document({
      charset: "latin:extra",
      preset: "match",
      tokenize: "full",
      language: "pt_BR",
      cache: false,
      document: {
        index: [
          "codigo",
          "nome",
          "nomeSemAcento",
          "diferenciais",
          "diferenciaisSemAcento",
        ],
      },
    })
  );

  React.useEffect(() => {
    if (data.length === 0) return;

    // Atualiza index
    data.forEach((item) => {
      setIndex(
        index.add({
          ...item,
          nomeSemAcento: removeAccents(item.nome || ""),
          diferenciaisSemAcento: removeAccents(item.diferenciais || ""),
          id: item.id,
        })
      );
    });
  }, [data]);

  React.useEffect(() => {
    // Pesquisa
    const flexSearchResponse = index.search(query);
    // Retorna ID de todos os campos
    const searchResults = flexSearchResponse
      .map((i: { field: string; result: string[] }) => i.result)
      .flat();
    // Remove duplicados
    const uniqueResults = [...new Set(searchResults)];
    // Busca documento correspondente
    const mappedResults = uniqueResults.map((result: any) =>
      data.find((product) => product.id == result)
    ) as IProduct[];
    setResults((oldState) => mappedResults);
  }, [query]);

  return (
    <div>
      {results.length > 0 ? (
        <ul className="flex flex-col gap-4 divide-y">
          {results.map((result) => (
            <li className="title pt-4 first:pt-0" key={result.id}>
              <ProductItem data={result} />
            </li>
          ))}
        </ul>
      ) : (
        <>
        {!!query ? "Nenhum resultado encontrado" : null}
        </>        
      )}
    </div>
  );
}

function ProductItem(props: { data: IProduct }) {
  const { data } = props;
  const navigate = useNavigate();
  const { setSearchPortalOpened, setSearchResultsOpened } = useAppStore();

  function handleClick() {
    navigate(`/produtos/${data.id}`);
    setSearchPortalOpened(false);
    setSearchResultsOpened(false);
  }

  return (
    <div
      className="grid grid-cols-[80px_auto] gap-x-2 cursor-pointer"
      onClick={handleClick}
    >
      <div className="row-span-2">
        <CachedImage
          src={`${
            import.meta.env.VITE_STORAGE_IMAGES
          }/promarket/Produtos/Principal/${data.imagemPrincipal}__small.webp`}
          alt=""
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <strong>{data.codigo}</strong>
      <p className="text-sm">{data.nome}</p>
    </div>
  );
}

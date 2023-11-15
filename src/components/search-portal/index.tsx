import React from "react";
import { useForm } from "react-hook-form";
import { useAppStore } from "@/stores/app";

import FlexSearchProducts from "./flex-search-producs";

import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
export default function SearchPortal() {
  const { isSearchOpened } = useAppStore();

  return <>{isSearchOpened ? <SearchPortalAux /> : null}</>;
}

interface IFormValues {
  search: string;
}

export function SearchPortalAux() {
  const [query, setQuery] = React.useState<string>("");
  const { setSearchOpened } = useAppStore();
  const { register, handleSubmit, setFocus, getValues } =
    useForm<IFormValues>();

  React.useEffect(() => {
    setFocus("search");
  }, [setSearchOpened]);

  async function handleSearch(data: IFormValues) {
    setQuery(data.search);
  }

  return (
    <>
      <div className="w-screen h-[calc(100dvh)] overflow-auto flex flex-col fixed z-50">
        <div className="">
          <div className="flex items-center h-16 px-6 z-10 bg-white border-b">
            <div className="flex-1 h-full flex items-center">
              <form onSubmit={handleSubmit(handleSearch)} className="contents">
                <input
                  className="w-full h-10 border rounded-l-xl outline-none px-4"
                  autoComplete="off"
                  {...register("search")}
                  placeholder="Produto, loja, setor..."
                />
              </form>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-slate-200 w-12 h-10 rounded-r-xl text-slate-800 flex justify-center items-center"
                onClick={() => handleSearch(getValues())}
              >
                <IoSearchOutline size={20} />
              </button>
            </div>
            <div>
              <button
                className="w-10 h-10 rounded-r-xl text-slate-800 flex justify-end items-center"
                onClick={() => setSearchOpened(false)}
              >
                <IoCloseOutline size={25} />
              </button>
            </div>
          </div>
        </div>
        <Results query={query} />
      </div>
      <div
        className="bg-white w-full h-full opacity-80 fixed top-0 left-0 z-40"
        onClick={() => setSearchOpened(false)}
      />
    </>
  );
}

interface IResultsProps {
  query: string;
}
export function Results(props: IResultsProps) {
  const { query } = props;
  return (
    <>
      {!!query ? (
        <div className="w-full flex-1 overflow-auto bg-white p-6 shadow-md">
          <FlexSearchProducts query={query} />
        </div>
      ) : null}
    </>
  );
}

export function SearchProducts() {}

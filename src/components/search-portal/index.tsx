import React from "react";
import { useForm } from "react-hook-form";
import { useAppStore } from "@/stores/app";
import { getSizeClassName as getSizeNavbarClassName } from "@/components/navbar";
import { getMarginBottomClassName as getMarginBottomBottomBarClassName } from "@/components/bottom-bar";

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
  const [isStarted, setStarted] = React.useState<boolean>(false);
  const [query, setQuery] = React.useState<string>("");
  const { setSearchOpened } = useAppStore();
  const { register, handleSubmit, setFocus, getValues } =
    useForm<IFormValues>();
  const searchBarSize = getSizeNavbarClassName();

  React.useEffect(() => {
    setStarted((oldState) => true);
  }, []);

  React.useEffect(() => {
    setFocus("search");
  }, [setSearchOpened]);

  async function handleSearch(data: IFormValues) {
    setQuery(data.search);
    // @ts-ignore
    document.activeElement.blur();
  }

  return (
    <>
      <div
        className={`w-screen flex flex-col fixed z-30 ${!!query ? 'h-[calc(100dvh)]' : ''}`}
      >
        <div className="">
          <div
            className={`flex items-center px-6 bg-white transition-all ${searchBarSize} ${!!query ? 'border-b' : ''}`}
          >
            <div className="flex-1 h-full flex items-center">
              <form onSubmit={handleSubmit(handleSearch)} className="contents">
                <input
                  className={`w-full h-9 border rounded-l-xl rounded-r-none outline-none px-4 text-sm transition-all duration-500 ${
                    !isStarted ? "opacity-0" : "opacity-100"
                  }`}
                  autoComplete="off"
                  {...register("search")}
                  placeholder="Produto, loja, setor..."
                />
              </form>
            </div>
            <div className="flex justify-end">
              <button
                className={`bg-slate-200 w-12 h-9 rounded-r-xl text-slate-800 flex justify-center items-center transition-all duration-500 ${
                  !isStarted ? "rounded-xl" : "rounded-l-none rounded-r-xl"
                }`}
                onClick={() => handleSearch(getValues())}
              >
                <IoSearchOutline size={20} />
              </button>
            </div>
            <div
              className={`transition-all duration-500 ${
                !isStarted ? "w-0 opacity-0" : "w-10 opacity-100"
              }`}
            >
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
    </>
  );
}

interface IResultsProps {
  query: string;
}
export function Results(props: IResultsProps) {
  const { query } = props;
  const marginBottomClassName = getMarginBottomBottomBarClassName();

  return (
    <div className={`w-full ${!!query ? 'flex-1 p-6 bg-white overflow-auto': 'h-0'}`}>
      <div className={`w-full h-fit ${marginBottomClassName}`}>
        <FlexSearchProducts query={query} />
      </div>
    </div>
  );
}
//query
export function SearchProducts() {}

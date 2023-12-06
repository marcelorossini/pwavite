import React from "react";
import { useForm } from "react-hook-form";
import { useAppStore } from "@/stores/app";
import { getSizeClassName as getSizeNavbarClassName } from "@/components/navbar";
import { getMarginBottomClassName as getMarginBottomBottomBarClassName } from "@/components/bottom-bar";
import { isMobileOnly } from "react-device-detect";

const HEIGHT_SEARCH_BAR = 9;

import FlexSearchProducts from "./flex-search-producs";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

import OnClickOutside from "@/components/on-click-outside";

export default function SearchPortal() {
  const { isSearchPortalOpened: isSearchOpened } = useAppStore();

  return <>{isSearchOpened ? <SearchPortalAux /> : null}</>;
}

interface IFormValues {
  search: string;
}

export function SearchPortalAux() {
  const { searchText } = useAppStore();

  return (
    <>
      <div
        className={`w-screen flex flex-col fixed z-30 ${
          !!searchText ? "h-[calc(100dvh)]" : ""
        }`}
      >
        <div className={`px-4 ${!!searchText ? "border-b" : ""}`}>
          <SearchBox />
        </div>
      </div>
    </>
  );
}

export function SearchBox(props: { clearButton?: boolean }) {
  const { clearButton = true } = props;
  const searchBarSize = getSizeNavbarClassName();
  const [isStarted, setStarted] = React.useState<boolean>(false);
  const {
    setSearchPortalOpened: setSearchOpened,
    isSearchPortalOpened: isSearchOpened,
    setSearchResultsOpened,
    setSearchText,
    searchText,
  } = useAppStore();
  const { register, handleSubmit, setFocus, getValues } =
    useForm<IFormValues>();

  React.useEffect(() => {
    setStarted((oldState) => true);
  }, []);

  React.useEffect(() => {
    if (isMobileOnly) {
      setFocus("search");
    }
  }, [setSearchOpened]);

  async function handleSearch(data: IFormValues) {
    setSearchText(data.search);
    setSearchResultsOpened(true)
    //setSearchOpened(true)
    if (isMobileOnly) {
      // @ts-ignore
      document.activeElement.blur();
    }
  }

  return (
    <>
      <div
        className={`w-full flex items-center bg-white transition-all ${searchBarSize} `}
      >
        <div className="w-full flex items-center relative">
          <div className="w-full flex items-center">
            <form onSubmit={handleSubmit(handleSearch)} className="contents">
              <input
                className={`w-full h-${HEIGHT_SEARCH_BAR} border rounded-l-xl rounded-r-none outline-none px-4 text-sm transition-all duration-500 ${
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
              className={`bg-slate-200 w-12 h-${HEIGHT_SEARCH_BAR} rounded-r-xl text-slate-800 flex justify-center items-center transition-all duration-500 ${
                !isStarted ? "rounded-xl" : "rounded-l-none rounded-r-xl"
              }`}
              onClick={() => handleSearch(getValues())}
            >
              <IoSearchOutline size={20} />
            </button>
          </div>

          <SearchResults />
        </div>
        {clearButton ? (
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
        ) : null}
      </div>
    </>
  );
}

export function SearchBoxButton() {
  const { setSearchPortalOpened: setSearchOpened } = useAppStore();
  return (
    <button
      className={`bg-slate-200 w-12 h-${HEIGHT_SEARCH_BAR} rounded-xl text-slate-800 flex justify-center items-center`}
      onClick={() => setSearchOpened(true)}
    >
      <IoSearchOutline size={20} />
    </button>
  );
}

/*
      <button
        className="bg-slate-200 w-12 h-9 rounded-xl text-slate-800 flex justify-center items-center"
        onClick={() => setSearchOpened(true)}
      >
        <IoSearchOutline size={20} />
      </button>
*/

export function SearchResults() {
  const {
    searchText,
    setSearchText,
    setSearchResultsOpened,
    isSearchResultsOpened,
  } = useAppStore();

  return (
    <>
      {isSearchResultsOpened ? (
        <OnClickOutside action={() => setSearchResultsOpened(false)}>
          <div
            className={`fixed md:absolute top-16 md:top-9 md:mt-2 left-0 w-full overscroll-none bg-white`}
          >
            <div className="w-full h-[calc(100dvh-4rem)] border-t md:border-t-0 md:h-fit md:max-h-[80vh] md:drop-shadow-2xl flex overflow-hidden md:rounded-md">
              <div className="w-full flex-1 overflow-auto ">
                <Results query={searchText} />
              </div>
            </div>
          </div>
        </OnClickOutside>
      ) : null}
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
    <div
      className={`w-full ${
        !!query ? "flex-1 p-4 bg-white overflow-auto" : "h-0"
      }`}
    >
      <div className={`w-full h-fit ${marginBottomClassName}`}>
        <FlexSearchProducts query={query} />
      </div>
    </div>
  );
}
//query
export function SearchProducts() {}

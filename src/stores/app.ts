import { create } from "zustand";

export interface IAppState {
  isNetworkChecked: boolean;
  setIsNetworkChecked: (param: boolean) => void;
  isSearchPortalOpened: boolean;
  setSearchPortalOpened: (param: boolean) => void;
  isSearchResultsOpened: boolean;
  setSearchResultsOpened: (param: boolean) => void;
  searchText: string | any;
  setSearchText: (param: string) => void;
  isOnline: boolean;
  setIsOnline: (param: boolean) => void;
}

export const useAppStore = create<IAppState>()((set) => ({
  isNetworkChecked: false,
  setIsNetworkChecked: (param) => set({ isNetworkChecked: param }),  
  isSearchPortalOpened: false,
  setSearchPortalOpened: (param) => set({ isSearchPortalOpened: param }),
  isSearchResultsOpened: false,
  setSearchResultsOpened: (param) => set({ isSearchResultsOpened: param }),
  searchText: undefined,
  setSearchText: (param) => set({ searchText: param }),
  isOnline: true,
  setIsOnline: (param) => set({ isOnline: param }),
}));

import { create } from "zustand";

export interface IAppState {
  isNetworkChecked: boolean;
  setIsNetworkChecked: (param: boolean) => void;
  isSearchOpened: boolean;
  setSearchOpened: (param: boolean) => void;
  isOnline: boolean;
  setIsOnline: (param: boolean) => void;
}

export const useAppStore = create<IAppState>()((set) => ({
  isNetworkChecked: false,
  setIsNetworkChecked: (param) => set({ isNetworkChecked: param }),  
  isSearchOpened: false,
  setSearchOpened: (param) => set({ isSearchOpened: param }),
  isOnline: true,
  setIsOnline: (param) => set({ isOnline: param }),
}));

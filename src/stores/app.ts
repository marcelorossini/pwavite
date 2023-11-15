import { create } from "zustand";

export interface IAppState {
  isSearchOpened: boolean;
  setSearchOpened: (param: boolean) => void;
  isOnline: boolean;
  setIsOnline: (param: boolean) => void;
}

export const useAppStore = create<IAppState>()((set) => ({
  isSearchOpened: false,
  setSearchOpened: (param) => set({ isSearchOpened: param }),
  isOnline: false,
  setIsOnline: (param) => set({ isOnline: param }),
}));

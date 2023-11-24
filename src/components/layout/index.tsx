import React from "react";
import Sync from "../sync";

import { MobileView } from 'react-device-detect';

import Navbar from "../navbar";
import BottomBar from "../bottom-bar";
import SearchPortal from "../search-portal";

export interface ILayout {
  children: React.ReactNode;
  defaultPadding?: boolean;
}

export default function Layout(props: ILayout) {
  const { children, defaultPadding = true } = props;
  return (
    <div className="h-[calc(100dvh)] flex flex-col overscroll-none overflow-hidden">
      <Navbar />
      <main
        className={`${
          defaultPadding ? "p-6" : ""
        } overflow-auto flex-1 relative flex justify-center`}
      >
        <div className="w-full max-w-7xl ">
          <div className="fixed top-16 right-0 opacity-80 p-6 z-10">
            <Sync />
          </div>
          {children}
        </div>
      </main>
      <MobileView>
        <BottomBar />
      </MobileView>
      <SearchPortal />
    </div>
  );
}

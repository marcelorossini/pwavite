import React from "react";
import Sync from "../sync";

import { isMobileOnly } from "react-device-detect";

import Navbar from "../navbar";
import BottomBar from "../bottom-bar";
import SearchPortal from "../search-portal";

export interface ILayout {
  children: React.ReactNode;
  defaultPadding?: boolean;
}

export default function Layout(props: ILayout) {
  const { children, defaultPadding = true } = props;
  const [startAnimation, setStartAnimation] = React.useState(true);

  React.useEffect(() => {
    if (!isMobileOnly) return;
    setStartAnimation((oldState) => false);
  }, []);

  return (
    <div className="h-[calc(100dvh)] flex flex-col overscroll-none overflow-hidden">
      <Navbar />
      <main
        className={`${
          defaultPadding ? "p-4" : ""
        } overflow-y-scroll overflow-x-hidden flex-1 relative flex justify-center`}
      >
        <div
          className={`w-full max-w-7xl transition-transform duration-300 ${
            isMobileOnly
              ? `transform ${
                  startAnimation
                    ? "translate-x-[100vw] opacity-0"
                    : "translate-x-[initial] opacity-100"
                }`
              : ""
          }`}
        >
          <div className="fixed top-16 right-0 opacity-80 p-4 z-10">
            <Sync />
          </div>
          {children}
        </div>
      </main>
      <BottomBar />
      <SearchPortal />
    </div>
  );
}

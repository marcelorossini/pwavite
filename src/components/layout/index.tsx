import React from "react";
import Sync from "../sync";

import Navbar from "../navbar";
import BottomBar from "../bottom-bar";

export default function Layout(props: any) {
  const { children } = props;
  return (
    <div className="h-[calc(100dvh)] flex flex-col overscroll-none overflow-hidden">
      <Navbar />
      <main className="p-6 overflow-auto flex-1 relative">{children}</main>
      <BottomBar/>
    </div>
  );
}

import React from "react";
import Layout from "../components/layout";

import GalleryOpening from "@/components/gallery/opening";
import PrincipalStores from "@/components/gallery/principal-stores";

export default function Gallery() {
  return (
    <Layout defaultPadding={false}>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-2 pl-4 pr-0 md:pr-4 min-xl:pl-0">
          <strong className="text-blue-700">Últimas inaugurações</strong>
          <div className="w-full h-full">
            <GalleryOpening />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 min-xl:px-0">
          <strong className="text-blue-700">Principais Redes</strong>
          <PrincipalStores />
        </div>
      </div>
    </Layout>
  );
}


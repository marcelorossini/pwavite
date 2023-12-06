import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { isMobileOnly } from "react-device-detect";
import { useLocation } from "react-router-dom";

import SectorDotDesktop from "@/components/sector/sector-dot-list-desktop";

import { getAll } from "@/fetch/sectors";

import { ISector } from "@/interfaces/api/sector";

interface ISectorDotList {
  className?: string;
}

export default function SectorDotList(props: ISectorDotList) {
  const { className = "" } = props;
  const { isLoading, data } = useQuery(["sectors"], getAll);

  if (isLoading) return <Loading className={className} />;

  const sectors = data?.data as ISector[];

  return (
    <SectorDotDesktop
      items={sectors.map((sector) => (
        <Item
          key={sector.id}
          name={sector.nome}
          url={`/setores/${sector.id}`}
          image={sector.icone}
        />
      ))}
    />
  );
}

interface ISectorItemProps {
  name: string;
  image: string;
  url: string;
}

function Item(props: ISectorItemProps) {
  const { name, image, url } = props;
  const location = useLocation();
  const pathname = location.pathname

  return (
    <Link to={url}>
      <div className="w-full h-full flex flex-col gap-2 pl-4">
        <div className={`w-full h-full aspect-square rounded-full bg-slate-200 relative border-2 transition-all ${pathname.includes(url) ? 'border-slate-500 drop-shadow-md' :  'border-slate-200'}`}>
          {image ? (
            <img
              src={`${
                import.meta.env.VITE_STORAGE_IMAGES
              }/promarket/Setores/Icones/${image}`}
              alt={name}
              className="p-2"
            />
          ) : null}
        </div>
        <small className="w-full h-4 text-xs truncate text-center subpixel-antialiased leading-tight">
          {name}
        </small>
      </div>
    </Link>
  );
}



function Loading(props: ISectorDotList) {
  const { className } = props;
  return (
    <ul
      className={`w-full flex gap-2 overflow-x-auto scrollbar-hide ${className}`}
    >
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
    </ul>
  );
}

function LoadingItem() {
  return (
    <li className="w-full h-full flex flex-col gap-2">
      <div className="w-28 flex flex-col gap-2 relative">
        <div className="w-full h-full aspect-square rounded-full bg-slate-300 animate-pulse" />
        <small className="w-full h-4 bg-slate-300 animate-pulse rounded-md" />
      </div>
    </li>
  );
}

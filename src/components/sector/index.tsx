import React from "react";
import SectorCarousel from "./sector-carousel";
import { Link } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";
import { useQuery } from "react-query";

import { get } from "@/fetch/sectors";
import { ISector } from "@/interfaces/api/sector";

interface ISectorProps {
  id: string;
  name: string;
  color: string;
  description: string;
  clickable?: boolean;
  className?: string;
}

export default function Sector(props: ISectorProps) {
  const { id, clickable } = props;
  return (
    <div className="flex flex-col gap-2">
      {clickable ? (
        <Link to={`setores/${id}`}>
          <SectorHeader {...props} />
        </Link>
      ) : (
        <SectorHeader {...props} />
      )}
      {isMobileOnly ? (
        <div className="w-full h-fit">
          <SectorCarousel id={props.id} />
        </div>
      ) : (
        "Desktop"
      )}
    </div>
  );
}

interface ISectorHeaderProps {
  id: string;
  className?: string;
}

export function SectorHeader(props: ISectorHeaderProps) {
  const { id, className } = props;

  const { isLoading, data: queryData } = useQuery(
    ["sectors", id],
    async () => await get(id as string)
  );
  const data = queryData?.data as ISector;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex gap-2">
        <div className="h-6 w-8 rounded-md" style={{ background: data.cor }}></div>
        <strong className="text-slate-800">{data.nome}</strong>
      </div>
      <p className="">{data.descricao}</p>
    </div>
  );
}

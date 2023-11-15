import React from "react";
import SectorCarousel from "./sector-carousel";
import { Link } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";

interface ISector {
  id: string;
  name: string;
  color: string;
  description: string;
  clickable?: boolean;
  className?: string;
}

export default function Sector(props: ISector) {
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

export function SectorHeader(props: ISector) {
  const { id, name, color, description, className } = props;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex gap-2">
        <div className="h-6 w-8 rounded-md" style={{ background: color }}></div>
        <strong className="text-slate-800">{name}</strong>
      </div>
      <p className="">{description}</p>
    </div>
  );
}

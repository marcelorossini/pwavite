import React from "react";
import Carousel from "./carousel";
import { Link } from "react-router-dom";

interface ISector {
  id: string;
  name: string;
  color: string;
  description: string;
  clickable?: boolean;
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
      <div className="w-full h-fit">
        <Carousel id={props.id}/>
      </div>
    </div>
  );
}

export function SectorHeader(props: ISector) {
  const { id, name, color, description } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div className="h-6 w-8 rounded-md" style={{ background: color }}></div>
        <strong className="text-slate-800">{name}</strong>
      </div>
      <p className="">{description}</p>
    </div>
  );
}

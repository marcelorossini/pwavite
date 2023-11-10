import React from "react";
import { Link } from "react-router-dom";
import { ISector } from "@/interfaces/api/sector";

import { getAll as getAllSectors } from "@/fetch/sectors";

interface SectorItemProps {
  name: string;
  image: string;
  url: string;
}

export default function SectorDotList() {
  const [sectors, setSectors] = React.useState<ISector[]>([]);
  React.useEffect(() => {
    async function fetchData() {
      const { data } = await getAllSectors();
      setSectors(data);
    }
    fetchData();
  }, []);

  return (
    <ul className="w-full flex gap-2 overflow-x-auto scrollbar-hide">
      {sectors.map((sector) => (
        <Item
          key={sector.id}
          name={sector.nome}
          url={`/setores/${sector.id}`}
          image={sector.icone}
        />
      ))}
    </ul>
  );
}

function Item(props: SectorItemProps) {
  const { name, image, url } = props;

  return (
    <li className="w-full h-full flex flex-col gap-2">
      <Link to={url}>
        <div className="w-20 flex flex-col gap-2 relative overflow-hidden">
          <div className="w-full h-full aspect-square rounded-full bg-slate-200 relative">
            {image ? <img src={image} alt={name} className="p-2" /> : null}
          </div>
          <small className="text-xs line-clamp-2 text-center subpixel-antialiased leading-tight">
            {name}
          </small>
        </div>
      </Link>
    </li>
  );
}

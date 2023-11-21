import React from "react";
import Separator from "../separator";

import { IoSearchOutline } from "react-icons/io5";
import Logo from "@/assets/logo-promarket-azul.svg";
import { Link } from "react-router-dom";
import { useAppStore } from "@/stores/app";

export default function Navbar() {
  const { setSearchOpened, isOnline } = useAppStore();
  const size = getSizeClassName()

  return (
    <div className={`flex items-center gap-4 px-6 shadow-md z-20 bg-white ${size}`}>
      <div className="w-20 relative h-full">
        <Link to="/">
          <img
            src={`${Logo}?cache=true`}
            alt="logo"
            className="w-full h-full top-0 left-0 object-contain"
          />
        </Link>
      </div>
      <Separator direction="col" padding="py-5" />
      <div className="flex flex-col">
        <strong className="text-blue-700 p-0 whitespace-nowrap">
          CATÁLOGO DIGITAL
        </strong>
        <small>Usuário | {isOnline ? 'online' : 'offline'}</small>
      </div>
      <div className="flex-1 flex justify-end">
        <button
          className="bg-slate-200 w-12 h-9 rounded-xl text-slate-800 flex justify-center items-center"
          onClick={() => setSearchOpened(true)}
        >
          <IoSearchOutline size={20} />
        </button>
      </div>
    </div>
  );
}

export function getSizeClassName() {
  return "h-16"
}

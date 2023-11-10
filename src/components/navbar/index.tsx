import React from "react";
import Separator from "../separator";
import Sync from "../sync";

import { BsSearch } from "react-icons/bs";
import Logo from '@/assets/logo-promarket-azul.svg'
import { Link } from 'react-router-dom'


export default function Navbar() {

  return (
    <div className="flex items-center h-20 gap-4 px-6 shadow-md z-50">
      <div className="w-20 relative h-full">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-full h-full top-0 left-0 object-contain"
          />
        </Link>
      </div>
      <Separator direction="col" padding="py-5" />
      <div className="flex flex-col">
        <strong className="text-blue-700 p-0">CATÁLOGO DIGITAL</strong>
        <small>
          Usuário
        </small>
      </div>
      <div className="flex-1 flex justify-end">
        <Sync />
      </div>
      <div className="flex justify-end">
        <button className="bg-slate-200 w-12 h-10 rounded-xl text-slate-800 flex justify-center items-center">
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

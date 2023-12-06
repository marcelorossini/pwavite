import React from "react";
import Separator from "../separator";

import { IoSearchOutline } from "react-icons/io5";
import Logo from "@/assets/logo-promarket-azul.svg";
import { Link } from "react-router-dom";
import { useAppStore } from "@/stores/app";
import { SearchBox, SearchBoxButton } from "../search-portal";
import LinkIcons from "../link-icons";
import { isMobileOnly } from "react-device-detect";
import CachedImage from "@/components/cached-image";

import {
  HiOutlineHeart,
  HiOutlineBuildingStorefront,
  HiHeart,
  HiBuildingStorefront,
  HiOutlineBriefcase,
  HiBriefcase,
} from "react-icons/hi2";

export default function Navbar() {
  const { setSearchPortalOpened: setSearchOpened, isOnline } = useAppStore();
  const size = getSizeClassName();
  //max-w-7xl
  return (
    <div className={`flex justify-center px-4 shadow-md z-20 bg-white ${size}`}>
      <div className={`flex w-full max-w-7xl items-center gap-4 lg:gap-8`}>
        <div className="w-20 relative h-full">
          <Link to="/">
            <img
              src={Logo}
              alt=" "
              className="w-full h-full top-0 left-0 object-contain"
            />
          </Link>
        </div>
        <Separator direction="col" padding="py-5" />
        <div className="flex flex-col">
          <strong className="text-blue-700 p-0 whitespace-nowrap">
            CATÁLOGO DIGITAL
          </strong>
          <small>Usuário | {isOnline ? "online" : "offline"}</small>
        </div>
        <div className="flex-1 flex justify-end">
          {isMobileOnly ? (
            <SearchBoxButton />
          ) : (
            <SearchBox clearButton={false} />
          )}
        </div>
        <div className="hidden md:block">
          <LinkIcons
            route="/lista"
            icon={<HiOutlineBriefcase size={18} />}
            iconActive={<HiBriefcase size={18} />}
            title="Lista"
            direction="row"
          />
        </div>
        <div className="hidden md:block">
          <LinkIcons
            title={"Favoritos"}
            route="/favoritos"
            icon={<HiOutlineHeart size={18} />}
            iconActive={<HiHeart size={18} />}
            direction="row"
          />
        </div>
        <div className="hidden md:block">
          <LinkIcons
            title={"Galeria"}
            route="/galeria"
            icon={<HiOutlineBuildingStorefront size={18} />}
            iconActive={<HiBuildingStorefront size={18} />}
            direction="row"
          />
        </div>
      </div>
    </div>
  );
}

export function getSizeClassName() {
  return "h-16";
}

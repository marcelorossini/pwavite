import React from "react";
import Separator from "../separator";

import { IoSearchOutline } from "react-icons/io5";
import Logo from "@/assets/logo-promarket-azul.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppStore } from "@/stores/app";
import { SearchBox, SearchBoxButton } from "../search-portal";
import LinkIcons from "../link-icons";
import { isMobileOnly } from "react-device-detect";
import CachedImage from "@/components/image/cached-image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

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
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const backButton = pathname != "/" && isMobileOnly

  //max-w-7xl
  return (
    <div className={`flex justify-center px-4 shadow-md z-20 bg-white ${size}`}>
      <div className={`flex w-full max-w-7xl items-center gap-4 lg:gap-8`}>
        <div
          className={`${
            backButton ? "w-6" : "w-20"
          } transition-[width] duration-500 relative h-full flex items-center`}
        >
          {backButton ? (
            <div
              className="xl:hidden w-8 h-8 text-slate-800 flex items-center justify-center rounded-md cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <HiOutlineChevronLeft size={25} />
            </div>
          ) : (
            <Link to="/">
              <img
                src={Logo}
                alt=" "
                className="w-full h-full top-0 left-0 object-contain"
              />
            </Link>
          )}
        </div>
        <Separator direction="col" padding="py-5" />
        <div className="flex flex-col">
          <strong className="text-blue-700 p-0 whitespace-nowrap">
            CATÁLOGO DIGITAL
          </strong>
          <small>Usuário | {isOnline ? "online" : "offline"}</small>
        </div>
        <div className="hidden md:flex flex-1 justify-end">
          <SearchBox clearButton={false} />
        </div>
        <div className="flex md:hidden flex-1 justify-end">
          <SearchBoxButton />
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

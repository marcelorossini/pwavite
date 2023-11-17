import React from "react";
import BottomBarItem from "./bottom-bar-item";
import { isIOS } from "react-device-detect";
import isPwa from "@/utils/is-pwa";

import {
  HiOutlineHome,
  HiHome,
  HiBriefcase,
  HiOutlineBriefcase,
  HiOutlineBuildingStorefront,
  HiBuildingStorefront,
  HiOutlineHeart,
  HiHeart,
} from "react-icons/hi2";

export default function BottomBar() {
  const sizeClassName = getSizeClassName();
  const marginBottomClassName = getMarginBottomClassName();

  return (
    <div
      className={`flex flex-nowrap px-6 gap-4 border-t z-20 bg-white ${sizeClassName} ${marginBottomClassName}`}
    >
      <BottomBarItem
        route="/"
        icon={<HiOutlineHome size={25} />}
        iconActive={<HiHome size={25} />}
        title="Home"
      />
      <BottomBarItem
        route="/favoritos"
        icon={<HiOutlineHeart size={25} />}
        iconActive={<HiHeart size={25} />}
        title="Favoritos"
      />
      <BottomBarItem
        route="/lista"
        icon={<HiOutlineBriefcase size={25} />}
        iconActive={<HiBriefcase size={25} />}
        title="Lista"
      />
      <BottomBarItem
        route="/galeria"
        icon={<HiOutlineBuildingStorefront size={25} />}
        iconActive={<HiBuildingStorefront size={25} />}
        title="Galeria"
      />
    </div>
  );
}

export function getSizeClassName() {
  return `h-16`
}

export function getMarginBottomClassName() {
  const isPwaIos = isPwa() && isIOS
  return isPwaIos ? 'mb-4' : ''
}
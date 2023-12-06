import React from "react";
import { isIOS } from "react-device-detect";
import isPwa from "@/utils/is-pwa";
import LinkIcons from "@/components/link-icons";

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
      className={`flex md:hidden flex-nowrap px-6 gap-4 border-t z-20 bg-white ${sizeClassName} ${marginBottomClassName}`}
    >
      <LinkIcons
        route="/"
        icon={<HiOutlineHome size={25} />}
        iconActive={<HiHome size={25} />}
        title="Home"
        direction={'col'}
      />
      <LinkIcons
        route="/favoritos"
        icon={<HiOutlineHeart size={25} />}
        iconActive={<HiHeart size={25} />}
        title="Favoritos"
        direction={'col'}
      />
      <LinkIcons
        route="/lista"
        icon={<HiOutlineBriefcase size={25} />}
        iconActive={<HiBriefcase size={25} />}
        title="Lista"
        direction={'col'}
      />
      <LinkIcons
        route="/galeria"
        icon={<HiOutlineBuildingStorefront size={25} />}
        iconActive={<HiBuildingStorefront size={25} />}
        title="Galeria"
        direction={'col'}
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
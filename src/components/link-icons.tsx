"use client";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppStore } from "@/stores/app";

enum Direction {
  Col = "col",
  Row = "row",
}
export interface IBottomBarItemProps {
  route: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  title: string;
  direction?: Direction | any;
  mark?: boolean;
}

export default function BottomBarItem(props: IBottomBarItemProps) {
  const { route, icon, iconActive, title, direction, mark } = props;
  const location = useLocation();
  const pathname = location.pathname;
  const [active, setActive] = React.useState(pathname == route);
  const { setSearchPortalOpened: setSearchOpened } = useAppStore();
  const navigate = useNavigate();

  async function handleClick(route: string) {
    navigate(route);
    setSearchOpened(false);
  }

  return (
    <div
      className={`w-full flex ${
        direction == "col" ? "flex-col" : "flex-row gap-2"
      } items-center justify-center relative cursor-pointer ${
        active ? "text-blue-700" : "text-slate-700"
      }`}
      onClick={() => handleClick(route)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(pathname == route)}
    >
      <div className="h-7 flex items-center justify-center">
        {active ? iconActive : icon}
      </div>
      <small className={`${direction == "col" ? "text-xs" : ""}`}>
        {title}
      </small>
      {mark ? (
        <div className="absolute top-3 right-5 md:top-1 md:left-4 w-2 h-2 rounded-full bg-orange-600" />
      ) : null}
    </div>
  );
}

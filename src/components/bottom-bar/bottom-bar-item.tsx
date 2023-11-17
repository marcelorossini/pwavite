"use client";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppStore } from "@/stores/app";

export interface IBottomBarItemProps {
  route: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  title: string;
}

export default function BottomBarItem(props: IBottomBarItemProps) {
  const { route, icon, iconActive, title } = props;
  const location = useLocation();
  const pathname = location.pathname
  const active = pathname == route
  const { setSearchOpened } = useAppStore();
  const navigate = useNavigate();

  async function handleClick(route: string) {
    navigate(route);
    setSearchOpened(false)
  }

  return (
    <div
      className={`w-3/12 flex flex-col items-center justify-center ${active ? 'text-blue-700' : 'text-slate-700'}`}
      onClick={() => handleClick(route)}
    >
      <div className="h-7">{active ? iconActive : icon}</div>
      <small className="text-xs">{title}</small>
    </div>
  );
}

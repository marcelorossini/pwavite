"use client";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

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

  return (
    <Link
      to={route}
      className={`w-3/12 flex flex-col items-center justify-center ${active ? 'text-blue-700' : 'text-slate-700'}`}
    >
      <div className="h-7">{active ? iconActive : icon}</div>
      <small className="text-xs">{title}</small>
    </Link>
  );
}

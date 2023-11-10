"use client"
import React from "react";

enum Direction {
  Col = "col",
  Row = "row",
}

interface SeparatorProps {
  direction: Direction | string;
  padding?: string;
}

export default function Separator(props: SeparatorProps) {
  const { direction, padding } = props;
  if (direction === Direction.Col) {
    return (
      <div className={`h-full w-px ${padding}`}>
        <div className="h-full w-full bg-neutral-200" />
      </div>
    );
  } else {
    return (
      <div className={`w-full h-px ${padding}`}>
        <div className="h-full w-full bg-neutral-200" />
      </div>
    );
  }
}

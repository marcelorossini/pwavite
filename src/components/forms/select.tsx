"use client";
import React from "react";
import ReactSelect, { Props } from "react-select";

export default function Select(props: Props) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return <ReactSelect options={options} />;
}

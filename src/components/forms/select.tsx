"use client";
import React from "react";
import ReactSelect, { Props } from "react-select";

interface ISelectProps extends Props {
  data: any;
}

export default function Select(props: ISelectProps) {
  const { data } = props;

  return <ReactSelect options={data} noOptionsMessage={() => "Sem registros"}/>;
}

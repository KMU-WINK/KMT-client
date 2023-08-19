import React from "react";
import { useLocation } from "react-router-dom";
import Addhalfup from "./Addhalfup";

export default function Add() {
  const { state } = useLocation();
  console.log("gugugu");
  return (
    <div>
      <Addhalfup state={state} />
    </div>
  );
}

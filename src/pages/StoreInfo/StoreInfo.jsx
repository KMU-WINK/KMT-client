import React from "react";
import Review from "./Review";
import { useLocation } from "react-router-dom";

export default function Add() {
  const { state } = useLocation();
  console.log("gun", state);
  return (
    <div>
      <Review state={state} />
    </div>
  );
}

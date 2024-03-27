/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ArrowElement20 } from "../../icons/ArrowElement20";
import { ArrowElement23 } from "../../icons/ArrowElement23";
import "./style.css";

export const Arrows = ({ className }) => {
  return (
    <div className={`arrows ${className}`}>
      <ArrowElement20 className="arrow-element" color="#0A215B" />
      <ArrowElement23 className="arrow-element" color="#0A215B" />
    </div>
  );
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowElement20 } from "../../icons/ArrowElement20";
import { ArrowElement23 } from "../../icons/ArrowElement23";
import "./style.css";

export const InternalMenu = ({ resolution, className }) => {
  return (
    <div className={`internal-menu resolution-106-${resolution} ${className}`}>
      <ArrowElement20 className="arrow-element-2" color="white" />
      <div className="group-15">
        <div className="rectangle-10" />
        <div className="rectangle-11" />
        <div className="rectangle-12" />
        <div className="rectangle-13" />
        <div className="rectangle-14" />
        <div className="rectangle-15" />
        <div className="rectangle-16" />
        <div className="rectangle-17" />
        <div className="rectangle-18" />
      </div>
      <ArrowElement23 className="arrow-element-2" color="white" />
    </div>
  );
};

InternalMenu.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
};

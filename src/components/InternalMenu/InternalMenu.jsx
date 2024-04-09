/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowElement } from "../ArrowElement";
import "./style.css";

export const InternalMenu = ({
  resolution,
  className,
  arrowElementTypeBack = "/img/arrow-element.png",
  arrowElementTypeForward = "/img/arrow-element-1.png",
}) => {
  return (
    <div className={`internal-menu resolution-118-${resolution} ${className}`}>
      <ArrowElement className="arrow-element-2" type="back" typeBack={arrowElementTypeBack} />
      <div className="group-19">
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
      <ArrowElement className="arrow-element-2" type="forward" typeForward={arrowElementTypeForward} />
    </div>
  );
};

InternalMenu.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  arrowElementTypeBack: PropTypes.string,
  arrowElementTypeForward: PropTypes.string,
};

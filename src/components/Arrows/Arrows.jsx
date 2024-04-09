/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowElement } from "../ArrowElement";
import "./style.css";

export const Arrows = ({
  className,
  arrowElementTypeBack = "/img/type-back.png",
  arrowElementTypeForward = "/img/type-forward.png",
}) => {
  return (
    <div className={`arrows ${className}`}>
      <ArrowElement className="arrow-element-instance" type="back" typeBack={arrowElementTypeBack} />
      <ArrowElement className="arrow-element-instance" type="forward" typeForward={arrowElementTypeForward} />
    </div>
  );
};

Arrows.propTypes = {
  arrowElementTypeBack: PropTypes.string,
  arrowElementTypeForward: PropTypes.string,
};

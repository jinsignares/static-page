/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ArrowElement = ({
  type,
  className,
  typeBack = "/img/type-back.png",
  typeForward = "/img/type-forward.png",
}) => {
  return (
    <img className={`arrow-element ${className}`} alt="Type forward" src={type === "back" ? typeBack : typeForward} />
  );
};

ArrowElement.propTypes = {
  type: PropTypes.oneOf(["forward", "back"]),
  typeBack: PropTypes.string,
  typeForward: PropTypes.string,
};

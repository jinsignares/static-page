/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SubTopicTitle = ({
  type,
  resolution,
  className,
  sectionTitleClassName,
  text = "SOURCES OF GREENHOUSE GAS EMISSIONSA",
}) => {
  return (
    <div className={`sub-topic-title type-2-${type} resolution-47-${resolution} ${className}`}>
      <p className={`section-title-8 ${sectionTitleClassName}`}>{text}</p>
    </div>
  );
};

SubTopicTitle.propTypes = {
  type: PropTypes.oneOf(["left", "default"]),
  resolution: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  text: PropTypes.string,
};

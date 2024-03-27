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
    <div className={`sub-topic-title type-1-${type} ${className}`}>
      <p className={`section-title-7 type-2-${type} resolution-37-${resolution} ${sectionTitleClassName}`}>{text}</p>
    </div>
  );
};

SubTopicTitle.propTypes = {
  type: PropTypes.oneOf(["left", "type-3", "default"]),
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
};

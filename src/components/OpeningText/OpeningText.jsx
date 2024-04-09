/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const OpeningText = ({
  resolution,
  className,
  text = "AB 617 COMMUNITY HEALTH PROTECTION PROGRAM",
  weContinuedToWorkClassName,
  spanClassName,
  text1 = "We continued to work in collaboration with community members and other stakeholders to ",
  spanClassNameOverride,
  text2 = "develop and implement health-protective measures in highly impacted communities",
  spanClassName1,
  text3 = " as part of statewide AB 617 implementation.",
  frameClassName,
  ABCommunityClassName,
}) => {
  return (
    <div className={`opening-text resolution-6-${resolution} ${className}`}>
      <div className={`frame-3 ${frameClassName}`}>
        <p className={`AB-community ${ABCommunityClassName}`}>{text}</p>
        <p className={`we-continued-to-work ${weContinuedToWorkClassName}`}>
          <span className={`text-wrapper-39 ${spanClassName}`}>{text1}</span>
          <span className={`text-wrapper-39 ${spanClassNameOverride}`}>{text2}</span>
          <span className={`text-wrapper-39 ${spanClassName1}`}>{text3}</span>
        </p>
      </div>
    </div>
  );
};

OpeningText.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};

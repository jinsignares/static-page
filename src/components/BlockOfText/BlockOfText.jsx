/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BlockOfText = ({
  resolution,
  subtitle,
  className,
  textClassName,
  sectionTitleClassName,
  text = "CLIMATE ACTION",
  elementAnnualReportClassName,
  text1 = "2023 ANNUAL REPORT",
  text2 = "HOW DO WE REDUCE EMISSIONS AND PROTECT COMMUNITIES AND THE CLIMATE?",
}) => {
  return (
    <div className={`block-of-text ${subtitle} resolution-1-${resolution} ${className}`}>
      <div className={`text ${textClassName}`}>
        <div className={`section-title ${sectionTitleClassName}`}>{text}</div>
        {["two-lines", "yes"].includes(subtitle) && (
          <div className={`element-annual-report ${elementAnnualReportClassName}`}>
            {subtitle === "yes" && <>{text1}</>}

            {subtitle === "two-lines" && <p className="text-wrapper-39">{text2}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

BlockOfText.propTypes = {
  resolution: PropTypes.oneOf(["tablet", "desktop", "mobile"]),
  subtitle: PropTypes.oneOf(["two-lines", "yes", "no"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

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
  sectionTitleClassName,
  text = "CLIMATE ACTION",
  elementAnnualReportClassName,
  text1 = "2023 ANNUAL REPORT",
  textClassName,
}) => {
  return (
    <div className={`block-of-text ${className}`}>
      <div className={`text ${textClassName}`}>
        <div className={`section-title resolution-1-${resolution} ${sectionTitleClassName}`}>{text}</div>
        {["two-lines", "yes"].includes(subtitle) && (
          <div
            className={`element-annual-report ${subtitle} resolution-2-${resolution} ${elementAnnualReportClassName}`}
          >
            {subtitle === "yes" && <>{text1}</>}

            {subtitle === "two-lines" && (
              <p className="text-wrapper-19">HOW DO WE REDUCE EMISSIONS AND PROTECT COMMUNITIES AND THE CLIMATE?</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

BlockOfText.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  subtitle: PropTypes.oneOf(["two-lines", "yes", "no"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};

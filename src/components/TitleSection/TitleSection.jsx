/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BlockOfText } from "../BlockOfText";
import "./style.css";

export const TitleSection = ({
  resolution,
  layout,
  className,
  frameClassName,
  blockOfTextSectionTitleClassName,
  blockOfTextElementAnnualReportClassName,
  blockOfTextText = "MESSAGE FROM OUR NEW EXECUTIVE OFFICER",
  blockOfTextText1 = "INTRODUCTION",
  blockOfTextResolutionMobileClassName,
  blockOfTextTextClassName,
  blockOfTextResolution = "mobile",
  blockOfTextSectionTitleClassNameOverride,
  blockOfTextElementAnnualReportClassNameOverride,
  blockOfTextText2 = "MESSAGE FROM OUR NEW EXECUTIVE OFFICER",
  blockOfTextText3 = "INTRODUCTION",
  blockOfTextResolutionMobileClassNameOverride,
  frameClassNameOverride,
}) => {
  return (
    <div className={`title-section ${layout} resolution-3-${resolution} ${className}`}>
      {["img-l", "stacked"].includes(layout) && (
        <>
          <div className={`div ${frameClassName}`} />
          <BlockOfText
            className={blockOfTextResolutionMobileClassName}
            elementAnnualReportClassName={blockOfTextElementAnnualReportClassName}
            resolution={blockOfTextResolution}
            sectionTitleClassName={blockOfTextSectionTitleClassName}
            subtitle="yes"
            text={blockOfTextText1}
            text1={blockOfTextText}
            textClassName={blockOfTextTextClassName}
          />
        </>
      )}

      {layout === "img-r" && (
        <>
          <BlockOfText
            className={blockOfTextResolutionMobileClassNameOverride}
            elementAnnualReportClassName={blockOfTextElementAnnualReportClassNameOverride}
            resolution="desktop"
            sectionTitleClassName={blockOfTextSectionTitleClassNameOverride}
            subtitle="yes"
            text={blockOfTextText3}
            text1={blockOfTextText2}
          />
          <div className={`frame-2 ${frameClassNameOverride}`} />
        </>
      )}
    </div>
  );
};

TitleSection.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "mobile-sm", "mobile"]),
  layout: PropTypes.oneOf(["img-r", "stacked", "img-l"]),
  blockOfTextText: PropTypes.string,
  blockOfTextText1: PropTypes.string,
  blockOfTextResolution: PropTypes.string,
  blockOfTextText2: PropTypes.string,
  blockOfTextText3: PropTypes.string,
};

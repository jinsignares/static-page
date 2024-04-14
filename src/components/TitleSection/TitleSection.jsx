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
  blockOfTextText = "INTRODUCTION",
  blockOfTextElementAnnualReportClassName,
  blockOfTextSectionTitleClassName,
  blockOfTextResolutionMobileClassName,
  blockOfTextText1 = "MESSAGE FROM OUR NEW EXECUTIVE OFFICER",
  blockOfTextText2 = "INTRODUCTION",
  blockOfTextElementAnnualReportClassNameOverride,
  blockOfTextSectionTitleClassNameOverride,
  blockOfTextResolutionMobileClassNameOverride,
  blockOfTextText3 = "MESSAGE FROM OUR NEW EXECUTIVE OFFICER",
  frameClassNameOverride,
  hasFrame = true,
  blockOfTextText4,
  blockOfTextSubtitle = "yes",
  blockOfTextTextClassName,
  blockOfTextText5,
  blockOfTextSubtitle1 = "yes",
}) => {
  return (
    <div className={`title-section ${layout} resolution-4-${resolution} ${className}`}>
      {["img-l", "stacked"].includes(layout) && <div className={`div ${frameClassName}`} />}

      {layout === "img-r" && (
        <BlockOfText
          className={blockOfTextResolutionMobileClassNameOverride}
          subtitleClassName={blockOfTextElementAnnualReportClassNameOverride}
          resolution="desktop"
          sectionTitleClassName={blockOfTextSectionTitleClassNameOverride}
          subtitle={blockOfTextSubtitle1}
          text={blockOfTextText2}
          text1={blockOfTextText3}
          text2={blockOfTextText5}
          textClassName={blockOfTextTextClassName}
        />
      )}

      {hasFrame && (
        <>
          <>
            {["img-l", "stacked"].includes(layout) && (
              <BlockOfText
                className={blockOfTextResolutionMobileClassName}
                subtitleClassName={blockOfTextElementAnnualReportClassName}
                resolution={resolution === "desktop" ? "desktop" : resolution === "tablet" ? "tablet" : "mobile"}
                sectionTitleClassName={blockOfTextSectionTitleClassName}
                subtitle={blockOfTextSubtitle}
                text={blockOfTextText}
                text1={blockOfTextText1}
                text2={blockOfTextText4}
                textClassName={`${["desktop", "mobile", "tablet"].includes(resolution) && "class-3"}`}
              />
            )}

            {layout === "img-r" && <div className={`frame-2 ${frameClassNameOverride}`} />}
          </>
        </>
      )}
    </div>
  );
};

TitleSection.propTypes = {
  resolution: PropTypes.oneOf(["tablet", "desktop", "mobile-sm", "mobile"]),
  layout: PropTypes.oneOf(["img-r", "stacked", "img-l"]),
  blockOfTextText: PropTypes.string,
  blockOfTextText1: PropTypes.string,
  blockOfTextText2: PropTypes.string,
  blockOfTextText3: PropTypes.string,
  hasFrame: PropTypes.bool,
  blockOfTextText4: PropTypes.string,
  blockOfTextSubtitle: PropTypes.string,
  blockOfTextText5: PropTypes.string,
  blockOfTextSubtitle1: PropTypes.string,
};

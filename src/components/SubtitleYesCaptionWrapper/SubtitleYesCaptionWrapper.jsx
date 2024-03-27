/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ResoolutionDesktopWrapper } from "../ResoolutionDesktopWrapper";
import "./style.css";

export const SubtitleYesCaptionWrapper = ({
  subtitle,
  caption,
  resolution,
  className,
  resoolutionDesktopWrapperGraphBarCaptionText = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionText1 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName,
  resoolutionDesktopWrapperGraphBarCaptionText2 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride,
  resoolutionDesktopWrapperGraphBarCaptionText3 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionText4 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName,
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride,
  resoolutionDesktopWrapperGraphBarCaptionText5 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionDivClassName,
  resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride,
  resoolutionDesktopWrapperGraphBarCaptionText6 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName,
  resoolutionDesktopWrapperGraphBarCaptionText7 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride,
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1,
  resoolutionDesktopWrapperGraphBarCaptionText8 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionText9 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1,
  resoolutionDesktopWrapperGraphBarCaptionText10 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2,
  resoolutionDesktopWrapperGraphBarCaptionText11 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3,
  resoolutionDesktopWrapperGraphBarCaptionText12 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2,
  resoolutionDesktopWrapperGraphBarCaptionText13 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionText14 = "39.2%",
  resoolutionDesktopWrapperVisible,
  resoolutionDesktopWrapperResoolutionDesktopClassName,
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3,
  resoolutionDesktopWrapperGraphBarCaptionText15 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionText16 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4,
  resoolutionDesktopWrapperGraphBarCaptionText17 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5,
  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName,
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4,
  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassNameOverride,
  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1,
  resoolutionDesktopWrapperVisible1,
  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName2,
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName6,
  sectionTitleClassName,
}) => {
  return (
    <div
      className={`subtitle-yes-caption-wrapper caption-${caption} subtitle-0-${subtitle} resolution-97-${resolution} ${className}`}
    >
      {subtitle && <div className="section-title-48">Ages 18 — 64*</div>}

      <ResoolutionDesktopWrapper
        className={resoolutionDesktopWrapperResoolutionDesktopClassName}
        graphBarCaptionColumnsResolutionClassName={resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1}
        graphBarCaptionColumnsResolutionClassName1={resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName}
        graphBarCaptionColumnsResolutionClassName2={resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName}
        graphBarCaptionColumnsResolutionClassName3={resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2}
        graphBarCaptionColumnsResolutionClassName4={
          resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride
        }
        graphBarCaptionColumnsResolutionClassName5={resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5}
        graphBarCaptionColumnsResolutionClassName6={resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName6}
        graphBarCaptionColumnsResolutionClassNameOverride={
          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3
        }
        graphBarCaptionDivClassName={resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2}
        graphBarCaptionDivClassNameOverride={resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride}
        graphBarCaptionFrameWrapperClassName={resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4}
        graphBarCaptionFrameWrapperClassNameOverride={
          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride
        }
        graphBarCaptionRectangleClassName={resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4}
        graphBarCaptionRectangleClassName1={resoolutionDesktopWrapperGraphBarCaptionRectangleClassName}
        graphBarCaptionRectangleClassName2={resoolutionDesktopWrapperGraphBarCaptionDivClassName}
        graphBarCaptionRectangleClassName3={resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3}
        graphBarCaptionRectangleClassName4={resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1}
        graphBarCaptionRectangleClassNameOverride={resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride}
        graphBarCaptionSectionTitleClassName={resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName2}
        graphBarCaptionSectionTitleClassName1={resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName}
        graphBarCaptionSectionTitleClassName2={resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassNameOverride}
        graphBarCaptionSectionTitleClassNameOverride={resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1}
        graphBarCaptionText={resoolutionDesktopWrapperGraphBarCaptionText8}
        graphBarCaptionText1={resoolutionDesktopWrapperGraphBarCaptionText13}
        graphBarCaptionText10={resoolutionDesktopWrapperGraphBarCaptionText14}
        graphBarCaptionText11={resoolutionDesktopWrapperGraphBarCaptionText10}
        graphBarCaptionText12={resoolutionDesktopWrapperGraphBarCaptionText9}
        graphBarCaptionText13={resoolutionDesktopWrapperGraphBarCaptionText16}
        graphBarCaptionText14={resoolutionDesktopWrapperGraphBarCaptionText5}
        graphBarCaptionText15={resoolutionDesktopWrapperGraphBarCaptionText15}
        graphBarCaptionText16={resoolutionDesktopWrapperGraphBarCaptionText4}
        graphBarCaptionText17={resoolutionDesktopWrapperGraphBarCaptionText2}
        graphBarCaptionText2={resoolutionDesktopWrapperGraphBarCaptionText}
        graphBarCaptionText3={resoolutionDesktopWrapperGraphBarCaptionText17}
        graphBarCaptionText4={resoolutionDesktopWrapperGraphBarCaptionText7}
        graphBarCaptionText5={resoolutionDesktopWrapperGraphBarCaptionText1}
        graphBarCaptionText6={resoolutionDesktopWrapperGraphBarCaptionText6}
        graphBarCaptionText7={resoolutionDesktopWrapperGraphBarCaptionText11}
        graphBarCaptionText8={resoolutionDesktopWrapperGraphBarCaptionText12}
        graphBarCaptionText9={resoolutionDesktopWrapperGraphBarCaptionText3}
        resoolution={resolution === "mobile" ? "mobile" : "desktop"}
        visible={resoolutionDesktopWrapperVisible1}
        visible1={resoolutionDesktopWrapperVisible}
      />
      {caption && (
        <div className="frame-36">
          <p className={`section-title-49 ${sectionTitleClassName}`}>
            *American Community Survey (ACS) Census Bureau
            <br />
            ** Total percentages may vary by 1% due to rounding
          </p>
        </div>
      )}
    </div>
  );
};

SubtitleYesCaptionWrapper.propTypes = {
  subtitle: PropTypes.bool,
  caption: PropTypes.bool,
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  resoolutionDesktopWrapperGraphBarCaptionText: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText1: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText2: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText3: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText4: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText5: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText6: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText7: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText8: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText9: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText10: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText11: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText12: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText13: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText14: PropTypes.string,
  resoolutionDesktopWrapperVisible: PropTypes.bool,
  resoolutionDesktopWrapperGraphBarCaptionText15: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText16: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText17: PropTypes.string,
  resoolutionDesktopWrapperVisible1: PropTypes.bool,
};

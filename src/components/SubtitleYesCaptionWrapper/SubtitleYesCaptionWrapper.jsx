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
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName,
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName,
  resoolutionDesktopWrapperGraphBarCaptionText = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride,
  resoolutionDesktopWrapperGraphBarCaptionDivClassName,
  resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride,
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride,
  resoolutionDesktopWrapperGraphBarCaptionText1 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionText2 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionText3 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName,
  resoolutionDesktopWrapperGraphBarCaptionText4 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionText5 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionText6 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionText7 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1,
  resoolutionDesktopWrapperGraphBarCaptionText8 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride,
  resoolutionDesktopWrapperResoolutionDesktopClassName,
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1,
  resoolutionDesktopWrapperGraphBarCaptionText9 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName,
  resoolutionDesktopWrapperGraphBarCaptionText10 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionText11 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionText12 = "39.2%",
  resoolutionDesktopWrapperVisible,
  resoolutionDesktopWrapperGraphBarCaptionText13 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2,
  resoolutionDesktopWrapperGraphBarCaptionText14 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3,
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2,
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4,
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5,
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3,
  resoolutionDesktopWrapperGraphBarCaptionText15 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionText16 = "39.2%",
  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4,
  resoolutionDesktopWrapperGraphBarCaptionText17 = "Transportation",
  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassNameOverride,
  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1,
  resoolutionDesktopWrapperVisible1,
  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName2,
  resoolutionDesktopWrapperGraphBarCaptionColumns = "two",
  resoolutionDesktopWrapperGraphBarCaptionColumns1 = "two",
  resoolutionDesktopWrapperVisible2,
  resoolutionDesktopWrapperVisible3,
  resoolutionDesktopWrapperVisible4,
  resoolutionDesktopWrapperVisible5,
  resoolutionDesktopWrapperVisible6,
  resoolutionDesktopWrapperVisible7,
  text = "*American Community Survey (ACS) Census Bureau<br/>** Total percentages may vary by 1% due to rounding",
  hasSectionTitle = true,
  resoolutionDesktopWrapperGraphBarCaptionColumns2 = "two",
  resoolutionDesktopWrapperGraphBarCaptionColumns3 = "two",
  resoolutionDesktopWrapperVisible8,
  hasFrame = true,
  resoolutionDesktopWrapperGraphBarCaptionColumns4 = "two",
  resoolutionDesktopWrapperGraphBarCaptionColumns5 = "two",
  sectionTitleClassName,
  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName6,
}) => {
  return (
    <div
      className={`subtitle-yes-caption-wrapper caption-${caption} resolution-108-${resolution} subtitle-1-${subtitle} ${className}`}
    >
      {hasSectionTitle && (
        <>
          <>{subtitle && <div className="section-title-50">Ages 18 — 64*</div>}</>
        </>
      )}

      <ResoolutionDesktopWrapper
        className={resoolutionDesktopWrapperResoolutionDesktopClassName}
        graphBarCaptionColumns={resoolutionDesktopWrapperGraphBarCaptionColumns1}
        graphBarCaptionColumns1={resoolutionDesktopWrapperGraphBarCaptionColumns}
        graphBarCaptionColumns2={resoolutionDesktopWrapperGraphBarCaptionColumns3}
        graphBarCaptionColumns3={resoolutionDesktopWrapperGraphBarCaptionColumns2}
        graphBarCaptionColumns4={resoolutionDesktopWrapperGraphBarCaptionColumns5}
        graphBarCaptionColumns5={resoolutionDesktopWrapperGraphBarCaptionColumns4}
        graphBarCaptionColumnsResolutionClassName={resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1}
        graphBarCaptionColumnsResolutionClassName1={resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5}
        graphBarCaptionColumnsResolutionClassName2={
          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride
        }
        graphBarCaptionColumnsResolutionClassName3={resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName}
        graphBarCaptionColumnsResolutionClassName4={resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName}
        graphBarCaptionColumnsResolutionClassName5={
          resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride
        }
        graphBarCaptionColumnsResolutionClassName6={resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName6}
        graphBarCaptionColumnsResolutionClassNameOverride={
          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3
        }
        graphBarCaptionDivClassName={resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1}
        graphBarCaptionDivClassNameOverride={resoolutionDesktopWrapperGraphBarCaptionRectangleClassName}
        graphBarCaptionFrameWrapperClassName={resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4}
        graphBarCaptionFrameWrapperClassNameOverride={
          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2
        }
        graphBarCaptionRectangleClassName={resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2}
        graphBarCaptionRectangleClassName1={resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4}
        graphBarCaptionRectangleClassName2={resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride}
        graphBarCaptionRectangleClassName3={resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3}
        graphBarCaptionRectangleClassName4={resoolutionDesktopWrapperGraphBarCaptionDivClassName}
        graphBarCaptionRectangleClassNameOverride={resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride}
        graphBarCaptionSectionTitleClassName={resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName2}
        graphBarCaptionSectionTitleClassName1={resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName}
        graphBarCaptionSectionTitleClassName2={resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassNameOverride}
        graphBarCaptionSectionTitleClassNameOverride={resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1}
        graphBarCaptionText={resoolutionDesktopWrapperGraphBarCaptionText4}
        graphBarCaptionText1={resoolutionDesktopWrapperGraphBarCaptionText15}
        graphBarCaptionText10={resoolutionDesktopWrapperGraphBarCaptionText6}
        graphBarCaptionText11={resoolutionDesktopWrapperGraphBarCaptionText14}
        graphBarCaptionText12={resoolutionDesktopWrapperGraphBarCaptionText8}
        graphBarCaptionText13={resoolutionDesktopWrapperGraphBarCaptionText11}
        graphBarCaptionText14={resoolutionDesktopWrapperGraphBarCaptionText7}
        graphBarCaptionText15={resoolutionDesktopWrapperGraphBarCaptionText1}
        graphBarCaptionText16={resoolutionDesktopWrapperGraphBarCaptionText10}
        graphBarCaptionText17={resoolutionDesktopWrapperGraphBarCaptionText9}
        graphBarCaptionText2={resoolutionDesktopWrapperGraphBarCaptionText16}
        graphBarCaptionText3={resoolutionDesktopWrapperGraphBarCaptionText13}
        graphBarCaptionText4={resoolutionDesktopWrapperGraphBarCaptionText2}
        graphBarCaptionText5={resoolutionDesktopWrapperGraphBarCaptionText}
        graphBarCaptionText6={resoolutionDesktopWrapperGraphBarCaptionText5}
        graphBarCaptionText7={resoolutionDesktopWrapperGraphBarCaptionText3}
        graphBarCaptionText8={resoolutionDesktopWrapperGraphBarCaptionText12}
        graphBarCaptionText9={resoolutionDesktopWrapperGraphBarCaptionText17}
        resoolution={resolution === "mobile" ? "mobile" : "desktop"}
        visible={resoolutionDesktopWrapperVisible1}
        visible1={resoolutionDesktopWrapperVisible}
        visible2={resoolutionDesktopWrapperVisible2}
        visible3={resoolutionDesktopWrapperVisible5}
        visible4={resoolutionDesktopWrapperVisible6}
        visible5={resoolutionDesktopWrapperVisible7}
        visible6={resoolutionDesktopWrapperVisible3}
        visible7={resoolutionDesktopWrapperVisible4}
        visible8={resoolutionDesktopWrapperVisible8}
      />
      {hasFrame && (
        <>
          <>
            {caption && (
              <div className="frame-38">
                <p className={`section-title-51 ${sectionTitleClassName}`}>{text}</p>
              </div>
            )}
          </>
        </>
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
  resoolutionDesktopWrapperVisible: PropTypes.bool,
  resoolutionDesktopWrapperGraphBarCaptionText13: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText14: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText15: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText16: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionText17: PropTypes.string,
  resoolutionDesktopWrapperVisible1: PropTypes.bool,
  resoolutionDesktopWrapperGraphBarCaptionColumns: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionColumns1: PropTypes.string,
  resoolutionDesktopWrapperVisible2: PropTypes.bool,
  resoolutionDesktopWrapperVisible3: PropTypes.bool,
  resoolutionDesktopWrapperVisible4: PropTypes.bool,
  resoolutionDesktopWrapperVisible5: PropTypes.bool,
  resoolutionDesktopWrapperVisible6: PropTypes.bool,
  resoolutionDesktopWrapperVisible7: PropTypes.bool,
  text: PropTypes.string,
  hasSectionTitle: PropTypes.bool,
  resoolutionDesktopWrapperGraphBarCaptionColumns2: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionColumns3: PropTypes.string,
  resoolutionDesktopWrapperVisible8: PropTypes.bool,
  hasFrame: PropTypes.bool,
  resoolutionDesktopWrapperGraphBarCaptionColumns4: PropTypes.string,
  resoolutionDesktopWrapperGraphBarCaptionColumns5: PropTypes.string,
};

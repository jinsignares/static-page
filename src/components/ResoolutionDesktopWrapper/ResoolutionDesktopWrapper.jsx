/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { GraphBarCaption } from "../GraphBarCaption";
import "./style.css";

export const ResoolutionDesktopWrapper = ({
  resoolution,
  className,
  graphBarCaptionColumnsResolutionClassName,
  graphBarCaptionRectangleClassName,
  graphBarCaptionText = "39.2%",
  graphBarCaptionColumnsResolutionClassNameOverride,
  graphBarCaptionRectangleClassNameOverride,
  graphBarCaptionText1 = "Transportation",
  graphBarCaptionSectionTitleClassName,
  graphBarCaptionText2 = "39.2%",
  graphBarCaptionFrameWrapperClassName,
  graphBarCaptionDivClassName,
  graphBarCaptionText3 = "Transportation",
  graphBarCaptionText4 = "39.2%",
  graphBarCaptionFrameWrapperClassNameOverride,
  graphBarCaptionDivClassNameOverride,
  graphBarCaptionText5 = "Transportation",
  graphBarCaptionText6 = "39.2%",
  graphBarCaptionColumnsResolutionClassName1,
  graphBarCaptionRectangleClassName1,
  graphBarCaptionText7 = "Transportation",
  graphBarCaptionSectionTitleClassNameOverride,
  graphBarCaptionText8 = "39.2%",
  graphBarCaptionColumnsResolutionClassName2,
  graphBarCaptionRectangleClassName2,
  graphBarCaptionText9 = "Transportation",
  graphBarCaptionText10 = "39.2%",
  graphBarCaptionColumnsResolutionClassName3,
  graphBarCaptionRectangleClassName3,
  graphBarCaptionText11 = "Transportation",
  graphBarCaptionText12 = "39.2%",
  graphBarCaptionColumnsResolutionClassName4,
  graphBarCaptionText13 = "Transportation",
  graphBarCaptionText14 = "39.2%",
  visible = true,
  visible1 = true,
  graphBarCaptionText15 = "Transportation",
  graphBarCaptionSectionTitleClassName1,
  graphBarCaptionColumnsResolutionClassName5,
  graphBarCaptionRectangleClassName4,
  graphBarCaptionText16 = "Transportation",
  graphBarCaptionText17 = "39.2%",
  graphBarCaptionSectionTitleClassName2,
  graphBarCaptionColumnsResolutionClassName6,
}) => {
  return (
    <div className={`resoolution-desktop-wrapper ${className}`}>
      <GraphBarCaption
        className={graphBarCaptionColumnsResolutionClassName}
        columns="two"
        rectangleClassName={graphBarCaptionRectangleClassName}
        resolution={resoolution === "mobile" ? "mobile" : "desktop"}
        text={graphBarCaptionText}
        text1={graphBarCaptionText15}
      />
      <GraphBarCaption
        className={graphBarCaptionColumnsResolutionClassNameOverride}
        columns="two"
        rectangleClassName={graphBarCaptionRectangleClassNameOverride}
        resolution={resoolution === "mobile" ? "mobile" : "desktop"}
        sectionTitleClassName={graphBarCaptionSectionTitleClassName}
        text={graphBarCaptionText2}
        text1={graphBarCaptionText1}
      />
      <GraphBarCaption
        className={graphBarCaptionFrameWrapperClassName}
        columns="two"
        rectangleClassName={graphBarCaptionDivClassName}
        resolution={resoolution === "mobile" ? "mobile" : "desktop"}
        text={graphBarCaptionText4}
        text1={graphBarCaptionText3}
      />
      <GraphBarCaption
        className={graphBarCaptionFrameWrapperClassNameOverride}
        columns="two"
        rectangleClassName={graphBarCaptionDivClassNameOverride}
        resolution={resoolution === "mobile" ? "mobile" : "desktop"}
        text={graphBarCaptionText6}
        text1={graphBarCaptionText5}
      />
      <GraphBarCaption
        className={graphBarCaptionColumnsResolutionClassName1}
        columns="two"
        rectangleClassName={graphBarCaptionRectangleClassName1}
        resolution={resoolution === "mobile" ? "mobile" : "desktop"}
        sectionTitleClassName={graphBarCaptionSectionTitleClassNameOverride}
        text={graphBarCaptionText8}
        text1={graphBarCaptionText7}
      />
      <GraphBarCaption
        className={graphBarCaptionColumnsResolutionClassName2}
        columns="two"
        rectangleClassName={graphBarCaptionRectangleClassName2}
        resolution={resoolution === "mobile" ? "mobile" : "desktop"}
        sectionTitleClassName={graphBarCaptionSectionTitleClassName2}
        text={graphBarCaptionText10}
        text1={graphBarCaptionText9}
      />
      <GraphBarCaption
        className={graphBarCaptionColumnsResolutionClassName3}
        columns="two"
        rectangleClassName={graphBarCaptionRectangleClassName3}
        resolution={resoolution === "mobile" ? "mobile" : "desktop"}
        sectionTitleClassName={graphBarCaptionSectionTitleClassName1}
        text={graphBarCaptionText12}
        text1={graphBarCaptionText11}
      />
      <GraphBarCaption
        className={graphBarCaptionColumnsResolutionClassName4}
        columns="two"
        resolution={resoolution === "mobile" ? "mobile" : "desktop"}
        text={graphBarCaptionText14}
        text1={graphBarCaptionText13}
      />
      {visible && (
        <GraphBarCaption
          className={graphBarCaptionColumnsResolutionClassName5}
          columns="two"
          rectangleClassName={graphBarCaptionRectangleClassName4}
          resolution={resoolution === "mobile" ? "mobile" : "desktop"}
          text={graphBarCaptionText17}
          text1={graphBarCaptionText16}
        />
      )}

      {visible1 && (
        <GraphBarCaption
          className={graphBarCaptionColumnsResolutionClassName6}
          columns="two"
          resolution={resoolution === "mobile" ? "mobile" : "desktop"}
          text="39.2%"
          text1="Transportation"
        />
      )}
    </div>
  );
};

ResoolutionDesktopWrapper.propTypes = {
  resoolution: PropTypes.oneOf(["desktop", "mobile"]),
  graphBarCaptionText: PropTypes.string,
  graphBarCaptionText1: PropTypes.string,
  graphBarCaptionText2: PropTypes.string,
  graphBarCaptionText3: PropTypes.string,
  graphBarCaptionText4: PropTypes.string,
  graphBarCaptionText5: PropTypes.string,
  graphBarCaptionText6: PropTypes.string,
  graphBarCaptionText7: PropTypes.string,
  graphBarCaptionText8: PropTypes.string,
  graphBarCaptionText9: PropTypes.string,
  graphBarCaptionText10: PropTypes.string,
  graphBarCaptionText11: PropTypes.string,
  graphBarCaptionText12: PropTypes.string,
  graphBarCaptionText13: PropTypes.string,
  graphBarCaptionText14: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  graphBarCaptionText15: PropTypes.string,
  graphBarCaptionText16: PropTypes.string,
  graphBarCaptionText17: PropTypes.string,
};

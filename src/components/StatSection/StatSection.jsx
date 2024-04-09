/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StatSet } from "../StatSet";
import "./style.css";

export const StatSection = ({
  resolution,
  quantity,
  aligment,
  title,
  className,
  hasSectionTitle = true,
  statSetStatTypeNumbersColorClassName,
  statSetStatText = "$381M",
  statSetStatText1 = "for Clean Cars For All Program and Clean School Bus Program",
  statSetStatText2 = "$381M",
  statSetStatTypeNumbersColorClassNameOverride,
  statSetStatText3 = "for Clean Cars For All Program and Clean School Bus Program",
  statSetStatType = "numbers",
  statSetStatColor = "white",
  statSetStatTypeQuoteColorClassName,
  statSetResolutionDesktopClassName,
  statSetStatColor1 = "white",
  statSetStatTypeQuoteColorClassNameOverride,
  statSetStatSectionTitleClassName,
  statSetStatSectionTitleClassNameOverride,
  statSetStatText4 = "$381M",
  statSetStatText5 = "for Clean Cars For All Program and Clean School Bus Program",
  statSetStatDivClassName,
  statSetStatText6 = "$381M",
  statSetStatText7 = "for Clean Cars For All Program and Clean School Bus Program",
  statSetStatType1 = "numbers",
  statSetStatColor2 = "white",
  statSetStatDivClassNameOverride,
  statSetResolutionDesktopClassNameOverride,
  statSetStatColor3 = "white",
  statSetStatText8 = "$381M",
  statSetStatColor4 = "white",
  statSetStatText9 = "for Clean Cars For All Program and Clean School Bus Program",
  statSetStatText10 = "for Clean Cars For All Program and Clean School Bus Program",
  statSetStatText11 = "for Clean Cars For All Program and Clean School Bus Program",
  statSetStatTypeNumbersColorClassName1,
  statSetStatTypeNumbersColorClassName2,
  statSetStatText12 = "$381M",
  statSetStatText13 = "$381M",
  statSetStatColor5 = "white",
  statSetStatSectionTitleClassName1,
  statSetStatSectionTitleClassName2,
  statSetStatText14,
  statSetStatText15 = "$381M",
  statSetStatText16 = "for Clean Cars For All Program and Clean School Bus Program",
}) => {
  return (
    <div className={`stat-section resolution-22-${resolution} title-${title} ${aligment} ${quantity} ${className}`}>
      {!title && (
        <StatSet
          className={statSetResolutionDesktopClassNameOverride}
          resolution={resolution === "mobile" ? "mobile" : "desktop"}
          statColor={statSetStatColor3}
          statColor1={statSetStatColor2}
          statColor2={statSetStatColor4}
          statColor3={statSetStatColor5}
          statDivClassName={statSetStatTypeNumbersColorClassName2}
          statDivClassNameOverride={statSetStatSectionTitleClassName2}
          statSectionTitleClassName={statSetStatSectionTitleClassName}
          statSectionTitleClassName1={statSetStatSectionTitleClassName1}
          statSectionTitleClassNameOverride={statSetStatSectionTitleClassNameOverride}
          statText={statSetStatText4}
          statText1={statSetStatText5}
          statText10={statSetStatText14}
          statText2={statSetStatText6}
          statText3={statSetStatText7}
          statText4={statSetStatText8}
          statText5={statSetStatText9}
          statText6={statSetStatText12}
          statText7={statSetStatText11}
          statText8={statSetStatText13}
          statText9={statSetStatText10}
          statType={statSetStatType1}
          statTypeNumbersColorClassName={statSetStatTypeQuoteColorClassNameOverride}
          statTypeNumbersColorClassNameOverride={statSetStatDivClassName}
          statTypeQuoteColorClassName={statSetStatDivClassNameOverride}
          statTypeQuoteColorClassNameOverride={statSetStatTypeNumbersColorClassName1}
          type={quantity === "two" ? "set-of-2" : "set-of-3"}
        />
      )}

      {title && (
        <>
          <>{hasSectionTitle && <div className="section-title-7">AT A GLANCE</div>}</>
          <StatSet
            className={statSetResolutionDesktopClassName}
            resolution={resolution === "mobile" ? "mobile" : "desktop"}
            statColor={statSetStatColor1}
            statColor1={statSetStatColor}
            statColor2="white"
            statText={statSetStatText}
            statText1={statSetStatText1}
            statText2={statSetStatText2}
            statText3={statSetStatText3}
            statText4={statSetStatText15}
            statText5={statSetStatText16}
            statType={statSetStatType}
            statTypeNumbersColorClassName={statSetStatTypeNumbersColorClassName}
            statTypeNumbersColorClassNameOverride={statSetStatTypeNumbersColorClassNameOverride}
            statTypeQuoteColorClassName={statSetStatTypeQuoteColorClassName}
            type="set-of-3"
          />
        </>
      )}
    </div>
  );
};

StatSection.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  quantity: PropTypes.oneOf(["two", "three"]),
  aligment: PropTypes.oneOf(["right", "centered"]),
  title: PropTypes.bool,
  hasSectionTitle: PropTypes.bool,
  statSetStatText: PropTypes.string,
  statSetStatText1: PropTypes.string,
  statSetStatText2: PropTypes.string,
  statSetStatText3: PropTypes.string,
  statSetStatType: PropTypes.string,
  statSetStatColor: PropTypes.string,
  statSetStatColor1: PropTypes.string,
  statSetStatText4: PropTypes.string,
  statSetStatText5: PropTypes.string,
  statSetStatText6: PropTypes.string,
  statSetStatText7: PropTypes.string,
  statSetStatType1: PropTypes.string,
  statSetStatColor2: PropTypes.string,
  statSetStatColor3: PropTypes.string,
  statSetStatText8: PropTypes.string,
  statSetStatColor4: PropTypes.string,
  statSetStatText9: PropTypes.string,
  statSetStatText10: PropTypes.string,
  statSetStatText11: PropTypes.string,
  statSetStatText12: PropTypes.string,
  statSetStatText13: PropTypes.string,
  statSetStatColor5: PropTypes.string,
  statSetStatText14: PropTypes.string,
  statSetStatText15: PropTypes.string,
  statSetStatText16: PropTypes.string,
};

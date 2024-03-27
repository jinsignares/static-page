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
  statSetStatText = "$381M",
  statSetStatText1 = "for Clean Cars For All Program and Clean School Bus Program",
  statSetStatColor = "white",
  statSetStatType = "numbers",
  statSetStatText2 = "for Clean Cars For All Program and Clean School Bus Program",
  statSetStatText3 = "$381M",
  statSetStatColor1 = "white",
  statSetStatTypeNumbersColorClassName,
  statSetStatTypeNumbersColorClassNameOverride,
  statSetResolutionDesktopClassName,
  statSetStatTypeQuoteColorClassName,
  statSetStatText4 = "$381M",
  statSetStatText5 = "for Clean Cars For All Program and Clean School Bus Program",
  statSetStatColor2 = "white",
  statSetStatType1 = "numbers",
  statSetResolutionDesktopClassNameOverride,
  statSetStatText6 = "for Clean Cars For All Program and Clean School Bus Program",
  statSetStatTypeQuoteColorClassNameOverride,
  statSetStatDivClassName,
  statSetStatDivClassNameOverride,
  statSetStatText7 = "$381M",
  statSetStatColor3 = "white",
}) => {
  return (
    <div className={`stat-section resolution-14-${resolution} title-${title} ${aligment} ${className}`}>
      {title && (
        <>
          <>{hasSectionTitle && <div className="section-title-6">AT A GLANCE</div>}</>
        </>
      )}

      <StatSet
        className={!title ? statSetResolutionDesktopClassNameOverride : statSetResolutionDesktopClassName}
        resolution={resolution === "mobile" ? "mobile" : "desktop"}
        statColor={!title ? statSetStatColor3 : statSetStatColor1}
        statColor1={!title ? statSetStatColor2 : statSetStatColor}
        statText={!title ? statSetStatText7 : statSetStatText3}
        statText1={!title ? statSetStatText5 : statSetStatText1}
        statText2={!title ? statSetStatText4 : statSetStatText}
        statText3={!title ? statSetStatText6 : statSetStatText2}
        statType={!title ? statSetStatType1 : statSetStatType}
        statTypeNumbersColorClassName={!title ? statSetStatDivClassNameOverride : statSetStatTypeQuoteColorClassName}
        statTypeNumbersColorClassNameOverride={
          !title ? statSetStatTypeQuoteColorClassNameOverride : statSetStatTypeNumbersColorClassNameOverride
        }
        statTypeQuoteColorClassName={!title ? statSetStatDivClassName : statSetStatTypeNumbersColorClassName}
        type={quantity === "two" ? "set-of-2" : "set-of-3"}
      />
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
  statSetStatColor: PropTypes.string,
  statSetStatType: PropTypes.string,
  statSetStatText2: PropTypes.string,
  statSetStatText3: PropTypes.string,
  statSetStatColor1: PropTypes.string,
  statSetStatText4: PropTypes.string,
  statSetStatText5: PropTypes.string,
  statSetStatColor2: PropTypes.string,
  statSetStatType1: PropTypes.string,
  statSetStatText6: PropTypes.string,
  statSetStatText7: PropTypes.string,
  statSetStatColor3: PropTypes.string,
};

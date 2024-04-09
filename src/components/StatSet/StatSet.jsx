/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Stat } from "../Stat";
import "./style.css";

export const StatSet = ({
  resolution,
  type,
  className,
  statColor = "white",
  statTypeNumbersColorClassName,
  statText = "$381M",
  statText1 = "for Clean Cars For All Program and Clean School Bus Program",
  statTypeNumbersColorClassNameOverride,
  statText2 = "$381M",
  statText3 = "for Clean Cars For All Program and Clean School Bus Program",
  statColor1 = "white",
  statTypeQuoteColorClassName,
  statType = "numbers",
  statSectionTitleClassName,
  statSectionTitleClassNameOverride,
  statColor2 = "white",
  statText4 = "$381M",
  statText5 = "for Clean Cars For All Program and Clean School Bus Program",
  statTypeQuoteColorClassNameOverride,
  statText6 = "$381M",
  statText7 = "for Clean Cars For All Program and Clean School Bus Program",
  statColor3 = "white",
  statDivClassName,
  statText8 = "$381M",
  statText9 = "for Clean Cars For All Program and Clean School Bus Program",
  statDivClassNameOverride,
  statSectionTitleClassName1,
  statText10,
}) => {
  return (
    <div className={`stat-set resolution-21-${resolution} ${type} ${className}`}>
      {type === "set-of-3" && (
        <>
          <Stat
            className={statTypeNumbersColorClassName}
            color={statColor}
            resolution={resolution === "mobile" ? "mobile" : "desktop"}
            sectionTitleClassName={statDivClassNameOverride}
            text={statText}
            text1={statText1}
            type="numbers"
          />
          <Stat
            className={statTypeNumbersColorClassNameOverride}
            color={statColor2}
            resolution={resolution === "mobile" ? "mobile" : "desktop"}
            sectionTitleClassName={statSectionTitleClassName1}
            text={statText2}
            text1={statText3}
            type="numbers"
          />
          <Stat
            className={statTypeQuoteColorClassName}
            color={statColor1}
            resolution={resolution === "mobile" ? "mobile" : "desktop"}
            sectionTitleClassName={statSectionTitleClassName}
            sectionTitleClassNameOverride={statSectionTitleClassNameOverride}
            text={statText4}
            text1={statText5}
            text2={statText10}
            type={statType}
          />
        </>
      )}

      {type === "set-of-2" && (
        <>
          <Stat
            className={statTypeQuoteColorClassNameOverride}
            color="white"
            resolution={resolution === "desktop" ? "desktop" : "mobile"}
            text={statText6}
            text1={statText7}
            type="numbers"
          />
          <Stat
            className={statDivClassName}
            color={statColor3}
            resolution={resolution === "desktop" ? "desktop" : "mobile"}
            text={statText8}
            text1={statText9}
            type="numbers"
          />
        </>
      )}
    </div>
  );
};

StatSet.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  type: PropTypes.oneOf(["set-of-3", "set-of-2"]),
  statColor: PropTypes.string,
  statText: PropTypes.string,
  statText1: PropTypes.string,
  statText2: PropTypes.string,
  statText3: PropTypes.string,
  statColor1: PropTypes.string,
  statType: PropTypes.string,
  statColor2: PropTypes.string,
  statText4: PropTypes.string,
  statText5: PropTypes.string,
  statText6: PropTypes.string,
  statText7: PropTypes.string,
  statColor3: PropTypes.string,
  statText8: PropTypes.string,
  statText9: PropTypes.string,
  statText10: PropTypes.string,
};

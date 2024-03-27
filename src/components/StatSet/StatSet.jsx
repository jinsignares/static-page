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
  statText = "$381M",
  statText1 = "for Clean Cars For All Program and Clean School Bus Program",
  statText2 = "$381M",
  statText3 = "for Clean Cars For All Program and Clean School Bus Program",
  statColor1 = "white",
  statType = "numbers",
  statTypeNumbersColorClassName,
  statTypeNumbersColorClassNameOverride,
  statTypeQuoteColorClassName,
}) => {
  return (
    <div className={`stat-set resolution-13-${resolution} ${className}`}>
      {type === "set-of-3" && (
        <>
          <Stat
            className={statTypeNumbersColorClassName}
            color={statColor}
            resolution={resolution === "mobile" ? "mobile" : "desktop"}
            text={statText}
            text1={statText1}
            type="numbers"
          />
          <Stat
            className={statTypeNumbersColorClassNameOverride}
            color="white"
            resolution={resolution === "mobile" ? "mobile" : "desktop"}
            text={statText2}
            text1={statText3}
            type="numbers"
          />
          <Stat
            className={statTypeQuoteColorClassName}
            color={statColor1}
            resolution={resolution === "mobile" ? "mobile" : "desktop"}
            text="$381M"
            text1="for Clean Cars For All Program and Clean School Bus Program"
            type={statType}
          />
        </>
      )}

      {type === "set-of-2" && (
        <>
          <Stat
            color="white"
            resolution={resolution === "desktop" ? "desktop" : "mobile"}
            text="$381M"
            text1="for Clean Cars For All Program and Clean School Bus Program"
            type="numbers"
          />
          <Stat
            color="white"
            resolution={resolution === "desktop" ? "desktop" : "mobile"}
            text="$381M"
            text1="for Clean Cars For All Program and Clean School Bus Program"
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
};

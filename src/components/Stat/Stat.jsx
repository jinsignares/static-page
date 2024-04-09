/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Stat = ({
  type,
  color,
  resolution,
  className,
  text = "$381M",
  text1 = "for Clean Cars For All Program and Clean School Bus Program",
  sectionTitleClassName,
  sectionTitleClassNameOverride,
  text2 = "One of the most comprehensive air quality monitoring networks in the country.",
}) => {
  return (
    <div className={`stat ${color} type-${type} resolution-19-${resolution} ${className}`}>
      <div className={`section-title-5 ${sectionTitleClassName}`}>
        {type === "numbers" && <>{text}</>}

        {type === "quote" && <>“</>}
      </div>
      <div className={`section-title-6 ${sectionTitleClassNameOverride}`}>
        {type === "numbers" && <p className="text-wrapper-39">{text1}</p>}

        {type === "quote" && <p className="text-wrapper-39">{text2}</p>}
      </div>
    </div>
  );
};

Stat.propTypes = {
  type: PropTypes.oneOf(["numbers", "quote"]),
  color: PropTypes.oneOf(["white", "dark-gray", "black", "dark-blue", "gray", "blue", "green", "light-blue"]),
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

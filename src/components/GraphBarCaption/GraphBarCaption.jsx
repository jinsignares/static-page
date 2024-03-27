/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GraphBarCaption = ({
  columns,
  resolution,
  className,
  rectangleClassName,
  text = "39.2%",
  sectionTitleClassName,
  text1 = "Transportation",
}) => {
  return (
    <div className={`graph-bar-caption resolution-40-${resolution} ${className}`}>
      <div className={`frame-20 resolution-41-${resolution} columns-${columns}`}>
        <div className={`rectangle-9 ${rectangleClassName}`} />
        <div className="frame-21">
          {columns === "two" && (
            <>
              <div className={`section-title-11 ${sectionTitleClassName}`}>{text1}</div>
              <div className="section-title-wrapper">
                <div className="section-title-12">
                  {resolution === "desktop" && <>{text}</>}

                  {resolution === "mobile" && <div className="section-title-13">{text}</div>}
                </div>
              </div>
            </>
          )}

          {columns === "one" && <div className={`section-title-14 ${sectionTitleClassName}`}>{text1}</div>}
        </div>
      </div>
    </div>
  );
};

GraphBarCaption.propTypes = {
  columns: PropTypes.oneOf(["two", "one"]),
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};

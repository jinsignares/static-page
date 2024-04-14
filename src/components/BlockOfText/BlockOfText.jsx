import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BlockOfText = ({
  subtitle,
  className,
  textClassName,
  sectionTitleClassName,
  text = "CLIMATE ACTION",
  subtitleClassName,
  text1 = "2023 ANNUAL REPORT",
  text2 = "HOW DO WE REDUCE EMISSIONS AND PROTECT COMMUNITIES AND THE CLIMATE?",
}) => {
  return (
    <div className={`block-of-text ${subtitle} ${className}`}>
      <div className={`${textClassName}`}>
        <div className={`section-title ${sectionTitleClassName}`}>{text}</div>
        {["two-lines", "yes"].includes(subtitle) && (
          <div
            className={`subtitle-wrapper ${subtitleClassName}`}
          >
            {subtitle === "yes" && <>{text1}</>}

            {subtitle === "two-lines" && (
              <p className="text-wrapper-39">{text2}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

BlockOfText.propTypes = {
  subtitle: PropTypes.oneOf(["two-lines", "yes", "no"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

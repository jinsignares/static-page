/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Quote = ({
  type,
  className,
  sectionTitleClassName,
  text = "The savings, jobs and other benefits provided by this legislation will reach communities across California.",
}) => {
  return (
    <div className={`quote type-4-${type} ${className}`}>
      <div className="section-title-67">“</div>
      <div className={`section-title-68 ${sectionTitleClassName}`}>
        {type === "default" && <p className="text-wrapper-39">{text}</p>}

        {type === "rounded" && (
          <p className="text-wrapper-39">
            One of the most comprehensive air quality monitoring networks in the country.
          </p>
        )}
      </div>
    </div>
  );
};

Quote.propTypes = {
  type: PropTypes.oneOf(["rounded", "default"]),
  text: PropTypes.string,
};

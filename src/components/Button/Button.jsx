/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ icon, type, size, color, className, downloadPdfClassName, text = "DOWNLOAD PDF" }) => {
  return (
    <button className={`button ${type} size-${size} color-1-${color} ${className}`}>
      <div className={`download-pdf ${downloadPdfClassName}`}>{text}</div>
      {icon && (
        <img className="group-16" alt="Group" src={type === "outlined" ? "/img/group.png" : "/img/group-2.png"} />
      )}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.bool,
  type: PropTypes.oneOf(["outlined", "filled"]),
  size: PropTypes.oneOf(["large", "medium"]),
  color: PropTypes.oneOf(["brick", "blue", "white"]),
  text: PropTypes.string,
};

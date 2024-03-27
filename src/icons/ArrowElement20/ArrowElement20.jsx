/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowElement20 = ({ color = "#0A215B", className }) => {
  return (
    <svg
      className={`arrow-element-20 ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 68 48"
      width="68"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.5858 25.4142C9.80474 24.6332 9.80474 23.3668 10.5858 22.5858L23.3137 9.85786C24.0948 9.07682 25.3611 9.07682 26.1421 9.85786C26.9232 10.6389 26.9232 11.9052 26.1421 12.6863L14.8284 24L26.1421 35.3137C26.9232 36.0948 26.9232 37.3611 26.1421 38.1421C25.3611 38.9232 24.0948 38.9232 23.3137 38.1421L10.5858 25.4142ZM56 26H12V22H56V26Z"
        fill={color}
      />
    </svg>
  );
};

ArrowElement20.propTypes = {
  color: PropTypes.string,
};

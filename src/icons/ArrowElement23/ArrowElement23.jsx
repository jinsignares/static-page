/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowElement23 = ({ color = "white", className }) => {
  return (
    <svg
      className={`arrow-element-23 ${className}`}
      fill="none"
      height="49"
      viewBox="0 0 68 49"
      width="68"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M57.4142 25.7619C58.1953 24.9808 58.1953 23.7145 57.4142 22.9334L44.6863 10.2055C43.9052 9.42447 42.6389 9.42447 41.8579 10.2055C41.0768 10.9866 41.0768 12.2529 41.8579 13.0339L53.1716 24.3477L41.8579 35.6614C41.0768 36.4424 41.0768 37.7087 41.8579 38.4898C42.6389 39.2708 43.9052 39.2708 44.6863 38.4898L57.4142 25.7619ZM12 26.3477H56V22.3477H12V26.3477Z"
        fill={color}
      />
    </svg>
  );
};

ArrowElement23.propTypes = {
  color: PropTypes.string,
};

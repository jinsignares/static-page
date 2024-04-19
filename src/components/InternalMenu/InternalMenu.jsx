import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const InternalMenu = ({ className }) => {
  return (
    <div className={`internal-menu ${className}`}>
      <button type="button" className="menu-arrow-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="menu-arrow-svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button className="menu-viewer">
        <div className="grid-group">
          {Array(9)
            .fill()
            .map((_, index) => (
              <div key={index} className="square-block" />
            ))}
        </div>
      </button>
      <button type="button" className="menu-arrow-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="menu-arrow-svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

InternalMenu.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  arrowElementTypeBack: PropTypes.string,
  arrowElementTypeForward: PropTypes.string,
};

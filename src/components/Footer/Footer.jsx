/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Footer = ({ resolution, className, sectionTitleClassName, BAAQMDLogoClassName }) => {
  return (
    <div className={`footer resolution-119-${resolution} ${className}`}>
      <p className="section-title-65">
        375 Beale Street, Suite 600
        <br />
        San Francisco, CA 94105
      </p>
      <div className={`section-title-66 ${sectionTitleClassName}`}>
        {["desktop-1025", "desktop"].includes(resolution) && (
          <p className="text-wrapper-39">
            (415) 749-5000 | 1-800-HELP-AIR | 877-4N0-BURN
            <br />
            Accessibility • Terms of Use • Privacy Policy
          </p>
        )}

        {["mobile", "tablet"].includes(resolution) && (
          <p className="text-wrapper-39">
            (415) 749-5000
            <br />
            1-800-HELP-AIR
            <br />
            877-4N0-BURN
            <br />
            <br />
            Accessibility
            <br />
            Terms of Use
            <br />
            Privacy Policy
          </p>
        )}
      </div>
      <img
        className={`BAAQMD-logo-2 ${BAAQMDLogoClassName}`}
        alt="Baaqmd logo"
        src="/img/baaqmd-logo-fullcolor-black-2.png"
      />
    </div>
  );
};

Footer.propTypes = {
  resolution: PropTypes.oneOf(["tablet", "desktop-1025", "desktop", "mobile"]),
};

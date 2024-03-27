/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

export const Header = ({ resolution, className }) => {
  return (
    <div className={`header ${resolution} ${className}`}>
      <img className="BAAQMD-logo" alt="Baaqmd logo" src="/img/baaqmd-logo-fullcolor-black-2.png" />
      <div className="frame">
        {resolution === "desktop-1920" && (
          <>
            <div className="text-wrapper">INTRODUCTION</div>
            <div className="text-wrapper">AIR QUALITY</div>
            <div className="text-wrapper">COMMUNITY</div>
            <div className="text-wrapper">REDUCE</div>
            <div className="text-wrapper">PROTECT</div>
            <div className="text-wrapper">ABOUT US</div>
            <Button className="button-instance" color="brick" icon={false} size="large" type="filled" />
          </>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  resolution: PropTypes.oneOf(["tablet", "desktop-1920", "mobile"]),
};

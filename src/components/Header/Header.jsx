/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./style.css";

export const Header = ({ resolution, className }) => {
  return (
    <div className={`header ${resolution} ${className}`}>
      <Link className="air-quality" to={'/'}>
        <img className="BAAQMD-logo" alt="Baaqmd logo" src="/img/baaqmd-logo-fullcolor-black-2.png" />
      </Link>
      <div className="frame">
        {["desktop-1025", "desktop-1920"].includes(resolution) && (
          <>
            <Link className="air-quality" to={'/introduction'}>
              INTRODUCTION
            </Link>
            <Link className="air-quality" to={"/air-quality"}>
              AIR QUALITY
            </Link>
            <Link className="air-quality" to={'/community'}>
              COMMUNITY
            </Link>
            <Link className="air-quality" to={'/reduce'}>
              REDUCE
            </Link>
            <Link className="air-quality" to={'/protect'}>
              PROTECT
            </Link>
            <Link className="air-quality" to={'/about-us'}>
              ABOUT US
            </Link>
            <Button
              className={`${resolution === "desktop-1025" ? "class" : "class-2"}`}
              color="brick"
              icon={false}
              size="large"
              text="DOWNLOAD PDF"
              type="filled"
            />
          </>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  resolution: PropTypes.oneOf(["tablet", "desktop-1920", "desktop-1025", "mobile"]),
  to: PropTypes.string,
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SectionMap = ({ resolution, className, map = "/img/map-1.svg", img = "/img/map.svg" }) => {
  return (
    <div className={`section-map resolution-10-${resolution} ${className}`}>
      {resolution === "desktop" && (
        <div className="map-with-label">
          <div className="frame-5">
            <div className="div-wrapper">
              <div className="frame-6">
                <div className="rectangle" />
                <div className="section-title-2">AIR MONITORING SITES</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="frame-6">
                <div className="rectangle-2" />
                <div className="section-title-2">METEOROLOGICAL SITES</div>
              </div>
            </div>
          </div>
          <img className="map" alt="Map" src={img} />
        </div>
      )}

      {resolution === "mobile" && (
        <>
          <div className="map-with-label-2">
            <div className="frame-7">
              <div className="div-wrapper">
                <div className="frame-8">
                  <div className="rectangle-3" />
                  <div className="section-title-3">AIR MONITORING SITES</div>
                </div>
              </div>
              <div className="frame-9">
                <div className="frame-8">
                  <div className="rectangle-4" />
                  <div className="section-title-3">METEOROLOGICAL SITES</div>
                </div>
              </div>
            </div>
          </div>
          <img className="img" alt="Map" src={map} />
        </>
      )}
    </div>
  );
};

SectionMap.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  map: PropTypes.string,
  img: PropTypes.string,
};

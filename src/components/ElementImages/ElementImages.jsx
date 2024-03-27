/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowsCarrousel } from "../ArrowsCarrousel";
import "./style.css";

export const ElementImages = ({
  carrousel,
  resolution,
  className,
  rectangle = "/img/rectangle-255-3.png",
  img = "/img/rectangle-256.png",
  frameClassName,
  rectangleClassName,
  arrowsCarrouselArrowsCarrouselClassName,
}) => {
  return (
    <div className={`element-images resolution-31-${resolution} carrousel-${carrousel} ${className}`}>
      {carrousel && (
        <>
          <div className={`frame-13 ${frameClassName}`}>
            <img className="rectangle-5" alt="Rectangle" src={rectangle} />
            <img className={`rectangle-6 ${rectangleClassName}`} alt="Rectangle" src={img} />
          </div>
          <ArrowsCarrousel className={arrowsCarrouselArrowsCarrouselClassName} />
        </>
      )}

      {!carrousel && (
        <div className="frame-14">
          <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-255-3.png" />
          <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-256.png" />
        </div>
      )}
    </div>
  );
};

ElementImages.propTypes = {
  carrousel: PropTypes.bool,
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  rectangle: PropTypes.string,
  img: PropTypes.string,
};

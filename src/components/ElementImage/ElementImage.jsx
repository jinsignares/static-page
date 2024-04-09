/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementImage = ({
  resolution,
  className,
  rectangle = "/img/rectangle-255-1.png",
  rectangleClassName,
  img = "/img/rectangle-255.png",
}) => {
  return (
    <div className={`element-image resolution-45-${resolution} ${className}`}>
      <img
        className={`rectangle-8 ${rectangleClassName}`}
        alt="Rectangle"
        src={resolution === "mobile" ? rectangle : img}
      />
    </div>
  );
};

ElementImage.propTypes = {
  resolution: PropTypes.oneOf(["destop", "mobile"]),
  rectangle: PropTypes.string,
  img: PropTypes.string,
};

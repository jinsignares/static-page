/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Arrows } from "../Arrows";
import "./style.css";

export const ArrowsCarrousel = ({
  className,
  arrowsArrowElementTypeBack = "/img/type-back.png",
  arrowsArrowElementTypeForward = "/img/type-forward.png",
}) => {
  return (
    <div className={`arrows-carrousel ${className}`}>
      <Arrows
        arrowElementTypeBack={arrowsArrowElementTypeBack}
        arrowElementTypeForward={arrowsArrowElementTypeForward}
        className="arrows-instance"
      />
    </div>
  );
};

ArrowsCarrousel.propTypes = {
  arrowsArrowElementTypeBack: PropTypes.string,
  arrowsArrowElementTypeForward: PropTypes.string,
};

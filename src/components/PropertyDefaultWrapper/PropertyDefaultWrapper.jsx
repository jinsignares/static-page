/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HightlightBlurb } from "../HightlightBlurb";
import "./style.css";

export const PropertyDefaultWrapper = ({
  property1,
  className,
  hightlightBlurbImageSquareClassName,
  hightlightBlurbJamesCarySmithClassName,
  hightlightBlurbFrameClassName,
  hightlightBlurbTopicsClassName,
  hightlightBlurbTypeDefaultImageClassName,
  hightlightBlurbImageSquare = "/img/image-square-3.png",
}) => {
  return (
    <div className={`property-default-wrapper ${className}`}>
      <HightlightBlurb
        className={hightlightBlurbTypeDefaultImageClassName}
        detail="image"
        frameClassName={hightlightBlurbFrameClassName}
        image="left"
        imageSquareClassName={hightlightBlurbImageSquareClassName}
        img={hightlightBlurbImageSquare}
        jamesCarySmithClassName={hightlightBlurbJamesCarySmithClassName}
        resolution="desktop"
        spanClassName={`${property1 === "variant-2" && "class-11"}`}
        spanClassName1={`${property1 === "variant-2" && "class-11"}`}
        theGrantProgramClassName={`${property1 === "variant-2" && "class-12"}`}
        topicsClassName={hightlightBlurbTopicsClassName}
        type="default"
      />
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  hightlightBlurbImageSquare: PropTypes.string,
};

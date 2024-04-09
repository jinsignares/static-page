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
  hightlightBlurbTopicsClassName,
  hightlightBlurbTypeDefaultImageClassName,
  hightlightBlurbJamesCarySmithClassName,
  hightlightBlurbImageSquareClassName,
  hightlightBlurbFrameClassName,
  hightlightBlurbText = "We launched a three-year community air monitoring project in partnership with Communities for a Better Environment (CBE) to characterize local-scale air quality impacts in East Oakland supported by a U.S. EPA American Rescue Plan Enhanced Air Quality Monitoring for Communities Grant. We will work with CBE to ",
  hightlightBlurbJamesCarySmithClassNameOverride,
  hightlightBlurbImage = "left",
  hightlightBlurbText1 = "design and implement air monitoring to assess the impacts of sources or areas of interest to the community.",
  hightlightBlurbText2 = "EAST OAKLAND COMMUNITY AIR MONITORING PARTNERSHIP",
  hightlightBlurbText3 = " Air quality data from local pollution sources in overburdened communities and the effectiveness of exposure reduction measures can help inform our programs.",
  hightlightBlurbImageSquare,
  hightlightBlurbTopicsClassNameOverride,
  hightlightBlurbImg = "/img/image-square-3.png",
}) => {
  return (
    <div className={`property-default-wrapper property-1-${property1} ${className}`}>
      <HightlightBlurb
        className={hightlightBlurbTypeDefaultImageClassName}
        detail="image"
        frameClassName={hightlightBlurbFrameClassName}
        image={hightlightBlurbImage}
        imageSquare3={hightlightBlurbImageSquare}
        imageSquareClassName={hightlightBlurbImageSquareClassName}
        img={hightlightBlurbImg}
        jamesCarySmithClassName={hightlightBlurbJamesCarySmithClassName}
        jamesCarySmithClassNameOverride={hightlightBlurbJamesCarySmithClassNameOverride}
        resolution="desktop"
        spanClassName={`${property1 === "variant-2" && "class-25"}`}
        spanClassName1={`${property1 === "variant-2" && "class-25"}`}
        text={hightlightBlurbText2}
        text1={hightlightBlurbText}
        text2={hightlightBlurbText1}
        text3={hightlightBlurbText3}
        theGrantProgramClassName={`${property1 === "variant-2" && "class-26"}`}
        topicsClassName={hightlightBlurbTopicsClassName}
        topicsClassNameOverride={hightlightBlurbTopicsClassNameOverride}
        type="default"
      />
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  hightlightBlurbText: PropTypes.string,
  hightlightBlurbImage: PropTypes.string,
  hightlightBlurbText1: PropTypes.string,
  hightlightBlurbText2: PropTypes.string,
  hightlightBlurbText3: PropTypes.string,
  hightlightBlurbImageSquare: PropTypes.string,
  hightlightBlurbImg: PropTypes.string,
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { OpeningText } from "../OpeningText";
import "./style.css";

export const OpeningSection = ({
  resolution,
  font,
  headline,
  className,
  openingTextText = " as part of statewide AB 617 implementation.",
  openingTextText1 = "We continued to work in collaboration with community members and other stakeholders to ",
  openingTextText2 = "develop and implement health-protective measures in highly impacted communities",
  openingTextText3 = "AB 617 COMMUNITY HEALTH PROTECTION PROGRAM",
  openingTextWeContinuedToWorkClassName,
  openingTextAbCommunityClassName,
  openingTextFrameClassName,
  openingTextResolutionDesktopClassName,
}) => {
  return (
    <div className={`opening-section resolution-9-${resolution} ${className}`}>
      {(font === "body-text" || (font === "opening" && resolution === "desktop")) && (
        <OpeningText
          ABCommunityClassName={openingTextAbCommunityClassName}
          className={openingTextResolutionDesktopClassName}
          frameClassName={openingTextFrameClassName}
          resolution={resolution === "mobile" ? "mobile" : "desktop"}
          spanClassName={`${resolution === "mobile" && "class"} ${
            resolution === "desktop" && font === "body-text" && "class-2"
          }`}
          spanClassName1={`${resolution === "mobile" && "class"} ${
            resolution === "desktop" && font === "body-text" && "class-2"
          }`}
          spanClassNameOverride={`${resolution === "mobile" && "class-3"} ${
            resolution === "desktop" && font === "body-text" && "class-4"
          }`}
          text={openingTextText3}
          text1={openingTextText1}
          text2={openingTextText2}
          text3={openingTextText}
          weContinuedToWorkClassName={openingTextWeContinuedToWorkClassName}
        />
      )}

      {resolution === "mobile" && font === "opening" && (
        <div className="frame-wrapper">
          <div className="frame-4">
            <p className="p">AB 617 COMMUNITY HEALTH PROTECTION PROGRAM</p>
            <p className="text-wrapper-3">
              We continued to work in collaboration with community members and other stakeholders to develop and
              implement health-protective measures in highly impacted communities as part of statewide AB 617
              implementation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

OpeningSection.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  font: PropTypes.oneOf(["body-text", "opening"]),
  headline: PropTypes.oneOf(["large", "medium"]),
  openingTextText: PropTypes.string,
  openingTextText1: PropTypes.string,
  openingTextText2: PropTypes.string,
  openingTextText3: PropTypes.string,
};

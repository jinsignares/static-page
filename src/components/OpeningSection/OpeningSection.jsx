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
  openingTextText = "AB 617 COMMUNITY HEALTH PROTECTION PROGRAM",
  openingTextResolutionDesktopClassName,
  openingTextText1 = "develop and implement health-protective measures in highly impacted communities",
  openingTextText2 = " as part of statewide AB 617 implementation.",
  openingTextText3 = "We continued to work in collaboration with community members and other stakeholders to ",
  openingTextSpanClassName,
  text = "AB 617 COMMUNITY HEALTH PROTECTION PROGRAM",
  text1 = "We continued to work in collaboration with community members and other stakeholders to develop and implement health-protective measures in highly impacted communities as part of statewide AB 617 implementation.",
}) => {
  return (
    <div className={`opening-section resolution-13-${resolution} ${font} ${headline} ${className}`}>
      {(font === "body-text" ||
        (font === "opening" && resolution === "desktop") ||
        (font === "opening" && resolution === "tablet")) && (
        <OpeningText
          ABCommunityClassName={`${resolution === "tablet" && "class-7"} ${headline === "medium" && "class-12"}`}
          className={openingTextResolutionDesktopClassName}
          frameClassName={`${resolution === "tablet" && "class-11"}`}
          resolution={resolution === "tablet" ? "tablet" : resolution === "mobile" ? "mobile" : "desktop"}
          spanClassName={`${resolution === "tablet" && font === "body-text" && "class-4"} ${
            resolution === "mobile" && "class-5"
          } ${resolution === "desktop" && font === "body-text" && "class-6"}`}
          spanClassName1={`${resolution === "tablet" && font === "body-text" && "class-4"} ${
            resolution === "mobile" && "class-5"
          } ${resolution === "desktop" && font === "body-text" && "class-6"}`}
          spanClassNameOverride={openingTextSpanClassName}
          text={openingTextText}
          text1={openingTextText3}
          text2={openingTextText1}
          text3={openingTextText2}
          weContinuedToWorkClassName={`${resolution === "tablet" && font === "opening" && "class-7"} ${
            resolution === "tablet" && font === "body-text" && "class-8"
          } ${resolution === "mobile" && "class-9"} ${resolution === "desktop" && font === "body-text" && "class-10"}`}
        />
      )}

      {resolution === "mobile" && font === "opening" && (
        <div className="frame-wrapper">
          <div className="frame-4">
            <p className="p">{text}</p>
            <p className="we-continued-to-work-2">{text1}</p>
          </div>
        </div>
      )}
    </div>
  );
};

OpeningSection.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  font: PropTypes.oneOf(["body-text", "opening"]),
  headline: PropTypes.oneOf(["large", "medium"]),
  openingTextText: PropTypes.string,
  openingTextText1: PropTypes.string,
  openingTextText2: PropTypes.string,
  openingTextText3: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};

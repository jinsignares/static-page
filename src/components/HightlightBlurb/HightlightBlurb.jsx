/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Stat } from "../Stat";
import { Topics } from "../Topics";
import "./style.css";

export const HightlightBlurb = ({
  type,
  image,
  detail,
  resolution,
  className,
  imageSquare = "/img/image-square-2-2x.png",
  theGrantProgramClassName,
  spanClassName,
  spanClassNameOverride,
  spanClassName1,
  imageSquareClassName,
  frameClassName,
  topicsClassName,
  jamesCarySmithClassName,
  img = "/img/image-square-3.png",
  topicsText = "While our federal proposal for wildfire response was not included in the final IRA package, we continue to advocate for programs that expand clean air center networks and home air filtration in our most vulnerable communities. To that end, we are continuing to support proposals from House and Senate members that we hope will be part of 2023 federal budget or legislation.",
  topicsResolutionDesktopClassName,
  topicsText1 = "WILDFIRE SMOKE RESPONSE",
  text = "EAST OAKLAND COMMUNITY AIR MONITORING PARTNERSHIP",
  text1 = "We launched a three-year community air monitoring project in partnership with Communities for a Better Environment (CBE) to characterize local-scale air quality impacts in East Oakland supported by a U.S. EPA American Rescue Plan Enhanced Air Quality Monitoring for Communities Grant. We will work with CBE to ",
  text2 = "design and implement air monitoring to assess the impacts of sources or areas of interest to the community.",
  text3 = " Air quality data from local pollution sources in overburdened communities and the effectiveness of exposure reduction measures can help inform our programs.",
  imageSquare1 = "/img/image-square-2-2x.png",
  imageSquare2 = "/img/image-square-6-2.png",
  topicsClassNameOverride,
  jamesCarySmithClassNameOverride,
  imageSquare3 = "/img/image-square-3.png",
}) => {
  return (
    <div
      className={`hightlight-blurb image-${image} resolution-28-${resolution} detail-${detail} ${type} ${className}`}
    >
      {["bottom", "right"].includes(image) && (
        <div className={`topics-wrapper ${imageSquareClassName}`}>
          {type === "default" && (
            <div className={`topics-2 ${topicsClassNameOverride}`}>
              <div className="frame-12">
                <p className={`james-cary-smith-3 ${jamesCarySmithClassNameOverride}`}>{text}</p>
                <p className="the-grant-program-2">
                  <span className="text-wrapper-39">{text1}</span>
                  <span className="text-wrapper-39">{text2}</span>
                  <span className="text-wrapper-39">{text3}</span>
                </p>
              </div>
            </div>
          )}

          {type === "carrousel" && (
            <Topics
              button={false}
              className="topics-instance"
              divClassNameOverride="instance-node"
              jamesCarySmithClassNameOverride="instance-node"
              resolution="desktop"
              text="WILDFIRE SMOKE RESPONSE"
              text1="While our federal proposal for wildfire response was not included in the final IRA package, we continue to advocate for programs that expand clean air center networks and home air filtration in our most vulnerable communities. To that end, we are continuing to support proposals from House and Senate members that we hope will be part of 2023 federal budget or legislation."
            />
          )}
        </div>
      )}

      {detail === "image" && (
        <img
          className={`image-square ${
            ["bottom", "right"].includes(image)
              ? frameClassName
              : ["left", "top"].includes(image)
              ? imageSquareClassName
              : undefined
          }`}
          alt="Image square"
          src={
            image === "bottom"
              ? imageSquare1
              : image === "right"
              ? imageSquare3
              : image === "left"
              ? img
              : resolution === "mobile" && image === "top"
              ? imageSquare
              : resolution === "tablet"
              ? imageSquare2
              : undefined
          }
        />
      )}

      {detail === "stat" && (
        <Stat
          className={`${resolution === "mobile" && "class-13"} ${resolution === "tablet" && "class-14"} ${
            image === "right" && "class-15"
          } ${image === "left" && "class-16"}`}
          color="white"
          resolution={["bottom", "top"].includes(image) ? "mobile" : resolution === "desktop" ? "desktop" : undefined}
          text={["bottom", "top"].includes(image) ? "$381M" : resolution === "desktop" ? "$8M" : undefined}
          text1={
            ["bottom", "top"].includes(image)
              ? "for Clean Cars For All Program and Clean School Bus Program"
              : resolution === "desktop"
              ? "We awarded nearly $8 million to projects that will repower two tugboats, five rubber-tired gantry cranes and will replace one locomotive"
              : undefined
          }
          type="numbers"
        />
      )}

      {["left", "top"].includes(image) && (
        <div className={`frame-13 ${frameClassName}`}>
          {type === "default" && (
            <div className={`topics-3 ${topicsClassName}`}>
              <div className="frame-12">
                <p className={`james-cary-smith-4 ${jamesCarySmithClassName}`}>{text}</p>
                <p className={`the-grant-program-3 ${theGrantProgramClassName}`}>
                  <span className={`text-wrapper-39 ${spanClassName}`}>{text1}</span>
                  <span className={`text-wrapper-39 ${spanClassNameOverride}`}>{text2}</span>
                  <span className={`text-wrapper-39 ${spanClassName1}`}>{text3}</span>
                </p>
              </div>
            </div>
          )}

          {type === "carrousel" && (
            <Topics
              button={false}
              className={topicsResolutionDesktopClassName}
              divClassNameOverride="instance-node"
              jamesCarySmithClassNameOverride="instance-node"
              headerText={topicsText1}
              textBody={topicsText}
            />
          )}
        </div>
      )}
    </div>
  );
};

HightlightBlurb.propTypes = {
  type: PropTypes.oneOf(["carrousel", "default"]),
  image: PropTypes.oneOf(["right", "bottom", "top", "left"]),
  detail: PropTypes.oneOf(["image", "stat"]),
  resolution: PropTypes.oneOf(["tablet", "desktop", "mobile"]),
  imageSquare: PropTypes.string,
  img: PropTypes.string,
  topicsText: PropTypes.string,
  topicsText1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  imageSquare1: PropTypes.string,
  imageSquare2: PropTypes.string,
  imageSquare3: PropTypes.string,
};

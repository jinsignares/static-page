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
  imageSquare = "/img/image-square-2.png",
  jamesCarySmithClassName,
  theGrantProgramClassName,
  spanClassName,
  spanClassNameOverride,
  spanClassName1,
  imageSquareClassName,
  frameClassName,
  topicsClassName,
  img = "/img/image-square-3.png",
}) => {
  return (
    <div className={`hightlight-blurb resolution-21-${resolution} ${className}`}>
      {["bottom", "right"].includes(image) && (
        <div className={`topics-wrapper image-${image} ${type} resolution-22-${resolution} ${imageSquareClassName}`}>
          {type === "default" && (
            <div className="topics-2">
              <div className="frame-11">
                <p className="james-cary-smith-3">EAST OAKLAND COMMUNITY AIR MONITORING PARTNERSHIP</p>
                <p className="the-grant-program-3">
                  <span className="text-wrapper-19">
                    We launched a three-year community air monitoring project in partnership with Communities for a
                    Better Environment (CBE) to characterize local-scale air quality impacts in East Oakland supported
                    by a U.S. EPA American Rescue Plan Enhanced Air Quality Monitoring for Communities Grant. We will
                    work with CBE to{" "}
                  </span>
                  <span className="text-wrapper-19">
                    design and implement air monitoring to assess the impacts of sources or areas of interest to the
                    community.
                  </span>
                  <span className="text-wrapper-19">
                    {" "}
                    Air quality data from local pollution sources in overburdened communities and the effectiveness of
                    exposure reduction measures can help inform our programs.
                  </span>
                </p>
              </div>
            </div>
          )}

          {type === "carrousel" && (
            <Topics
              button={false}
              className="topics-instance"
              divClassName="topics-3"
              headline="medium"
              jamesCarySmithClassName="topics-3"
              resolution="desktop"
              text="WILDFIRE SMOKE RESPONSE"
              text1="While our federal proposal for wildfire response was not included in the final IRA package, we continue to advocate for programs that expand clean air center networks and home air filtration in our most vulnerable communities. To that end, we are continuing to support proposals from House and Senate members that we hope will be part of 2023 federal budget or legislation."
            />
          )}
        </div>
      )}

      {detail === "image" && (
        <img
          className={`image-square image-6-${image} resolution-29-${resolution} type-${type} ${
            ["bottom", "right"].includes(image)
              ? frameClassName
              : ["left", "top"].includes(image)
              ? imageSquareClassName
              : undefined
          }`}
          alt="Image square"
          src={
            image === "right"
              ? "/img/image-square-3.png"
              : image === "left"
              ? img
              : image === "top"
              ? imageSquare
              : "/img/image-square-2.png"
          }
        />
      )}

      {detail === "stat" && (
        <Stat
          className={`${resolution === "mobile" && "class-5"} ${image === "right" && "class-6"} ${
            image === "left" && "class-7"
          }`}
          color="white"
          resolution={resolution === "desktop" ? "desktop" : "mobile"}
          text={resolution === "desktop" ? "$8M" : "$381M"}
          text1={
            resolution === "desktop"
              ? "We awarded nearly $8 million to projects that will repower two tugboats, five rubber-tired gantry cranes and will replace one locomotive"
              : "for Clean Cars For All Program and Clean School Bus Program"
          }
          type="numbers"
        />
      )}

      {["left", "top"].includes(image) && (
        <div className={`frame-12 image-7-${image} type-0-${type} ${frameClassName}`}>
          {type === "default" && (
            <div className={`topics-4 image-8-${image} resolution-30-${resolution} ${topicsClassName}`}>
              <div className="frame-11">
                <p className={`james-cary-smith-4 ${jamesCarySmithClassName}`}>
                  EAST OAKLAND COMMUNITY AIR MONITORING PARTNERSHIP
                </p>
                <p className={`the-grant-program-4 ${theGrantProgramClassName}`}>
                  <span className={`text-wrapper-19 ${spanClassName}`}>
                    We launched a three-year community air monitoring project in partnership with Communities for a
                    Better Environment (CBE) to characterize local-scale air quality impacts in East Oakland supported
                    by a U.S. EPA American Rescue Plan Enhanced Air Quality Monitoring for Communities Grant. We will
                    work with CBE to{" "}
                  </span>
                  <span className={`text-wrapper-19 ${spanClassNameOverride}`}>
                    design and implement air monitoring to assess the impacts of sources or areas of interest to the
                    community.
                  </span>
                  <span className={`text-wrapper-19 ${spanClassName1}`}>
                    {" "}
                    Air quality data from local pollution sources in overburdened communities and the effectiveness of
                    exposure reduction measures can help inform our programs.
                  </span>
                </p>
              </div>
            </div>
          )}

          {type === "carrousel" && (
            <Topics
              button={false}
              className="topics-instance"
              divClassName="topics-3"
              headline="medium"
              jamesCarySmithClassName="topics-3"
              resolution="desktop"
              text="WILDFIRE SMOKE RESPONSE"
              text1="While our federal proposal for wildfire response was not included in the final IRA package, we continue to advocate for programs that expand clean air center networks and home air filtration in our most vulnerable communities. To that end, we are continuing to support proposals from House and Senate members that we hope will be part of 2023 federal budget or legislation."
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
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  imageSquare: PropTypes.string,
  img: PropTypes.string,
};

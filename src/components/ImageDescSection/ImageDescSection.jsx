import React from "react";
import { InfoCard } from "../InfoCard/InfoCard";
import "./styles.css";

export const ImageDescSection = ({
  className = "",
  bgColor = "--white",
  textcolor = "--dark-blue",
  descTitle = "Hello",
  descBody = "Lorem Ipsum",
  imageSrc = "image-square-3-3.png",
  rightAligned = true,
  textSide = false,
  textTitle = "",
  textBody = "",
  textSideClassName = "",
}) => {
  return (
    <div className={`desc-wrapper ${className}`}>
      <div
        className={`desc-inner ${
          rightAligned ? "img-default" : "img-left"
        }`}
        style={{
          color: `var(${textcolor})`,
          backgroundColor: `var(${bgColor})`,
        }}
      >
        <div className="desc-body-wrapper">
          <h2 className="desc-title">{descTitle}</h2>
          <p className="desc-body">{descBody}</p>
        </div>
        {textSide ? (
          <div className="text-side-wrapper">
            <InfoCard
              cardTitle={textTitle}
              cardBody={textBody}
              className={`${textSideClassName} ${
                rightAligned ? "radius-right" : "radius-left"
              }`}
            />
          </div>
        ) : (
          <div className="desc-img-wrapper">
            <div
              className={`desc-img ${
                rightAligned ? "radius-right" : "radius-left"
              }`}
              style={{ backgroundImage: `url(/img/${imageSrc})` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

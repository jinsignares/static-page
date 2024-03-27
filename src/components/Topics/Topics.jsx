/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

export const Topics = ({
  resolution,
  headline,
  button,
  className,
  jamesCarySmithClassName,
  text = "JAMES CARY SMITH COMMUNITY GRANT PROGRAM",
  divClassName,
  text1 = "The grant program funded 33 nonprofits to engage community members in decisions that impact their air quality and health, focusing on neighborhoods most impacted by air pollution. Twenty-two eligible awardees continued on to a second year of capacity-building projects, including bilingual environmental justice academies and interactive youth advocacy campaigns.",
  hasJamesCarySmith = true,
}) => {
  return (
    <div className={`topics resolution-16-${resolution} button-${button} ${className}`}>
      <div className="frame-10">
        {button && (
          <>
            <p className="james-cary-smith">{text}</p>
            <p className="the-grant-program">{text1}</p>
          </>
        )}

        {!button && (
          <>
            <>
              {hasJamesCarySmith && (
                <p className={`james-cary-smith-2 resolution-19-${resolution} ${headline} ${jamesCarySmithClassName}`}>
                  {text}
                </p>
              )}
            </>
            <p className={`the-grant-program-2 ${divClassName}`}>{text1}</p>
          </>
        )}
      </div>
      {button && (
        <Button
          className="instance-node"
          color="white"
          downloadPdfClassName="button-2"
          icon
          size="large"
          text="BEGIN THE REPORT"
          type="outlined"
        />
      )}
    </div>
  );
};

Topics.propTypes = {
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  headline: PropTypes.oneOf(["large", "medium"]),
  button: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  hasJamesCarySmith: PropTypes.bool,
};

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
  buttonGroupClassName,
  buttonIconYesTypeFilledClassName,
  buttonGroup = "/img/group.png",
  hasJamesCarySmith = true,
  divClassNameOverride,
  jamesCarySmithClassNameOverride,
}) => {
  return (
    <div className={`topics resolution-24-${resolution} button-${button} headline-${headline} ${className}`}>
      <div className="frame-11">
        {button && <p className={`james-cary-smith ${jamesCarySmithClassName}`}>{text}</p>}

        {!button && (
          <>
            <>
              {hasJamesCarySmith && <p className={`james-cary-smith-2 ${jamesCarySmithClassNameOverride}`}>{text}</p>}
            </>
          </>
        )}

        <p className={`the-grant-program ${button ? divClassName : !button ? divClassNameOverride : undefined}`}>
          {text1}
        </p>
      </div>
      {button && (
        <Button
          className={buttonIconYesTypeFilledClassName}
          color="white"
          downloadPdfClassName="button-instance"
          group={buttonGroup}
          groupClassName={buttonGroupClassName}
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
  resolution: PropTypes.oneOf(["tablet", "desktop", "mobile"]),
  headline: PropTypes.oneOf(["large", "medium"]),
  button: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  buttonGroup: PropTypes.string,
  hasJamesCarySmith: PropTypes.bool,
};

import React from "react";
import { Button } from "../Button";
import "./style.css";

export const Topics = ({
  className,
  headerTextClassName,
  headerText = "JAMES CARY SMITH COMMUNITY GRANT PROGRAM",
  textBodyClassName,
  textBody = "The grant program funded 33 nonprofits to engage community members in decisions that impact their air quality and health, focusing on neighborhoods most impacted by air pollution. Twenty-two eligible awardees continued on to a second year of capacity-building projects, including bilingual environmental justice academies and interactive youth advocacy campaigns.",
  button,
  buttonGroup = "/img/group.png",
  buttonGroupClassName,
  buttonIconYesTypeFilledClassName,
}) => {
  return (
    <div className={`topics ${className}`}>
      <div className="text-content-wrapper">
        {headerText && (
          <p className={`header-text ${headerTextClassName}`}>{headerText}</p>
        )}

        {textBody && (
          <p
            className={`text-body ${textBodyClassName}`}
          >
            {textBody}
          </p>
        )}
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
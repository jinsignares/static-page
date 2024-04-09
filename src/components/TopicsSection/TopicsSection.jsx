/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Topics } from "../Topics";
import "./style.css";

export const TopicsSection = ({
  resolution,
  title,
  alignment,
  headline,
  className,
  topicsClassName,
  topicsText = "The grant program funded 33 nonprofits to engage community members in decisions that impact their air quality and health, focusing on neighborhoods most impacted by air pollution. Twenty-two eligible awardees continued on to a second year of capacity-building projects, including bilingual environmental justice academies and interactive youth advocacy campaigns.",
  topicsText1 = "JAMES CARY SMITH COMMUNITY GRANT PROGRAM",
  text = "BUILDING APPLIANCE RULE AMENDMENTS",
  text1 = "Amendments to Regulation 9, Rules 4 and 6, were adopted to eliminate emissions of nitrogen oxides, or NOx, from ",
  text2 = "residential and commercial natural gas furnaces and water heaters in the Bay Area by requiring new appliances to be zero-NOx.",
  text3 = " Collectively, the 1.8 million water heaters and furnaces are one of the largest NOx-emitting stationary sources of air pollution in the region. The rule amendments would apply only to new appliances sold in the Bay Area and will improve overall regional air quality from the outdoor venting of these appliances, lower exposure to particulate matter — particularly in communities of color — and eliminate up to $890 million per year in health impacts due to air pollution exposure.<br/><br/>We established a multi-stakeholder Implementation Working Group to track and assess market readiness, technology accessibility, and identify barriers and solutions to an equitable transition. The diverse stakeholders include utility and energy service providers, technology manufacturers, environmental justice and community-based organizations, state agencies, local and regional governments, incentive program administrators, labor unions, contractors, and others.",
}) => {
  return (
    <div
      className={`topics-section resolution-40-${resolution} ${alignment} headline-1-${headline} title-0-${title} ${className}`}
    >
      {((alignment === "left" && headline === "large") ||
        (headline === "large" && resolution === "tablet") ||
        (headline === "medium" && title) ||
        (resolution === "mobile" && !title) ||
        (resolution === "tablet" && !title)) && (
        <Topics
          button={false}
          className={`${alignment === "left" ? "class-22" : "class-23"}`}
          divClassNameOverride={`${resolution === "mobile" && title && "class-19"} ${
            resolution === "mobile" && !title && "class-20"
          } ${resolution === "tablet" && !title && "class-21"}`}
          hasJamesCarySmith={!title ? false : undefined}
          headline={
            alignment === "center" || (alignment === "left" && headline === "medium")
              ? "medium"
              : resolution === "desktop" && headline === "large"
              ? "large"
              : undefined
          }
          jamesCarySmithClassNameOverride={`${resolution === "mobile" && title && "class-17"} ${
            resolution === "tablet" && headline === "large" && "class-18"
          }`}
          resolution={resolution === "tablet" ? "tablet" : "desktop"}
          text={topicsText1}
          text1={topicsText}
        />
      )}

      {resolution === "desktop" && (!title || alignment === "center") && (!title || headline === "large") && (
        <div className={`topics-4 ${topicsClassName}`}>
          <div className="frame-14">
            {title && (
              <>
                <div className="james-cary-smith-5">{text}</div>
                <p className="the-grant-program-4">
                  <span className="span">{text1}</span>
                  <span className="text-wrapper-2">{text2}</span>
                  <span className="span">{text3}</span>
                </p>
              </>
            )}

            {headline === "medium" && (
              <p className="the-grant-program-5">
                <span className="span">We awarded a loan guarantee to </span>
                <span className="text-wrapper-2">SPARKZ</span>
                <span className="span">
                  , whose energy storage solution reduces the cost of domestic lithium battery production by eliminating
                  the cobalt and nickel traditionally used in their manufacturing. The pioneering process developed by
                  SPARKZ not only lowers the cost of lithium-ion batteries, it removes environmental concerns around
                  mining cobalt, and reduces constrictions created by a foreign supply chain. Another loan guarantee was
                  accorded to{" "}
                </span>
                <span className="text-wrapper-2">EV Life</span>
                <span className="span">
                  , a startup whose goal is making electric vehicles (EVs) more accessible by spearheading solutions to
                  eliminate the &#39;green premium&#39; — the additional cost often associated with eco-friendly
                  options. Their efforts are focused on making electric driving an achievable dream for millions
                  deterred by the hefty initial cost of EVs. The most recent loan guarantee we awarded was to{" "}
                </span>
                <span className="text-wrapper-2">One Way Trigger</span>
                <span className="span">
                  , a company that specializes in pavement preservation techniques as a greener and more cost-effective
                  alternative to traditional road maintenance. This approach not only optimizes taxpayer dollars, but
                  also reduces greenhouse gas emissions, curtails energy demands, and ensures quicker application times.
                </span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

TopicsSection.propTypes = {
  resolution: PropTypes.oneOf(["tablet", "desktop", "mobile"]),
  title: PropTypes.bool,
  alignment: PropTypes.oneOf(["center", "left"]),
  headline: PropTypes.oneOf(["large", "medium"]),
  topicsText: PropTypes.string,
  topicsText1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};

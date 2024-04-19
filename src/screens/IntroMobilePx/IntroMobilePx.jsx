import React from "react";
import { InternalMenu } from "../../components/InternalMenu";
import { Quote } from "../../components/Quote";
import { BlockOfText } from "../../components/BlockOfText";

import "./style.css";
import "../../common/main.css"

export const IntroMobilePx = () => {

  return (
    <div className="introduction-container">
      <div className="intro-wrapper">
        <div className="image-intro" />
        <BlockOfText
          className="text-block-intro"
          subtitle="yes"
          text="INTRODUCTION"
          text1="MESSAGE FROM OUR NEW EXECUTIVE OFFICER"
        />
      </div>

      <div className="opening-section">
        <div className="opening-text">
          <div className="frame-inner">
            <div className="frame-title-large">EXECUTIVE SUMMARY 2023</div>
            <p className="text-body-large">
              <span>This year was a year of </span>
              <span className="text-wrapper-blue-bold">renewal and change</span>
              <span>
                {" "}
                at the Air District. I joined as Executive Officer in February
                and am joined by a new executive team. This new executive team
                will help steer our work towards{" "}
              </span>
              <span className="text-wrapper-blue-bold">
                increasing transparency, collaboration, and protection for
                communities with environmental justice concerns.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="topics-section-wrapper">
        <div className="frame-wrapper">
          <div className="frame-inner">
            <p className="frame-inner-wrapper">
              <span className="text-wrapper-bold">
                Our mission is to significantly reduce the disproportionate
                levels of air pollution that many communities face and provide
                clean air for all Bay Area residents.{" "}
              </span>
              <span className="text-wrapper-body">
                Through the AB 617 Community Health Protection Program and other
                community-focused programs, we will continue to implement
                stronger air quality protections for those most impacted. This
                year, Bayview Hunters Point was adopted as the fourth AB 617
                community, joining East Oakland, Richmond-North Richmond-San
                Pablo, and West Oakland, to receive resources for much-needed
                air pollution reductions.
                <br />
                <br />
                Our groundbreaking rule amendments for natural gas furnaces and
                water heaters will phase out the most polluting appliances in
                homes and businesses to protect Bay Area residents from the
                harmful air pollution they cause. Our innovative climate
                protection programs are funding and supporting cutting-edge
                technologies and projects to reduce greenhouse gas emissions.
                Through our extensive grant programs, communities and businesses
                can reduce their air quality impacts, upgrade to cleaner
                technologies, and educate and engage others on air quality and
                climate improvements.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="row-5">
        <img
          className="rectangle-27"
          alt="Rectangle"
          src="/img/rectangle-251.png"
        />
        <div
          className="rectangle-mobile-img"
        />
        <Quote
          className="quote-2"
          text="We will continue to implement stronger air quality protections for those most impacted."
          type="default"
          />
      </div>
      <div className="topics-section-wrapper">
        <div className="frame-wrapper">
          <div className="frame-inner">
            <p className="frame-inner-wrapper">
              <span className="text-wrapper-body">
                As part of our efforts to increase transparency around our
                enforcement work, we developed an online tool that allows the
                public to view air quality violations and penalties issued to
                local facilities. Our ongoing partnerships with environmental
                justice leaders from around the Bay Area, including through the AB
                617 Community Steering Committees and Community Advisory Council,
                are giving the most impacted communities a leading voice in
                developing strategies, plans and implementation of on-the-ground
                improvements in air quality.
                <br />
                <br />
                Our new Strategic Plan, which will be finalized in mid-2024, will
                guide our agency over the next five years. The plan will be
                grounded in equity and align with the environmental justice
                priorities developed by the Community Advisory Council,
                integrating staff expertise and real-life experiences of
                communities through shared leadership.
                <br />
                <br />
                After my first year at the Air District, I am confident that we
                can achieve our goals based on staff’s and community partners’
                dedication and determination to address longstanding air quality
                and environmental justice issues. I am confident that together we
                can strengthen our efforts to protect our air, our climate and our
                communities.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="signature-2" />
      <div className="topics-section-wrapper signature-wrapper">
        <div className="frame-wrapper">
          <div className="frame-inner">
            <p className="frame-inner-wrapper">
            <span className="text-wrapper-bold">
                Dr. Philip Fine
                <br />
              </span>
              <span className="text-wrapper-body">
                Executive Officer /Air Pollution Control Officer
              </span>
            </p>
          </div>
        </div>
      </div>
      <InternalMenu/>
    </div>
  );
};

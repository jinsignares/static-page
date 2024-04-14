import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { BlockOfText } from "../../components/BlockOfText";
import { Topics } from "../../components/Topics";
import "./style.css";

export const HomeMobilePx = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="home-wrapper">
      <div className="row">
        <BlockOfText
          className="block-of-text-8"
          subtitle="no"
          text="PROTECTING"
        />
        <div className="right-block-section">
          <div className="image-square-2" />
          <BlockOfText
            className="block-of-text-9"
            subtitle="no"
            text="OUR AIR,"
          />
        </div>
      </div>

      <div className="row-desktop">
        <div className="image-large" />
        <div className="frame-65">
          <div className="frame-66">
            <BlockOfText
              className="block-of-text-10"
              subtitle="no"
              text="CLIMATE"
            />
            <div className="image-square-3" />
          </div>
          <BlockOfText
            className="block-of-text-12"
            subtitle="yes"
            text="AND COMMUNITIES"
            text1="2023 ANNUAL REPORT"
          />
        </div>
      </div>

      <div className="row-mobile">
        <BlockOfText
          className="block-of-text-10"
          subtitle="no"
          text="CLIMATE"
        />
        <div className="image-large" />
        <BlockOfText
          className="block-of-text-12"
          subtitle="yes"
          text="AND COMMUNITIES"
          text1="2023 ANNUAL REPORT"
        />
      </div>

      <div className="topic-row">
        <div className="frame-67">
          <Topics
            className="topics-8"
            headerTextClassName="topics-7"
            headerText={
              screenWidth <= 1080 ? (
                <>
                  IMPROVING AIR QUALITY PROTECTIONS <br />
                  FOR ALL BAY AREA RESIDENTS.
                </>
              ) : (
                <>
                  CLIMATE CHANGE BRINGS <br />
                  NEW CHALLENGES FOR US ALL.
                </>
              )
            }
            textBodyClassName="topics-7"
            textBody={
              screenWidth <= 1080
                ? "In 2023, we continued to strengthen our partnerships with Bay Area communities most impacted by air pollution. Our innovative emission reduction and climate protection programs supported cutting-edge projects to reduce greenhouse gases."
                : "In 2022, we continued to partner with Bay Area communities most impacted by pollution and sought new paths forward to reduce climate-warming greenhouse gases. Our innovative grant programs enabled residents and businesses to lower emissions and overall carbon footprint through funds for cleaner engines and electric vehicles to programs that educate residents on how to reduce their impact."
            }
            button
            buttonGroup="/img/group-9.png"
            buttonGroupClassName="topics-6"
            buttonIconYesTypeFilledClassName="topics-10"
          />
        </div>
        <div className="image-expand" />
      </div>

      <div className="bottom-row">
        <div className="rectangle" />
        <img
          className="rectangle-24"
          alt="Rectangle"
          src="/img/rectangle-251.png"
        />
        <div className="rectangle" />
      </div>
    </div>
  );
};

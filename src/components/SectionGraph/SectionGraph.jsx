/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { GraphChartLine } from "../GraphChartLine";
import { GraphPie } from "../GraphPie";
import { SubTopicTitle } from "../SubTopicTitle";
import { SubtitleYesCaptionWrapper } from "../SubtitleYesCaptionWrapper";
import "./style.css";

export const SectionGraph = ({
  title,
  graphs,
  chartCaption,
  resolution,
  className,
  subTopicTitleText = "ANNUAL NUMBERS",
  subTopicTitleTypeDefaultClassName,
  subTopicTitleText1 = "ANNUAL NUMBERS",
  override = (
    <GraphPie
      chart="example"
      className="design-component-instance-node"
      frameClassName="graph-pie-5"
      groupClassName="graph-pie-instance"
      overlapGroupWrapperClassNameOverride="graph-pie-2"
      resolution="desktop"
      sectionTitleClassName="graph-pie-6"
      subtitle={false}
      title={false}
      vector="/img/vector-5.png"
      vector1="/img/vector-4.png"
      vectorClassName="graph-pie-3"
      vectorClassNameOverride="graph-pie-4"
    />
  ),
  subTopicTitleTypeDefaultClassNameOverride,
  frameClassName,
  subTopicTitleText2 = "ANNUAL NUMBERS",
  subTopicTitleType = "left",
  subTopicTitleResolution = "mobile",
  subTopicTitleSectionTitleClassName,
  hasFrame = true,
  subTopicTitleSectionTitleClassNameOverride,
}) => {
  return (
    <div
      className={`section-graph title-${title} resolution-49-${resolution} chart-caption-${chartCaption} graphs-${graphs} ${className}`}
    >
      {["no", "yes"].includes(chartCaption) && (
        <>
          <>
            {hasFrame && (
              <>
                <>
                  {["top", "with-graph"].includes(title) && (
                    <SubTopicTitle
                      className={subTopicTitleTypeDefaultClassName}
                      resolution={subTopicTitleResolution}
                      sectionTitleClassName={subTopicTitleSectionTitleClassNameOverride}
                      text={subTopicTitleText1}
                      type={subTopicTitleType}
                    />
                  )}

                  {title === "left" && (
                    <div className={`frame-17 ${frameClassName}`}>
                      <SubTopicTitle
                        className="instance-node-2"
                        resolution="desktop"
                        text={chartCaption === "yes" ? "ANNUAL NUMBERS" : subTopicTitleText2}
                        type="left"
                      />
                      {chartCaption === "yes" && (
                        <SubtitleYesCaptionWrapper
                          caption
                          className="graph-bar-caption-component"
                          resolution="desktop"
                          resoolutionDesktopWrapperGraphBarCaptionColumns="two"
                          resoolutionDesktopWrapperGraphBarCaptionColumns1="two"
                          resoolutionDesktopWrapperGraphBarCaptionColumns2="two"
                          resoolutionDesktopWrapperGraphBarCaptionColumns3="two"
                          resoolutionDesktopWrapperGraphBarCaptionColumns4="two"
                          resoolutionDesktopWrapperGraphBarCaptionColumns5="two"
                          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-2"
                          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-2"
                          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-2"
                          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-2"
                          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-2"
                          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-2"
                          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName6="instance-node-2"
                          resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-2"
                          resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-2"
                          resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-2"
                          resoolutionDesktopWrapperGraphBarCaptionText="Transportation"
                          resoolutionDesktopWrapperGraphBarCaptionText1="Transportation"
                          resoolutionDesktopWrapperGraphBarCaptionText10="Transportation"
                          resoolutionDesktopWrapperGraphBarCaptionText11="Transportation"
                          resoolutionDesktopWrapperGraphBarCaptionText12="39.2%"
                          resoolutionDesktopWrapperGraphBarCaptionText13="Transportation"
                          resoolutionDesktopWrapperGraphBarCaptionText14="Transportation"
                          resoolutionDesktopWrapperGraphBarCaptionText15="Transportation"
                          resoolutionDesktopWrapperGraphBarCaptionText16="39.2%"
                          resoolutionDesktopWrapperGraphBarCaptionText17="Transportation"
                          resoolutionDesktopWrapperGraphBarCaptionText2="39.2%"
                          resoolutionDesktopWrapperGraphBarCaptionText3="Transportation"
                          resoolutionDesktopWrapperGraphBarCaptionText4="39.2%"
                          resoolutionDesktopWrapperGraphBarCaptionText5="39.2%"
                          resoolutionDesktopWrapperGraphBarCaptionText6="39.2%"
                          resoolutionDesktopWrapperGraphBarCaptionText7="39.2%"
                          resoolutionDesktopWrapperGraphBarCaptionText8="39.2%"
                          resoolutionDesktopWrapperGraphBarCaptionText9="39.2%"
                          resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-2"
                          sectionTitleClassName="graph-bar-caption-instance"
                          subtitle
                          text={
                            <>
                              *American Community Survey (ACS) Census Bureau
                              <br />
                              ** Total percentages may vary by 1% due to rounding
                            </>
                          }
                        />
                      )}
                    </div>
                  )}
                </>
              </>
            )}
          </>
        </>
      )}

      {(chartCaption === "no" || (chartCaption === "yes" && graphs === "one" && title === "left")) && <>{override}</>}

      {chartCaption === "z" && (
        <SubTopicTitle
          className={subTopicTitleTypeDefaultClassNameOverride}
          resolution={resolution === "tablet" ? "tablet" : "desktop"}
          sectionTitleClassName={subTopicTitleSectionTitleClassName}
          text={subTopicTitleText}
          type="default"
        />
      )}

      {(chartCaption === "yes" || title === "left") &&
        (chartCaption === "yes" || graphs === "two") &&
        ["top", "left"].includes(title) &&
        (title === "top" || graphs === "two") && (
          <div className="frame-18">
            {graphs === "one" && resolution === "desktop" && (
              <div className="frame-19">
                <SubtitleYesCaptionWrapper
                  caption={false}
                  className="instance-node-2"
                  resolution="desktop"
                  resoolutionDesktopWrapperGraphBarCaptionColumns="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumns1="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumns2="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumns3="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumns4="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumns5="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionText="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText1="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText10="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText11="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText12="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText13="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText14="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText15="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText16="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText17="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText2="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText3="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText4="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText5="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText6="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText7="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText8="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText9="39.2%"
                  resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-2"
                  subtitle={false}
                />
                <GraphChartLine
                  className="graph-chart-line-instance"
                  columns="two"
                  frameClassName="graph-chart-line-4"
                  graphChartLineClassName="graph-chart-line-2"
                  input="total"
                  lines="one"
                  resolution="desktop"
                  sectionTitleClassName="graph-chart-line-3"
                  text="100.0%"
                  text6="Total"
                />
              </div>
            )}

            {resolution === "desktop" && (
              <GraphPie
                chart="example"
                className={`${graphs === "two" ? "instance-node-2" : "class-24"}`}
                resolution="desktop"
                subtitle={false}
                title={false}
                vector={graphs === "two" ? "/img/vector-1.png" : "/img/vector-7.png"}
                vector1={graphs === "two" ? "/img/vector.png" : "/img/vector-6.png"}
              />
            )}

            {graphs === "one" && resolution === "mobile" && (
              <SubtitleYesCaptionWrapper
                caption={false}
                className="graph-bar-caption-component-instance"
                resolution="mobile"
                resoolutionDesktopWrapperGraphBarCaptionColumns="two"
                resoolutionDesktopWrapperGraphBarCaptionColumns1="two"
                resoolutionDesktopWrapperGraphBarCaptionColumns2="two"
                resoolutionDesktopWrapperGraphBarCaptionColumns3="two"
                resoolutionDesktopWrapperGraphBarCaptionColumns4="two"
                resoolutionDesktopWrapperGraphBarCaptionColumns5="two"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-3"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-3"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-3"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-3"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-3"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-3"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName6="instance-node-3"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-3"
                resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-3"
                resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-3"
                resoolutionDesktopWrapperGraphBarCaptionText="Transportation"
                resoolutionDesktopWrapperGraphBarCaptionText1="Transportation"
                resoolutionDesktopWrapperGraphBarCaptionText10="Transportation"
                resoolutionDesktopWrapperGraphBarCaptionText11="Transportation"
                resoolutionDesktopWrapperGraphBarCaptionText12="39.2%"
                resoolutionDesktopWrapperGraphBarCaptionText13="Transportation"
                resoolutionDesktopWrapperGraphBarCaptionText14="Transportation"
                resoolutionDesktopWrapperGraphBarCaptionText15="Transportation"
                resoolutionDesktopWrapperGraphBarCaptionText16="39.2%"
                resoolutionDesktopWrapperGraphBarCaptionText17="Transportation"
                resoolutionDesktopWrapperGraphBarCaptionText2="39.2%"
                resoolutionDesktopWrapperGraphBarCaptionText3="Transportation"
                resoolutionDesktopWrapperGraphBarCaptionText4="39.2%"
                resoolutionDesktopWrapperGraphBarCaptionText5="39.2%"
                resoolutionDesktopWrapperGraphBarCaptionText6="39.2%"
                resoolutionDesktopWrapperGraphBarCaptionText7="39.2%"
                resoolutionDesktopWrapperGraphBarCaptionText8="39.2%"
                resoolutionDesktopWrapperGraphBarCaptionText9="39.2%"
                resoolutionDesktopWrapperResoolutionDesktopClassName="graph-bar-caption-component-instance"
                subtitle={false}
              />
            )}

            {graphs === "two" && title === "top" && (
              <>
                <SubtitleYesCaptionWrapper
                  caption
                  className="instance-node-3"
                  resolution="mobile"
                  resoolutionDesktopWrapperGraphBarCaptionColumns="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumns1="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumns2="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumns3="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumns4="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumns5="two"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-3"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-3"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-3"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-3"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-3"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-3"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName6="instance-node-3"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-3"
                  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-3"
                  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-3"
                  resoolutionDesktopWrapperGraphBarCaptionText="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText1="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText10="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText11="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText12="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText13="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText14="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText15="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText16="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText17="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText2="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText3="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText4="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText5="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText6="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText7="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText8="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText9="39.2%"
                  resoolutionDesktopWrapperResoolutionDesktopClassName="graph-bar-caption-component-instance"
                  subtitle
                  text={
                    <>
                      *American Community Survey (ACS) Census Bureau
                      <br />
                      ** Total percentages may vary by 1% due to rounding
                    </>
                  }
                />
                <div className="graph-bar">
                  <div className="frame-20">
                    <div className="frame-21">
                      <div className="graph-bar-line">
                        <div className="section-title-9">2022</div>
                        <div className="group">
                          <div className="overlap-group">
                            <div className="overlap">
                              <div className="section-title-10">44%</div>
                            </div>
                            <div className="section-title-11">56%</div>
                          </div>
                        </div>
                      </div>
                      <div className="graph-bar-line">
                        <div className="section-title-9">2021</div>
                        <div className="group">
                          <div className="overlap-group">
                            <div className="overlap">
                              <div className="section-title-10">44%</div>
                            </div>
                            <div className="section-title-11">56%</div>
                          </div>
                        </div>
                      </div>
                      <div className="graph-bar-line">
                        <div className="section-title-9">2020</div>
                        <div className="group">
                          <div className="overlap-group">
                            <div className="overlap">
                              <div className="section-title-10">44%</div>
                            </div>
                            <div className="section-title-11">56%</div>
                          </div>
                        </div>
                      </div>
                      <div className="graph-bar-line">
                        <div className="section-title-9">2019</div>
                        <div className="group">
                          <div className="overlap-group">
                            <div className="overlap">
                              <div className="section-title-10">44%</div>
                            </div>
                            <div className="section-title-11">56%</div>
                          </div>
                        </div>
                      </div>
                      <div className="graph-bar-line">
                        <div className="section-title-9">2018</div>
                        <div className="group">
                          <div className="overlap-group">
                            <div className="overlap">
                              <div className="section-title-10">44%</div>
                            </div>
                            <div className="section-title-11">56%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {resolution === "mobile" && (
              <GraphPie
                chart="example"
                className="instance-node-3"
                frameClassName="graph-pie-5"
                groupClassName="graph-pie-instance"
                overlapGroupWrapperClassNameOverride="graph-pie-2"
                resolution="desktop"
                sectionTitleClassName="graph-pie-6"
                subtitle={false}
                title={false}
                vector={graphs === "two" ? "/img/vector-11.png" : "/img/vector-9.png"}
                vector1={graphs === "two" ? "/img/vector-10.png" : "/img/vector-4.png"}
                vectorClassName="graph-pie-3"
                vectorClassNameOverride="graph-pie-4"
              />
            )}

            {title === "left" && (
              <GraphPie
                chart="example"
                className="instance-node-2"
                resolution="desktop"
                subtitle={false}
                title={false}
                vector="/img/vector-1.png"
                vector1="/img/vector.png"
              />
            )}
          </div>
        )}
    </div>
  );
};

SectionGraph.propTypes = {
  title: PropTypes.oneOf(["with-graph", "top", "left"]),
  graphs: PropTypes.oneOf(["two", "zero", "one"]),
  chartCaption: PropTypes.oneOf(["yes", "z", "no"]),
  resolution: PropTypes.oneOf(["tablet", "desktop", "mobile"]),
  subTopicTitleText: PropTypes.string,
  subTopicTitleText1: PropTypes.string,
  subTopicTitleText2: PropTypes.string,
  subTopicTitleType: PropTypes.string,
  subTopicTitleResolution: PropTypes.string,
  hasFrame: PropTypes.bool,
};

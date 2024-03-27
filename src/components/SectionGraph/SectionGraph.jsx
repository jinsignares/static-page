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
  subTopicTitleText1 = "ANNUAL NUMBERS",
  subTopicTitleTypeDefaultClassName,
  override = (
    <GraphPie
      chart="example"
      className="design-component-instance-node"
      frameClassName="graph-pie-3"
      groupClassName="graph-pie-instance"
      overlapGroupClassName="graph-pie-2"
      resolution="desktop"
      sectionTitleClassName="graph-pie-6"
      subtitle={false}
      title={false}
      vector="/img/vector-5.svg"
      vector1="/img/vector-4.svg"
      vectorClassName="graph-pie-4"
      vectorClassNameOverride="graph-pie-5"
    />
  ),
  subTopicTitleTypeDefaultClassNameOverride,
  frameClassName,
  subTopicTitleText2 = "ANNUAL NUMBERS",
}) => {
  return (
    <div
      className={`section-graph ${title} resolution-38-${resolution} chart-caption-${chartCaption} ${graphs} ${className}`}
    >
      {(title === "with-graph" ||
        (chartCaption === "no" && title === "top") ||
        (chartCaption === "yes" && title === "top")) && (
        <SubTopicTitle
          className={subTopicTitleTypeDefaultClassName}
          resolution={resolution === "mobile" ? "mobile" : "desktop"}
          text={subTopicTitleText1}
          type={resolution === "mobile" ? "type-3" : "default"}
        />
      )}

      {chartCaption === "z" && (
        <SubTopicTitle
          className={subTopicTitleTypeDefaultClassNameOverride}
          resolution="desktop"
          sectionTitleClassName={`${resolution === "mobile" && "class-8"}`}
          text={subTopicTitleText}
          type="default"
        />
      )}

      {chartCaption === "yes" && title === "top" && (
        <div className="frame-15">
          {resolution === "desktop" && (
            <>
              <div className="frame-16">
                <SubtitleYesCaptionWrapper
                  caption={false}
                  className="instance-node-2"
                  resolution="desktop"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-2"
                  resoolutionDesktopWrapperGraphBarCaptionText="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText1="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText10="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText11="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText12="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText13="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText14="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText15="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText16="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText17="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText2="39.2%"
                  resoolutionDesktopWrapperGraphBarCaptionText3="Transportation"
                  resoolutionDesktopWrapperGraphBarCaptionText4="Transportation"
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
                />
              </div>
              <GraphPie
                chart="example"
                resolution="desktop"
                subtitle={false}
                title={false}
                vector="/img/vector-7.svg"
                vector1="/img/vector-6.svg"
              />
            </>
          )}

          {resolution === "mobile" && (
            <SubtitleYesCaptionWrapper
              caption={graphs === "two" ? true : undefined}
              className={`${graphs === "two" ? "instance-node-3" : "graph-bar-caption-component"}`}
              resolution="mobile"
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
              resoolutionDesktopWrapperGraphBarCaptionText="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText1="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText10="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText11="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText12="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText13="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText14="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText15="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText16="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText17="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText2="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText3="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText4="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText5="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText6="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText7="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText8="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText9="39.2%"
              resoolutionDesktopWrapperResoolutionDesktopClassName="graph-bar-caption-component"
              subtitle={graphs === "two" ? true : undefined}
            />
          )}

          {graphs === "two" && (
            <div className="graph-bar">
              <div className="frame-17">
                <div className="frame-18">
                  <div className="graph-bar-line">
                    <div className="section-title-8">2022</div>
                    <div className="group">
                      <div className="overlap-group">
                        <div className="overlap">
                          <div className="section-title-9">44%</div>
                        </div>
                        <div className="section-title-10">56%</div>
                      </div>
                    </div>
                  </div>
                  <div className="graph-bar-line">
                    <div className="section-title-8">2021</div>
                    <div className="group">
                      <div className="overlap-group">
                        <div className="overlap">
                          <div className="section-title-9">44%</div>
                        </div>
                        <div className="section-title-10">56%</div>
                      </div>
                    </div>
                  </div>
                  <div className="graph-bar-line">
                    <div className="section-title-8">2020</div>
                    <div className="group">
                      <div className="overlap-group">
                        <div className="overlap">
                          <div className="section-title-9">44%</div>
                        </div>
                        <div className="section-title-10">56%</div>
                      </div>
                    </div>
                  </div>
                  <div className="graph-bar-line">
                    <div className="section-title-8">2019</div>
                    <div className="group">
                      <div className="overlap-group">
                        <div className="overlap">
                          <div className="section-title-9">44%</div>
                        </div>
                        <div className="section-title-10">56%</div>
                      </div>
                    </div>
                  </div>
                  <div className="graph-bar-line">
                    <div className="section-title-8">2018</div>
                    <div className="group">
                      <div className="overlap-group">
                        <div className="overlap">
                          <div className="section-title-9">44%</div>
                        </div>
                        <div className="section-title-10">56%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {resolution === "mobile" && (
            <GraphPie
              chart="example"
              className="instance-node-3"
              frameClassName="graph-pie-3"
              groupClassName="graph-pie-instance"
              overlapGroupClassName="graph-pie-2"
              resolution="desktop"
              sectionTitleClassName="graph-pie-6"
              subtitle={false}
              title={false}
              vector={graphs === "two" ? "/img/vector-11.svg" : "/img/vector-9.svg"}
              vector1={graphs === "two" ? "/img/vector-10.svg" : "/img/vector-4.svg"}
              vectorClassName="graph-pie-4"
              vectorClassNameOverride="graph-pie-5"
            />
          )}
        </div>
      )}

      {title === "left" && (
        <div className={`frame-19 ${frameClassName}`}>
          <SubTopicTitle
            className="instance-node-2"
            resolution="desktop"
            text={chartCaption === "yes" ? "ANNUAL NUMBERS" : subTopicTitleText2}
            type="left"
          />
          {chartCaption === "yes" && (
            <SubtitleYesCaptionWrapper
              caption
              className="graph-bar-caption-component-instance"
              resolution="desktop"
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
              resoolutionDesktopWrapperGraphBarCaptionText="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText1="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText10="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText11="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText12="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText13="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText14="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText15="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText16="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText17="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText2="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText3="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText4="Transportation"
              resoolutionDesktopWrapperGraphBarCaptionText5="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText6="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText7="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText8="39.2%"
              resoolutionDesktopWrapperGraphBarCaptionText9="39.2%"
              resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-2"
              sectionTitleClassName="graph-bar-caption-instance"
              subtitle
            />
          )}
        </div>
      )}

      {(chartCaption === "no" || (chartCaption === "yes" && graphs === "one" && title === "left")) && <>{override}</>}

      {graphs === "two" && title === "left" && (
        <div className="frame-19">
          <GraphPie
            chart="example"
            className="instance-node-2"
            resolution="desktop"
            subtitle={false}
            title={false}
            vector="/img/vector-1.svg"
            vector1="/img/vector.svg"
          />
          <GraphPie
            chart="example"
            className="instance-node-2"
            resolution="desktop"
            subtitle={false}
            title={false}
            vector="/img/vector-1.svg"
            vector1="/img/vector.svg"
          />
        </div>
      )}
    </div>
  );
};

SectionGraph.propTypes = {
  title: PropTypes.oneOf(["with-graph", "top", "left"]),
  graphs: PropTypes.oneOf(["two", "zero", "one"]),
  chartCaption: PropTypes.oneOf(["yes", "z", "no"]),
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  subTopicTitleText: PropTypes.string,
  subTopicTitleText1: PropTypes.string,
  subTopicTitleText2: PropTypes.string,
};

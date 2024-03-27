/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { GraphChartLine } from "../GraphChartLine";
import { GraphChartTotal } from "../GraphChartTotal";
import "./style.css";

export const GraphChart = ({
  quantity,
  resolution,
  className,
  visible = true,
  sectionTitleClassName,
  text = "Number of Source Tests in 2022",
  hasFrame = true,
  hasGroup = true,
  graphChartLineSectionTitleClassName,
  graphChartLineText = "Refinery Source Tests",
  graphChartLineText1 = "49.0%",
  graphChartLineLines = "two",
  graphChartLineColumns = "three",
  graphChartLineFrameClassName,
  graphChartLineSectionTitleClassNameOverride,
  graphChartLineText2 = "Refinery Source Tests",
  graphChartLineText3 = "49.0%",
  graphChartLineLines1 = "two",
  graphChartLineColumns1 = "three",
  graphChartLineFrameClassNameOverride,
  graphChartLineDivClassName,
  graphChartLineText4 = "Refinery Source Tests",
  graphChartLineText5 = "49.0%",
  graphChartLineLines2 = "two",
  graphChartLineColumns2 = "three",
  graphChartLineFrameWrapperClassName,
  graphChartLineDivClassNameOverride,
  graphChartLineText6 = "Refinery Source Tests",
  graphChartLineText7 = "49.0%",
  graphChartLineLines3 = "two",
  graphChartLineColumns3 = "three",
  graphChartLineFrameWrapperClassNameOverride,
  visible1 = true,
  visible2 = true,
  visible3 = true,
  visible4 = true,
  visible5 = true,
  visible6 = true,
  graphChartTotalGraphChartLineText,
  graphChartTotalGraphChartLineSectionTitleClassName,
  graphChartTotalGraphChartLineSectionTitleClassNameOverride,
  graphChartTotalGraphChartLineGraphChartLineClassName,
  graphChartTotalGraphChartLineHasFrame,
  graphChartTotalGraphChartLineText1,
  graphChartTotalGraphChartLineColumns,
  graphChartTotalLinesResolutionClassName,
  graphChartTotalLines = "three",
  sectionTitleClassNameOverride,
  text1 = "*Samples provide information about pollutant levels in ambient air, which helps to identify areas for further reductions.",
  visible7 = true,
  groupClassName,
  divClassName,
  hasGroupWrapper = true,
  hasDiv = true,
  graphChartLineText8 = "Refinery Source Tests",
  graphChartLineText9 = "49.0%",
  graphChartLineLines4 = "two",
  graphChartLineColumns4 = "three",
  graphChartLineText10 = "Refinery Source Tests",
  graphChartLineText11 = "49.0%",
  graphChartLineLines5 = "two",
  graphChartLineColumns5 = "three",
  graphChartLineText12 = "Refinery Source Tests",
  graphChartLineText13 = "49.0%",
  graphChartLineLines6 = "two",
  graphChartLineColumns6 = "three",
  visible8 = true,
  visible9 = true,
  visible10 = true,
  visible11 = true,
  visible12 = true,
  visible13 = true,
  visible14 = true,
  visible15 = true,
  hasSectionTitleWrapper = true,
  visible16 = true,
  groupClassNameOverride,
  divClassNameOverride,
  hasFrame1 = true,
  hasGroup1 = true,
  graphChartLineSectionTitleClassName1,
  graphChartLineText14 = "Refinery Source Tests",
  graphChartLineText15 = "49.0%",
  graphChartLineLines7 = "two",
  graphChartLineColumns7 = "three",
  graphChartLineSectionTitleClassName2,
  graphChartLineText16 = "Refinery Source Tests",
  graphChartLineText17 = "49.0%",
  graphChartLineLines8 = "two",
  graphChartLineColumns8 = "three",
  graphChartLineSectionTitleClassName3,
  graphChartLineText18 = "Refinery Source Tests",
  graphChartLineText19 = "49.0%",
  graphChartLineLines9 = "two",
  graphChartLineColumns9 = "three",
  visible17 = true,
  visible18 = true,
  visible19 = true,
  visible20 = true,
  visible21 = true,
  visible22 = true,
  visible23 = true,
  visible24 = true,
  frameClassName,
  visible25 = true,
  frameClassNameOverride,
  sectionTitleWrapperClassName,
  sectionTitleClassName1,
  hasFrame2 = true,
  hasGroup2 = true,
  graphChartLineSectionTitleClassName4,
  graphChartLineText20 = "Refinery Source Tests",
  graphChartLineLinesColumnsClassName,
  graphChartLineText21 = "49.0%",
  graphChartLineGraphChartLineClassName,
  graphChartLineLines10 = "two",
  graphChartLineColumns10 = "three",
  graphChartLineFrameClassName1,
  graphChartLineSectionTitleClassName5,
  graphChartLineText22 = "Refinery Source Tests",
  graphChartLineLinesColumnsClassNameOverride,
  graphChartLineText23 = "49.0%",
  graphChartLineGraphChartLineClassNameOverride,
  graphChartLineLines11 = "two",
  graphChartLineColumns11 = "three",
  graphChartLineFrameClassName2,
  graphChartLineSectionTitleClassName6,
  graphChartLineText24 = "Refinery Source Tests",
  graphChartLineGraphChartLineWrapperClassName,
  graphChartLineText25 = "49.0%",
  graphChartLineGraphChartLineClassName1,
  graphChartLineLines12 = "two",
  graphChartLineColumns12 = "three",
  graphChartLineFrameClassName3,
  graphChartLineSectionTitleClassName7,
  graphChartLineText26 = "Refinery Source Tests",
  graphChartLineGraphChartLineWrapperClassNameOverride,
  graphChartLineText27 = "49.0%",
  graphChartLineGraphChartLineClassName2,
  graphChartLineLines13 = "two",
  graphChartLineColumns13 = "three",
  graphChartLineFrameClassName4,
  visible26 = true,
  visible27 = true,
  visible28 = true,
  visible29 = true,
  visible30 = true,
  visible31 = true,
  graphChartTotalGraphChartLineText2,
  graphChartTotalGraphChartLineFrameClassName,
  graphChartTotalGraphChartLineGraphChartLineClassNameOverride,
  graphChartTotalGraphChartLineColumns1,
  graphChartTotalLinesResolutionClassNameOverride,
  graphChartTotalGraphChartLineDivClassName,
  graphChartTotalLines1 = "three",
  graphChartTotalGraphChartLineLinesColumnsClassName,
  sectionTitleWrapperClassNameOverride,
  sectionTitleClassName2,
  frameClassName1,
  visible32 = true,
  groupWrapperClassName,
  groupClassName1,
  sectionTitleClassName3,
  hasFrame3 = true,
  hasGroup3 = true,
  graphChartLineText28 = "Refinery Source Tests",
  graphChartLineLinesColumnsClassName1,
  graphChartLineGraphChartLineClassName3,
  graphChartLineLines14 = "two",
  graphChartLineColumns14 = "three",
  graphChartLineResolution = "desktop",
  graphChartLineFrameClassName5,
  graphChartLineSectionTitleWrapperClassName,
  graphChartLineText29 = "Refinery Source Tests",
  graphChartLineText30,
  graphChartLineLinesColumnsClassName2,
  graphChartLineGraphChartLineClassName4,
  graphChartLineLines15 = "two",
  graphChartLineColumns15 = "three",
  graphChartLineResolution1 = "desktop",
  graphChartLineFrameClassName6,
  graphChartLineText31 = "Refinery Source Tests",
  graphChartLineLinesColumnsClassName3,
  graphChartLineText32,
  graphChartLineGraphChartLineClassName5,
  graphChartLineLines16 = "two",
  graphChartLineColumns16 = "three",
  graphChartLineResolution2 = "desktop",
  graphChartLineFrameClassName7,
  visible33 = true,
  visible34 = true,
  visible35 = true,
  visible36 = true,
  visible37 = true,
  visible38 = true,
  visible39 = true,
  visible40 = true,
  hasFrame4 = true,
  frameClassName2,
  visible41 = true,
  groupWrapperClassNameOverride,
  groupClassName2,
  sectionTitleClassName4,
  hasFrame5 = true,
  hasGroup4 = true,
  graphChartLineSectionTitleClassName8,
  graphChartLineText33 = "Refinery Source Tests",
  graphChartLineLinesColumnsClassName4,
  graphChartLineText34,
  graphChartLineGraphChartLineClassName6,
  graphChartLineLines17 = "two",
  graphChartLineColumns17 = "three",
  graphChartLineResolution3 = "desktop",
  graphChartLineFrameClassName8,
  graphChartLineSectionTitleClassName9,
  graphChartLineText35 = "Refinery Source Tests",
  graphChartLineLinesColumnsClassName5,
  graphChartLineText36,
  graphChartLineGraphChartLineClassName7,
  graphChartLineLines18 = "two",
  graphChartLineColumns18 = "three",
  graphChartLineResolution4 = "desktop",
  graphChartLineSectionTitleClassName10,
  graphChartLineSectionTitleWrapperClassNameOverride,
  graphChartLineText37 = "Refinery Source Tests",
  graphChartLineLinesColumnsClassName6,
  graphChartLineText38,
  graphChartLineGraphChartLineClassName8,
  graphChartLineLines19 = "two",
  graphChartLineColumns19 = "three",
  graphChartLineResolution5 = "desktop",
  graphChartLineFrameClassName9,
  visible42 = true,
  visible43 = true,
  visible44 = true,
  visible45 = true,
  visible46 = true,
  visible47 = true,
  visible48 = true,
  visible49 = true,
  graphChartLineText39,
}) => {
  return (
    <div className={`graph-chart resolution-102-${resolution} quantity-${quantity} ${className}`}>
      <div
        className={`frame-37 ${quantity === "one" ? frameClassName : quantity === "two" ? frameClassName1 : undefined}`}
      >
        {resolution === "mobile" && quantity === "one" && (
          <>
            <>
              {visible && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="two"
                  divClassName="graph-chart-line-6"
                  divClassNameOverride="instance-node-5"
                  input="title"
                  lines="one"
                  resolution="mobile"
                  sectionTitleClassNameOverride="graph-chart-line-5"
                  text="49.0%"
                  text2="TOTAL FUNDS AWARDED"
                />
              )}
            </>
          </>
        )}

        {resolution === "desktop" && quantity === "one" && (
          <>
            <>
              {visible25 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="two"
                  input="title"
                  lines="one"
                  resolution="desktop"
                  text="49.0%"
                  text2="TOTAL FUNDS AWARDED"
                />
              )}
            </>
          </>
        )}

        {resolution === "desktop" && quantity === "two" && (
          <>
            <>
              {visible32 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="two"
                  frameClassNameOverride="graph-chart-line-6"
                  input="title"
                  lines="one"
                  resolution="desktop"
                  sectionTitleClassName="graph-chart-line-6"
                  text="49.0%"
                  text2="TOTAL FUNDS AWARDED"
                />
              )}
            </>
          </>
        )}

        {resolution === "desktop" && (
          <div
            className={`group-wrapper ${
              quantity === "one" ? frameClassNameOverride : quantity === "two" ? groupWrapperClassName : undefined
            }`}
          >
            <div
              className={`group-4 ${
                quantity === "one" ? sectionTitleWrapperClassName : quantity === "two" ? groupClassName1 : undefined
              }`}
            >
              <p
                className={`section-title-50 ${
                  quantity === "one" ? sectionTitleClassName1 : quantity === "two" ? sectionTitleClassName3 : undefined
                }`}
              >
                {text}
              </p>
            </div>
          </div>
        )}

        {resolution === "desktop" && quantity === "two" && (
          <>
            <>
              {hasFrame3 && (
                <div className="frame-38">
                  <div className="group-5">
                    <div className="section-title-51">May 4, 2022</div>
                  </div>
                </div>
              )}
            </>
            <>
              {hasGroup3 && (
                <div className="group-6">
                  <div className="group-7">
                    <p className="section-title-52">
                      Regulation 13: Climate Pollutants, Rule 5: Industrial
                      <br />
                      Hydrogen Plants
                    </p>
                  </div>
                </div>
              )}
            </>
            <GraphChartLine
              className={graphChartLineLinesColumnsClassName1}
              columns={graphChartLineColumns14}
              frameClassNameOverride={graphChartLineFrameClassName5}
              graphChartLineClassName={graphChartLineGraphChartLineClassName3}
              input="default"
              lines={graphChartLineLines14}
              resolution={graphChartLineResolution}
              text="49.0%"
              text1={graphChartLineText28}
              text3={graphChartLineText39}
            />
            <GraphChartLine
              className={graphChartLineLinesColumnsClassName2}
              columns={graphChartLineColumns15}
              frameClassName={graphChartLineSectionTitleWrapperClassName}
              frameClassNameOverride={graphChartLineFrameClassName6}
              graphChartLineClassName={graphChartLineGraphChartLineClassName4}
              input="default"
              lines={graphChartLineLines15}
              resolution={graphChartLineResolution1}
              text="49.0%"
              text1={graphChartLineText29}
              text3={graphChartLineText30}
            />
            <GraphChartLine
              className={graphChartLineLinesColumnsClassName3}
              columns={graphChartLineColumns16}
              frameClassNameOverride={graphChartLineFrameClassName7}
              graphChartLineClassName={graphChartLineGraphChartLineClassName5}
              input="default"
              lines={graphChartLineLines16}
              resolution={graphChartLineResolution2}
              text="49.0%"
              text1={graphChartLineText31}
              text3={graphChartLineText32}
            />
            <>
              {visible33 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>
              {visible34 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>
              {visible35 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>
              {visible36 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>
              {visible37 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>
              {visible38 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>
              {visible39 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>{visible40 && <GraphChartTotal className="instance-node-6" lines="three" resolution="desktop" />}</>
            <>
              {hasFrame4 && (
                <div className="frame-39">
                  <p className="section-title-53">{text1}</p>
                </div>
              )}
            </>
          </>
        )}

        {resolution === "mobile" && quantity === "two" && (
          <>
            <>
              {visible7 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="two"
                  divClassName="graph-chart-line-6"
                  divClassNameOverride="instance-node-5"
                  input="title"
                  lines="one"
                  resolution="mobile"
                  sectionTitleClassNameOverride="graph-chart-line-5"
                  text="49.0%"
                  text2="TOTAL FUNDS AWARDED"
                />
              )}
            </>
          </>
        )}

        {resolution === "mobile" && (
          <div className="frame-40">
            <div className={`group-8 ${quantity === "two" ? groupClassName : undefined}`}>
              <p
                className={`section-title-54 ${
                  quantity === "two" ? divClassName : quantity === "one" ? sectionTitleClassName : undefined
                }`}
              >
                {text}
              </p>
            </div>
          </div>
        )}

        {resolution === "mobile" && quantity === "two" && (
          <>
            <>
              {hasGroupWrapper && (
                <div className="frame-41">
                  <div className="group-9">
                    <div className="section-title-54">May 4, 2022</div>
                  </div>
                </div>
              )}
            </>
            <>
              {hasDiv && (
                <div className="group-10">
                  <div className="group-11">
                    <p className="section-title-55">
                      Regulation 13: Climate Pollutants, Rule 5: Industrial
                      <br />
                      Hydrogen Plants
                    </p>
                  </div>
                </div>
              )}
            </>
            <div className="frame-42">
              <GraphChartLine
                className="instance-node-4"
                columns={graphChartLineColumns4}
                input="default"
                lines={graphChartLineLines4}
                resolution="mobile"
                text={graphChartLineText9}
                text1={graphChartLineText8}
              />
              <GraphChartLine
                className="instance-node-4"
                columns={graphChartLineColumns5}
                input="default"
                lines={graphChartLineLines5}
                resolution="mobile"
                text={graphChartLineText11}
                text1={graphChartLineText10}
              />
              <GraphChartLine
                className="instance-node-4"
                columns={graphChartLineColumns6}
                input="default"
                lines={graphChartLineLines6}
                resolution="mobile"
                text={graphChartLineText13}
                text1={graphChartLineText12}
              />
              {visible8 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}

              {visible9 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}

              {visible10 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}

              {visible11 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}

              {visible12 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}

              {visible13 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}

              {visible14 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </div>
            <>
              {visible15 && (
                <GraphChartTotal
                  className="instance-node-4"
                  graphChartLineDivClassNameOverride="graph-chart-total-instance"
                  graphChartLineFrameClassName1="instance-node-5"
                  graphChartLineFrameClassName2="instance-node-5"
                  graphChartLineFrameClassNameOverride="instance-node-5"
                  graphChartLineSectionTitleClassName1="graph-chart-total-instance"
                  graphChartLineSectionTitleClassName2="graph-chart-total-instance"
                  lines="three"
                  resolution="mobile"
                />
              )}
            </>
            <>
              {hasSectionTitleWrapper && (
                <div className="frame-39">
                  <p className="section-title-56">{text1}</p>
                </div>
              )}
            </>
          </>
        )}

        {resolution === "mobile" && quantity === "one" && (
          <>
            <>
              {hasFrame && (
                <div className="frame-41">
                  <div className="group-9">
                    <div className="section-title-54">May 4, 2022</div>
                  </div>
                </div>
              )}
            </>
            <>
              {hasGroup && (
                <div className="group-10">
                  <div className="group-11">
                    <p className="section-title-55">
                      Regulation 13: Climate Pollutants, Rule 5: Industrial
                      <br />
                      Hydrogen Plants
                    </p>
                  </div>
                </div>
              )}
            </>
            <div className="frame-42">
              <GraphChartLine
                className="instance-node-4"
                columns={graphChartLineColumns}
                frameClassNameOverride={graphChartLineFrameClassName}
                input="default"
                lines={graphChartLineLines}
                resolution="mobile"
                sectionTitleClassName={graphChartLineSectionTitleClassName}
                text={graphChartLineText1}
                text1={graphChartLineText}
              />
              <GraphChartLine
                className="instance-node-4"
                columns={graphChartLineColumns1}
                frameClassNameOverride={graphChartLineFrameClassNameOverride}
                input="default"
                lines={graphChartLineLines1}
                resolution="mobile"
                sectionTitleClassName={graphChartLineSectionTitleClassNameOverride}
                text={graphChartLineText3}
                text1={graphChartLineText2}
              />
              <GraphChartLine
                className="instance-node-4"
                columns={graphChartLineColumns2}
                frameClassNameOverride={graphChartLineFrameWrapperClassName}
                input="default"
                lines={graphChartLineLines2}
                resolution="mobile"
                sectionTitleClassName={graphChartLineDivClassName}
                text={graphChartLineText5}
                text1={graphChartLineText4}
              />
              <GraphChartLine
                className="instance-node-4"
                columns={graphChartLineColumns3}
                frameClassNameOverride={graphChartLineFrameWrapperClassNameOverride}
                input="default"
                lines={graphChartLineLines3}
                resolution="mobile"
                sectionTitleClassName={graphChartLineDivClassNameOverride}
                text={graphChartLineText7}
                text1={graphChartLineText6}
              />
              {visible1 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}

              {visible2 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}

              {visible3 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}

              {visible4 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}

              {visible5 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}

              {visible6 && (
                <GraphChartLine
                  className="instance-node-4"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="mobile"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </div>
            <GraphChartTotal
              className={graphChartTotalLinesResolutionClassName}
              graphChartLineColumns={graphChartTotalGraphChartLineColumns}
              graphChartLineDivClassNameOverride="graph-chart-total-instance"
              graphChartLineFrameClassName1="instance-node-5"
              graphChartLineFrameClassName2="instance-node-5"
              graphChartLineFrameClassNameOverride="instance-node-5"
              graphChartLineGraphChartLineClassName={graphChartTotalGraphChartLineGraphChartLineClassName}
              graphChartLineHasFrame={graphChartTotalGraphChartLineHasFrame}
              graphChartLineSectionTitleClassName={graphChartTotalGraphChartLineSectionTitleClassNameOverride}
              graphChartLineSectionTitleClassName1="graph-chart-total-instance"
              graphChartLineSectionTitleClassName2="graph-chart-total-instance"
              graphChartLineSectionTitleClassNameOverride={graphChartTotalGraphChartLineSectionTitleClassName}
              graphChartLineText={graphChartTotalGraphChartLineText}
              graphChartLineText1={graphChartTotalGraphChartLineText1}
              lines={graphChartTotalLines}
              resolution="mobile"
            />
            <div className="frame-39">
              <p className={`section-title-56 ${sectionTitleClassNameOverride}`}>{text1}</p>
            </div>
          </>
        )}

        {resolution === "desktop" && quantity === "one" && (
          <>
            <>
              {hasFrame2 && (
                <div className="frame-38">
                  <div className="group-5">
                    <div className="section-title-51">May 4, 2022</div>
                  </div>
                </div>
              )}
            </>
            <>
              {hasGroup2 && (
                <div className="group-6">
                  <div className="group-7">
                    <p className="section-title-52">
                      Regulation 13: Climate Pollutants, Rule 5: Industrial
                      <br />
                      Hydrogen Plants
                    </p>
                  </div>
                </div>
              )}
            </>
            <GraphChartLine
              className={graphChartLineLinesColumnsClassName}
              columns={graphChartLineColumns10}
              frameClassNameOverride={graphChartLineFrameClassName1}
              graphChartLineClassName={graphChartLineGraphChartLineClassName}
              input="default"
              lines={graphChartLineLines10}
              resolution="desktop"
              sectionTitleClassName={graphChartLineSectionTitleClassName4}
              text={graphChartLineText21}
              text1={graphChartLineText20}
            />
            <GraphChartLine
              className={graphChartLineLinesColumnsClassNameOverride}
              columns={graphChartLineColumns11}
              frameClassNameOverride={graphChartLineFrameClassName2}
              graphChartLineClassName={graphChartLineGraphChartLineClassNameOverride}
              input="default"
              lines={graphChartLineLines11}
              resolution="desktop"
              sectionTitleClassName={graphChartLineSectionTitleClassName5}
              text={graphChartLineText23}
              text1={graphChartLineText22}
            />
            <GraphChartLine
              className={graphChartLineGraphChartLineWrapperClassName}
              columns={graphChartLineColumns12}
              frameClassNameOverride={graphChartLineFrameClassName3}
              graphChartLineClassName={graphChartLineGraphChartLineClassName1}
              input="default"
              lines={graphChartLineLines12}
              resolution="desktop"
              sectionTitleClassName={graphChartLineSectionTitleClassName6}
              text={graphChartLineText25}
              text1={graphChartLineText24}
            />
            <GraphChartLine
              className={graphChartLineGraphChartLineWrapperClassNameOverride}
              columns={graphChartLineColumns13}
              frameClassNameOverride={graphChartLineFrameClassName4}
              graphChartLineClassName={graphChartLineGraphChartLineClassName2}
              input="default"
              lines={graphChartLineLines13}
              resolution="desktop"
              sectionTitleClassName={graphChartLineSectionTitleClassName7}
              text={graphChartLineText27}
              text1={graphChartLineText26}
            />
            <>
              {visible26 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>
              {visible27 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>
              {visible28 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>
              {visible29 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>
              {visible30 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <>
              {visible31 && (
                <GraphChartLine
                  className="instance-node-6"
                  columns="three"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  text="49.0%"
                  text1="Refinery Source Tests"
                />
              )}
            </>
            <GraphChartTotal
              className={graphChartTotalLinesResolutionClassNameOverride}
              graphChartLineColumns={graphChartTotalGraphChartLineColumns1}
              graphChartLineDivClassName={graphChartTotalGraphChartLineDivClassName}
              graphChartLineFrameClassName={graphChartTotalGraphChartLineFrameClassName}
              graphChartLineGraphChartLineClassNameOverride={
                graphChartTotalGraphChartLineGraphChartLineClassNameOverride
              }
              graphChartLineLinesColumnsClassName={graphChartTotalGraphChartLineLinesColumnsClassName}
              graphChartLineText={graphChartTotalGraphChartLineText2}
              lines={graphChartTotalLines1}
              resolution="desktop"
            />
            <div className={`frame-39 ${sectionTitleWrapperClassNameOverride}`}>
              <p className={`section-title-57 ${sectionTitleClassName2}`}>{text1}</p>
            </div>
          </>
        )}
      </div>
      {quantity === "two" && (
        <div className={`frame-43 ${frameClassName2}`}>
          {resolution === "desktop" && (
            <>
              <>
                {visible41 && (
                  <GraphChartLine
                    className="instance-node-6"
                    columns="two"
                    frameClassNameOverride="graph-chart-line-6"
                    input="title"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-6"
                    text="49.0%"
                    text2="TOTAL FUNDS AWARDED"
                  />
                )}
              </>
              <div className={`group-wrapper ${groupWrapperClassNameOverride}`}>
                <div className={`group-4 ${groupClassName2}`}>
                  <p className={`section-title-50 ${sectionTitleClassName4}`}>{text}</p>
                </div>
              </div>
              <>
                {hasFrame5 && (
                  <div className="frame-38">
                    <div className="group-5">
                      <div className="section-title-51">May 4, 2022</div>
                    </div>
                  </div>
                )}
              </>
              <>
                {hasGroup4 && (
                  <div className="group-12">
                    <div className="group-13">
                      <p className="section-title-58">
                        Regulation 13: Climate Pollutants, Rule 5: Industrial
                        <br />
                        Hydrogen Plants
                      </p>
                    </div>
                  </div>
                )}
              </>
              <GraphChartLine
                className={graphChartLineLinesColumnsClassName4}
                columns={graphChartLineColumns17}
                frameClassNameOverride={graphChartLineFrameClassName8}
                graphChartLineClassName={graphChartLineGraphChartLineClassName6}
                input="default"
                lines={graphChartLineLines17}
                resolution={graphChartLineResolution3}
                sectionTitleClassName={graphChartLineSectionTitleClassName8}
                text="49.0%"
                text1={graphChartLineText33}
                text3={graphChartLineText34}
              />
              <GraphChartLine
                className={graphChartLineLinesColumnsClassName5}
                columns={graphChartLineColumns18}
                graphChartLineClassName={graphChartLineGraphChartLineClassName7}
                input="default"
                lines={graphChartLineLines18}
                resolution={graphChartLineResolution4}
                sectionTitleClassName={graphChartLineSectionTitleClassName9}
                text="49.0%"
                text1={graphChartLineText35}
                text3={graphChartLineText36}
              />
              <GraphChartLine
                className={graphChartLineLinesColumnsClassName6}
                columns={graphChartLineColumns19}
                frameClassName={graphChartLineSectionTitleWrapperClassNameOverride}
                frameClassNameOverride={graphChartLineFrameClassName9}
                graphChartLineClassName={graphChartLineGraphChartLineClassName8}
                input="default"
                lines={graphChartLineLines19}
                resolution={graphChartLineResolution5}
                sectionTitleClassName={graphChartLineSectionTitleClassName10}
                text="49.0%"
                text1={graphChartLineText37}
                text3={graphChartLineText38}
              />
              <>
                {visible42 && (
                  <GraphChartLine
                    className="instance-node-6"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="desktop"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}
              </>
              <>
                {visible43 && (
                  <GraphChartLine
                    className="instance-node-6"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="desktop"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}
              </>
              <>
                {visible44 && (
                  <GraphChartLine
                    className="instance-node-6"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="desktop"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}
              </>
              <>
                {visible45 && (
                  <GraphChartLine
                    className="instance-node-6"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="desktop"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}
              </>
              <>
                {visible46 && (
                  <GraphChartLine
                    className="instance-node-6"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="desktop"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}
              </>
              <>
                {visible47 && (
                  <GraphChartLine
                    className="instance-node-6"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="desktop"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}
              </>
              <>
                {visible48 && (
                  <GraphChartLine
                    className="instance-node-6"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="desktop"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}
              </>
              <>{visible49 && <GraphChartTotal className="instance-node-6" lines="three" resolution="desktop" />}</>
            </>
          )}

          {resolution === "mobile" && (
            <>
              <>
                {visible16 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns="two"
                    divClassName="graph-chart-line-6"
                    divClassNameOverride="instance-node-5"
                    input="title"
                    lines="one"
                    resolution="mobile"
                    sectionTitleClassNameOverride="graph-chart-line-5"
                    text="49.0%"
                    text2="TOTAL FUNDS AWARDED"
                  />
                )}
              </>
              <div className="frame-40">
                <div className={`group-8 ${groupClassNameOverride}`}>
                  <p className={`section-title-54 ${divClassNameOverride}`}>{text}</p>
                </div>
              </div>
              <>
                {hasFrame1 && (
                  <div className="frame-41">
                    <div className="group-14">
                      <div className="section-title-59">May 4, 2022</div>
                    </div>
                  </div>
                )}
              </>
              <>
                {hasGroup1 && (
                  <div className="group-10">
                    <div className="group-11">
                      <p className="section-title-55">
                        Regulation 13: Climate Pollutants, Rule 5: Industrial
                        <br />
                        Hydrogen Plants
                      </p>
                    </div>
                  </div>
                )}
              </>
              <div className="frame-42">
                <GraphChartLine
                  className="instance-node-4"
                  columns={graphChartLineColumns7}
                  input="default"
                  lines={graphChartLineLines7}
                  resolution="mobile"
                  sectionTitleClassName={graphChartLineSectionTitleClassName1}
                  text={graphChartLineText15}
                  text1={graphChartLineText14}
                />
                <GraphChartLine
                  className="instance-node-4"
                  columns={graphChartLineColumns8}
                  input="default"
                  lines={graphChartLineLines8}
                  resolution="mobile"
                  sectionTitleClassName={graphChartLineSectionTitleClassName2}
                  text={graphChartLineText17}
                  text1={graphChartLineText16}
                />
                <GraphChartLine
                  className="instance-node-4"
                  columns={graphChartLineColumns9}
                  input="default"
                  lines={graphChartLineLines9}
                  resolution="mobile"
                  sectionTitleClassName={graphChartLineSectionTitleClassName3}
                  text={graphChartLineText19}
                  text1={graphChartLineText18}
                />
                {visible17 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}

                {visible18 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}

                {visible19 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}

                {visible20 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}

                {visible21 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}

                {visible22 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}

                {visible23 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    text="49.0%"
                    text1="Refinery Source Tests"
                  />
                )}
              </div>
              <>
                {visible24 && (
                  <GraphChartTotal
                    className="instance-node-4"
                    graphChartLineDivClassNameOverride="graph-chart-total-instance"
                    graphChartLineFrameClassName1="instance-node-5"
                    graphChartLineFrameClassName2="instance-node-5"
                    graphChartLineFrameClassNameOverride="instance-node-5"
                    graphChartLineSectionTitleClassName1="graph-chart-total-instance"
                    graphChartLineSectionTitleClassName2="graph-chart-total-instance"
                    lines="three"
                    resolution="mobile"
                  />
                )}
              </>
            </>
          )}

          <div className="frame-39">
            <p className="section-title-60">{text1}</p>
          </div>
        </div>
      )}
    </div>
  );
};

GraphChart.propTypes = {
  quantity: PropTypes.oneOf(["two", "one"]),
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  visible: PropTypes.bool,
  text: PropTypes.string,
  hasFrame: PropTypes.bool,
  hasGroup: PropTypes.bool,
  graphChartLineText: PropTypes.string,
  graphChartLineText1: PropTypes.string,
  graphChartLineLines: PropTypes.string,
  graphChartLineColumns: PropTypes.string,
  graphChartLineText2: PropTypes.string,
  graphChartLineText3: PropTypes.string,
  graphChartLineLines1: PropTypes.string,
  graphChartLineColumns1: PropTypes.string,
  graphChartLineText4: PropTypes.string,
  graphChartLineText5: PropTypes.string,
  graphChartLineLines2: PropTypes.string,
  graphChartLineColumns2: PropTypes.string,
  graphChartLineText6: PropTypes.string,
  graphChartLineText7: PropTypes.string,
  graphChartLineLines3: PropTypes.string,
  graphChartLineColumns3: PropTypes.string,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
  visible3: PropTypes.bool,
  visible4: PropTypes.bool,
  visible5: PropTypes.bool,
  visible6: PropTypes.bool,
  graphChartTotalGraphChartLineText: PropTypes.string,
  graphChartTotalGraphChartLineHasFrame: PropTypes.bool,
  graphChartTotalGraphChartLineText1: PropTypes.string,
  graphChartTotalGraphChartLineColumns: PropTypes.string,
  graphChartTotalLines: PropTypes.string,
  text1: PropTypes.string,
  visible7: PropTypes.bool,
  hasGroupWrapper: PropTypes.bool,
  hasDiv: PropTypes.bool,
  graphChartLineText8: PropTypes.string,
  graphChartLineText9: PropTypes.string,
  graphChartLineLines4: PropTypes.string,
  graphChartLineColumns4: PropTypes.string,
  graphChartLineText10: PropTypes.string,
  graphChartLineText11: PropTypes.string,
  graphChartLineLines5: PropTypes.string,
  graphChartLineColumns5: PropTypes.string,
  graphChartLineText12: PropTypes.string,
  graphChartLineText13: PropTypes.string,
  graphChartLineLines6: PropTypes.string,
  graphChartLineColumns6: PropTypes.string,
  visible8: PropTypes.bool,
  visible9: PropTypes.bool,
  visible10: PropTypes.bool,
  visible11: PropTypes.bool,
  visible12: PropTypes.bool,
  visible13: PropTypes.bool,
  visible14: PropTypes.bool,
  visible15: PropTypes.bool,
  hasSectionTitleWrapper: PropTypes.bool,
  visible16: PropTypes.bool,
  hasFrame1: PropTypes.bool,
  hasGroup1: PropTypes.bool,
  graphChartLineText14: PropTypes.string,
  graphChartLineText15: PropTypes.string,
  graphChartLineLines7: PropTypes.string,
  graphChartLineColumns7: PropTypes.string,
  graphChartLineText16: PropTypes.string,
  graphChartLineText17: PropTypes.string,
  graphChartLineLines8: PropTypes.string,
  graphChartLineColumns8: PropTypes.string,
  graphChartLineText18: PropTypes.string,
  graphChartLineText19: PropTypes.string,
  graphChartLineLines9: PropTypes.string,
  graphChartLineColumns9: PropTypes.string,
  visible17: PropTypes.bool,
  visible18: PropTypes.bool,
  visible19: PropTypes.bool,
  visible20: PropTypes.bool,
  visible21: PropTypes.bool,
  visible22: PropTypes.bool,
  visible23: PropTypes.bool,
  visible24: PropTypes.bool,
  visible25: PropTypes.bool,
  hasFrame2: PropTypes.bool,
  hasGroup2: PropTypes.bool,
  graphChartLineText20: PropTypes.string,
  graphChartLineText21: PropTypes.string,
  graphChartLineLines10: PropTypes.string,
  graphChartLineColumns10: PropTypes.string,
  graphChartLineText22: PropTypes.string,
  graphChartLineText23: PropTypes.string,
  graphChartLineLines11: PropTypes.string,
  graphChartLineColumns11: PropTypes.string,
  graphChartLineText24: PropTypes.string,
  graphChartLineText25: PropTypes.string,
  graphChartLineLines12: PropTypes.string,
  graphChartLineColumns12: PropTypes.string,
  graphChartLineText26: PropTypes.string,
  graphChartLineText27: PropTypes.string,
  graphChartLineLines13: PropTypes.string,
  graphChartLineColumns13: PropTypes.string,
  visible26: PropTypes.bool,
  visible27: PropTypes.bool,
  visible28: PropTypes.bool,
  visible29: PropTypes.bool,
  visible30: PropTypes.bool,
  visible31: PropTypes.bool,
  graphChartTotalGraphChartLineText2: PropTypes.string,
  graphChartTotalGraphChartLineColumns1: PropTypes.string,
  graphChartTotalLines1: PropTypes.string,
  visible32: PropTypes.bool,
  hasFrame3: PropTypes.bool,
  hasGroup3: PropTypes.bool,
  graphChartLineText28: PropTypes.string,
  graphChartLineLines14: PropTypes.string,
  graphChartLineColumns14: PropTypes.string,
  graphChartLineResolution: PropTypes.string,
  graphChartLineText29: PropTypes.string,
  graphChartLineText30: PropTypes.string,
  graphChartLineLines15: PropTypes.string,
  graphChartLineColumns15: PropTypes.string,
  graphChartLineResolution1: PropTypes.string,
  graphChartLineText31: PropTypes.string,
  graphChartLineText32: PropTypes.string,
  graphChartLineLines16: PropTypes.string,
  graphChartLineColumns16: PropTypes.string,
  graphChartLineResolution2: PropTypes.string,
  visible33: PropTypes.bool,
  visible34: PropTypes.bool,
  visible35: PropTypes.bool,
  visible36: PropTypes.bool,
  visible37: PropTypes.bool,
  visible38: PropTypes.bool,
  visible39: PropTypes.bool,
  visible40: PropTypes.bool,
  hasFrame4: PropTypes.bool,
  visible41: PropTypes.bool,
  hasFrame5: PropTypes.bool,
  hasGroup4: PropTypes.bool,
  graphChartLineText33: PropTypes.string,
  graphChartLineText34: PropTypes.string,
  graphChartLineLines17: PropTypes.string,
  graphChartLineColumns17: PropTypes.string,
  graphChartLineResolution3: PropTypes.string,
  graphChartLineText35: PropTypes.string,
  graphChartLineText36: PropTypes.string,
  graphChartLineLines18: PropTypes.string,
  graphChartLineColumns18: PropTypes.string,
  graphChartLineResolution4: PropTypes.string,
  graphChartLineText37: PropTypes.string,
  graphChartLineText38: PropTypes.string,
  graphChartLineLines19: PropTypes.string,
  graphChartLineColumns19: PropTypes.string,
  graphChartLineResolution5: PropTypes.string,
  visible42: PropTypes.bool,
  visible43: PropTypes.bool,
  visible44: PropTypes.bool,
  visible45: PropTypes.bool,
  visible46: PropTypes.bool,
  visible47: PropTypes.bool,
  visible48: PropTypes.bool,
  visible49: PropTypes.bool,
  graphChartLineText39: PropTypes.string,
};

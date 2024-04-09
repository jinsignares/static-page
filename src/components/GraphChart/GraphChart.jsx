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
  groupClassName,
  sectionTitleClassName,
  text = "Number of Source Tests in 2022",
  hasFrame = true,
  hasGroup = true,
  graphChartLineText = "49.0%",
  graphChartLineText1 = "Refinery Source Tests",
  graphChartLineFrameClassName,
  graphChartLineLines = "two",
  graphChartLineColumns = "three",
  graphChartLineSectionTitleClassName,
  graphChartLineText2 = "49.0%",
  graphChartLineText3 = "Refinery Source Tests",
  graphChartLineFrameClassNameOverride,
  graphChartLineLines1 = "two",
  graphChartLineColumns1 = "three",
  graphChartLineSectionTitleClassNameOverride,
  graphChartLineText4 = "49.0%",
  graphChartLineText5 = "Refinery Source Tests",
  graphChartLineFrameWrapperClassName,
  graphChartLineLines2 = "two",
  graphChartLineColumns2 = "three",
  graphChartLineDivClassName,
  graphChartLineText6 = "49.0%",
  graphChartLineText7 = "Refinery Source Tests",
  graphChartLineFrameWrapperClassNameOverride,
  graphChartLineLines3 = "two",
  graphChartLineColumns3 = "three",
  graphChartLineDivClassNameOverride,
  visible1 = true,
  visible2 = true,
  visible3 = true,
  visible4 = true,
  visible5 = true,
  visible6 = true,
  graphChartTotalGraphChartLineGraphChartLineClassName,
  graphChartTotalGraphChartLineHasFrame,
  graphChartTotalGraphChartLineText,
  graphChartTotalLinesResolutionClassName,
  graphChartTotalGraphChartLineColumns,
  graphChartTotalLines = "three",
  graphChartTotalGraphChartLineText1,
  graphChartTotalGraphChartLineSectionTitleClassName,
  graphChartTotalGraphChartLineSectionTitleClassNameOverride,
  sectionTitleClassNameOverride,
  text1 = "*Samples provide information about pollutant levels in ambient air, which helps to identify areas for further reductions.",
  visible7 = true,
  groupClassNameOverride,
  divClassName,
  hasGroupWrapper = true,
  hasDiv = true,
  graphChartLineText8 = "Refinery Source Tests",
  graphChartLineLines4 = "two",
  graphChartLineColumns4 = "three",
  graphChartLineText9 = "49.0%",
  graphChartLineText10 = "Refinery Source Tests",
  graphChartLineLines5 = "two",
  graphChartLineColumns5 = "three",
  graphChartLineText11 = "49.0%",
  graphChartLineText12 = "Refinery Source Tests",
  graphChartLineLines6 = "two",
  graphChartLineColumns6 = "three",
  graphChartLineText13 = "49.0%",
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
  sectionTitleWrapperClassName,
  divClassNameOverride,
  hasFrame1 = true,
  hasGroup1 = true,
  graphChartLineText14 = "49.0%",
  graphChartLineText15 = "Refinery Source Tests",
  graphChartLineLines7 = "two",
  graphChartLineColumns7 = "three",
  graphChartLineSectionTitleClassName1,
  graphChartLineText16 = "49.0%",
  graphChartLineText17 = "Refinery Source Tests",
  graphChartLineLines8 = "two",
  graphChartLineColumns8 = "three",
  graphChartLineSectionTitleClassName2,
  graphChartLineText18 = "49.0%",
  graphChartLineText19 = "Refinery Source Tests",
  graphChartLineLines9 = "two",
  graphChartLineColumns9 = "three",
  graphChartLineSectionTitleClassName3,
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
  sectionTitleWrapperClassNameOverride,
  sectionTitleClassName1,
  hasFrame2 = true,
  hasGroup2 = true,
  graphChartLineText20 = "49.0%",
  graphChartLineText21 = "Refinery Source Tests",
  graphChartLineFrameClassName1,
  graphChartLineLines10 = "two",
  graphChartLineColumns10 = "three",
  graphChartLineSectionTitleClassName4,
  graphChartLineText22 = "49.0%",
  graphChartLineText23 = "Refinery Source Tests",
  graphChartLineFrameClassName2,
  graphChartLineLines11 = "two",
  graphChartLineColumns11 = "three",
  graphChartLineSectionTitleClassName5,
  graphChartLineText24 = "49.0%",
  graphChartLineText25 = "Refinery Source Tests",
  graphChartLineFrameClassName3,
  graphChartLineLines12 = "two",
  graphChartLineColumns12 = "three",
  graphChartLineSectionTitleClassName6,
  graphChartLineText26 = "49.0%",
  graphChartLineText27 = "Refinery Source Tests",
  graphChartLineFrameClassName4,
  graphChartLineLines13 = "two",
  graphChartLineColumns13 = "three",
  graphChartLineSectionTitleClassName7,
  visible26 = true,
  visible27 = true,
  visible28 = true,
  visible29 = true,
  visible30 = true,
  visible31 = true,
  graphChartTotalGraphChartLineDivClassName,
  graphChartTotalGraphChartLineText2,
  graphChartTotalLinesResolutionClassNameOverride,
  graphChartTotalLines1 = "three",
  graphChartTotalGraphChartLineColumns1,
  graphChartTotalGraphChartLineFrameClassName,
  frameClassNameOverride,
  sectionTitleClassName2,
  visible32 = true,
  groupClassName1,
  sectionTitleClassName3,
  hasFrame3 = true,
  hasGroup3 = true,
  graphChartLineText28 = "Refinery Source Tests",
  graphChartLineLinesColumnsClassName,
  graphChartLineFrameClassName5,
  graphChartLineGraphChartLineClassName,
  graphChartLineLines14 = "two",
  graphChartLineColumns14 = "three",
  graphChartLineResolution = "desktop",
  graphChartLineText29,
  graphChartLineText30 = "Refinery Source Tests",
  graphChartLineLinesColumnsClassNameOverride,
  graphChartLineFrameClassName6,
  graphChartLineGraphChartLineClassNameOverride,
  graphChartLineSectionTitleWrapperClassName,
  graphChartLineLines15 = "two",
  graphChartLineColumns15 = "three",
  graphChartLineResolution1 = "desktop",
  graphChartLineText31,
  graphChartLineText32 = "Refinery Source Tests",
  graphChartLineGraphChartLineWrapperClassName,
  graphChartLineFrameClassName7,
  graphChartLineGraphChartLineClassName1,
  graphChartLineLines16 = "two",
  graphChartLineColumns16 = "three",
  graphChartLineResolution2 = "desktop",
  visible33 = true,
  visible34 = true,
  visible35 = true,
  visible36 = true,
  visible37 = true,
  visible38 = true,
  visible39 = true,
  visible40 = true,
  hasFrame4 = true,
  visible41 = true,
  groupClassName2,
  sectionTitleClassName4,
  hasFrame5 = true,
  hasGroup4 = true,
  graphChartLineText33,
  graphChartLineText34 = "Refinery Source Tests",
  graphChartLineGraphChartLineWrapperClassNameOverride,
  graphChartLineFrameClassName8,
  graphChartLineGraphChartLineClassName2,
  graphChartLineLines17 = "two",
  graphChartLineColumns17 = "three",
  graphChartLineResolution3 = "desktop",
  graphChartLineSectionTitleClassName8,
  graphChartLineText35,
  graphChartLineText36 = "Refinery Source Tests",
  graphChartLineLinesColumnsClassName1,
  graphChartLineGraphChartLineClassName3,
  graphChartLineLines18 = "two",
  graphChartLineColumns18 = "three",
  graphChartLineResolution4 = "desktop",
  graphChartLineSectionTitleClassName9,
  graphChartLineText37,
  graphChartLineText38 = "Refinery Source Tests",
  graphChartLineLinesColumnsClassName2,
  graphChartLineFrameClassName9,
  graphChartLineGraphChartLineClassName4,
  graphChartLineSectionTitleWrapperClassNameOverride,
  graphChartLineLines19 = "two",
  graphChartLineColumns19 = "three",
  graphChartLineResolution5 = "desktop",
  graphChartLineSectionTitleClassName10,
  visible42 = true,
  visible43 = true,
  visible44 = true,
  visible45 = true,
  visible46 = true,
  visible47 = true,
  visible48 = true,
  visible49 = true,
  graphChartLineText39,
  graphChartTotalGraphChartLineFrameClassNameOverride,
  frameClassName1,
  graphChartLineText40 = "Refinery Source Tests",
  graphChartLineLines20 = "two",
  graphChartLineColumns20 = "three",
  graphChartLineText41 = "49.0%",
  graphChartLineText42 = "Refinery Source Tests",
  graphChartLineLines21 = "two",
  graphChartLineColumns21 = "three",
  graphChartLineText43 = "49.0%",
  graphChartTotalGraphChartLineText3,
  graphChartTotalGraphChartLineColumns2,
  graphChartTotalLines2 = "three",
  graphChartTotalGraphChartLineDivClassNameOverride,
  graphChartTotalGraphChartLineText4,
  graphChartTotalGraphChartLineSectionTitleClassName1,
  frameClassName2,
  graphChartLineText44 = "Refinery Source Tests",
  graphChartLineLines22 = "two",
  graphChartLineColumns22 = "three",
  graphChartLineText45 = "49.0%",
  graphChartTotalGraphChartLineText5,
  graphChartTotalGraphChartLineColumns3,
  graphChartTotalLines3 = "three",
  graphChartTotalGraphChartLineFrameClassName1,
  graphChartTotalGraphChartLineText6,
  graphChartTotalGraphChartLineSectionTitleClassName2,
  hasFrame6 = true,
  graphChartLineText46 = "49.0%",
  graphChartLineText47 = "49.0%",
  graphChartLineText48 = "49.0%",
  graphChartLineSectionTitleClassName11,
  graphChartLineText49 = "Refinery Source Tests",
  graphChartLineLines23 = "two",
  graphChartLineColumns23 = "three",
  graphChartLineText50 = "49.0%",
  graphChartLineText51 = "49.0%",
  graphChartLineText52 = "Refinery Source Tests",
  graphChartLineLines24 = "two",
  graphChartLineColumns24 = "three",
  graphChartLineSectionTitleClassName12,
  graphChartTotalGraphChartLineSectionTitleClassName3,
  graphChartTotalGraphChartLineText7,
  graphChartTotalGraphChartLineFrameWrapperClassName,
  graphChartTotalLines4 = "three",
  graphChartTotalGraphChartLineColumns4,
  graphChartTotalGraphChartLineFrameWrapperClassNameOverride,
  graphChartLineText53 = "49.0%",
  graphChartLineText54 = "49.0%",
  graphChartLineText55 = "49.0%",
  graphChartLineText56 = "49.0%",
  graphChartLineText57 = "Refinery Source Tests",
  graphChartLineLines25 = "two",
  graphChartLineColumns25 = "three",
  graphChartLineSectionTitleClassName13,
  graphChartTotalGraphChartLineSectionTitleClassName4,
  graphChartTotalGraphChartLineText8,
  graphChartTotalGraphChartLineSectionTitleWrapperClassName,
  graphChartTotalLines5 = "three",
  graphChartTotalGraphChartLineColumns5,
  graphChartTotalGraphChartLineFrameClassName2,
  hasFrame7 = true,
  graphChartLineSectionTitleClassName14,
  graphChartLineSectionTitleClassName15,
  graphChartLineResolution6 = "desktop",
  graphChartLineFrameClassName10,
  graphChartLineText58 = "49.0%",
  graphChartLineResolution7 = "desktop",
  graphChartLineResolution8 = "desktop",
  visible50 = true,
  graphChartLineResolution9 = "desktop",
  graphChartTotalGraphChartLineHasDiv,
  graphChartTotalResolution = "desktop",
  graphChartTotalGraphChartLineText9,
  graphChartTotalGraphChartLineLinesColumnsClassName,
  graphChartTotalGraphChartLineSectionTitleClassName5,
  hasFrame8 = true,
  graphChartLineResolution10 = "desktop",
  visible51 = true,
  graphChartTotalGraphChartLineFrameClassName3,
  hasFrame9 = true,
  graphChartLineText59 = "2,165",
  graphChartLineText60 = "2,165",
  graphChartLineText61 = "2,165",
  graphChartLineText62 = "2,165",
  graphChartLineText63 = "Refinery Source Tests",
  graphChartLineText64 = "2,165",
  graphChartLineLines26 = "two",
  graphChartLineText65 = "49.0%",
  graphChartLineText66 = "Refinery Source Tests",
  graphChartLineText67 = "2,165",
  graphChartLineLines27 = "two",
  graphChartLineText68 = "49.0%",
  graphChartLineText69 = "Refinery Source Tests",
  graphChartLineText70 = "2,165",
  graphChartLineLines28 = "two",
  graphChartLineText71 = "49.0%",
  graphChartLineText72 = "Refinery Source Tests",
  graphChartLineText73 = "2,165",
  graphChartLineLines29 = "two",
  graphChartLineText74 = "49.0%",
  graphChartLineText75 = "Refinery Source Tests",
  graphChartLineText76 = "2,165",
  graphChartLineLines30 = "two",
  graphChartLineText77 = "49.0%",
  graphChartTotalGraphChartLineText10,
  graphChartTotalGraphChartLineFrameClassName4,
  graphChartTotalGraphChartLineLinesColumnsClassNameOverride,
  graphChartLineColumns26 = "three",
  graphChartLineColumns27 = "three",
  graphChartLineColumns28 = "three",
  graphChartLineColumns29 = "three",
  graphChartLineColumns30 = "three",
  hasFrame10 = true,
  visible52 = true,
  visible53 = true,
  visible54 = true,
  graphChartTotalGraphChartLineSectionTitleClassName6,
  graphChartTotalGraphChartLineSectionTitleClassName7,
  graphChartTotalGraphChartLineText11,
  graphChartTotalGraphChartLineText12,
  graphChartTotalGraphChartLineText13,
  graphChartTotalGraphChartLineText14,
  graphChartTotalGraphChartLineVisible,
  graphChartTotalGraphChartLineHasFrame1,
  graphChartTotalGraphChartLineColumns6,
  graphChartLineFrameClassName11,
  graphChartLineSectionTitleClassName16,
  hasFrame11 = true,
  graphChartLineText78 = "2,165",
  graphChartLineText79 = "2,165",
  graphChartLineText80 = "2,165",
  graphChartLineText81 = "2,165",
  graphChartLineText82 = "Refinery Source Tests",
  graphChartLineText83 = "2,165",
  graphChartLineLines31 = "two",
  graphChartLineText84 = "49.0%",
  graphChartLineText85 = "Refinery Source Tests",
  graphChartLineText86 = "2,165",
  graphChartLineLines32 = "two",
  graphChartLineText87 = "49.0%",
  graphChartLineText88 = "Refinery Source Tests",
  graphChartLineText89 = "2,165",
  graphChartLineLines33 = "two",
  graphChartLineText90 = "49.0%",
  graphChartLineText91 = "Refinery Source Tests",
  graphChartLineText92 = "2,165",
  graphChartLineLines34 = "two",
  graphChartLineText93 = "49.0%",
  graphChartLineText94 = "Refinery Source Tests",
  graphChartLineText95 = "2,165",
  graphChartLineLines35 = "two",
  graphChartLineText96 = "49.0%",
  graphChartTotalGraphChartLineText15,
  graphChartLineColumns31 = "three",
  graphChartLineColumns32 = "three",
  graphChartLineLinesColumnsClassName3,
  graphChartLineGraphChartLineClassName5,
  graphChartLineFrameClassName12,
  graphChartLineColumns33 = "three",
  graphChartLineSectionTitleClassName17,
  graphChartLineColumns34 = "three",
  graphChartLineColumns35 = "three",
  graphChartTotalGraphChartLineText16,
  graphChartLineFrameClassName13,
  visible55 = true,
  graphChartTotalGraphChartLineText17,
  graphChartTotalGraphChartLineSectionTitleClassName8,
  graphChartTotalGraphChartLineText18,
}) => {
  return (
    <div className={`graph-chart resolution-113-${resolution} quantity-${quantity} ${className}`}>
      {quantity === "two" && (
        <>
          <div className="frame-39">
            {resolution === "desktop" && (
              <>
                <>
                  {visible32 && (
                    <GraphChartLine
                      className="instance-node-4"
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

            {resolution === "mobile" && (
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
                      sectionTitleClassNameOverride="graph-chart-line-7"
                      text="49.0%"
                      text2="TOTAL FUNDS AWARDED"
                    />
                  )}
                </>
              </>
            )}

            <div className="group-wrapper">
              <div
                className={`group-4 ${
                  resolution === "desktop"
                    ? groupClassName1
                    : resolution === "mobile"
                    ? groupClassNameOverride
                    : undefined
                }`}
              >
                <p
                  className={`section-title-52 ${
                    resolution === "desktop"
                      ? sectionTitleClassName3
                      : resolution === "mobile"
                      ? divClassName
                      : undefined
                  }`}
                >
                  {text}
                </p>
              </div>
            </div>
            {resolution === "mobile" && (
              <>
                <>
                  {hasGroupWrapper && (
                    <div className="frame-40">
                      <div className="group-5">
                        <div className="section-title-53">May 4, 2022</div>
                      </div>
                    </div>
                  )}
                </>
                <>
                  {hasDiv && (
                    <div className="group-6">
                      <div className="group-7">
                        <p className="section-title-54">
                          Regulation 13: Climate Pollutants, Rule 5: Industrial
                          <br />
                          Hydrogen Plants
                        </p>
                      </div>
                    </div>
                  )}
                </>
                <div className={`frame-41 ${frameClassName1}`}>
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns4}
                    input="default"
                    lines={graphChartLineLines4}
                    resolution="mobile"
                    text={graphChartLineText9}
                    text1={graphChartLineText8}
                    text4="2,165"
                    text5="Compliance Rate"
                  />
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns5}
                    input="default"
                    lines={graphChartLineLines5}
                    resolution="mobile"
                    text={graphChartLineText11}
                    text1={graphChartLineText10}
                    text4="2,165"
                    text5="Compliance Rate"
                  />
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns6}
                    input="default"
                    lines={graphChartLineLines6}
                    resolution="mobile"
                    text={graphChartLineText13}
                    text1={graphChartLineText12}
                    text4="2,165"
                    text5="Compliance Rate"
                  />
                  {visible8 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns={graphChartLineColumns20}
                      input="default"
                      lines={graphChartLineLines20}
                      resolution="mobile"
                      text={graphChartLineText41}
                      text1={graphChartLineText40}
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}

                  {visible9 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns={graphChartLineColumns21}
                      input="default"
                      lines={graphChartLineLines21}
                      resolution="mobile"
                      text={graphChartLineText43}
                      text1={graphChartLineText42}
                      text4="2,165"
                      text5="Compliance Rate"
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
                      text4="2,165"
                      text5="Compliance Rate"
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
                      text4="2,165"
                      text5="Compliance Rate"
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
                      text4="2,165"
                      text5="Compliance Rate"
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
                      text4="2,165"
                      text5="Compliance Rate"
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
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </div>
                <>
                  {visible15 && (
                    <GraphChartTotal
                      className="instance-node-4"
                      graphChartLineColumns={graphChartTotalGraphChartLineColumns2}
                      graphChartLineColumns2="three"
                      graphChartLineDivClassNameOverride={graphChartTotalGraphChartLineDivClassNameOverride}
                      graphChartLineFrameClassName1="instance-node-5"
                      graphChartLineFrameClassName3="instance-node-5"
                      graphChartLineFrameClassName4="instance-node-5"
                      graphChartLineLinesColumnsClassNameOverride="instance-node-4"
                      graphChartLineSectionTitleClassName10="graph-chart-total-instance"
                      graphChartLineSectionTitleClassName4="graph-chart-total-instance"
                      graphChartLineSectionTitleClassName9="graph-chart-total-instance"
                      graphChartLineSectionTitleClassNameOverride={graphChartTotalGraphChartLineSectionTitleClassName1}
                      graphChartLineText={graphChartTotalGraphChartLineText4}
                      graphChartLineText1={graphChartTotalGraphChartLineText3}
                      graphChartLineText12="49.0%"
                      graphChartLineText14="49.0%"
                      graphChartLineText16="49.0%"
                      graphChartLineText7="TOTAL FUNDS AWARDED"
                      graphChartLineText8="2,165"
                      lines={graphChartTotalLines2}
                      resolution="mobile"
                    />
                  )}
                </>
                <>
                  {hasSectionTitleWrapper && (
                    <div className="frame-42">
                      <p className="section-title-55">{text1}</p>
                    </div>
                  )}
                </>
              </>
            )}

            {resolution === "desktop" && (
              <>
                <>
                  {hasFrame3 && (
                    <div className="frame-40">
                      <div className="group-8">
                        <div className="section-title-56">May 4, 2022</div>
                      </div>
                    </div>
                  )}
                </>
                <>
                  {hasGroup3 && (
                    <div className="group-9">
                      <div className="group-10">
                        <p className="section-title-57">
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
                  columns={graphChartLineColumns14}
                  frameClassNameOverride={graphChartLineFrameClassName5}
                  graphChartLineClassName={graphChartLineGraphChartLineClassName}
                  input="default"
                  lines={graphChartLineLines14}
                  resolution={graphChartLineResolution}
                  text={graphChartLineText46}
                  text1={graphChartLineText28}
                  text3={graphChartLineText39}
                  text4="2,165"
                  text5="Compliance Rate"
                />
                <GraphChartLine
                  className={graphChartLineLinesColumnsClassNameOverride}
                  columns={graphChartLineColumns15}
                  frameClassName={graphChartLineSectionTitleWrapperClassName}
                  frameClassNameOverride={graphChartLineFrameClassName6}
                  graphChartLineClassName={graphChartLineGraphChartLineClassNameOverride}
                  input="default"
                  lines={graphChartLineLines15}
                  resolution={graphChartLineResolution1}
                  text={graphChartLineText47}
                  text1={graphChartLineText30}
                  text3={graphChartLineText29}
                  text4="2,165"
                  text5="Compliance Rate"
                />
                <GraphChartLine
                  className={graphChartLineGraphChartLineWrapperClassName}
                  columns={graphChartLineColumns16}
                  frameClassNameOverride={graphChartLineFrameClassName7}
                  graphChartLineClassName={graphChartLineGraphChartLineClassName1}
                  input="default"
                  lines={graphChartLineLines16}
                  resolution={graphChartLineResolution2}
                  sectionTitleClassName={graphChartLineSectionTitleClassName11}
                  text={graphChartLineText48}
                  text1={graphChartLineText32}
                  text3={graphChartLineText31}
                  text4="2,165"
                  text5="Compliance Rate"
                />
                <>
                  {visible33 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns={graphChartLineColumns23}
                      input="default"
                      lines={graphChartLineLines23}
                      resolution="desktop"
                      text={graphChartLineText50}
                      text1={graphChartLineText49}
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible34 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns={graphChartLineColumns24}
                      input="default"
                      lines={graphChartLineLines24}
                      resolution="desktop"
                      sectionTitleClassName={graphChartLineSectionTitleClassName12}
                      text={graphChartLineText51}
                      text1={graphChartLineText52}
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible35 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns="three"
                      input="default"
                      lines="two"
                      resolution="desktop"
                      text="49.0%"
                      text1="Refinery Source Tests"
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible36 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns="three"
                      input="default"
                      lines="two"
                      resolution="desktop"
                      text="49.0%"
                      text1="Refinery Source Tests"
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible37 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns="three"
                      input="default"
                      lines="two"
                      resolution="desktop"
                      text="49.0%"
                      text1="Refinery Source Tests"
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible38 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns="three"
                      input="default"
                      lines="two"
                      resolution="desktop"
                      text="49.0%"
                      text1="Refinery Source Tests"
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible39 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns="three"
                      input="default"
                      lines="two"
                      resolution="desktop"
                      text="49.0%"
                      text1="Refinery Source Tests"
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible40 && (
                    <GraphChartTotal
                      className="instance-node-4"
                      graphChartLineColumns={graphChartTotalGraphChartLineColumns4}
                      graphChartLineColumns2="three"
                      graphChartLineDivClassName={graphChartTotalGraphChartLineSectionTitleClassName3}
                      graphChartLineFrameClassName={graphChartTotalGraphChartLineFrameWrapperClassNameOverride}
                      graphChartLineFrameClassNameOverride={graphChartTotalGraphChartLineFrameWrapperClassName}
                      graphChartLineLinesColumnsClassNameOverride="instance-node-4"
                      graphChartLineText1={graphChartTotalGraphChartLineText7}
                      graphChartLineText12="49.0%"
                      graphChartLineText13="Total"
                      graphChartLineText14="49.0%"
                      graphChartLineText15="Total"
                      graphChartLineText16="49.0%"
                      graphChartLineText17="Total"
                      graphChartLineText8="2,165"
                      lines={graphChartTotalLines4}
                      resolution="desktop"
                    />
                  )}
                </>
                <>
                  {hasFrame4 && (
                    <div className="frame-42">
                      <p className="section-title-58">{text1}</p>
                    </div>
                  )}
                </>
              </>
            )}
          </div>
          <div className="frame-39">
            {resolution === "desktop" && (
              <>
                <>
                  {visible41 && (
                    <GraphChartLine
                      className="instance-node-4"
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
                      sectionTitleClassNameOverride="graph-chart-line-7"
                      text="49.0%"
                      text2="TOTAL FUNDS AWARDED"
                    />
                  )}
                </>
              </>
            )}

            <div className="group-wrapper">
              <div
                className={`group-11 ${
                  resolution === "desktop"
                    ? groupClassName2
                    : resolution === "mobile"
                    ? sectionTitleWrapperClassName
                    : undefined
                }`}
              >
                <p
                  className={`section-title-59 ${
                    resolution === "desktop"
                      ? sectionTitleClassName4
                      : resolution === "mobile"
                      ? divClassNameOverride
                      : undefined
                  }`}
                >
                  {text}
                </p>
              </div>
            </div>
            {resolution === "mobile" && (
              <>
                <>
                  {hasFrame1 && (
                    <div className="frame-40">
                      <div className="group-12">
                        <div className="section-title-60">May 4, 2022</div>
                      </div>
                    </div>
                  )}
                </>
                <>
                  {hasGroup1 && (
                    <div className="group-6">
                      <div className="group-7">
                        <p className="section-title-54">
                          Regulation 13: Climate Pollutants, Rule 5: Industrial
                          <br />
                          Hydrogen Plants
                        </p>
                      </div>
                    </div>
                  )}
                </>
                <div className={`frame-41 ${frameClassName2}`}>
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns7}
                    input="default"
                    lines={graphChartLineLines7}
                    resolution="mobile"
                    sectionTitleClassName={graphChartLineSectionTitleClassName1}
                    text={graphChartLineText14}
                    text1={graphChartLineText15}
                    text4="2,165"
                    text5="Compliance Rate"
                  />
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns8}
                    input="default"
                    lines={graphChartLineLines8}
                    resolution="mobile"
                    sectionTitleClassName={graphChartLineSectionTitleClassName2}
                    text={graphChartLineText16}
                    text1={graphChartLineText17}
                    text4="2,165"
                    text5="Compliance Rate"
                  />
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns9}
                    input="default"
                    lines={graphChartLineLines9}
                    resolution="mobile"
                    sectionTitleClassName={graphChartLineSectionTitleClassName3}
                    text={graphChartLineText18}
                    text1={graphChartLineText19}
                    text4="2,165"
                    text5="Compliance Rate"
                  />
                  {visible17 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns={graphChartLineColumns22}
                      input="default"
                      lines={graphChartLineLines22}
                      resolution="mobile"
                      text={graphChartLineText45}
                      text1={graphChartLineText44}
                      text4="2,165"
                      text5="Compliance Rate"
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
                      text4="2,165"
                      text5="Compliance Rate"
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
                      text4="2,165"
                      text5="Compliance Rate"
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
                      text4="2,165"
                      text5="Compliance Rate"
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
                      text4="2,165"
                      text5="Compliance Rate"
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
                      text4="2,165"
                      text5="Compliance Rate"
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
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </div>
                <>
                  {visible24 && (
                    <GraphChartTotal
                      className="instance-node-4"
                      graphChartLineColumns={graphChartTotalGraphChartLineColumns3}
                      graphChartLineColumns2="three"
                      graphChartLineDivClassNameOverride={graphChartTotalGraphChartLineFrameClassName1}
                      graphChartLineFrameClassName1="instance-node-5"
                      graphChartLineFrameClassName3="instance-node-5"
                      graphChartLineFrameClassName4="instance-node-5"
                      graphChartLineLinesColumnsClassNameOverride="instance-node-4"
                      graphChartLineSectionTitleClassName10="graph-chart-total-instance"
                      graphChartLineSectionTitleClassName4="graph-chart-total-instance"
                      graphChartLineSectionTitleClassName9="graph-chart-total-instance"
                      graphChartLineSectionTitleClassNameOverride={graphChartTotalGraphChartLineSectionTitleClassName2}
                      graphChartLineText={graphChartTotalGraphChartLineText6}
                      graphChartLineText1={graphChartTotalGraphChartLineText5}
                      graphChartLineText12="49.0%"
                      graphChartLineText14="49.0%"
                      graphChartLineText16="49.0%"
                      graphChartLineText7="TOTAL FUNDS AWARDED"
                      graphChartLineText8="2,165"
                      lines={graphChartTotalLines3}
                      resolution="mobile"
                    />
                  )}
                </>
                <>
                  {hasFrame6 && (
                    <div className="frame-42">
                      <p className="section-title-55">{text1}</p>
                    </div>
                  )}
                </>
              </>
            )}

            {resolution === "desktop" && (
              <>
                <>
                  {hasFrame5 && (
                    <div className="frame-40">
                      <div className="group-8">
                        <div className="section-title-56">May 4, 2022</div>
                      </div>
                    </div>
                  )}
                </>
                <>
                  {hasGroup4 && (
                    <div className="group-13">
                      <div className="group-14">
                        <p className="section-title-61">
                          Regulation 13: Climate Pollutants, Rule 5: Industrial
                          <br />
                          Hydrogen Plants
                        </p>
                      </div>
                    </div>
                  )}
                </>
                <GraphChartLine
                  className={graphChartLineGraphChartLineWrapperClassNameOverride}
                  columns={graphChartLineColumns17}
                  frameClassNameOverride={graphChartLineFrameClassName8}
                  graphChartLineClassName={graphChartLineGraphChartLineClassName2}
                  input="default"
                  lines={graphChartLineLines17}
                  resolution={graphChartLineResolution3}
                  sectionTitleClassName={graphChartLineSectionTitleClassName8}
                  text={graphChartLineText53}
                  text1={graphChartLineText34}
                  text3={graphChartLineText33}
                  text4="2,165"
                  text5="Compliance Rate"
                />
                <GraphChartLine
                  className={graphChartLineLinesColumnsClassName1}
                  columns={graphChartLineColumns18}
                  graphChartLineClassName={graphChartLineGraphChartLineClassName3}
                  input="default"
                  lines={graphChartLineLines18}
                  resolution={graphChartLineResolution4}
                  sectionTitleClassName={graphChartLineSectionTitleClassName9}
                  text={graphChartLineText54}
                  text1={graphChartLineText36}
                  text3={graphChartLineText35}
                  text4="2,165"
                  text5="Compliance Rate"
                />
                <GraphChartLine
                  className={graphChartLineLinesColumnsClassName2}
                  columns={graphChartLineColumns19}
                  frameClassName={graphChartLineSectionTitleWrapperClassNameOverride}
                  frameClassNameOverride={graphChartLineFrameClassName9}
                  graphChartLineClassName={graphChartLineGraphChartLineClassName4}
                  input="default"
                  lines={graphChartLineLines19}
                  resolution={graphChartLineResolution5}
                  sectionTitleClassName={graphChartLineSectionTitleClassName10}
                  text={graphChartLineText55}
                  text1={graphChartLineText38}
                  text3={graphChartLineText37}
                  text4="2,165"
                  text5="Compliance Rate"
                />
                <>
                  {visible42 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns={graphChartLineColumns25}
                      input="default"
                      lines={graphChartLineLines25}
                      resolution="desktop"
                      sectionTitleClassName={graphChartLineSectionTitleClassName13}
                      text={graphChartLineText56}
                      text1={graphChartLineText57}
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible43 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns="three"
                      input="default"
                      lines="two"
                      resolution="desktop"
                      text="49.0%"
                      text1="Refinery Source Tests"
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible44 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns="three"
                      input="default"
                      lines="two"
                      resolution="desktop"
                      text="49.0%"
                      text1="Refinery Source Tests"
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible45 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns="three"
                      input="default"
                      lines="two"
                      resolution="desktop"
                      text="49.0%"
                      text1="Refinery Source Tests"
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible46 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns="three"
                      input="default"
                      lines="two"
                      resolution="desktop"
                      text="49.0%"
                      text1="Refinery Source Tests"
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible47 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns="three"
                      input="default"
                      lines="two"
                      resolution="desktop"
                      text="49.0%"
                      text1="Refinery Source Tests"
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible48 && (
                    <GraphChartLine
                      className="instance-node-4"
                      columns="three"
                      input="default"
                      lines="two"
                      resolution="desktop"
                      text="49.0%"
                      text1="Refinery Source Tests"
                      text4="2,165"
                      text5="Compliance Rate"
                    />
                  )}
                </>
                <>
                  {visible49 && (
                    <GraphChartTotal
                      className="instance-node-4"
                      graphChartLineColumns={graphChartTotalGraphChartLineColumns5}
                      graphChartLineColumns2="three"
                      graphChartLineDivClassName={graphChartTotalGraphChartLineSectionTitleClassName4}
                      graphChartLineFrameClassName={graphChartTotalGraphChartLineFrameClassName2}
                      graphChartLineFrameClassNameOverride={graphChartTotalGraphChartLineSectionTitleWrapperClassName}
                      graphChartLineLinesColumnsClassNameOverride="instance-node-4"
                      graphChartLineText1={graphChartTotalGraphChartLineText8}
                      graphChartLineText12="49.0%"
                      graphChartLineText13="Total"
                      graphChartLineText14="49.0%"
                      graphChartLineText15="Total"
                      graphChartLineText16="49.0%"
                      graphChartLineText17="Total"
                      graphChartLineText8="2,165"
                      lines={graphChartTotalLines5}
                      resolution="desktop"
                    />
                  )}
                </>
                <>
                  {hasFrame7 && (
                    <div className="frame-42">
                      <p className="section-title-58">{text1}</p>
                    </div>
                  )}
                </>
              </>
            )}
          </div>
        </>
      )}

      {quantity === "one" && (
        <div className={`frame-39 ${frameClassName}`}>
          {resolution === "mobile" && (
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
                    sectionTitleClassNameOverride="graph-chart-line-7"
                    text="49.0%"
                    text2="TOTAL FUNDS AWARDED"
                  />
                )}
              </>
              <>
                {hasFrame9 && (
                  <div className="group-wrapper">
                    <div className={`group-15 ${groupClassName}`}>
                      <p className={`section-title-53 ${sectionTitleClassName}`}>{text}</p>
                    </div>
                  </div>
                )}
              </>
              <>
                {hasFrame && (
                  <div className="frame-40">
                    <div className="group-5">
                      <div className="section-title-53">May 4, 2022</div>
                    </div>
                  </div>
                )}
              </>
              <>
                {hasGroup && (
                  <div className="group-6">
                    <div className="group-7">
                      <p className="section-title-54">
                        Regulation 13: Climate Pollutants, Rule 5: Industrial
                        <br />
                        Hydrogen Plants
                      </p>
                    </div>
                  </div>
                )}
              </>
              <div className="frame-41">
                <GraphChartLine
                  className="instance-node-4"
                  columns={graphChartLineColumns}
                  frameClassNameOverride={graphChartLineFrameClassName}
                  input="default"
                  lines={graphChartLineLines}
                  resolution="mobile"
                  sectionTitleClassName={graphChartLineSectionTitleClassName}
                  text={graphChartLineText}
                  text1={graphChartLineText1}
                  text4={graphChartLineText59}
                  text5="Compliance Rate"
                />
                <GraphChartLine
                  className="instance-node-4"
                  columns={graphChartLineColumns1}
                  frameClassNameOverride={graphChartLineFrameClassNameOverride}
                  input="default"
                  lines={graphChartLineLines1}
                  resolution="mobile"
                  sectionTitleClassName={graphChartLineSectionTitleClassNameOverride}
                  text={graphChartLineText2}
                  text1={graphChartLineText3}
                  text4={graphChartLineText60}
                  text5="Compliance Rate"
                />
                {visible52 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns2}
                    frameClassNameOverride={graphChartLineFrameWrapperClassName}
                    input="default"
                    lines={graphChartLineLines2}
                    resolution="mobile"
                    sectionTitleClassName={graphChartLineDivClassName}
                    text={graphChartLineText4}
                    text1={graphChartLineText5}
                    text4={graphChartLineText61}
                    text5="Compliance Rate"
                  />
                )}

                {visible53 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns3}
                    frameClassNameOverride={graphChartLineFrameWrapperClassNameOverride}
                    input="default"
                    lines={graphChartLineLines3}
                    resolution="mobile"
                    sectionTitleClassName={graphChartLineDivClassNameOverride}
                    text={graphChartLineText6}
                    text1={graphChartLineText7}
                    text4={graphChartLineText62}
                    text5="Compliance Rate"
                  />
                )}

                {visible1 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns26}
                    input="default"
                    lines={graphChartLineLines26}
                    resolution="mobile"
                    text={graphChartLineText65}
                    text1={graphChartLineText63}
                    text4={graphChartLineText64}
                    text5="Compliance Rate"
                  />
                )}

                {visible2 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns27}
                    input="default"
                    lines={graphChartLineLines27}
                    resolution="mobile"
                    text={graphChartLineText68}
                    text1={graphChartLineText66}
                    text4={graphChartLineText67}
                    text5="Compliance Rate"
                  />
                )}

                {visible3 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns28}
                    input="default"
                    lines={graphChartLineLines28}
                    resolution="mobile"
                    text={graphChartLineText71}
                    text1={graphChartLineText69}
                    text4={graphChartLineText70}
                    text5="Compliance Rate"
                  />
                )}

                {visible4 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns29}
                    input="default"
                    lines={graphChartLineLines29}
                    resolution="mobile"
                    text={graphChartLineText74}
                    text1={graphChartLineText72}
                    text4={graphChartLineText73}
                    text5="Compliance Rate"
                  />
                )}

                {visible5 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns30}
                    input="default"
                    lines={graphChartLineLines30}
                    resolution="mobile"
                    text={graphChartLineText77}
                    text1={graphChartLineText75}
                    text4={graphChartLineText76}
                    text5="Compliance Rate"
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
                    text4="2,165"
                    text5="Compliance Rate"
                  />
                )}
              </div>
              <>
                {visible54 && (
                  <GraphChartTotal
                    className={graphChartTotalLinesResolutionClassName}
                    graphChartLineColumns={graphChartTotalGraphChartLineColumns}
                    graphChartLineColumns2="three"
                    graphChartLineDivClassNameOverride={graphChartTotalGraphChartLineFrameClassName4}
                    graphChartLineFrameClassName1="instance-node-5"
                    graphChartLineFrameClassName3="instance-node-5"
                    graphChartLineFrameClassName4="instance-node-5"
                    graphChartLineGraphChartLineClassName={graphChartTotalGraphChartLineGraphChartLineClassName}
                    graphChartLineHasFrame={graphChartTotalGraphChartLineHasFrame}
                    graphChartLineLinesColumnsClassName={graphChartTotalGraphChartLineLinesColumnsClassNameOverride}
                    graphChartLineLinesColumnsClassNameOverride="instance-node-4"
                    graphChartLineSectionTitleClassName={graphChartTotalGraphChartLineSectionTitleClassNameOverride}
                    graphChartLineSectionTitleClassName10="graph-chart-total-instance"
                    graphChartLineSectionTitleClassName4="graph-chart-total-instance"
                    graphChartLineSectionTitleClassName9="graph-chart-total-instance"
                    graphChartLineSectionTitleClassNameOverride={graphChartTotalGraphChartLineSectionTitleClassName}
                    graphChartLineText={graphChartTotalGraphChartLineText1}
                    graphChartLineText1={graphChartTotalGraphChartLineText}
                    graphChartLineText12="49.0%"
                    graphChartLineText14="49.0%"
                    graphChartLineText16="49.0%"
                    graphChartLineText2={graphChartTotalGraphChartLineText10}
                    graphChartLineText7="TOTAL FUNDS AWARDED"
                    graphChartLineText8="2,165"
                    lines={graphChartTotalLines}
                    resolution="mobile"
                  />
                )}
              </>
              <>
                {hasFrame10 && (
                  <div className="frame-42">
                    <p className={`section-title-55 ${sectionTitleClassNameOverride}`}>{text1}</p>
                  </div>
                )}
              </>
            </>
          )}

          {resolution === "desktop" && (
            <>
              <>
                {visible25 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns="two"
                    divClassName={graphChartLineSectionTitleClassName14}
                    divClassNameOverride={graphChartLineFrameClassName10}
                    frameClassNameOverride={graphChartLineFrameClassName11}
                    input="title"
                    lines="one"
                    resolution={graphChartLineResolution6}
                    sectionTitleClassName={graphChartLineSectionTitleClassName16}
                    sectionTitleClassNameOverride={graphChartLineSectionTitleClassName15}
                    text={graphChartLineText58}
                    text2="TOTAL FUNDS AWARDED"
                  />
                )}
              </>
              <>
                {hasFrame11 && (
                  <div className="group-wrapper">
                    <div className={`group-16 ${sectionTitleWrapperClassNameOverride}`}>
                      <p className={`section-title-62 ${sectionTitleClassName1}`}>{text}</p>
                    </div>
                  </div>
                )}
              </>
              <>
                {hasFrame2 && (
                  <div className="frame-40">
                    <div className="group-8">
                      <div className="section-title-56">May 4, 2022</div>
                    </div>
                  </div>
                )}
              </>
              <>
                {hasGroup2 && (
                  <div className="group-17">
                    <div className="group-18">
                      <p className="section-title-63">
                        Regulation 13: Climate Pollutants, Rule 5: Industrial
                        <br />
                        Hydrogen Plants
                      </p>
                    </div>
                  </div>
                )}
              </>
              <GraphChartLine
                className="instance-node-4"
                columns={graphChartLineColumns10}
                frameClassName={graphChartLineFrameClassName13}
                frameClassNameOverride={graphChartLineFrameClassName1}
                input="default"
                lines={graphChartLineLines10}
                resolution={graphChartLineResolution7}
                sectionTitleClassName={graphChartLineSectionTitleClassName4}
                text={graphChartLineText20}
                text1={graphChartLineText21}
                text4={graphChartLineText78}
                text5="Compliance Rate"
              />
              <GraphChartLine
                className="instance-node-4"
                columns={graphChartLineColumns11}
                frameClassNameOverride={graphChartLineFrameClassName2}
                input="default"
                lines={graphChartLineLines11}
                resolution={graphChartLineResolution8}
                sectionTitleClassName={graphChartLineSectionTitleClassName5}
                text={graphChartLineText22}
                text1={graphChartLineText23}
                text4={graphChartLineText79}
                text5="Compliance Rate"
              />
              <>
                {visible50 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns12}
                    frameClassNameOverride={graphChartLineFrameClassName3}
                    input="default"
                    lines={graphChartLineLines12}
                    resolution={graphChartLineResolution10}
                    sectionTitleClassName={graphChartLineSectionTitleClassName6}
                    text={graphChartLineText24}
                    text1={graphChartLineText25}
                    text4={graphChartLineText80}
                    text5="Compliance Rate"
                  />
                )}
              </>
              <>
                {visible51 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns13}
                    frameClassNameOverride={graphChartLineFrameClassName4}
                    input="default"
                    lines={graphChartLineLines13}
                    resolution={graphChartLineResolution9}
                    sectionTitleClassName={graphChartLineSectionTitleClassName7}
                    text={graphChartLineText26}
                    text1={graphChartLineText27}
                    text4={graphChartLineText81}
                    text5="Compliance Rate"
                  />
                )}
              </>
              <>
                {visible26 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns31}
                    input="default"
                    lines={graphChartLineLines31}
                    resolution="desktop"
                    text={graphChartLineText84}
                    text1={graphChartLineText82}
                    text4={graphChartLineText83}
                    text5="Compliance Rate"
                  />
                )}
              </>
              <>
                {visible27 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns32}
                    input="default"
                    lines={graphChartLineLines32}
                    resolution="desktop"
                    text={graphChartLineText87}
                    text1={graphChartLineText85}
                    text4={graphChartLineText86}
                    text5="Compliance Rate"
                  />
                )}
              </>
              <>
                {visible28 && (
                  <GraphChartLine
                    className={graphChartLineLinesColumnsClassName3}
                    columns={graphChartLineColumns33}
                    frameClassName={graphChartLineFrameClassName12}
                    graphChartLineClassName={graphChartLineGraphChartLineClassName5}
                    input="default"
                    lines={graphChartLineLines33}
                    resolution="desktop"
                    sectionTitleClassName={graphChartLineSectionTitleClassName17}
                    text={graphChartLineText90}
                    text1={graphChartLineText88}
                    text4={graphChartLineText89}
                    text5="Compliance Rate"
                  />
                )}
              </>
              <>
                {visible29 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns34}
                    input="default"
                    lines={graphChartLineLines34}
                    resolution="desktop"
                    text={graphChartLineText93}
                    text1={graphChartLineText91}
                    text4={graphChartLineText92}
                    text5="Compliance Rate"
                  />
                )}
              </>
              <>
                {visible30 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns={graphChartLineColumns35}
                    input="default"
                    lines={graphChartLineLines35}
                    resolution="desktop"
                    text={graphChartLineText96}
                    text1={graphChartLineText94}
                    text4={graphChartLineText95}
                    text5="Compliance Rate"
                  />
                )}
              </>
              <>
                {visible31 && (
                  <GraphChartLine
                    className="instance-node-4"
                    columns="three"
                    input="default"
                    lines="two"
                    resolution="desktop"
                    text="49.0%"
                    text1="Refinery Source Tests"
                    text4="2,165"
                    text5="Compliance Rate"
                  />
                )}
              </>
              <>
                {visible55 && (
                  <GraphChartTotal
                    className={graphChartTotalLinesResolutionClassNameOverride}
                    graphChartLineColumns={graphChartTotalGraphChartLineColumns1}
                    graphChartLineColumns1={graphChartTotalGraphChartLineColumns6}
                    graphChartLineColumns2="three"
                    graphChartLineDivClassName={graphChartTotalGraphChartLineDivClassName}
                    graphChartLineDivClassNameOverride={graphChartTotalGraphChartLineFrameClassName3}
                    graphChartLineFrameClassName={graphChartTotalGraphChartLineFrameClassName}
                    graphChartLineFrameClassNameOverride={graphChartTotalGraphChartLineFrameClassNameOverride}
                    graphChartLineHasDiv={graphChartTotalGraphChartLineVisible}
                    graphChartLineHasFrame={graphChartTotalGraphChartLineHasDiv}
                    graphChartLineLinesColumnsClassName={graphChartTotalGraphChartLineLinesColumnsClassName}
                    graphChartLineLinesColumnsClassNameOverride="instance-node-4"
                    graphChartLineSectionTitleClassName1={graphChartTotalGraphChartLineSectionTitleClassName6}
                    graphChartLineSectionTitleClassName2={graphChartTotalGraphChartLineSectionTitleClassName7}
                    graphChartLineSectionTitleClassName5={graphChartTotalGraphChartLineSectionTitleClassName8}
                    graphChartLineSectionTitleClassNameOverride={graphChartTotalGraphChartLineSectionTitleClassName5}
                    graphChartLineText={graphChartTotalGraphChartLineText9}
                    graphChartLineText1={graphChartTotalGraphChartLineText2}
                    graphChartLineText10={graphChartTotalGraphChartLineText18}
                    graphChartLineText11={graphChartTotalGraphChartLineText17}
                    graphChartLineText12="49.0%"
                    graphChartLineText13="Total"
                    graphChartLineText14="49.0%"
                    graphChartLineText15="Total"
                    graphChartLineText16="49.0%"
                    graphChartLineText17="Total"
                    graphChartLineText2={graphChartTotalGraphChartLineText15}
                    graphChartLineText3={graphChartTotalGraphChartLineText13}
                    graphChartLineText4={graphChartTotalGraphChartLineText11}
                    graphChartLineText5={graphChartTotalGraphChartLineText14}
                    graphChartLineText6={graphChartTotalGraphChartLineText12}
                    graphChartLineText8="2,165"
                    graphChartLineText9={graphChartTotalGraphChartLineText16}
                    graphChartLineVisible={graphChartTotalGraphChartLineHasFrame1}
                    lines={graphChartTotalLines1}
                    resolution={graphChartTotalResolution}
                  />
                )}
              </>
              <>
                {hasFrame8 && (
                  <div className={`frame-42 ${frameClassNameOverride}`}>
                    <p className={`section-title-64 ${sectionTitleClassName2}`}>{text1}</p>
                  </div>
                )}
              </>
            </>
          )}
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
  graphChartTotalGraphChartLineHasFrame: PropTypes.bool,
  graphChartTotalGraphChartLineText: PropTypes.string,
  graphChartTotalGraphChartLineColumns: PropTypes.string,
  graphChartTotalLines: PropTypes.string,
  graphChartTotalGraphChartLineText1: PropTypes.string,
  text1: PropTypes.string,
  visible7: PropTypes.bool,
  hasGroupWrapper: PropTypes.bool,
  hasDiv: PropTypes.bool,
  graphChartLineText8: PropTypes.string,
  graphChartLineLines4: PropTypes.string,
  graphChartLineColumns4: PropTypes.string,
  graphChartLineText9: PropTypes.string,
  graphChartLineText10: PropTypes.string,
  graphChartLineLines5: PropTypes.string,
  graphChartLineColumns5: PropTypes.string,
  graphChartLineText11: PropTypes.string,
  graphChartLineText12: PropTypes.string,
  graphChartLineLines6: PropTypes.string,
  graphChartLineColumns6: PropTypes.string,
  graphChartLineText13: PropTypes.string,
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
  graphChartTotalLines1: PropTypes.string,
  graphChartTotalGraphChartLineColumns1: PropTypes.string,
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
  graphChartLineText40: PropTypes.string,
  graphChartLineLines20: PropTypes.string,
  graphChartLineColumns20: PropTypes.string,
  graphChartLineText41: PropTypes.string,
  graphChartLineText42: PropTypes.string,
  graphChartLineLines21: PropTypes.string,
  graphChartLineColumns21: PropTypes.string,
  graphChartLineText43: PropTypes.string,
  graphChartTotalGraphChartLineText3: PropTypes.string,
  graphChartTotalGraphChartLineColumns2: PropTypes.string,
  graphChartTotalLines2: PropTypes.string,
  graphChartTotalGraphChartLineText4: PropTypes.string,
  graphChartLineText44: PropTypes.string,
  graphChartLineLines22: PropTypes.string,
  graphChartLineColumns22: PropTypes.string,
  graphChartLineText45: PropTypes.string,
  graphChartTotalGraphChartLineText5: PropTypes.string,
  graphChartTotalGraphChartLineColumns3: PropTypes.string,
  graphChartTotalLines3: PropTypes.string,
  graphChartTotalGraphChartLineText6: PropTypes.string,
  hasFrame6: PropTypes.bool,
  graphChartLineText46: PropTypes.string,
  graphChartLineText47: PropTypes.string,
  graphChartLineText48: PropTypes.string,
  graphChartLineText49: PropTypes.string,
  graphChartLineLines23: PropTypes.string,
  graphChartLineColumns23: PropTypes.string,
  graphChartLineText50: PropTypes.string,
  graphChartLineText51: PropTypes.string,
  graphChartLineText52: PropTypes.string,
  graphChartLineLines24: PropTypes.string,
  graphChartLineColumns24: PropTypes.string,
  graphChartTotalGraphChartLineText7: PropTypes.string,
  graphChartTotalLines4: PropTypes.string,
  graphChartTotalGraphChartLineColumns4: PropTypes.string,
  graphChartLineText53: PropTypes.string,
  graphChartLineText54: PropTypes.string,
  graphChartLineText55: PropTypes.string,
  graphChartLineText56: PropTypes.string,
  graphChartLineText57: PropTypes.string,
  graphChartLineLines25: PropTypes.string,
  graphChartLineColumns25: PropTypes.string,
  graphChartTotalGraphChartLineText8: PropTypes.string,
  graphChartTotalLines5: PropTypes.string,
  graphChartTotalGraphChartLineColumns5: PropTypes.string,
  hasFrame7: PropTypes.bool,
  graphChartLineResolution6: PropTypes.string,
  graphChartLineText58: PropTypes.string,
  graphChartLineResolution7: PropTypes.string,
  graphChartLineResolution8: PropTypes.string,
  visible50: PropTypes.bool,
  graphChartLineResolution9: PropTypes.string,
  graphChartTotalGraphChartLineHasDiv: PropTypes.bool,
  graphChartTotalResolution: PropTypes.string,
  graphChartTotalGraphChartLineText9: PropTypes.string,
  hasFrame8: PropTypes.bool,
  graphChartLineResolution10: PropTypes.string,
  visible51: PropTypes.bool,
  hasFrame9: PropTypes.bool,
  graphChartLineText59: PropTypes.string,
  graphChartLineText60: PropTypes.string,
  graphChartLineText61: PropTypes.string,
  graphChartLineText62: PropTypes.string,
  graphChartLineText63: PropTypes.string,
  graphChartLineText64: PropTypes.string,
  graphChartLineLines26: PropTypes.string,
  graphChartLineText65: PropTypes.string,
  graphChartLineText66: PropTypes.string,
  graphChartLineText67: PropTypes.string,
  graphChartLineLines27: PropTypes.string,
  graphChartLineText68: PropTypes.string,
  graphChartLineText69: PropTypes.string,
  graphChartLineText70: PropTypes.string,
  graphChartLineLines28: PropTypes.string,
  graphChartLineText71: PropTypes.string,
  graphChartLineText72: PropTypes.string,
  graphChartLineText73: PropTypes.string,
  graphChartLineLines29: PropTypes.string,
  graphChartLineText74: PropTypes.string,
  graphChartLineText75: PropTypes.string,
  graphChartLineText76: PropTypes.string,
  graphChartLineLines30: PropTypes.string,
  graphChartLineText77: PropTypes.string,
  graphChartTotalGraphChartLineText10: PropTypes.string,
  graphChartLineColumns26: PropTypes.string,
  graphChartLineColumns27: PropTypes.string,
  graphChartLineColumns28: PropTypes.string,
  graphChartLineColumns29: PropTypes.string,
  graphChartLineColumns30: PropTypes.string,
  hasFrame10: PropTypes.bool,
  visible52: PropTypes.bool,
  visible53: PropTypes.bool,
  visible54: PropTypes.bool,
  graphChartTotalGraphChartLineText11: PropTypes.string,
  graphChartTotalGraphChartLineText12: PropTypes.string,
  graphChartTotalGraphChartLineText13: PropTypes.string,
  graphChartTotalGraphChartLineText14: PropTypes.string,
  graphChartTotalGraphChartLineVisible: PropTypes.bool,
  graphChartTotalGraphChartLineHasFrame1: PropTypes.bool,
  graphChartTotalGraphChartLineColumns6: PropTypes.string,
  hasFrame11: PropTypes.bool,
  graphChartLineText78: PropTypes.string,
  graphChartLineText79: PropTypes.string,
  graphChartLineText80: PropTypes.string,
  graphChartLineText81: PropTypes.string,
  graphChartLineText82: PropTypes.string,
  graphChartLineText83: PropTypes.string,
  graphChartLineLines31: PropTypes.string,
  graphChartLineText84: PropTypes.string,
  graphChartLineText85: PropTypes.string,
  graphChartLineText86: PropTypes.string,
  graphChartLineLines32: PropTypes.string,
  graphChartLineText87: PropTypes.string,
  graphChartLineText88: PropTypes.string,
  graphChartLineText89: PropTypes.string,
  graphChartLineLines33: PropTypes.string,
  graphChartLineText90: PropTypes.string,
  graphChartLineText91: PropTypes.string,
  graphChartLineText92: PropTypes.string,
  graphChartLineLines34: PropTypes.string,
  graphChartLineText93: PropTypes.string,
  graphChartLineText94: PropTypes.string,
  graphChartLineText95: PropTypes.string,
  graphChartLineLines35: PropTypes.string,
  graphChartLineText96: PropTypes.string,
  graphChartTotalGraphChartLineText15: PropTypes.string,
  graphChartLineColumns31: PropTypes.string,
  graphChartLineColumns32: PropTypes.string,
  graphChartLineColumns33: PropTypes.string,
  graphChartLineColumns34: PropTypes.string,
  graphChartLineColumns35: PropTypes.string,
  graphChartTotalGraphChartLineText16: PropTypes.string,
  visible55: PropTypes.bool,
  graphChartTotalGraphChartLineText17: PropTypes.string,
  graphChartTotalGraphChartLineText18: PropTypes.string,
};

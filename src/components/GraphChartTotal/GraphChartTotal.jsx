/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { GraphChartLine } from "../GraphChartLine";
import "./style.css";

export const GraphChartTotal = ({
  lines,
  resolution,
  className,
  graphChartLineGraphChartLineClassName,
  graphChartLineSectionTitleClassName,
  graphChartLineText = "TOTAL FUNDS AWARDED",
  graphChartLineHasFrame,
  graphChartLineSectionTitleClassNameOverride,
  graphChartLineColumns = "three",
  graphChartLineText1 = "49.0%",
  graphChartLineFrameClassName,
  graphChartLineDivClassName,
  graphChartLineFrameClassNameOverride,
  graphChartLineDivClassNameOverride,
  graphChartLineLinesColumnsClassName,
  graphChartLineText2 = "2,165",
  graphChartLineText3 = "TOTAL FUNDS AWARDED",
  graphChartLineHasDiv,
  graphChartLineSectionTitleClassName1,
  graphChartLineColumns1 = "three",
  graphChartLineText4 = "49.0%",
  graphChartLineText5 = "TOTAL FUNDS AWARDED",
  graphChartLineVisible,
  graphChartLineSectionTitleClassName2,
  graphChartLineText6 = "49.0%",
  graphChartLineGraphChartLineClassNameOverride,
  graphChartLineText7 = "TOTAL FUNDS AWARDED",
  graphChartLineSectionTitleClassName3,
  graphChartLineLinesColumnsClassNameOverride,
  graphChartLineHasSectionTitle,
  graphChartLineSectionTitleClassName4,
  graphChartLineText8 = "2,165",
  graphChartLineFrameClassName1,
  visible = true,
  visible1 = true,
  graphChartLineText9 = "Total",
  graphChartLineText10 = "Total",
  graphChartLineSectionTitleClassName5,
  graphChartLineText11 = "Total",
  graphChartLineText12 = "49.0%",
  graphChartLineFrameWrapperClassName,
  graphChartLineColumns2 = "three",
  graphChartLineSectionTitleClassName6,
  graphChartLineText13 = "Total",
  graphChartLineText14 = "49.0%",
  graphChartLineFrameWrapperClassNameOverride,
  graphChartLineSectionTitleClassName7,
  graphChartLineText15 = "Total",
  graphChartLineText16 = "49.0%",
  graphChartLineFrameClassName2,
  graphChartLineSectionTitleClassName8,
  graphChartLineText17 = "Total",
  graphChartLineSectionTitleClassName9,
  graphChartLineFrameClassName3,
  graphChartLineSectionTitleClassName10,
  graphChartLineFrameClassName4,
}) => {
  return (
    <div className={`graph-chart-total lines-4-${lines} resolution-112-${resolution} ${className}`}>
      {lines === "three" && (
        <>
          <GraphChartLine
            className={graphChartLineLinesColumnsClassNameOverride}
            columns={graphChartLineColumns2}
            divClassNameOverride={graphChartLineFrameClassName1}
            frameClassNameOverride={graphChartLineFrameWrapperClassName}
            graphChartLineClassNameOverride={graphChartLineGraphChartLineClassNameOverride}
            hasSectionTitle={graphChartLineHasSectionTitle}
            input={resolution === "mobile" ? "title" : "total"}
            lines="one"
            resolution={resolution === "mobile" ? "mobile" : "desktop"}
            sectionTitleClassName={graphChartLineSectionTitleClassName6}
            sectionTitleClassName2={graphChartLineSectionTitleClassName3}
            sectionTitleClassNameOverride={graphChartLineSectionTitleClassName4}
            text={graphChartLineText12}
            text2={graphChartLineText7}
            text4={graphChartLineText8}
            text6={graphChartLineText13}
          />
          <>
            {visible && (
              <GraphChartLine
                className="graph-chart-line-5"
                columns="two"
                divClassNameOverride={graphChartLineFrameClassName3}
                frameClassNameOverride={graphChartLineFrameWrapperClassNameOverride}
                input={resolution === "mobile" ? "title" : "total"}
                lines="one"
                resolution={resolution === "mobile" ? "mobile" : "desktop"}
                sectionTitleClassName={graphChartLineSectionTitleClassName7}
                sectionTitleClassNameOverride={graphChartLineSectionTitleClassName9}
                text={graphChartLineText14}
                text2={resolution === "mobile" ? "TOTAL FUNDS AWARDED" : undefined}
                text6={graphChartLineText15}
              />
            )}
          </>
          <>
            {visible1 && (
              <GraphChartLine
                className="graph-chart-line-5"
                columns="two"
                divClassNameOverride={graphChartLineFrameClassName4}
                frameClassNameOverride={graphChartLineFrameClassName2}
                input={resolution === "mobile" ? "title" : "total"}
                lines="one"
                resolution={resolution === "mobile" ? "mobile" : "desktop"}
                sectionTitleClassName={graphChartLineSectionTitleClassName8}
                sectionTitleClassNameOverride={graphChartLineSectionTitleClassName10}
                text={graphChartLineText16}
                text2={resolution === "mobile" ? "TOTAL FUNDS AWARDED" : undefined}
                text6={graphChartLineText17}
              />
            )}
          </>
        </>
      )}

      {lines === "two" && (
        <>
          <GraphChartLine
            className="graph-chart-line-5"
            columns={graphChartLineColumns1}
            hasFrame={graphChartLineHasDiv}
            input={resolution === "desktop" ? "total" : "title"}
            lines="one"
            resolution={resolution === "desktop" ? "desktop" : "mobile"}
            sectionTitleClassNameOverride={graphChartLineSectionTitleClassName1}
            text={graphChartLineText4}
            text2={graphChartLineText3}
            text4="2,165"
            text6={graphChartLineText10}
          />
          <GraphChartLine
            className="graph-chart-line-5"
            columns="two"
            hasFrame={graphChartLineVisible}
            input={resolution === "desktop" ? "total" : "title"}
            lines="one"
            resolution={resolution === "desktop" ? "desktop" : "mobile"}
            sectionTitleClassName={graphChartLineSectionTitleClassName5}
            sectionTitleClassNameOverride={graphChartLineSectionTitleClassName2}
            text={graphChartLineText6}
            text2={graphChartLineText5}
            text6={graphChartLineText11}
          />
        </>
      )}

      {lines === "one" && (
        <GraphChartLine
          className={graphChartLineLinesColumnsClassName}
          columns={graphChartLineColumns}
          divClassName={graphChartLineSectionTitleClassName}
          divClassNameOverride={graphChartLineDivClassNameOverride}
          frameClassName={graphChartLineFrameClassNameOverride}
          frameClassNameOverride={graphChartLineFrameClassName}
          graphChartLineClassNameOverride={graphChartLineGraphChartLineClassName}
          hasFrame={graphChartLineHasFrame}
          input={resolution === "desktop" ? "total" : "title"}
          lines="one"
          resolution={resolution === "desktop" ? "desktop" : "mobile"}
          sectionTitleClassName={graphChartLineDivClassName}
          sectionTitleClassNameOverride={graphChartLineSectionTitleClassNameOverride}
          text={graphChartLineText1}
          text2={graphChartLineText}
          text4={graphChartLineText2}
          text6={graphChartLineText9}
        />
      )}
    </div>
  );
};

GraphChartTotal.propTypes = {
  lines: PropTypes.oneOf(["two", "three", "one"]),
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  graphChartLineText: PropTypes.string,
  graphChartLineHasFrame: PropTypes.bool,
  graphChartLineColumns: PropTypes.string,
  graphChartLineText1: PropTypes.string,
  graphChartLineText2: PropTypes.string,
  graphChartLineText3: PropTypes.string,
  graphChartLineHasDiv: PropTypes.bool,
  graphChartLineColumns1: PropTypes.string,
  graphChartLineText4: PropTypes.string,
  graphChartLineText5: PropTypes.string,
  graphChartLineVisible: PropTypes.bool,
  graphChartLineText6: PropTypes.string,
  graphChartLineText7: PropTypes.string,
  graphChartLineHasSectionTitle: PropTypes.bool,
  graphChartLineText8: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  graphChartLineText9: PropTypes.string,
  graphChartLineText10: PropTypes.string,
  graphChartLineText11: PropTypes.string,
  graphChartLineText12: PropTypes.string,
  graphChartLineColumns2: PropTypes.string,
  graphChartLineText13: PropTypes.string,
  graphChartLineText14: PropTypes.string,
  graphChartLineText15: PropTypes.string,
  graphChartLineText16: PropTypes.string,
  graphChartLineText17: PropTypes.string,
};

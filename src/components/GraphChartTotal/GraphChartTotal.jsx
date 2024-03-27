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
  graphChartLineText = "49.0%",
  graphChartLineText1 = "TOTAL FUNDS AWARDED",
  graphChartLineHasFrame,
  graphChartLineColumns = "three",
  graphChartLineSectionTitleClassNameOverride,
  graphChartLineDivClassName,
  graphChartLineLinesColumnsClassName,
  graphChartLineGraphChartLineClassNameOverride,
  graphChartLineFrameClassName,
  graphChartLineFrameClassNameOverride,
  graphChartLineDivClassNameOverride,
  graphChartLineFrameClassName1,
  graphChartLineSectionTitleClassName1,
  graphChartLineFrameClassName2,
  graphChartLineSectionTitleClassName2,
}) => {
  return (
    <div className={`graph-chart-total resolution-101-${resolution} ${className}`}>
      {lines === "three" && (
        <>
          <GraphChartLine
            className={`${resolution === "mobile" ? "class-9" : "class-10"}`}
            columns="three"
            divClassNameOverride={graphChartLineFrameClassNameOverride}
            input={resolution === "mobile" ? "title" : "total"}
            lines="one"
            resolution={resolution === "mobile" ? "mobile" : "desktop"}
            sectionTitleClassNameOverride={graphChartLineDivClassNameOverride}
            text="49.0%"
            text2={resolution === "mobile" ? "TOTAL FUNDS AWARDED" : undefined}
          />
          <GraphChartLine
            className={`${resolution === "mobile" ? "class-9" : "class-10"}`}
            columns="two"
            divClassNameOverride={graphChartLineFrameClassName1}
            input={resolution === "mobile" ? "title" : "total"}
            lines="one"
            resolution={resolution === "mobile" ? "mobile" : "desktop"}
            sectionTitleClassNameOverride={graphChartLineSectionTitleClassName1}
            text="49.0%"
            text2={resolution === "mobile" ? "TOTAL FUNDS AWARDED" : undefined}
          />
          <GraphChartLine
            className={`${resolution === "mobile" ? "class-9" : "class-10"}`}
            columns="two"
            divClassNameOverride={graphChartLineFrameClassName2}
            input={resolution === "mobile" ? "title" : "total"}
            lines="one"
            resolution={resolution === "mobile" ? "mobile" : "desktop"}
            sectionTitleClassNameOverride={graphChartLineSectionTitleClassName2}
            text="49.0%"
            text2={resolution === "mobile" ? "TOTAL FUNDS AWARDED" : undefined}
          />
        </>
      )}

      {lines === "two" && (
        <>
          <GraphChartLine
            className={`${resolution === "desktop" ? "class-10" : "class-9"}`}
            columns="three"
            input={resolution === "desktop" ? "total" : "title"}
            lines="one"
            resolution={resolution === "desktop" ? "desktop" : "mobile"}
            text="49.0%"
            text2={resolution === "mobile" ? "TOTAL FUNDS AWARDED" : undefined}
          />
          <GraphChartLine
            className={`${resolution === "desktop" ? "class-10" : "class-9"}`}
            columns="two"
            input={resolution === "desktop" ? "total" : "title"}
            lines="one"
            resolution={resolution === "desktop" ? "desktop" : "mobile"}
            text="49.0%"
            text2={resolution === "mobile" ? "TOTAL FUNDS AWARDED" : undefined}
          />
        </>
      )}

      {lines === "one" && (
        <GraphChartLine
          className={graphChartLineLinesColumnsClassName}
          columns={graphChartLineColumns}
          divClassName={graphChartLineSectionTitleClassName}
          frameClassNameOverride={graphChartLineFrameClassName}
          graphChartLineClassName={graphChartLineGraphChartLineClassNameOverride}
          graphChartLineClassNameOverride={graphChartLineGraphChartLineClassName}
          hasFrame={graphChartLineHasFrame}
          input={resolution === "desktop" ? "total" : "title"}
          lines="one"
          resolution={resolution === "desktop" ? "desktop" : "mobile"}
          sectionTitleClassName={graphChartLineDivClassName}
          sectionTitleClassNameOverride={graphChartLineSectionTitleClassNameOverride}
          text={graphChartLineText}
          text2={graphChartLineText1}
        />
      )}
    </div>
  );
};

GraphChartTotal.propTypes = {
  lines: PropTypes.oneOf(["two", "three", "one"]),
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  graphChartLineText: PropTypes.string,
  graphChartLineText1: PropTypes.string,
  graphChartLineHasFrame: PropTypes.bool,
  graphChartLineColumns: PropTypes.string,
};

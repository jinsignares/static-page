/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GraphChartLine = ({
  lines,
  columns,
  input,
  resolution,
  className,
  graphChartLineClassName,
  sectionTitleClassName,
  frameClassName,
  text = "49.0%",
  text1 = "Refinery Source Tests",
  frameClassNameOverride,
  graphChartLineClassNameOverride,
  sectionTitleClassNameOverride,
  text2 = "TOTAL FUNDS AWARDED",
  hasFrame = true,
  divClassName,
  text3 = "4*",
  divClassNameOverride,
  text4 = "2,165",
  sectionTitleClassName1,
  frameClassName1,
  sectionTitleClassName2,
  sectionTitleClassName3,
  text5 = "Compliance Rate",
  hasGraphChartLine = true,
  hasSectionTitle = true,
  text6 = "Total",
  frameWrapperClassName,
  frameWrapperClassNameOverride,
  sectionTitleWrapperClassName,
}) => {
  return (
    <div
      className={`graph-chart-line resolution-58-${resolution} input-${input} columns-2-${columns} lines-${lines} ${className}`}
    >
      {(lines === "two" || (input === "title" && resolution === "mobile")) && (
        <>
          <div className={`div-2 ${graphChartLineClassNameOverride}`}>
            {input === "default" && (
              <>
                <div className={`section-title-16 ${sectionTitleClassName1}`}>{text1}</div>
                <div className={`frame-24 ${frameWrapperClassNameOverride}`}>
                  {resolution === "desktop" && columns === "three" && (
                    <>
                      <div className="section-title-17">{text4}</div>
                      <div className="section-title-18">{text}</div>
                    </>
                  )}

                  {(columns === "two" || (columns === "three" && resolution === "mobile")) && (
                    <div className={`frame-25 ${frameWrapperClassName}`}>
                      {resolution === "mobile" && (
                        <div className={`frame-26 ${frameClassName1}`}>
                          {columns === "three" && (
                            <>
                              <div className="frame-27">
                                <div className="section-title-19">{text4}</div>
                              </div>
                              <div className="section-title-20">{text}</div>
                            </>
                          )}

                          {columns === "two" && <>{text}</>}
                        </div>
                      )}

                      {resolution === "desktop" && <>{text}</>}
                    </div>
                  )}
                </div>
              </>
            )}

            {input === "title" && (
              <div className="div-3">
                <div className={`section-title-21 ${sectionTitleClassNameOverride}`}>{text2}</div>
                {hasFrame && <div className={`frame-28 ${divClassNameOverride}`} />}
              </div>
            )}
          </div>
          <>
            {hasGraphChartLine && (
              <div className="div-4">
                {(input === "default" || (columns === "three" && input === "title")) && (
                  <>
                    <div className={`section-title-22 ${sectionTitleClassName2}`}>
                      {input === "default" && <>{text5}</>}

                      {input === "title" && <>{text4}</>}
                    </div>
                    <>
                      {hasSectionTitle && (
                        <div className={`frame-29 ${sectionTitleWrapperClassName}`}>
                          {input === "default" && columns === "three" && (
                            <>
                              <div className="section-title-23">{text4}</div>
                              <div className="section-title-24">{text}</div>
                            </>
                          )}

                          {columns === "two" && (
                            <div className={`section-title-25 ${sectionTitleClassName3}`}>{text}</div>
                          )}

                          {input === "title" && <>{text}</>}
                        </div>
                      )}
                    </>
                  </>
                )}

                {lines === "one" && columns === "two" && (
                  <div className={`section-title-26 ${divClassName}`}>{text}</div>
                )}
              </div>
            )}
          </>
        </>
      )}

      {(input === "total-sl" ||
        input === "total" ||
        (input === "default" && lines === "one") ||
        (input === "title" && resolution === "desktop")) && (
        <div className={`div-5 ${graphChartLineClassName}`}>
          <div className={`section-title-27 ${sectionTitleClassName}`}>
            {input === "default" && <>{text1}</>}

            {["total-sl", "total"].includes(input) && <>{text6}</>}

            {input === "title" && <>{text2}</>}
          </div>
          <div className={`frame-30 ${frameClassName}`}>
            {(columns === "two" || (columns === "three" && resolution === "mobile")) && (
              <div className={`frame-31 ${frameClassNameOverride}`}>
                {columns === "three" && (
                  <div className="frame-32">
                    <div className="frame-27">
                      <div className="section-title-19">{text4}</div>
                    </div>
                    <div className="section-title-20">{text}</div>
                  </div>
                )}

                {(resolution === "desktop" || (columns === "two" && resolution === "mobile")) && <>{text}</>}

                {resolution === "desktop_1" && <>{text3}</>}
              </div>
            )}

            {resolution === "desktop" && columns === "three" && (
              <>
                <div className="section-title-17">{text4}</div>
                <div className="section-title-18">{text}</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

GraphChartLine.propTypes = {
  lines: PropTypes.oneOf(["two", "one"]),
  columns: PropTypes.oneOf(["two", "three"]),
  input: PropTypes.oneOf(["title", "total-sl", "total", "default"]),
  resolution: PropTypes.oneOf(["desktop", "mobile", "desktop_1"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  hasFrame: PropTypes.bool,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  hasGraphChartLine: PropTypes.bool,
  hasSectionTitle: PropTypes.bool,
  text6: PropTypes.string,
};

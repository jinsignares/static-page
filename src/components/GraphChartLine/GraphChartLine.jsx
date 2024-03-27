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
}) => {
  return (
    <div
      className={`graph-chart-line resolution-47-${resolution} input-${input} columns-1-${columns} lines-${lines} ${className}`}
    >
      {(lines === "two" || (input === "title" && resolution === "mobile")) && (
        <>
          <div className={`div-2 ${graphChartLineClassNameOverride}`}>
            {input === "default" && (
              <>
                <div className="section-title-15">{text1}</div>
                <div className="frame-22">
                  {resolution === "desktop" && columns === "three" && (
                    <>
                      <div className="section-title-16">2,165</div>
                      <div className="section-title-17">{text}</div>
                    </>
                  )}

                  {(columns === "two" || (columns === "three" && resolution === "mobile")) && (
                    <div className="frame-23">
                      {resolution === "mobile" && (
                        <div className="frame-24">
                          {columns === "three" && (
                            <>
                              <div className="frame-25">
                                <div className="section-title-18">2,165</div>
                              </div>
                              <div className="section-title-19">{text}</div>
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
                <div className={`section-title-20 ${sectionTitleClassNameOverride}`}>{text2}</div>
                {hasFrame && <div className={`frame-26 ${divClassNameOverride}`} />}
              </div>
            )}
          </div>
          <div className="div-4">
            {(input === "default" || (columns === "three" && input === "title")) && (
              <>
                <div className="section-title-21">
                  {input === "default" && <>Compliance Rate</>}

                  {input === "title" && <>2,165</>}
                </div>
                <div className="frame-27">
                  {input === "default" && columns === "three" && <div className="section-title-22">2,165</div>}

                  {input === "default" && <div className="section-title-23">{text}</div>}

                  {input === "title" && <>{text}</>}
                </div>
              </>
            )}

            {lines === "one" && columns === "two" && <div className={`section-title-24 ${divClassName}`}>{text}</div>}
          </div>
        </>
      )}

      {(input === "total-sl" ||
        input === "total" ||
        (input === "default" && lines === "one") ||
        (input === "title" && resolution === "desktop")) && (
        <div className={`div-5 ${graphChartLineClassName}`}>
          <div className={`section-title-25 ${sectionTitleClassName}`}>
            {input === "default" && <>{text1}</>}

            {["total-sl", "total"].includes(input) && <>Total</>}

            {input === "title" && <>{text2}</>}
          </div>
          <div className={`frame-28 ${frameClassName}`}>
            {(columns === "two" || (columns === "three" && resolution === "mobile")) && (
              <div className={`frame-29 ${frameClassNameOverride}`}>
                {columns === "three" && (
                  <div className="frame-30">
                    <div className="frame-25">
                      <div className="section-title-18">2,165</div>
                    </div>
                    <div className="section-title-19">{text}</div>
                  </div>
                )}

                {(resolution === "desktop" || (columns === "two" && resolution === "mobile")) && <>{text}</>}

                {resolution === "desktop_1" && <>{text3}</>}
              </div>
            )}

            {resolution === "desktop" && columns === "three" && (
              <>
                <div className="section-title-16">2,165</div>
                <div className="section-title-17">{text}</div>
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
};

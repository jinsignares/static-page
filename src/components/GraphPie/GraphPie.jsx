/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GraphPie = ({
  title,
  resolution,
  chart,
  subtitle,
  className,
  groupClassName,
  overlapGroupClassName,
  clipPathGroup = "/img/clip-path-group-5.png",
  overlapGroupClassNameOverride,
  img = "/img/clip-path-group-7.png",
  clipPathGroup1 = "/img/clip-path-group-9.png",
  frameClassName,
  clipPathGroup2 = "/img/clip-path-group-3.png",
  clipPathGroup3 = "/img/clip-path-group-10.png",
  clipPathGroup4 = "/img/clip-path-group-11.png",
  text = "Subtitle",
  groupClassNameOverride,
  layer = "/img/layer-1-4.png",
  layer1 = "/img/layer-1-10.png",
  frameClassNameOverride,
  overlapGroupWrapperClassName,
  layer2 = "/img/layer-1-6.png",
  vector = "/img/vector-21.png",
  overlapGroupWrapperClassNameOverride,
  vectorClassName,
  vector1 = "/img/vector.png",
  vectorClassNameOverride,
  sectionTitleClassName,
}) => {
  return (
    <div
      className={`graph-pie resolution-73-${resolution} ${chart} title-2-${title} subtitle-${subtitle} ${className}`}
    >
      <div className={`frame-33 ${frameClassName}`}>
        {!title && (
          <div className={`group-2 ${groupClassName}`}>
            {chart === "example" && (
              <div className={`overlap-group-2 ${overlapGroupWrapperClassNameOverride}`}>
                {resolution === "desktop" && (
                  <>
                    <img className={`vector ${vectorClassName}`} alt="Vector" src={vector1} />
                    <img className={`vector-2 ${vectorClassNameOverride}`} alt="Vector" src={vector} />
                    <div className={`section-title-28 ${sectionTitleClassName}`}>51%</div>
                    <div className="section-title-29">49%</div>
                  </>
                )}

                {resolution === "mobile" && (
                  <div className="overlap-group-3">
                    <img className="vector-3" alt="Vector" src="/img/vector-22.png" />
                    <img className="vector-4" alt="Vector" src="/img/vector-23.png" />
                    <div className="section-title-30">51%</div>
                    <div className="section-title-29">49%</div>
                  </div>
                )}
              </div>
            )}

            {["chart-1", "chart-2", "chart-3"].includes(chart) && (
              <div
                className={`overlap-group-4 ${
                  chart === "chart-1" || (chart === "chart-3" && resolution === "mobile-sm")
                    ? overlapGroupClassName
                    : chart === "chart-2" ||
                      (chart === "chart-3" && resolution === "desktop") ||
                      (chart === "chart-3" && resolution === "mobile")
                    ? overlapGroupClassNameOverride
                    : undefined
                }`}
              >
                <img
                  className="clip-path-group"
                  alt="Clip path group"
                  src={
                    resolution === "mobile" && chart === "chart-2"
                      ? "/img/clip-path-group-6.png"
                      : chart === "chart-2" && resolution === "mobile-sm"
                      ? img
                      : resolution === "desktop" && chart === "chart-2"
                      ? clipPathGroup3
                      : chart === "chart-1" && resolution === "desktop"
                      ? clipPathGroup2
                      : resolution === "mobile" && chart === "chart-1"
                      ? "/img/clip-path-group-4.png"
                      : chart === "chart-1" && resolution === "mobile-sm"
                      ? clipPathGroup
                      : resolution === "mobile" && chart === "chart-3"
                      ? "/img/clip-path-group-8.png"
                      : resolution === "desktop" && chart === "chart-3"
                      ? clipPathGroup4
                      : clipPathGroup1
                  }
                />
                <div className="element">
                  {chart === "chart-1" && <>18.9%</>}

                  {chart === "chart-3" && <>33.3%</>}

                  {chart === "chart-2" && <>18.1%</>}
                </div>
                <div className="element-2">
                  {chart === "chart-1" && <>13.1%</>}

                  {chart === "chart-3" && <>21.1%</>}

                  {chart === "chart-2" && <>7.2%</>}
                </div>
                <div className="element-3">
                  {chart === "chart-1" && <>8.0%</>}

                  {chart === "chart-3" && ["desktop", "mobile"].includes(resolution) && <>10.1%</>}

                  {resolution === "mobile-sm" && chart === "chart-3" && <>6.0%</>}

                  {chart === "chart-2" && <>14.1%</>}
                </div>
                {(chart === "chart-2" || (chart === "chart-3" && resolution === "mobile-sm")) && (
                  <div className="element-4">
                    {chart === "chart-3" && <>10.1%</>}

                    {chart === "chart-2" && <>13.7%</>}
                  </div>
                )}
              </div>
            )}

            {["chart-1", "chart-2", "chart-3"].includes(chart) && (
              <>
                <div className="element-5">
                  {chart === "chart-2" && <>15.8%</>}

                  {chart === "chart-3" && <>9.6%</>}

                  {chart === "chart-1" && <>39.1%</>}
                </div>
                <div className="element-6">
                  {chart === "chart-2" && <>13.6%</>}

                  {chart === "chart-3" && <>8.6%</>}

                  {chart === "chart-1" && <>11.7%</>}
                </div>
              </>
            )}

            {chart === "demo-race" && (
              <div className="overlap-group-5">
                {resolution === "desktop" && (
                  <>
                    <div className="section-title-31">24%</div>
                    <div className="section-title-32">20%</div>
                  </>
                )}

                <img
                  className="layer"
                  alt="Layer"
                  src={
                    resolution === "mobile"
                      ? "/img/layer-1-7-2x.png"
                      : resolution === "desktop"
                      ? "/img/layer-1-6.png"
                      : undefined
                  }
                />
                {resolution === "mobile" && (
                  <>
                    <div className="section-title-33">24%</div>
                    <div className="section-title-34">20%</div>
                  </>
                )}
              </div>
            )}

            {(chart === "chart-2" ||
              (chart === "chart-3" && resolution === "desktop") ||
              (chart === "chart-3" && resolution === "mobile")) && (
              <div className="element-7">
                {chart === "chart-2" && <>9.8%</>}

                {chart === "chart-3" && <>6.0%</>}
              </div>
            )}

            {chart === "demo-gender" && (
              <img
                className={`layer-2 ${overlapGroupClassName}`}
                alt="Layer"
                src={
                  resolution === "desktop"
                    ? "/img/layer-1.png"
                    : resolution === "mobile"
                    ? "/img/layer-1-3.png"
                    : undefined
                }
              />
            )}

            {["demo-gender", "demo-race"].includes(chart) && (
              <>
                <div className="section-title-35">
                  {chart === "demo-gender" && <>50%</>}

                  {chart === "demo-race" && <>47%</>}
                </div>
                <div className="section-title-36">
                  {chart === "demo-gender" && <>50%</>}

                  {chart === "demo-race" && <>4%</>}
                </div>
              </>
            )}

            {chart === "demo-race" && (
              <>
                <div className="section-title-37">1%</div>
                <div className="section-title-38">5%</div>
              </>
            )}
          </div>
        )}

        {((title && !subtitle) || (subtitle && resolution === "desktop")) && (
          <div className={`frame-34 ${frameClassNameOverride}`}>
            {!subtitle && <div className="section-title-39">Bay Area</div>}

            {subtitle && (
              <>
                <div className="frame-35">
                  <div className="section-title-40">Bay Area</div>
                </div>
                <div className="frame-36">
                  <div className="section-title-41">{text}</div>
                </div>
              </>
            )}
          </div>
        )}

        {subtitle && resolution === "mobile" && (
          <>
            <div className="frame-37">
              <div className="section-title-42">Bay Area</div>
            </div>
            <div className="section-title-43">{text}</div>
          </>
        )}

        {title && (
          <div
            className={`group-3 ${
              !subtitle || resolution === "desktop"
                ? overlapGroupWrapperClassName
                : subtitle && resolution === "mobile"
                ? groupClassNameOverride
                : undefined
            }`}
          >
            {chart === "example" && (
              <div className="overlap-group-6">
                <img
                  className="vector-5"
                  alt="Vector"
                  src={
                    resolution === "desktop"
                      ? "/img/vector.png"
                      : resolution === "mobile"
                      ? "/img/vector-22.png"
                      : undefined
                  }
                />
                <img
                  className="vector-6"
                  alt="Vector"
                  src={
                    resolution === "desktop"
                      ? "/img/vector-21.png"
                      : resolution === "mobile"
                      ? "/img/vector-23.png"
                      : undefined
                  }
                />
                <div className="section-title-44">51%</div>
                <div className="section-title-45">49%</div>
              </div>
            )}

            {chart === "demo-race" && (
              <div className="overlap-group-7">
                {resolution === "desktop" && (
                  <>
                    <div className="section-title-31">24%</div>
                    <div className="section-title-32">20%</div>
                  </>
                )}

                <img
                  className="layer-3"
                  alt="Layer"
                  src={
                    resolution === "mobile" && !subtitle
                      ? "/img/layer-1-10.png"
                      : subtitle && resolution === "mobile"
                      ? layer1
                      : resolution === "desktop"
                      ? layer2
                      : undefined
                  }
                />
                {resolution === "mobile" && (
                  <>
                    <div className="section-title-33">24%</div>
                    <div className="section-title-34">20%</div>
                  </>
                )}
              </div>
            )}

            {chart === "demo-gender" && (
              <img
                className="layer-4"
                alt="Layer"
                src={
                  resolution === "desktop"
                    ? "/img/layer-1.png"
                    : resolution === "mobile" && !subtitle
                    ? "/img/layer-1-4.png"
                    : subtitle && resolution === "mobile"
                    ? layer
                    : undefined
                }
              />
            )}

            {["demo-gender", "demo-race"].includes(chart) && (
              <>
                <div className="section-title-46">
                  {chart === "demo-race" && <>47%</>}

                  {chart === "demo-gender" && <>50%</>}
                </div>
                <div className="section-title-47">
                  {chart === "demo-race" && <>4%</>}

                  {chart === "demo-gender" && <>50%</>}
                </div>
              </>
            )}

            {chart === "demo-race" && (
              <>
                <div className="section-title-48">1%</div>
                <div className="section-title-49">5%</div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

GraphPie.propTypes = {
  title: PropTypes.bool,
  resolution: PropTypes.oneOf(["desktop", "mobile-sm", "mobile"]),
  chart: PropTypes.oneOf(["example", "chart-2", "demo-race", "chart-3", "demo-gender", "chart-1"]),
  subtitle: PropTypes.bool,
  clipPathGroup: PropTypes.string,
  img: PropTypes.string,
  clipPathGroup1: PropTypes.string,
  clipPathGroup2: PropTypes.string,
  clipPathGroup3: PropTypes.string,
  clipPathGroup4: PropTypes.string,
  text: PropTypes.string,
  layer: PropTypes.string,
  layer1: PropTypes.string,
  layer2: PropTypes.string,
  vector: PropTypes.string,
  vector1: PropTypes.string,
};

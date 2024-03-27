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
  clipPathGroup = "/img/clip-path-group-2.png",
  img = "/img/clip-path-group-3.png",
  clipPathGroup1 = "/img/clip-path-group-4.png",
  frameClassName,
  overlapGroupClassName,
  overlapGroupClassNameOverride,
  clipPathGroup2 = "/img/clip-path-group-1.png",
  vectorClassName,
  clipPathGroup3 = "/img/clip-path-group-6.png",
  clipPathGroup4 = "/img/clip-path-group-8.png",
  vector = "/img/vector-21.svg",
  vector1 = "/img/vector.svg",
  vectorClassNameOverride,
  sectionTitleClassName,
}) => {
  return (
    <div className={`graph-pie ${chart} resolution-61-${resolution} title-0-${title} ${className}`}>
      <div className={`frame-31 ${frameClassName}`}>
        {!title && (
          <div className={`group-2 ${groupClassName}`}>
            {["chart-1", "chart-2", "chart-3", "example"].includes(chart) && (
              <div className={`overlap-group-2 ${overlapGroupClassName}`}>
                {chart === "example" && resolution === "desktop" && (
                  <>
                    <img className={`vector ${vectorClassName}`} alt="Vector" src={vector1} />
                    <img className={`vector-2 ${vectorClassNameOverride}`} alt="Vector" src={vector} />
                    <div className={`section-title-26 ${sectionTitleClassName}`}>51%</div>
                    <div className="section-title-27">49%</div>
                  </>
                )}

                {["chart-1", "chart-2", "chart-3"].includes(chart) && (
                  <div
                    className={`overlap-group-3 ${
                      chart === "chart-1"
                        ? overlapGroupClassNameOverride
                        : ["chart-2", "chart-3"].includes(chart)
                        ? vectorClassName
                        : undefined
                    }`}
                  >
                    <img
                      className="clip-path-group"
                      alt="Clip path group"
                      src={
                        resolution === "desktop" && chart === "chart-2"
                          ? clipPathGroup3
                          : chart === "chart-1" && resolution === "desktop"
                          ? clipPathGroup2
                          : resolution === "mobile" && chart === "chart-1"
                          ? clipPathGroup
                          : resolution === "mobile" && chart === "chart-3"
                          ? clipPathGroup1
                          : resolution === "desktop" && chart === "chart-3"
                          ? clipPathGroup4
                          : img
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

                      {chart === "chart-3" && <>10.1%</>}

                      {chart === "chart-2" && <>14.1%</>}
                    </div>
                    {chart === "chart-2" && <div className="text-wrapper-4">13.7%</div>}
                  </div>
                )}

                {["chart-2", "chart-3"].includes(chart) && (
                  <>
                    <div className={`element-4 ${vectorClassNameOverride}`}>
                      {chart === "chart-2" && <>15.8%</>}

                      {chart === "chart-3" && <>9.6%</>}
                    </div>
                    <div className={`element-5 ${sectionTitleClassName}`}>
                      {chart === "chart-2" && <>13.6%</>}

                      {chart === "chart-3" && <>8.6%</>}
                    </div>
                  </>
                )}

                {["chart-1", "chart-2", "chart-3"].includes(chart) && (
                  <div className="element-6">
                    {chart === "chart-2" && <>9.8%</>}

                    {chart === "chart-3" && <>6.0%</>}

                    {chart === "chart-1" && <>39.1%</>}
                  </div>
                )}

                {resolution === "mobile" && chart === "example" && (
                  <div className="overlap-group-4">
                    <img className="vector-3" alt="Vector" src="/img/vector-22.svg" />
                    <img className="vector-4" alt="Vector" src="/img/vector-23.svg" />
                    <div className="section-title-28">51%</div>
                    <div className="section-title-27">49%</div>
                  </div>
                )}

                {chart === "chart-1" && <div className="text-wrapper-5">11.7%</div>}
              </div>
            )}

            {chart === "demo-race" && (
              <div className="overlap-group-5">
                {resolution === "desktop" && (
                  <>
                    <div className="section-title-29">24%</div>
                    <div className="section-title-30">20%</div>
                  </>
                )}

                <img
                  className="layer"
                  alt="Layer"
                  src={resolution === "desktop" ? "/img/layer-1-8.svg" : "/img/layer-1-7.svg"}
                />
                {resolution === "mobile" && (
                  <>
                    <div className="section-title-31">24%</div>
                    <div className="section-title-32">20%</div>
                  </>
                )}
              </div>
            )}

            {chart === "demo-gender" && (
              <img
                className="layer-2"
                alt="Layer"
                src={resolution === "mobile" ? "/img/layer-1-3.svg" : "/img/layer-1-2.svg"}
              />
            )}

            {["demo-gender", "demo-race"].includes(chart) && (
              <>
                <div className="section-title-33">
                  {chart === "demo-race" && <>47%</>}

                  {chart === "demo-gender" && <>50%</>}
                </div>
                <div className="section-title-34">
                  {chart === "demo-race" && <>4%</>}

                  {chart === "demo-gender" && <>50%</>}
                </div>
              </>
            )}

            {chart === "demo-race" && (
              <>
                <div className="section-title-35">1%</div>
                <div className="section-title-36">5%</div>
              </>
            )}
          </div>
        )}

        {((title && !subtitle) || (subtitle && resolution === "desktop")) && (
          <div className={`frame-32 subtitle-${subtitle} resolution-82-${resolution}`}>
            {!subtitle && <div className="section-title-37">Bay Area</div>}

            {subtitle && (
              <>
                <div className="frame-33">
                  <div className="section-title-38">Bay Area</div>
                </div>
                <div className="frame-34">
                  <div className="section-title-39">Subtitle</div>
                </div>
              </>
            )}
          </div>
        )}

        {subtitle && resolution === "mobile" && (
          <>
            <div className="frame-35">
              <div className="section-title-40">Bay Area</div>
            </div>
            <div className="section-title-41">Subtitle</div>
          </>
        )}

        {title && (
          <div className="group-3">
            {chart === "example" && (
              <div className="overlap-group-6">
                <img
                  className="vector-5"
                  alt="Vector"
                  src={resolution === "mobile" ? "/img/vector-22.svg" : "/img/vector.svg"}
                />
                <img
                  className="vector-6"
                  alt="Vector"
                  src={resolution === "mobile" ? "/img/vector-23.svg" : "/img/vector-21.svg"}
                />
                <div className="section-title-42">51%</div>
                <div className="section-title-43">49%</div>
              </div>
            )}

            {chart === "demo-race" && (
              <div className="overlap-group-7">
                {resolution === "desktop" && (
                  <>
                    <div className="section-title-29">24%</div>
                    <div className="section-title-30">20%</div>
                  </>
                )}

                <img
                  className="layer-3"
                  alt="Layer"
                  src={
                    subtitle && resolution === "mobile"
                      ? "/img/layer-1-11.svg"
                      : resolution === "desktop" && !subtitle
                      ? "/img/layer-1-9.svg"
                      : subtitle && resolution === "desktop"
                      ? "/img/layer-1-10.svg"
                      : "/img/layer-1-6.svg"
                  }
                />
                {resolution === "mobile" && (
                  <>
                    <div className="section-title-31">24%</div>
                    <div className="section-title-32">20%</div>
                  </>
                )}
              </div>
            )}

            {chart === "demo-gender" && (
              <img
                className="layer-4"
                alt="Layer"
                src={
                  subtitle && resolution === "desktop"
                    ? "/img/layer-1-1.svg"
                    : resolution === "mobile" && !subtitle
                    ? "/img/layer-1-4.svg"
                    : subtitle && resolution === "mobile"
                    ? "/img/layer-1-5.svg"
                    : "/img/layer-1.svg"
                }
              />
            )}

            {["demo-gender", "demo-race"].includes(chart) && (
              <>
                <div className="section-title-44">
                  {chart === "demo-race" && <>47%</>}

                  {chart === "demo-gender" && <>50%</>}
                </div>
                <div className="section-title-45">
                  {chart === "demo-race" && <>4%</>}

                  {chart === "demo-gender" && <>50%</>}
                </div>
              </>
            )}

            {chart === "demo-race" && (
              <>
                <div className="section-title-46">1%</div>
                <div className="section-title-47">5%</div>
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
  resolution: PropTypes.oneOf(["desktop", "mobile"]),
  chart: PropTypes.oneOf(["example", "chart-2", "demo-race", "chart-3", "demo-gender", "chart-1"]),
  subtitle: PropTypes.bool,
  clipPathGroup: PropTypes.string,
  img: PropTypes.string,
  clipPathGroup1: PropTypes.string,
  clipPathGroup2: PropTypes.string,
  clipPathGroup3: PropTypes.string,
  clipPathGroup4: PropTypes.string,
  vector: PropTypes.string,
  vector1: PropTypes.string,
};

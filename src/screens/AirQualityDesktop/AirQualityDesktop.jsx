import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { ArrowsCarrousel } from "../../components/ArrowsCarrousel";
import { ElementImage } from "../../components/ElementImage";
import { ElementImages } from "../../components/ElementImages";
import { Footer } from "../../components/Footer";
import { GraphChart } from "../../components/GraphChart";
import { GraphChartLine } from "../../components/GraphChartLine";
import { GraphPie } from "../../components/GraphPie";
import { Header } from "../../components/Header";
import { HightlightBlurb } from "../../components/HightlightBlurb";
import { InternalMenu } from "../../components/InternalMenu";
import { OpeningSection } from "../../components/OpeningSection";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { ResoolutionDesktopWrapper } from "../../components/ResoolutionDesktopWrapper";
import { SectionGraph } from "../../components/SectionGraph";
import { SectionMap } from "../../components/SectionMap";
import { StatSection } from "../../components/StatSection";
import { SubTopicTitle } from "../../components/SubTopicTitle";
import { SubtitleYesCaptionWrapper } from "../../components/SubtitleYesCaptionWrapper";
import { TitleSection } from "../../components/TitleSection";
import { TopicsSection } from "../../components/TopicsSection";
import "./style.css";

export const AirQualityDesktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="AIR-QUALITY-DESKTOP"
      style={{
        minWidth:
          screenWidth < 641
            ? "320px"
            : screenWidth >= 641 && screenWidth < 769
            ? "641px"
            : screenWidth >= 769 && screenWidth < 1025
            ? "769px"
            : screenWidth >= 1025
            ? "1025px"
            : undefined,
        overflow: screenWidth < 641 ? "hidden" : undefined,
      }}
    >
      {((screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025) ||
        screenWidth < 641) && (
        <>
          <TitleSection
            blockOfTextElementAnnualReportClassName="title-section-instance"
            blockOfTextResolutionMobileClassName="title-section-5"
            blockOfTextSectionTitleClassName="title-section-3"
            blockOfTextText="AIR QUALITY"
            blockOfTextText1="HOW DO WE TRACK AIR QUALITY?"
            className="title-section-2"
            frameClassName="title-section-4"
            layout="stacked"
            resolution={
              screenWidth < 641
                ? "mobile"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "tablet"
                : undefined
            }
          />
        </>
      )}

      {screenWidth >= 1025 && (
        <>
          <TitleSection
            blockOfTextElementAnnualReportClassNameOverride="title-section-instance"
            blockOfTextResolutionMobileClassNameOverride="title-section-6"
            blockOfTextSectionTitleClassNameOverride="title-section-3"
            blockOfTextText2="AIR QUALITY"
            blockOfTextText3="HOW DO WE TRACK AIR QUALITY?"
            className="title-section-2"
            frameClassNameOverride="title-section-4"
            layout="img-r"
            resolution="desktop"
          />
        </>
      )}

      <div
        className="opening-text-wrapper"
        style={{
          padding:
            screenWidth < 641
              ? "100px 24px 24px"
              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
              ? "90px 48px 50px 60px"
              : screenWidth >= 1025
              ? "160px 0px 80px 100px"
              : undefined,
        }}
      >
        <div
          className="opening-text-2"
          style={{
            alignSelf:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "stretch"
                : undefined,
            display:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "flex"
                : screenWidth >= 1025
                ? "inline-flex"
                : undefined,
            width:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "100%"
                : undefined,
          }}
        >
          <div
            className="frame-43"
            style={{
              alignSelf:
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "stretch"
                  : undefined,
              display:
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "flex"
                  : screenWidth >= 1025
                  ? "inline-flex"
                  : undefined,
              width:
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "100%"
                  : undefined,
            }}
          >
            <div
              className="AB-community-2"
              style={{
                alignSelf:
                  (screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641
                    ? "stretch"
                    : undefined,
                fontFamily:
                  screenWidth < 641
                    ? "var(--h2-mobile-font-family)"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "var(--h2-tablet-font-family)"
                    : screenWidth >= 1025
                    ? "var(--h2-desktop-font-family)"
                    : undefined,
                fontSize:
                  screenWidth < 641
                    ? "var(--h2-mobile-font-size)"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "var(--h2-tablet-font-size)"
                    : screenWidth >= 1025
                    ? "var(--h2-desktop-font-size)"
                    : undefined,
                fontStyle:
                  screenWidth < 641
                    ? "var(--h2-mobile-font-style)"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "var(--h2-tablet-font-style)"
                    : screenWidth >= 1025
                    ? "var(--h2-desktop-font-style)"
                    : undefined,
                fontWeight:
                  screenWidth < 641
                    ? "var(--h2-mobile-font-weight)"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "var(--h2-tablet-font-weight)"
                    : screenWidth >= 1025
                    ? "var(--h2-desktop-font-weight)"
                    : undefined,
                letterSpacing:
                  screenWidth < 641
                    ? "var(--h2-mobile-letter-spacing)"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "var(--h2-tablet-letter-spacing)"
                    : screenWidth >= 1025
                    ? "var(--h2-desktop-letter-spacing)"
                    : undefined,
                lineHeight:
                  screenWidth < 641
                    ? "var(--h2-mobile-line-height)"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "var(--h2-tablet-line-height)"
                    : screenWidth >= 1025
                    ? "var(--h2-desktop-line-height)"
                    : undefined,
                width: screenWidth >= 1025 ? "841px" : undefined,
              }}
            >
              AIR DISTRICT <br />
              MONITORING SITES
            </div>
            <div
              className="we-continued-to-work-3"
              style={{
                alignSelf:
                  (screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641
                    ? "stretch"
                    : undefined,
                fontSize:
                  screenWidth < 641
                    ? "21px"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "23px"
                    : screenWidth >= 1025
                    ? "26px"
                    : undefined,
                letterSpacing:
                  screenWidth < 641
                    ? "0.84px"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "0.92px"
                    : screenWidth >= 1025
                    ? "1.04px"
                    : undefined,
                lineHeight:
                  screenWidth < 641
                    ? "31.5px"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "23px"
                    : screenWidth >= 1025
                    ? "26px"
                    : undefined,
                width: screenWidth >= 1025 ? "855px" : undefined,
              }}
            >
              <span
                className="text-wrapper-39"
                style={{
                  fontFamily:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-family)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-family)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-style)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-weight)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-letter-spacing)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-line-height)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-line-height)"
                      : undefined,
                }}
              >
                Our network{" "}
              </span>
              <span
                className="span-3"
                style={{
                  fontFamily: screenWidth < 641 ? "var(--pull-quote-mobile-bold-font-family)" : undefined,
                  fontSize:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "26px"
                      : undefined,
                  fontStyle: screenWidth < 641 ? "var(--pull-quote-mobile-bold-font-style)" : undefined,
                  fontWeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-weight)"
                      : screenWidth >= 1025 ||
                        (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025)
                      ? "700"
                      : undefined,
                  letterSpacing:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-letter-spacing)"
                      : screenWidth >= 1025 ||
                        (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025)
                      ? "0.27px"
                      : undefined,
                  lineHeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-line-height)"
                      : screenWidth >= 1025 ||
                        (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025)
                      ? "40.3px"
                      : undefined,
                }}
              >
                {screenWidth < 641 && <>measures concentrations of pollutants </>}

                {(screenWidth >= 1025 ||
                  (screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025)) && <>measures concentrations of pollutants</>}
              </span>
              <span
                className="span-3"
                style={{
                  fontFamily:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-family)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-family)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-style)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-weight)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-letter-spacing)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-line-height)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-line-height)"
                      : undefined,
                }}
              >
                {screenWidth < 641 && (
                  <>
                    at ground level using monitoring methods set by the U.S. Environmental Protection Agency and other
                    state-of-the-art instruments. This data{" "}
                  </>
                )}

                {(screenWidth >= 1025 ||
                  (screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025)) && (
                  <>
                    {" "}
                    at ground level using monitoring methods set by the U.S. Environmental Protection Agency and other
                    state-of-the-art instruments. This data{" "}
                  </>
                )}
              </span>
              <span
                className="span-3"
                style={{
                  fontFamily: screenWidth < 641 ? "var(--pull-quote-mobile-bold-font-family)" : undefined,
                  fontSize:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "26px"
                      : undefined,
                  fontStyle: screenWidth < 641 ? "var(--pull-quote-mobile-bold-font-style)" : undefined,
                  fontWeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-weight)"
                      : screenWidth >= 1025 ||
                        (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025)
                      ? "700"
                      : undefined,
                  letterSpacing:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-letter-spacing)"
                      : screenWidth >= 1025 ||
                        (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025)
                      ? "0.27px"
                      : undefined,
                  lineHeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-line-height)"
                      : screenWidth >= 1025 ||
                        (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025)
                      ? "40.3px"
                      : undefined,
                }}
              >
                {screenWidth < 641 && (
                  <>
                    tracks trends in air pollution levels, demonstrates compliance with air quality standards, informs
                    air quality forecasts, regional and local air quality plans and air modeling, and other air quality
                    and health research.
                  </>
                )}

                {(screenWidth >= 1025 ||
                  (screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025)) && (
                  <>
                    tracks trends in air pollution levels, demonstrates compliance with air quality standards, informs
                    air quality forecasts, regional and local air quality plans and air modeling, and other air quality
                    and health research.{" "}
                  </>
                )}
              </span>
              <span
                className="span-3"
                style={{
                  fontFamily:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-family)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-family)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-style)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-weight)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-letter-spacing)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-line-height)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-line-height)"
                      : undefined,
                }}
              >
                {screenWidth < 641 && (
                  <>
                    {" "}
                    Pollutants measured by the monitoring network include ozone, carbon monoxide, nitrogen oxides,
                    sulfur dioxide, particulate matter concentration and composition, lead, black carbon, ultrafine
                    particulate matter, hydrogen sulfide, and volatile organic compounds, including many toxic air
                    contaminants.
                  </>
                )}

                {(screenWidth >= 1025 ||
                  (screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025)) && (
                  <>
                    Pollutants measured by the monitoring network include ozone, carbon monoxide, nitrogen oxides,
                    sulfur dioxide, particulate matter concentration and composition, lead, black carbon, ultrafine
                    particulate matter, hydrogen sulfide, and volatile organic compounds, including many toxic air
                    contaminants.
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      {screenWidth >= 1025 && (
        <>
          <div className="map-with-label-wrapper">
            <div className="map-with-label-3">
              <div className="frame-44">
                <div className="frame-45">
                  <div className="frame-46">
                    <div className="rectangle-19" />
                    <div className="section-title-69">AIR MONITORING SITES</div>
                  </div>
                </div>
                <div className="frame-47">
                  <div className="frame-46">
                    <div className="rectangle-20" />
                    <div className="section-title-69">METEOROLOGICAL SITES</div>
                  </div>
                </div>
              </div>
              <img className="map-2" alt="Map" src="/img/map.png" />
            </div>
          </div>
          <StatSection
            aligment="right"
            className="stat-section-5"
            quantity="three"
            resolution="desktop"
            statSetResolutionDesktopClassNameOverride="stat-section-4"
            statSetStatColor2="dark-blue"
            statSetStatColor3="blue"
            statSetStatDivClassName="stat-section-instance"
            statSetStatDivClassNameOverride="stat-section-instance"
            statSetStatSectionTitleClassName="stat-section-2"
            statSetStatSectionTitleClassNameOverride="stat-section-3"
            statSetStatText4="31"
            statSetStatText5="total air monitoring sites across the Bay Area"
            statSetStatText6="13"
            statSetStatText7="total meteorological sites across the Bay Area"
            statSetStatType1="quote"
            statSetStatTypeQuoteColorClassNameOverride="stat-section-instance"
            title={false}
          />
          <OpeningSection
            className="opening-section-instance"
            font="body-text"
            headline="large"
            openingTextResolutionDesktopClassName="instance-node-6"
            openingTextSpanClassName="text-wrapper-3"
            openingTextText="EPA HEALTH STANDARDS FOR PARTICULATE MATTER"
            openingTextText1="protect public health to an adequate margin of safety and protect the public against adverse effects. "
            openingTextText2="Exposure to fine particulate matter is an important driver of health risk throughout the Bay Area and is linked to serious respiratory illnesses and increased risk of heart attacks. Exposure is especially harmful for children, the elderly, and those with respiratory conditions."
            openingTextText3="We fully support the EPA’s lowering of the National Ambient Air Quality Standards (NAAQS) for particulate matter pollution. The NAAQS are designed to "
            resolution="desktop"
          />
          <PropertyDefaultWrapper
            className="hightlight-blurb-section"
            hightlightBlurbFrameClassName="hightlight-blurb-section-instance"
            hightlightBlurbImageSquareClassName="hightlight-blurb-instance"
            hightlightBlurbJamesCarySmithClassName="text-wrapper-4"
            hightlightBlurbTopicsClassName="instance-node-7"
            hightlightBlurbTypeDefaultImageClassName="instance-node-8"
            property1="default"
          />
          <TopicsSection
            alignment="center"
            className="topics-section-instance"
            headline="large"
            resolution="desktop"
            title
            topicsClassName="topics-section-2"
          />
          <ElementImages
            arrowsCarrouselArrowsArrowElementTypeBack="/img/type-back.png"
            arrowsCarrouselArrowsArrowElementTypeForward="/img/type-forward.png"
            arrowsCarrouselArrowsCarrouselClassName="instance-node-9"
            carrousel
            className="element-images-instance"
            frameClassName="two-images-instance"
            img="/img/rectangle-256.png"
            rectangle="/img/rectangle-255-2.png"
            rectangleClassName="two-images"
            resolution="desktop"
          />
          <div className="frame-48">
            <div className="topics-section-3">
              <div className="topics-5">
                <div className="frame-49">
                  <p className="james-cary-smith-6">AD HOC COMMITTEE ON INCIDENT RESPONSE MONITORING</p>
                  <p className="the-grant-program-6">
                    <span className="text-wrapper-5">
                      Our Board of Directors formed an ad hoc committee on incident response monitoring. The committee
                      has identified ways to{" "}
                    </span>
                    <span className="text-wrapper-3">
                      provide information more quickly to the public when there is an incident at a facility
                    </span>
                    <span className="text-wrapper-5">
                      , including how we are responding to the incident and what are potential impacts on air quality.
                      The ad hoc committee has also discussed opportunities to fill gaps in monitoring, which will be
                      considered as part of upcoming strategic planning and budget processes.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <ElementImage
              className="one-image"
              img="/img/rectangle-255-3.png"
              rectangleClassName="element-image-instance"
              resolution="destop"
            />
            <SectionGraph
              chartCaption="z"
              className="section-graph-instance"
              graphs="zero"
              resolution="desktop"
              subTopicTitleText="BAY AREA POLLUTION SOURCES"
              subTopicTitleTypeDefaultClassNameOverride="instance-node-9"
              title="top"
            />
            <div className="section-graph-2">
              <div className="sub-topic-title-2">
                <p className="section-title-70">
                  <span className="text-wrapper-4">SOURCES OF GREENHOUSE GAS EMISSIONS </span>
                  <span className="text-wrapper-6">a</span>
                </p>
              </div>
              <div className="frame-50">
                <div className="frame-51">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-6"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName2="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionText="Residential/Commercial Fuel Usage"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Transportation"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Agriculture/Farming"
                    resoolutionDesktopWrapperGraphBarCaptionText12="8.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Electricity/Co-Generation"
                    resoolutionDesktopWrapperGraphBarCaptionText14="Recycling and Waste"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Industrial - Oil Refineries b"
                    resoolutionDesktopWrapperGraphBarCaptionText16="18.9%"
                    resoolutionDesktopWrapperGraphBarCaptionText17="High Global Warming Potential Gases"
                    resoolutionDesktopWrapperGraphBarCaptionText2="13.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Industrial - Others c"
                    resoolutionDesktopWrapperGraphBarCaptionText4="39.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText5="11.7%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="5.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="1.5%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="2.7%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-6"
                    resoolutionDesktopWrapperVisible={false}
                    resoolutionDesktopWrapperVisible1={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-8"
                    columns="two"
                    frameClassName="graph-chart-line-11"
                    graphChartLineClassName="graph-chart-line-9"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-10"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-1"
                  className="graph-pie-7"
                  clipPathGroup2="/img/clip-path-group.png"
                  frameClassName="instance-node-7"
                  groupClassName="graph-pie-8"
                  overlapGroupClassName="graph-pie-9"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                />
              </div>
            </div>
            <div className="section-graph-3">
              <div className="sub-topic-title-3">
                <p className="section-title-70">
                  <span className="text-wrapper-4">Sources of Annual Fine Particulate Pollution </span>
                  <span className="text-wrapper-6">d</span>
                </p>
              </div>
              <div className="frame-52">
                <div className="frame-51">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-6"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="graph-bar-caption-10"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionText="Road Dust"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Residential Wood Burning"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Accidental &amp; Planned Fires"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Commercial Cooking"
                    resoolutionDesktopWrapperGraphBarCaptionText12="13.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Stationary Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText14="Other Dust e"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Stationary Non-Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText16="15.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Mobile Off-Road Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText2="14.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Mobile On-Road Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText4="18.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText5="13.7%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="9.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="5.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="7.2%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="2.1%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-6"
                    resoolutionDesktopWrapperVisible={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-8"
                    columns="two"
                    frameClassName="graph-chart-line-11"
                    graphChartLineClassName="graph-chart-line-9"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-10"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-2"
                  className="graph-pie-7"
                  clipPathGroup3="/img/clip-path-group-1.png"
                  frameClassName="instance-node-7"
                  groupClassName="graph-pie-10"
                  overlapGroupClassNameOverride="graph-pie-11"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                />
              </div>
            </div>
            <div className="section-graph-3">
              <div className="sub-topic-title-3">
                <p className="section-title-70">
                  <span className="text-wrapper-4">Sources of Annual Nitrogen Oxide Pollution </span>
                  <span className="text-wrapper-6">d</span>
                </p>
              </div>
              <div className="frame-53">
                <div className="frame-51">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-6"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="graph-bar-caption-10"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-6"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassNameOverride="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionText="Mobile Off-Road Sources - Aircraft"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Mobile Off-Road Sources - Ships"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Stationary Non-Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Residential Natural Gas Combustion"
                    resoolutionDesktopWrapperGraphBarCaptionText12="8.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Stationary Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText14="Mobile On-Road Sources - Other Vehicles h"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Mobile On-Road Sources - Trucks"
                    resoolutionDesktopWrapperGraphBarCaptionText16="21.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Mobile Off-Road Sources - Other g"
                    resoolutionDesktopWrapperGraphBarCaptionText2="10.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Mobile Off-Road Sources - Equipment f"
                    resoolutionDesktopWrapperGraphBarCaptionText4="33.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText5="9.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="6.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="4.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="5.5%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="1.3%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-6"
                    resoolutionDesktopWrapperVisible={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-8"
                    columns="two"
                    frameClassName="graph-chart-line-11"
                    graphChartLineClassName="graph-chart-line-9"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-10"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-3"
                  className="graph-pie-7"
                  clipPathGroup4="/img/clip-path-group-2.png"
                  frameClassName="instance-node-7"
                  groupClassName="graph-pie-12"
                  overlapGroupClassNameOverride="graph-pie-13"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                />
              </div>
            </div>
            <div className="section-chart-wrapper">
              <div className="section-chart">
                <div className="frame-54">
                  <p className="section-title-71">
                    <span className="text-wrapper-7">a</span>
                    <span className="text-wrapper-8">
                      {" "}
                      The Air District’s latest greenhouse gas (GHG) emissions estimates can be found here:{" "}
                    </span>
                    <a
                      href="https://nam02.safelinks.protection.outlook.com/?url=https://www.baaqmd.gov/capghg&amp;data=04%257C01%257Csbai@baaqmd.gov%257C8c0adf7d43f14e5b5a9d08d9dc2ac670%257C855defaabdae4e6281e53bb7aa04fc3a%257C0%257C0%257C637782898532015051%257CUnknown%257CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0=%257C3000&amp;sdata=Aqexj2d5+loYj+W1ZVBOI+JVpmaS2BY8MwUyLdrJBUY=&amp;reserved=0"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-wrapper-9">baaqmd.gov/capghg</span>
                    </a>
                    <span className="text-wrapper-8">
                      . These estimates do not reflect specific emissions changes in 2023 due to the impact of COVID-19
                      pandemic or wildfires.
                      <br />
                    </span>
                    <span className="text-wrapper-7">b</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes GHG emissions from refining processes and combustion of gas, liquid and
                      solid fuels at refineries; it does not include GHG emissions generated during cogeneration at
                      refineries, which is included in the Electricity/Co-Generation category.
                      <br />
                    </span>
                    <span className="text-wrapper-7">c</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes GHG emissions from combustion and processes at cement plants, natural gas
                      combustion, combustion of solid and liquid fuels in industries, natural gas distribution fugitive
                      losses (primarily methane), and industrial process emissions.
                      <br />
                    </span>
                    <span className="text-wrapper-7">d</span>
                    <span className="text-wrapper-8">
                      {" "}
                      These percentage estimates are developed based on the Air District’s currently available regional
                      inventory data. These estimates do not reflect specific emissions changes in 2023 due to the
                      impact of COVID-19 pandemic or wildfires.
                      <br />
                    </span>
                    <span className="text-wrapper-7">e</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes wind-blown dust from agricultural land and dust from construction
                      operations.
                      <br />
                    </span>
                    <span className="text-wrapper-7">f</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes construction and mining equipment, agricultural equipment, industrial and
                      light commercial equipment, and airport ground support equipment, etc.
                      <br />
                    </span>
                    <span className="text-wrapper-7">g</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes trains, lawn and garden equipment and other off-road equipment.
                      <br />
                    </span>
                    <span className="text-wrapper-7">h</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes passenger cars, buses, motorcycles, etc.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SectionGraph
            chartCaption="no"
            className="section-graph-5"
            frameClassName="section-graph-4"
            graphs="one"
            override={
              <GraphChart
                className="graph-chart-2"
                frameClassName="graph-chart-3"
                frameClassNameOverride="graph-chart-3"
                graphChartLineColumns10="two"
                graphChartLineColumns11="two"
                graphChartLineColumns12="two"
                graphChartLineColumns13="two"
                graphChartLineFrameClassName1="graph-chart-5"
                graphChartLineFrameClassName2="graph-chart-5"
                graphChartLineFrameClassName3="graph-chart-5"
                graphChartLineFrameClassName4="graph-chart-5"
                graphChartLineLines10="one"
                graphChartLineLines11="one"
                graphChartLineLines12="one"
                graphChartLineLines13="one"
                graphChartLineSectionTitleClassName4="graph-chart-5"
                graphChartLineSectionTitleClassName5="graph-chart-5"
                graphChartLineSectionTitleClassName6="graph-chart-5"
                graphChartLineSectionTitleClassName7="graph-chart-5"
                graphChartLineText20="3,988"
                graphChartLineText21="Particulate Matter"
                graphChartLineText22="1,118"
                graphChartLineText23="Toxics"
                graphChartLineText24="41"
                graphChartLineText25="Source-Oriented Analyses"
                graphChartLineText26="0"
                graphChartLineText27="Interagency and Development Projects"
                graphChartTotalGraphChartLineColumns1="two"
                graphChartTotalGraphChartLineDivClassName="graph-chart-6"
                graphChartTotalGraphChartLineFrameClassName="graph-chart-8"
                graphChartTotalGraphChartLineFrameClassNameOverride="graph-chart-instance"
                graphChartTotalGraphChartLineText2="5,147"
                graphChartTotalLines1="one"
                graphChartTotalLinesResolutionClassNameOverride="graph-chart-7"
                hasFrame2={false}
                hasGroup2={false}
                quantity="one"
                resolution="desktop"
                sectionTitleClassName1="graph-chart-5"
                sectionTitleClassName2="graph-chart-5"
                sectionTitleWrapperClassNameOverride="graph-chart-4"
                text="2023 Analyses Performed in the Lab*"
                text1="*Samples provide information about pollutant levels in ambient air, which help to identify areas for further reductions."
                visible25={false}
                visible26={false}
                visible27={false}
                visible28={false}
                visible29={false}
                visible30={false}
                visible31={false}
              />
            }
            resolution="desktop"
            subTopicTitleText2="LABORATORY"
            title="left"
          />
          <SectionGraph
            chartCaption="no"
            className="section-graph-6"
            graphs="one"
            override={
              <GraphChart
                className="graph-chart-9"
                graphChartLineColumns14="two"
                graphChartLineColumns15="two"
                graphChartLineColumns16="two"
                graphChartLineColumns17="two"
                graphChartLineColumns18="two"
                graphChartLineColumns19="two"
                graphChartLineFrameClassName5="graph-chart-10"
                graphChartLineFrameClassName6="graph-chart-11"
                graphChartLineFrameClassName7="graph-chart-13"
                graphChartLineFrameClassName8="graph-chart-13"
                graphChartLineFrameClassName9="graph-chart-11"
                graphChartLineGraphChartLineClassName="instance-node-7"
                graphChartLineGraphChartLineClassName1="instance-node-7"
                graphChartLineGraphChartLineClassName2="instance-node-7"
                graphChartLineGraphChartLineClassName3="instance-node-7"
                graphChartLineGraphChartLineClassName4="instance-node-7"
                graphChartLineGraphChartLineClassNameOverride="instance-node-7"
                graphChartLineGraphChartLineWrapperClassName="instance-node-8"
                graphChartLineGraphChartLineWrapperClassNameOverride="instance-node-8"
                graphChartLineLines14="one"
                graphChartLineLines15="one"
                graphChartLineLines16="one"
                graphChartLineLines17="one"
                graphChartLineLines18="one"
                graphChartLineLines19="one"
                graphChartLineLinesColumnsClassName="instance-node-8"
                graphChartLineLinesColumnsClassName1="instance-node-8"
                graphChartLineLinesColumnsClassName2="instance-node-8"
                graphChartLineLinesColumnsClassNameOverride="instance-node-8"
                graphChartLineResolution="desktop_1"
                graphChartLineResolution1="desktop_1"
                graphChartLineResolution2="desktop_1"
                graphChartLineResolution3="desktop_1"
                graphChartLineResolution4="desktop_1"
                graphChartLineResolution5="desktop_1"
                graphChartLineSectionTitleClassName10="graph-chart-14"
                graphChartLineSectionTitleClassName8="graph-chart-14"
                graphChartLineSectionTitleClassName9="graph-chart-14"
                graphChartLineSectionTitleWrapperClassName="graph-chart-12"
                graphChartLineSectionTitleWrapperClassNameOverride="graph-chart-12"
                graphChartLineText28="Days over National 8-Hour Standard"
                graphChartLineText29="0"
                graphChartLineText30="Days over California 1-Hour Standard"
                graphChartLineText31="4*"
                graphChartLineText32="Days over California 8-Hour Standard"
                graphChartLineText33="0*"
                graphChartLineText34="Days over National 24-Hour PM10 Standard"
                graphChartLineText35="0*"
                graphChartLineText36="Days over California 24-Hour PM10 Standard"
                graphChartLineText37="3"
                graphChartLineText38="Days over National 24-Hour PM2.5 Standard"
                graphChartLineText39="4*"
                groupClassName1="graph-chart-4"
                groupClassName2="graph-chart-4"
                hasFrame3={false}
                hasFrame4={false}
                hasFrame5={false}
                hasGroup3={false}
                hasGroup4={false}
                quantity="two"
                resolution="desktop"
                text="Particulate Matter"
                text1={
                  <>
                    *Pending final certification
                    <br />
                     Final certification of exceedance data will occur May 1, 2024.
                  </>
                }
                visible32={false}
                visible33={false}
                visible34={false}
                visible35={false}
                visible36={false}
                visible37={false}
                visible38={false}
                visible39={false}
                visible40={false}
                visible41={false}
                visible42={false}
                visible43={false}
                visible44={false}
                visible45={false}
                visible46={false}
                visible47={false}
                visible48={false}
                visible49={false}
              />
            }
            resolution="desktop"
            subTopicTitleText2="EXCEEDANCES OF AIR QUALITY STANDARDS"
            title="left"
          />
          <InternalMenu
            arrowElementTypeBack="/img/arrow-element.png"
            arrowElementTypeForward="/img/arrow-element-1.png"
            className="internal-menu-instance"
            resolution="mobile"
          />
        </>
      )}

      {screenWidth < 641 && <SectionMap className="section-map-instance" map="/img/map-6.png" resolution="mobile" />}

      {((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && (
        <SectionMap
          className={`${screenWidth >= 641 && screenWidth < 769 && "class-27"} ${
            screenWidth >= 769 && screenWidth < 1025 && "class-28"
          }`}
          img={
            screenWidth >= 641 && screenWidth < 769
              ? "/img/map-5.png"
              : screenWidth >= 769 && screenWidth < 1025
              ? "/img/map-4.png"
              : undefined
          }
          resolution="tablet"
          sectionTitleClassName="section-map-2"
          sectionTitleClassNameOverride="section-map-2"
        />
      )}

      {((screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025) ||
        screenWidth < 641) && (
        <StatSection
          aligment="right"
          className={`${screenWidth < 641 && "class-29"} ${
            ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && "class-30"
          }`}
          hasSectionTitle={false}
          quantity="three"
          resolution="mobile"
          statSetResolutionDesktopClassName="instance-node-8"
          statSetStatColor="dark-blue"
          statSetStatColor1="blue"
          statSetStatText="31"
          statSetStatText1="total air monitoring sites across the Bay Area"
          statSetStatText2="13"
          statSetStatText3="total meteorological sites across the Bay Area"
          statSetStatType="quote"
          statSetStatTypeNumbersColorClassName="stat-section-6"
          statSetStatTypeNumbersColorClassNameOverride="stat-section-6"
          statSetStatTypeQuoteColorClassName="stat-section-6"
          title
        />
      )}

      {((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && (
        <>
          <OpeningSection
            className="opening-section-2"
            font="body-text"
            headline="large"
            openingTextResolutionDesktopClassName="instance-node-8"
            openingTextSpanClassName="text-wrapper-3"
            openingTextText="EPA HEALTH STANDARDS FOR PARTICULATE MATTER"
            openingTextText1="protect public health to an adequate margin of safety and protect the public against adverse effects. "
            openingTextText2="Exposure to fine particulate matter is an important driver of health risk throughout the Bay Area and is linked to serious respiratory illnesses and increased risk of heart attacks. Exposure is especially harmful for children, the elderly, and those with respiratory conditions."
            openingTextText3="We fully support the EPA’s lowering of the National Ambient Air Quality Standards (NAAQS) for particulate matter pollution. The NAAQS are designed to "
            resolution="tablet"
          />
          <HightlightBlurb
            className="hightlight-blurb-4"
            detail="image"
            image="top"
            resolution="tablet"
            spanClassName="hightlight-blurb-3"
            spanClassName1="hightlight-blurb-3"
            spanClassNameOverride="hightlight-blurb-5"
            theGrantProgramClassName="hightlight-blurb-2"
            type="default"
          />
          <div className="topics-section-4">
            <div className="div-6">
              <div className="frame-49">
                <p className="james-cary-smith-7">
                  BAY AIR CENTER LAUNCHES <br />
                  PUBLIC WEBSITE
                </p>
                <p className="the-grant-program-7">
                  <span className="text-wrapper-10">We sponsored the Bay Air Center as a resource that offers </span>
                  <span className="text-wrapper-3">
                    technical guidance, materials, and training on air monitoring and air quality data for
                    community-based organizations
                  </span>
                  <span className="text-wrapper-10">
                    , with the goal of supporting their efforts to understand and improve air quality. The website
                    provides detailed information on the program, a way to request support, and an extensive resource
                    library that includes materials developed by the Bay Air Center as well as external links to
                    materials that cover a variety of air quality-related topics.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="element-images-2">
            <div className="frame-55">
              <img
                className="rectangle-21"
                style={{
                  marginRight: screenWidth >= 641 && screenWidth < 769 ? "-24.17px" : undefined,
                }}
                alt="Rectangle"
                src="/img/rectangle-255-2.png"
              />
              <img
                className="rectangle-22"
                style={{
                  marginRight:
                    screenWidth >= 641 && screenWidth < 769
                      ? "-665.34px"
                      : screenWidth >= 769 && screenWidth < 1025
                      ? "-537.34px"
                      : undefined,
                }}
                alt="Rectangle"
                src="/img/rectangle-256.png"
              />
            </div>
            <ArrowsCarrousel
              arrowsArrowElementTypeBack="/img/arrow-element-22.png"
              arrowsArrowElementTypeForward="/img/arrow-element-23.png"
              className="instance-node-9"
            />
          </div>
          <div
            className="frame-56"
            style={{
              backgroundImage:
                screenWidth >= 641 && screenWidth < 769
                  ? "url(/img/frame-19858-2.png)"
                  : screenWidth >= 769 && screenWidth < 1025
                  ? "url(/img/frame-19858-1.png)"
                  : undefined,
            }}
          >
            <div className="topics-section-5">
              <div className="div-6">
                <div className="frame-49">
                  <p className="james-cary-smith-7">AD HOC COMMITTEE ON INCIDENT RESPONSE MONITORING</p>
                  <p className="the-grant-program-7">
                    <span className="text-wrapper-10">
                      Our Board of Directors formed an ad hoc committee on incident response monitoring. The committee
                      has identified ways to{" "}
                    </span>
                    <span className="text-wrapper-3">
                      provide information more quickly to the public when there is an incident at a facility
                    </span>
                    <span className="text-wrapper-10">
                      , including how we are responding to the incident and what are potential impacts on air quality.
                      The ad hoc committee has also discussed opportunities to fill gaps in monitoring, which will be
                      considered as part of upcoming strategic planning and budget processes.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <ElementImage
              className="instance-node-10"
              img="/img/rectangle-255-3.png"
              rectangleClassName={`${screenWidth >= 641 && screenWidth < 769 && "class-31"} ${
                screenWidth >= 769 && screenWidth < 1025 && "class-32"
              }`}
              resolution="destop"
            />
            <SectionGraph
              chartCaption="z"
              className="instance-node-10"
              graphs="zero"
              resolution="tablet"
              subTopicTitleText="BAY AREA POLLUTION SOURCES"
              title="top"
            />
            <div className="section-graph-7">
              <div className="sub-topic-title-2">
                <p className="section-title-72">
                  <span className="text-wrapper-11">SOURCES OF GREENHOUSE GAS EMISSIONS </span>
                  <span className="text-wrapper-12">a</span>
                </p>
              </div>
              <div className="frame-57">
                <div className="frame-58">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-8"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName2="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionText="Residential/Commercial Fuel Usage"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Transportation"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Agriculture/Farming"
                    resoolutionDesktopWrapperGraphBarCaptionText12="8.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Electricity/Co-Generation"
                    resoolutionDesktopWrapperGraphBarCaptionText14="Recycling and Waste"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Industrial - Oil Refineries b"
                    resoolutionDesktopWrapperGraphBarCaptionText16="18.9%"
                    resoolutionDesktopWrapperGraphBarCaptionText17="High Global Warming Potential Gases"
                    resoolutionDesktopWrapperGraphBarCaptionText2="13.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Industrial - Others c"
                    resoolutionDesktopWrapperGraphBarCaptionText4="39.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText5="11.7%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="5.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="1.5%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="2.7%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-8"
                    resoolutionDesktopWrapperVisible={false}
                    resoolutionDesktopWrapperVisible1={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-12"
                    columns="two"
                    frameClassName="graph-chart-line-11"
                    graphChartLineClassName="graph-chart-line-9"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-10"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-1"
                  className="instance-node-9"
                  clipPathGroup2={
                    screenWidth >= 641 && screenWidth < 769
                      ? "/img/clip-path-group-15.png"
                      : screenWidth >= 769 && screenWidth < 1025
                      ? "/img/clip-path-group-14.png"
                      : undefined
                  }
                  frameClassName="instance-node-7"
                  groupClassName={`${screenWidth >= 641 && screenWidth < 769 && "class-33"} ${
                    screenWidth >= 769 && screenWidth < 1025 && "class-34"
                  }`}
                  overlapGroupClassName="graph-pie-9"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                />
              </div>
            </div>
            <div className="section-graph-8">
              <div className="sub-topic-title-2">
                <p className="section-title-72">
                  <span className="text-wrapper-11">Sources of Annual Fine Particulate Pollution </span>
                  <span className="text-wrapper-12">d</span>
                </p>
              </div>
              <div className="frame-59">
                <div className="frame-58">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-8"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="graph-bar-caption-10"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionText="Road Dust"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Residential Wood Burning"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Accidental &amp; Planned Fires"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Commercial Cooking"
                    resoolutionDesktopWrapperGraphBarCaptionText12="13.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Stationary Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText14="Other Dust e"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Stationary Non-Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText16="15.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Mobile Off-Road Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText2="14.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Mobile On-Road Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText4="18.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText5="13.7%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="9.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="5.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="7.2%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="2.1%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-8"
                    resoolutionDesktopWrapperVisible={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-12"
                    columns="two"
                    frameClassName="graph-chart-line-11"
                    graphChartLineClassName="graph-chart-line-9"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-10"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-2"
                  className="instance-node-9"
                  clipPathGroup3={
                    screenWidth >= 641 && screenWidth < 769
                      ? "/img/clip-path-group-16.png"
                      : screenWidth >= 769 && screenWidth < 1025
                      ? "/img/clip-path-group-12.png"
                      : undefined
                  }
                  frameClassName="instance-node-7"
                  groupClassName={`${screenWidth >= 641 && screenWidth < 769 && "class-35"} ${
                    screenWidth >= 769 && screenWidth < 1025 && "class-36"
                  }`}
                  overlapGroupClassNameOverride="graph-pie-11"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                />
              </div>
            </div>
            <div className="section-graph-9">
              <div className="sub-topic-title-2">
                <p className="section-title-72">
                  <span className="text-wrapper-11">Sources of Annual Nitrogen Oxide Pollution </span>
                  <span className="text-wrapper-12">d</span>
                </p>
              </div>
              <div className="frame-60">
                <div className="frame-58">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-8"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="graph-bar-caption-10"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassNameOverride="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionText="Mobile Off-Road Sources - Aircraft"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Mobile Off-Road Sources - Ships"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Stationary Non-Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Residential Natural Gas Combustion"
                    resoolutionDesktopWrapperGraphBarCaptionText12="8.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Stationary Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText14="Mobile On-Road Sources - Other Vehicles h"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Mobile On-Road Sources - Trucks"
                    resoolutionDesktopWrapperGraphBarCaptionText16="21.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Mobile Off-Road Sources - Other g"
                    resoolutionDesktopWrapperGraphBarCaptionText2="10.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Mobile Off-Road Sources - Equipment f"
                    resoolutionDesktopWrapperGraphBarCaptionText4="33.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText5="9.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="6.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="4.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="5.5%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="1.3%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-8"
                    resoolutionDesktopWrapperVisible={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-12"
                    columns="two"
                    frameClassName="graph-chart-line-11"
                    graphChartLineClassName="graph-chart-line-9"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-10"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-3"
                  className="instance-node-9"
                  clipPathGroup4="/img/clip-path-group-13.png"
                  frameClassName="instance-node-7"
                  groupClassName={`${screenWidth >= 641 && screenWidth < 769 && "class-37"} ${
                    screenWidth >= 769 && screenWidth < 1025 && "class-38"
                  }`}
                  overlapGroupClassNameOverride="graph-pie-13"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                />
              </div>
            </div>
            <div className="frame-61">
              <div className="div-6">
                <div className="frame-54">
                  <p className="section-title-71">
                    <span className="text-wrapper-7">a</span>
                    <span className="text-wrapper-8">
                      {" "}
                      The Air District’s latest greenhouse gas (GHG) emissions estimates can be found here:{" "}
                    </span>
                    <a
                      href="https://nam02.safelinks.protection.outlook.com/?url=https://www.baaqmd.gov/capghg&amp;data=04%257C01%257Csbai@baaqmd.gov%257C8c0adf7d43f14e5b5a9d08d9dc2ac670%257C855defaabdae4e6281e53bb7aa04fc3a%257C0%257C0%257C637782898532015051%257CUnknown%257CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0=%257C3000&amp;sdata=Aqexj2d5+loYj+W1ZVBOI+JVpmaS2BY8MwUyLdrJBUY=&amp;reserved=0"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-wrapper-9">baaqmd.gov/capghg</span>
                    </a>
                    <span className="text-wrapper-8">
                      . These estimates do not reflect specific emissions changes in 2023 due to the impact of COVID-19
                      pandemic or wildfires.
                      <br />
                    </span>
                    <span className="text-wrapper-7">b</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes GHG emissions from refining processes and combustion of gas, liquid and
                      solid fuels at refineries; it does not include GHG emissions generated during cogeneration at
                      refineries, which is included in the Electricity/Co-Generation category.
                      <br />
                    </span>
                    <span className="text-wrapper-7">c</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes GHG emissions from combustion and processes at cement plants, natural gas
                      combustion, combustion of solid and liquid fuels in industries, natural gas distribution fugitive
                      losses (primarily methane), and industrial process emissions.
                      <br />
                    </span>
                    <span className="text-wrapper-7">d</span>
                    <span className="text-wrapper-8">
                      {" "}
                      These percentage estimates are developed based on the Air District’s currently available regional
                      inventory data. These estimates do not reflect specific emissions changes in 2023 due to the
                      impact of COVID-19 pandemic or wildfires.
                      <br />
                    </span>
                    <span className="text-wrapper-7">e</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes wind-blown dust from agricultural land and dust from construction
                      operations.
                      <br />
                    </span>
                    <span className="text-wrapper-7">f</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes construction and mining equipment, agricultural equipment, industrial and
                      light commercial equipment, and airport ground support equipment, etc.
                      <br />
                    </span>
                    <span className="text-wrapper-7">g</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes trains, lawn and garden equipment and other off-road equipment.
                      <br />
                    </span>
                    <span className="text-wrapper-7">h</span>
                    <span className="text-wrapper-8">
                      {" "}
                      This category includes passenger cars, buses, motorcycles, etc.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-graph-10">
            <div className="div-6">
              <SubTopicTitle className="instance-node-9" resolution="tablet" text="LABORATORY" type="default" />
            </div>
            <GraphChart
              className="graph-chart-15"
              frameClassName="graph-chart-3"
              frameClassNameOverride="graph-chart-3"
              graphChartLineColumns10="two"
              graphChartLineColumns11="two"
              graphChartLineColumns12="two"
              graphChartLineColumns13="two"
              graphChartLineFrameClassName1="graph-chart-5"
              graphChartLineFrameClassName2="graph-chart-5"
              graphChartLineFrameClassName3="graph-chart-5"
              graphChartLineFrameClassName4="graph-chart-5"
              graphChartLineLines10="one"
              graphChartLineLines11="one"
              graphChartLineLines12="one"
              graphChartLineLines13="one"
              graphChartLineSectionTitleClassName4="graph-chart-5"
              graphChartLineSectionTitleClassName5="graph-chart-5"
              graphChartLineSectionTitleClassName6="graph-chart-5"
              graphChartLineSectionTitleClassName7="graph-chart-5"
              graphChartLineText20="3,988"
              graphChartLineText21="Particulate Matter"
              graphChartLineText22="1,118"
              graphChartLineText23="Toxics"
              graphChartLineText24="41"
              graphChartLineText25="Source-Oriented Analyses"
              graphChartLineText26="0"
              graphChartLineText27="Interagency and Development Projects"
              graphChartTotalGraphChartLineColumns1="two"
              graphChartTotalGraphChartLineDivClassName="graph-chart-16"
              graphChartTotalGraphChartLineFrameClassName="graph-chart-5"
              graphChartTotalGraphChartLineText2="5,147"
              graphChartTotalLines1="one"
              graphChartTotalLinesResolutionClassNameOverride="graph-chart-7"
              hasFrame2={false}
              hasGroup2={false}
              quantity="one"
              resolution="desktop"
              sectionTitleClassName1={`${screenWidth >= 641 && screenWidth < 769 && "class-39"} ${
                screenWidth >= 769 && screenWidth < 1025 && "class-40"
              }`}
              sectionTitleClassName2="graph-chart-5"
              sectionTitleWrapperClassNameOverride="graph-chart-17"
              text="2023 Analyses Performed in the Lab*"
              text1="*Samples provide information about pollutant levels in ambient air, which help to identify areas for further reductions."
              visible25={false}
              visible26={false}
              visible27={false}
              visible28={false}
              visible29={false}
              visible30={false}
              visible31={false}
            />
          </div>
          <div className="section-graph-11">
            <div className="frame-60">
              <SubTopicTitle
                className="instance-node-9"
                resolution="tablet"
                sectionTitleClassName="sub-topic-title-instance"
                text="EXCEEDANCES OF AIR QUALITY STANDARDS"
                type="default"
              />
            </div>
            <GraphChart
              className="graph-chart-18"
              graphChartLineColumns14="two"
              graphChartLineColumns15="two"
              graphChartLineColumns16="two"
              graphChartLineColumns17="two"
              graphChartLineColumns18="two"
              graphChartLineColumns19="two"
              graphChartLineFrameClassName5="graph-chart-10"
              graphChartLineFrameClassName6="graph-chart-11"
              graphChartLineFrameClassName7="graph-chart-13"
              graphChartLineFrameClassName8="graph-chart-13"
              graphChartLineFrameClassName9="graph-chart-11"
              graphChartLineGraphChartLineClassName="instance-node-7"
              graphChartLineGraphChartLineClassName1="instance-node-7"
              graphChartLineGraphChartLineClassName2="instance-node-7"
              graphChartLineGraphChartLineClassName3="instance-node-7"
              graphChartLineGraphChartLineClassName4="instance-node-7"
              graphChartLineGraphChartLineClassNameOverride="instance-node-7"
              graphChartLineGraphChartLineWrapperClassName="instance-node-8"
              graphChartLineGraphChartLineWrapperClassNameOverride="instance-node-8"
              graphChartLineLines14="one"
              graphChartLineLines15="one"
              graphChartLineLines16="one"
              graphChartLineLines17="one"
              graphChartLineLines18="one"
              graphChartLineLines19="one"
              graphChartLineLinesColumnsClassName="instance-node-8"
              graphChartLineLinesColumnsClassName1="instance-node-8"
              graphChartLineLinesColumnsClassName2="instance-node-8"
              graphChartLineLinesColumnsClassNameOverride="instance-node-8"
              graphChartLineResolution="desktop_1"
              graphChartLineResolution1="desktop_1"
              graphChartLineResolution2="desktop_1"
              graphChartLineResolution3="desktop_1"
              graphChartLineResolution4="desktop_1"
              graphChartLineResolution5="desktop_1"
              graphChartLineSectionTitleClassName10="graph-chart-14"
              graphChartLineSectionTitleClassName8="graph-chart-14"
              graphChartLineSectionTitleClassName9="graph-chart-14"
              graphChartLineSectionTitleWrapperClassName="graph-chart-12"
              graphChartLineSectionTitleWrapperClassNameOverride="graph-chart-12"
              graphChartLineText28="Days over National 8-Hour Standard"
              graphChartLineText29="0"
              graphChartLineText30="Days over California 1-Hour Standard"
              graphChartLineText31="4*"
              graphChartLineText32="Days over California 8-Hour Standard"
              graphChartLineText33="0*"
              graphChartLineText34="Days over National 24-Hour PM10 Standard"
              graphChartLineText35="0*"
              graphChartLineText36="Days over California 24-Hour PM10 Standard"
              graphChartLineText37="3"
              graphChartLineText38="Days over National 24-Hour PM2.5 Standard"
              graphChartLineText39={screenWidth >= 769 && screenWidth < 1025 ? "4*" : undefined}
              groupClassName1="graph-chart-17"
              groupClassName2="graph-chart-17"
              hasFrame3={false}
              hasFrame4={false}
              hasFrame5={false}
              hasGroup3={false}
              hasGroup4={false}
              quantity="two"
              resolution="desktop"
              sectionTitleClassName3={`${screenWidth >= 641 && screenWidth < 769 && "class-41"} ${
                screenWidth >= 769 && screenWidth < 1025 && "class-42"
              }`}
              sectionTitleClassName4={`${screenWidth >= 641 && screenWidth < 769 && "class-41"} ${
                screenWidth >= 769 && screenWidth < 1025 && "class-42"
              }`}
              text="Particulate Matter"
              text1={
                <>
                  *Pending final certification
                  <br />
                   Final certification of exceedance data will occur May 1, 2024.
                </>
              }
              visible32={false}
              visible33={false}
              visible34={false}
              visible35={false}
              visible36={false}
              visible37={false}
              visible38={false}
              visible39={false}
              visible40={false}
              visible41={false}
              visible42={false}
              visible43={false}
              visible44={false}
              visible45={false}
              visible46={false}
              visible47={false}
              visible48={false}
              visible49={false}
            />
          </div>
          <InternalMenu
            arrowElementTypeBack="/img/arrow-element-24.png"
            arrowElementTypeForward="/img/arrow-element-25.png"
            className="internal-menu-instance"
            resolution="mobile"
          />
        </>
      )}

      {screenWidth < 641 && (
        <>
          <OpeningSection
            className="opening-section-3"
            font="body-text"
            headline="large"
            openingTextResolutionDesktopClassName="instance-node-9"
            openingTextText="EPA HEALTH STANDARDS FOR PARTICULATE MATTER"
            openingTextText1=" protect public health to an adequate margin of safety and protect the public against adverse effects. "
            openingTextText2="Exposure to fine particulate matter is an important driver of health risk throughout the Bay Area and is linked to serious respiratory illnesses and increased risk of heart attacks. Exposure is especially harmful for children, the elderly, and those with respiratory conditions."
            openingTextText3="We fully support the EPA’s lowering of the National Ambient Air Quality Standards (NAAQS) for particulate matter pollution. The NAAQS are designed to"
            resolution="mobile"
          />
          <HightlightBlurb
            className="hightlight-blurb-4"
            detail="image"
            image="top"
            imageSquare="/img/image-square-7-2x.png"
            resolution="mobile"
            type="default"
          />
          <div className="topics-section-6">
            <div className="topics-5">
              <div className="frame-49">
                <p className="james-cary-smith-8">
                  BAY AIR CENTER LAUNCHES <br />
                  PUBLIC WEBSITE
                </p>
                <p className="the-grant-program-8">
                  <span className="text-wrapper-13">We sponsored the Bay Air Center as a resource that offers</span>
                  <span className="text-wrapper-14">
                    {" "}
                    technical guidance, materials, and training on air monitoring and air quality data for
                    community-based organizations
                  </span>
                  <span className="text-wrapper-13">
                    , with the goal of supporting their efforts to understand and improve air quality. The website
                    provides detailed information on the program, a way to request support, and an extensive resource
                    library that includes materials developed by the Bay Air Center as well as external links to
                    materials that cover a variety of air quality-related topics.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <ElementImages
            arrowsCarrouselArrowsArrowElementTypeBack="/img/arrow-element-32.png"
            arrowsCarrouselArrowsArrowElementTypeForward="/img/arrow-element-33.png"
            carrousel
            className="element-images-3"
            frameClassName="element-images-4"
            img="/img/rectangle-256.png"
            rectangle="/img/rectangle-255-2.png"
            resolution="mobile"
          />
          <div className="frame-62">
            <div className="topics-section-7">
              <div className="topics-5">
                <div className="frame-49">
                  <p className="james-cary-smith-8">AD HOC COMMITTEE ON INCIDENT RESPONSE MONITORING</p>
                  <p className="the-grant-program-8">
                    <span className="text-wrapper-13">
                      Our Board of Directors formed an ad hoc committee on incident response monitoring. The committee
                      has identified ways to
                    </span>
                    <span className="text-wrapper-14">
                      {" "}
                      provide information more quickly to the public when there is an incident at a facility
                    </span>
                    <span className="text-wrapper-13">
                      , including how we are responding to the incident and what are potential impacts on air quality.
                      The ad hoc committee has also discussed opportunities to fill gaps in monitoring, which will be
                      considered as part of upcoming strategic planning and budget processes.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <ElementImage className="one-image-instance" rectangle="/img/rectangle-255-5.png" resolution="mobile" />
            <SectionGraph
              chartCaption="z"
              className="section-graph-12"
              graphs="zero"
              resolution="mobile"
              subTopicTitleText="BAY AREA POLLUTION SOURCES"
              title="top"
            />
            <div className="section-graph-13">
              <div className="sub-topic-title-2">
                <p className="section-title-73">
                  <span className="text-wrapper-15">SOURCES OF GREENHOUSE GAS EMISSIONS </span>
                  <span className="text-wrapper-16">a</span>
                </p>
              </div>
              <div className="div-6">
                <div className="frame-63">
                  <ResoolutionDesktopWrapper
                    className="instance-node-8"
                    graphBarCaptionColumnsResolutionClassName="instance-node-9"
                    graphBarCaptionColumnsResolutionClassName1="instance-node-9"
                    graphBarCaptionColumnsResolutionClassName2="instance-node-9"
                    graphBarCaptionColumnsResolutionClassName3="instance-node-9"
                    graphBarCaptionColumnsResolutionClassName4="instance-node-9"
                    graphBarCaptionColumnsResolutionClassNameOverride="instance-node-9"
                    graphBarCaptionDivClassName="graph-bar-caption-5"
                    graphBarCaptionDivClassNameOverride="graph-bar-caption-2"
                    graphBarCaptionFrameWrapperClassName="instance-node-9"
                    graphBarCaptionFrameWrapperClassNameOverride="instance-node-9"
                    graphBarCaptionRectangleClassName="graph-bar-caption-6"
                    graphBarCaptionRectangleClassName1="graph-bar-caption-9"
                    graphBarCaptionRectangleClassName2="graph-bar-caption-3"
                    graphBarCaptionRectangleClassName3="graph-bar-caption-8"
                    graphBarCaptionRectangleClassNameOverride="graph-bar-caption-4"
                    graphBarCaptionSectionTitleClassName="graph-bar-caption-11"
                    graphBarCaptionSectionTitleClassNameOverride="graph-bar-caption-11"
                    graphBarCaptionText="39.1%"
                    graphBarCaptionText1="Industrial - Oil Refineries b"
                    graphBarCaptionText10="5.0%"
                    graphBarCaptionText11="Recycling and Waste"
                    graphBarCaptionText12="2.7%"
                    graphBarCaptionText13="Agriculture/Farming"
                    graphBarCaptionText14="1.5%"
                    graphBarCaptionText2="18.9%"
                    graphBarCaptionText3="Electricity/Co-Generation"
                    graphBarCaptionText4="13.1%"
                    graphBarCaptionText5="Residential/Commercial Fuel Usage"
                    graphBarCaptionText6="11.7%"
                    graphBarCaptionText7="Industrial - Others c"
                    graphBarCaptionText8="8.0%"
                    graphBarCaptionText9="High Global Warming Potential Gases"
                    resoolution="mobile"
                    visible={false}
                    visible1={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-13"
                    columns="two"
                    frameClassName="graph-chart-line-16"
                    graphChartLineClassName="graph-chart-line-14"
                    input="total-sl"
                    lines="one"
                    resolution="mobile"
                    sectionTitleClassName="graph-chart-line-15"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-1"
                  className="instance-node-9"
                  clipPathGroup="/img/clip-path-group-18.png"
                  groupClassName="graph-pie-14"
                  overlapGroupClassName="graph-pie-15"
                  resolution="mobile-sm"
                  subtitle={false}
                  title={false}
                />
              </div>
            </div>
            <div className="section-graph-13">
              <div className="sub-topic-title-2">
                <p className="section-title-73">
                  <span className="text-wrapper-15">Sources of Annual Fine Particulate Pollution </span>
                  <span className="text-wrapper-16">d</span>
                </p>
              </div>
              <div className="div-6">
                <div className="frame-63">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-8"
                    resolution="mobile"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="graph-bar-caption-10"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName="graph-bar-caption-11"
                    resoolutionDesktopWrapperGraphBarCaptionText="Road Dust"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Residential Wood Burning"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Accidental &amp; Planned Fires"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Commercial Cooking"
                    resoolutionDesktopWrapperGraphBarCaptionText12="13.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Stationary Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText14="Other Dust e"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Stationary Non-Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText16="15.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Mobile Off-Road Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText2="14.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Mobile On-Road Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText4="18.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText5="13.7%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="9.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="5.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="7.2%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="2.1%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-8"
                    resoolutionDesktopWrapperVisible={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-13"
                    columns="two"
                    frameClassName="graph-chart-line-16"
                    graphChartLineClassName="graph-chart-line-14"
                    input="total-sl"
                    lines="one"
                    resolution="mobile"
                    sectionTitleClassName="graph-chart-line-15"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-2"
                  className="instance-node-9"
                  groupClassName="graph-pie-16"
                  img="/img/clip-path-group-19.png"
                  overlapGroupClassNameOverride="graph-pie-15"
                  resolution="mobile-sm"
                  subtitle={false}
                  title={false}
                />
              </div>
            </div>
            <div className="section-graph-14">
              <div className="sub-topic-title-2">
                <p className="section-title-73">
                  <span className="text-wrapper-15">Sources of Annual Nitrogen Oxide Pollution </span>
                  <span className="text-wrapper-16">d</span>
                </p>
              </div>
              <div className="div-6">
                <div className="frame-63">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-8"
                    resolution="mobile"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="graph-bar-caption-10"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName="graph-bar-caption-11"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1="graph-bar-caption-11"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassNameOverride="graph-bar-caption-11"
                    resoolutionDesktopWrapperGraphBarCaptionText="Mobile Off-Road Sources - Aircraft"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Mobile Off-Road Sources - Ships"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Stationary Non-Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Residential Natural Gas Combustion"
                    resoolutionDesktopWrapperGraphBarCaptionText12="13.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Stationary Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText14={
                      <>
                        Mobile On-Road Sources - <br />
                        Other Vehicles h
                      </>
                    }
                    resoolutionDesktopWrapperGraphBarCaptionText15="Mobile On-Road Sources - Trucks"
                    resoolutionDesktopWrapperGraphBarCaptionText16="21.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Mobile Off-Road Sources - Other g"
                    resoolutionDesktopWrapperGraphBarCaptionText2="10.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Mobile Off-Road Sources - Equipment f"
                    resoolutionDesktopWrapperGraphBarCaptionText4="33.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText5="9.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="6.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="4.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="5.5%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="1.3%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-8"
                    resoolutionDesktopWrapperVisible={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-13"
                    columns="two"
                    frameClassName="graph-chart-line-16"
                    graphChartLineClassName="graph-chart-line-14"
                    input="total-sl"
                    lines="one"
                    resolution="mobile"
                    sectionTitleClassName="graph-chart-line-15"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-3"
                  className="instance-node-9"
                  clipPathGroup1="/img/clip-path-group-20.png"
                  groupClassName="graph-pie-17"
                  overlapGroupClassName="graph-pie-18"
                  resolution="mobile-sm"
                  subtitle={false}
                  title={false}
                />
              </div>
            </div>
            <div className="frame-64">
              <div className="div-6">
                <div className="frame-54">
                  <p className="section-title-74">
                    <span className="text-wrapper-17">a </span>
                    <span className="text-wrapper-18">
                      The Air District’s latest greenhouse gas (GHG) emissions estimates can be found here:{" "}
                    </span>
                    <a
                      href="https://nam02.safelinks.protection.outlook.com/?url=https://www.baaqmd.gov/capghg&amp;data=04%257C01%257Csbai@baaqmd.gov%257C8c0adf7d43f14e5b5a9d08d9dc2ac670%257C855defaabdae4e6281e53bb7aa04fc3a%257C0%257C0%257C637782898532015051%257CUnknown%257CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0=%257C3000&amp;sdata=Aqexj2d5+loYj+W1ZVBOI+JVpmaS2BY8MwUyLdrJBUY=&amp;reserved=0"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-wrapper-19">baaqmd.gov/capghg</span>
                    </a>
                    <span className="text-wrapper-18">
                      . These estimates do not reflect specific emissions changes in 2023 due to the impact of COVID-19
                      pandemic or wildfires.
                      <br />
                    </span>
                    <span className="text-wrapper-17">b</span>
                    <span className="text-wrapper-18">
                      {" "}
                      This category includes GHG emissions from refining processes and combustion of gas, liquid and
                      solid fuels at refineries; it does not include GHG emissions generated during cogeneration at
                      refineries, which is included in the Electricity/Co-Generation category.
                      <br />
                    </span>
                    <span className="text-wrapper-17">c</span>
                    <span className="text-wrapper-18">
                      {" "}
                      This category includes GHG emissions from combustion and processes at cement plants, natural gas
                      combustion, combustion of solid and liquid fuels in industries, natural gas distribution fugitive
                      losses (primarily methane), and industrial process emissions.
                      <br />
                    </span>
                    <span className="text-wrapper-17">d</span>
                    <span className="text-wrapper-18">
                      {" "}
                      These percentage estimates are developed based on the Air District’s currently available regional
                      inventory data. These estimates do not reflect specific emissions changes in 2023 due to the
                      impact of COVID-19 pandemic or wildfires.
                      <br />
                    </span>
                    <span className="text-wrapper-17">e</span>
                    <span className="text-wrapper-18">
                      {" "}
                      This category includes wind-blown dust from agricultural land and dust from construction
                      operations.
                      <br />
                    </span>
                    <span className="text-wrapper-17">f</span>
                    <span className="text-wrapper-18">
                      {" "}
                      This category includes construction and mining equipment, agricultural equipment, industrial and
                      light commercial equipment, and airport ground support equipment, etc.
                      <br />
                    </span>
                    <span className="text-wrapper-17">g</span>
                    <span className="text-wrapper-18">
                      {" "}
                      This category includes trains, lawn and garden equipment and other off-road equipment.
                      <br />
                    </span>
                    <span className="text-wrapper-17">h</span>
                    <span className="text-wrapper-18">
                      {" "}
                      This category includes passenger cars, buses, motorcycles, etc.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-graph-wrapper">
            <SectionGraph
              chartCaption="no"
              className="section-graph-15"
              graphs="one"
              override={
                <GraphChart
                  className="graph-chart-19"
                  graphChartLineColumns="two"
                  graphChartLineColumns1="two"
                  graphChartLineColumns2="two"
                  graphChartLineColumns3="two"
                  graphChartLineDivClassName="graph-chart-5"
                  graphChartLineDivClassNameOverride="graph-chart-5"
                  graphChartLineFrameClassName="graph-chart-5"
                  graphChartLineFrameClassNameOverride="graph-chart-5"
                  graphChartLineFrameWrapperClassName="graph-chart-5"
                  graphChartLineFrameWrapperClassNameOverride="graph-chart-5"
                  graphChartLineLines="one"
                  graphChartLineLines1="one"
                  graphChartLineLines2="one"
                  graphChartLineLines3="one"
                  graphChartLineSectionTitleClassName="graph-chart-5"
                  graphChartLineSectionTitleClassNameOverride="graph-chart-5"
                  graphChartLineText="3,988"
                  graphChartLineText1="Particulate Matter"
                  graphChartLineText2="1,118"
                  graphChartLineText3="Toxics"
                  graphChartLineText4="41"
                  graphChartLineText5="Source-Oriented Analyses"
                  graphChartLineText6="0"
                  graphChartLineText7="Interagency and Development Projects"
                  graphChartTotalGraphChartLineColumns="two"
                  graphChartTotalGraphChartLineGraphChartLineClassName="graph-chart-22"
                  graphChartTotalGraphChartLineHasFrame={false}
                  graphChartTotalGraphChartLineSectionTitleClassName="graph-chart-23"
                  graphChartTotalGraphChartLineSectionTitleClassNameOverride="graph-chart-5"
                  graphChartTotalGraphChartLineText="5,147"
                  graphChartTotalGraphChartLineText1="Total"
                  graphChartTotalLines="one"
                  graphChartTotalLinesResolutionClassName="graph-chart-7"
                  groupClassName="graph-chart-20"
                  hasFrame={false}
                  hasGroup={false}
                  quantity="one"
                  resolution="mobile"
                  sectionTitleClassName="graph-chart-21"
                  sectionTitleClassNameOverride="graph-chart-5"
                  text="2023 Analyses Performed in the Lab*"
                  text1="*Samples provide information about pollutant levels in ambient air, which help to identify areas for further reductions."
                  visible={false}
                  visible1={false}
                  visible2={false}
                  visible3={false}
                  visible4={false}
                  visible5={false}
                  visible6={false}
                />
              }
              resolution="mobile"
              subTopicTitleText1="LABORATORY"
              subTopicTitleTypeDefaultClassName="instance-node-9"
              title="with-graph"
            />
          </div>
          <SectionGraph
            chartCaption="no"
            className="section-graph-16"
            graphs="one"
            override={
              <GraphChart
                className="instance-node-9"
                divClassName="graph-chart-25"
                divClassNameOverride="graph-chart-25"
                graphChartLineColumns4="two"
                graphChartLineColumns5="two"
                graphChartLineColumns6="two"
                graphChartLineColumns7="two"
                graphChartLineColumns8="two"
                graphChartLineColumns9="two"
                graphChartLineLines4="one"
                graphChartLineLines5="one"
                graphChartLineLines6="one"
                graphChartLineLines7="one"
                graphChartLineLines8="one"
                graphChartLineLines9="one"
                graphChartLineSectionTitleClassName1="graph-chart-26"
                graphChartLineSectionTitleClassName2="graph-chart-26"
                graphChartLineSectionTitleClassName3="graph-chart-26"
                graphChartLineText10="Days over California 1-Hour Standard"
                graphChartLineText11="0"
                graphChartLineText12="Days over California 8-Hour Standard"
                graphChartLineText13="4*"
                graphChartLineText14="0*"
                graphChartLineText15="Days over National 24-Hour PM10 Standard"
                graphChartLineText16="0*"
                graphChartLineText17="Days over California 24-Hour PM10 Standard"
                graphChartLineText18="3"
                graphChartLineText19="Days over National 24-Hour PM2.5 Standard"
                graphChartLineText8="Days over National 8-Hour Standard"
                graphChartLineText9="4*"
                groupClassNameOverride="graph-chart-24"
                hasDiv={false}
                hasFrame1={false}
                hasGroup1={false}
                hasGroupWrapper={false}
                hasSectionTitleWrapper={false}
                quantity="two"
                resolution="mobile"
                sectionTitleWrapperClassName="graph-chart-24"
                text="Particulate Matter"
                text1={
                  <>
                    *Pending final certification
                    <br />
                    Final certification of exceedance data will occur May 1, 2024.
                  </>
                }
                visible10={false}
                visible11={false}
                visible12={false}
                visible13={false}
                visible14={false}
                visible15={false}
                visible16={false}
                visible17={false}
                visible18={false}
                visible19={false}
                visible20={false}
                visible21={false}
                visible22={false}
                visible23={false}
                visible24={false}
                visible7={false}
                visible8={false}
                visible9={false}
              />
            }
            resolution="mobile"
            subTopicTitleText1="EXCEEDANCES OF AIR QUALITY STANDARDS"
            subTopicTitleTypeDefaultClassName="instance-node-9"
            title="with-graph"
          />
          <InternalMenu
            arrowElementTypeBack="/img/arrow-element-34.png"
            arrowElementTypeForward="/img/arrow-element-35.png"
            className="internal-menu-instance"
            resolution="mobile"
          />
        </>
      )}
    </div>
  );
};

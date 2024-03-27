import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { ArrowsCarrousel } from "../../components/ArrowsCarrousel";
import { Button } from "../../components/Button";
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
import "./style.css";

export const ElementPx = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="element-px"
      style={{
        minWidth:
          screenWidth < 768
            ? "375px"
            : screenWidth >= 768 && screenWidth < 1440
            ? "768px"
            : screenWidth >= 1440 && screenWidth < 1920
            ? "1440px"
            : screenWidth >= 1920
            ? "1920px"
            : undefined,
        overflow: screenWidth < 768 ? "hidden" : undefined,
      }}
    >
      {(screenWidth >= 1920 || (screenWidth >= 768 && screenWidth < 1440) || screenWidth < 768) && (
        <Header
          className={`${screenWidth >= 768 && screenWidth < 1440 && "class-13"} ${
            (screenWidth >= 1920 || screenWidth < 768) && "class-14"
          }`}
          resolution={
            screenWidth >= 768 && screenWidth < 1440
              ? "tablet"
              : screenWidth >= 1920
              ? "desktop-1920"
              : screenWidth < 768
              ? "mobile"
              : undefined
          }
        />
      )}

      {screenWidth < 768 && (
        <>
          <TitleSection
            blockOfTextElementAnnualReportClassName="title-section-4"
            blockOfTextResolutionMobileClassName="title-section-5"
            blockOfTextSectionTitleClassName="title-section-3"
            blockOfTextText="HOW DO WE TRACK AIR QUALITY?"
            blockOfTextText1="AIR QUALITY"
            className="title-section-instance"
            frameClassName="title-section-2"
            layout="stacked"
            resolution="mobile"
          />
          <div className="opening-text-wrapper">
            <div className="opening-text-2">
              <div className="frame-44">
                <div className="AB-community-2">
                  AIR DISTRICT <br />
                  MONITORING SITES
                </div>
                <p className="we-continued-to-work-2">
                  <span className="text-wrapper-6">Our network </span>
                  <span className="text-wrapper-7">measures concentrations of pollutants </span>
                  <span className="text-wrapper-6">
                    at ground level using monitoring methods set by the U.S. Environmental Protection Agency and other
                    state-of-the-art instruments. This data{" "}
                  </span>
                  <span className="text-wrapper-7">
                    tracks trends in air pollution levels, demonstrates compliance with air quality standards, informs
                    air quality forecasts, regional and local air quality plans and air modeling, and other air quality
                    and health research.
                  </span>
                  <span className="text-wrapper-6">
                    {" "}
                    Pollutants measured by the monitoring network include ozone, carbon monoxide, nitrogen oxides,
                    sulfur dioxide, particulate matter concentration and composition, lead, black carbon, ultrafine
                    particulate matter, hydrogen sulfide, and volatile organic compounds, including many toxic air
                    contaminants.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <SectionMap className="section-map-instance" map="/img/map-2.svg" resolution="mobile" />
          <StatSection
            aligment="right"
            className="stat-section-instance"
            hasSectionTitle={false}
            quantity="three"
            resolution="mobile"
            statSetStatColor="dark-blue"
            statSetStatColor1="blue"
            statSetStatText="13"
            statSetStatText1="total air monitoring sites across the Bay Area"
            statSetStatText2="total meteorological sites across the Bay Area"
            statSetStatText3="31"
            statSetStatType="quote"
            title
          />
          <OpeningSection
            className="opening-section-instance"
            font="body-text"
            headline="large"
            openingTextText="Exposure to fine particulate matter is an important driver of health risk throughout the Bay Area and is linked to serious respiratory illnesses and increased risk of heart attacks. Exposure is especially harmful for children, the elderly, and those with respiratory conditions."
            openingTextText1="We fully support the EPA’s lowering of the National Ambient Air Quality Standards (NAAQS) for particulate matter pollution. The NAAQS are designed to"
            openingTextText2=" protect public health to an adequate margin of safety and protect the public against adverse effects. "
            openingTextText3="EPA HEALTH STANDARDS FOR PARTICULATE MATTER"
            resolution="mobile"
          />
          <HightlightBlurb
            className="hightlight-blurb-instance"
            detail="image"
            image="top"
            resolution="mobile"
            type="default"
          />
        </>
      )}

      {screenWidth >= 768 && screenWidth < 1440 && (
        <TitleSection
          blockOfTextElementAnnualReportClassName="title-section-4"
          blockOfTextResolution="desktop"
          blockOfTextResolutionMobileClassName="title-section-5"
          blockOfTextSectionTitleClassName="title-section-3"
          blockOfTextText="HOW DO WE TRACK AIR QUALITY?"
          blockOfTextText1="AIR QUALITY"
          blockOfTextTextClassName="instance-node-7"
          className="title-section-6"
          frameClassName="title-section-2"
          layout="stacked"
          resolution="mobile"
        />
      )}

      {screenWidth >= 1440 && screenWidth < 1920 && (
        <header className="header-2">
          <div className="BAAQMD-logo-wrapper">
            <img className="BAAQMD-logo-3" alt="Baaqmd logo" src="/img/baaqmd-logo-fullcolor-black-2.png" />
          </div>
          <div className="navbar">
            <div className="text-wrapper-8">INTRODUCTION</div>
            <div className="text-wrapper-8">AIR QUALITY</div>
            <div className="text-wrapper-8">COMMUNITY</div>
            <div className="text-wrapper-8">REDUCE</div>
            <div className="text-wrapper-8">PROTECT</div>
            <div className="text-wrapper-8">ABOUT US</div>
            <Button className="instance-node-8" color="brick" icon={false} size="large" type="filled" />
          </div>
        </header>
      )}

      {((screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920) && (
        <TitleSection
          blockOfTextElementAnnualReportClassNameOverride="title-section-3"
          blockOfTextResolutionMobileClassNameOverride="title-section-7"
          blockOfTextSectionTitleClassNameOverride="title-section-3"
          blockOfTextText2="HOW DO WE TRACK AIR QUALITY?"
          blockOfTextText3="AIR QUALITY"
          className={`${screenWidth >= 1920 && "title-section-instance"} ${
            screenWidth >= 1440 && screenWidth < 1920 && "title-section-6"
          }`}
          frameClassNameOverride="title-section-2"
          layout="img-r"
          resolution="desktop"
        />
      )}

      {((screenWidth >= 1440 && screenWidth < 1920) || (screenWidth >= 768 && screenWidth < 1440)) && (
        <div
          className="opening-section-2"
          style={{
            padding:
              screenWidth >= 768 && screenWidth < 1440
                ? "80px 48px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "160px 0px 80px 100px"
                : undefined,
          }}
        >
          <div
            className="opening-text-3"
            style={{
              alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
              display:
                screenWidth >= 768 && screenWidth < 1440
                  ? "flex"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "inline-flex"
                  : undefined,
              width: screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
            }}
          >
            <div
              className="frame-45"
              style={{
                alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
                display:
                  screenWidth >= 768 && screenWidth < 1440
                    ? "flex"
                    : screenWidth >= 1440 && screenWidth < 1920
                    ? "inline-flex"
                    : undefined,
                width: screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <div
                className="AB-community-3"
                style={{
                  marginRight: screenWidth >= 768 && screenWidth < 1440 ? "-169.00px" : undefined,
                }}
              >
                AIR DISTRICT <br />
                MONITORING SITES
              </div>
              <p
                className="we-continued-to-work-3"
                style={{
                  alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
                  width: screenWidth >= 1440 && screenWidth < 1920 ? "855px" : undefined,
                }}
              >
                <span className="text-wrapper-9">Our network </span>
                <span className="text-wrapper-10">measures concentrations of pollutants</span>
                <span className="text-wrapper-9">
                  {" "}
                  at ground level using monitoring methods set by the U.S. Environmental Protection Agency and other
                  state-of-the-art instruments. This data{" "}
                </span>
                <span className="text-wrapper-10">
                  tracks trends in air pollution levels, demonstrates compliance with air quality standards, informs air
                  quality forecasts, regional and local air quality plans and air modeling, and other air quality and
                  health research.{" "}
                </span>
                <span className="text-wrapper-9">
                  Pollutants measured by the monitoring network include ozone, carbon monoxide, nitrogen oxides, sulfur
                  dioxide, particulate matter concentration and composition, lead, black carbon, ultrafine particulate
                  matter, hydrogen sulfide, and volatile organic compounds, including many toxic air contaminants.
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {screenWidth >= 1440 && screenWidth < 1920 && (
        <>
          <div className="map-with-label-wrapper">
            <div className="map-with-label-3">
              <div className="frame-46">
                <div className="frame-47">
                  <div className="frame-48">
                    <div className="rectangle-19" />
                    <div className="section-title-63">AIR MONITORING SITES</div>
                  </div>
                </div>
                <div className="frame-49">
                  <div className="frame-48">
                    <div className="rectangle-20" />
                    <div className="section-title-63">METEOROLOGICAL SITES</div>
                  </div>
                </div>
              </div>
              <img className="map-2" alt="Map" src="/img/map-4.svg" />
            </div>
          </div>
          <StatSection
            aligment="right"
            className="stat-section-4"
            quantity="three"
            resolution="desktop"
            statSetResolutionDesktopClassNameOverride="stat-section-2"
            statSetStatColor2="dark-blue"
            statSetStatColor3="blue"
            statSetStatDivClassName="stat-section-3"
            statSetStatDivClassNameOverride="stat-section-3"
            statSetStatText4="13"
            statSetStatText5="total air monitoring sites across the Bay Area"
            statSetStatText6="total meteorological sites across the Bay Area"
            statSetStatText7="31"
            statSetStatType1="quote"
            statSetStatTypeQuoteColorClassNameOverride="stat-section-3"
            title={false}
          />
        </>
      )}

      {(screenWidth >= 1920 || screenWidth < 768) && (
        <div
          className="topics-section"
          style={{
            padding: screenWidth < 768 ? "100px 24px 60px" : screenWidth >= 1920 ? "160px 0px 80px 145px" : undefined,
            width: screenWidth < 768 ? "375px" : screenWidth >= 1920 ? "1920px" : undefined,
            zIndex: screenWidth < 768 ? "6" : screenWidth >= 1920 ? "11" : undefined,
          }}
        >
          <div
            className="topics-5"
            style={{
              alignSelf: screenWidth < 768 ? "stretch" : undefined,
              display: screenWidth < 768 ? "flex" : screenWidth >= 1920 ? "inline-flex" : undefined,
              width: screenWidth < 768 ? "100%" : undefined,
            }}
          >
            <div
              className="frame-50"
              style={{
                alignSelf: screenWidth < 768 ? "stretch" : undefined,
                display: screenWidth < 768 ? "flex" : screenWidth >= 1920 ? "inline-flex" : undefined,
                width: screenWidth < 768 ? "100%" : undefined,
              }}
            >
              <div
                className="james-cary-smith-5"
                style={{
                  alignSelf: screenWidth < 768 ? "stretch" : undefined,
                  fontFamily:
                    screenWidth < 768
                      ? "var(--h3-mobile-font-family)"
                      : screenWidth >= 1920
                      ? "var(--h2-desktop-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth < 768
                      ? "var(--h3-mobile-font-size)"
                      : screenWidth >= 1920
                      ? "var(--h2-desktop-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth < 768
                      ? "var(--h3-mobile-font-style)"
                      : screenWidth >= 1920
                      ? "var(--h2-desktop-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth < 768
                      ? "var(--h3-mobile-font-weight)"
                      : screenWidth >= 1920
                      ? "var(--h2-desktop-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth < 768
                      ? "var(--h3-mobile-letter-spacing)"
                      : screenWidth >= 1920
                      ? "var(--h2-desktop-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth < 768
                      ? "var(--h3-mobile-line-height)"
                      : screenWidth >= 1920
                      ? "var(--h2-desktop-line-height)"
                      : undefined,
                  width: screenWidth >= 1920 ? "841px" : undefined,
                }}
              >
                {screenWidth < 768 && (
                  <p className="text-wrapper-19">
                    BAY AIR CENTER LAUNCHES <br />
                    PUBLIC WEBSITE
                  </p>
                )}

                {screenWidth >= 1920 && (
                  <>
                    AIR DISTRICT <br />
                    MONITORING SITES
                  </>
                )}
              </div>
              <div
                className="the-grant-program-5"
                style={{
                  alignSelf: screenWidth < 768 ? "stretch" : undefined,
                  color: screenWidth < 768 ? "var(--dark-gray)" : screenWidth >= 1920 ? "var(--dark-blue)" : undefined,
                  fontSize: screenWidth < 768 ? "15px" : screenWidth >= 1920 ? "26px" : undefined,
                  letterSpacing: screenWidth < 768 ? "0.60px" : screenWidth >= 1920 ? "1.04px" : undefined,
                  lineHeight: screenWidth < 768 ? "25.5px" : screenWidth >= 1920 ? "26px" : undefined,
                  width: screenWidth >= 1920 ? "855px" : undefined,
                }}
              >
                <span
                  className="span-2"
                  style={{
                    fontFamily:
                      screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-family)"
                        : screenWidth < 768
                        ? "var(--body-text-mobile-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-size)"
                        : screenWidth < 768
                        ? "var(--body-text-mobile-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-style)"
                        : screenWidth < 768
                        ? "var(--body-text-mobile-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-weight)"
                        : screenWidth < 768
                        ? "var(--body-text-mobile-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth >= 1920
                        ? "var(--pull-quote-desktop-letter-spacing)"
                        : screenWidth < 768
                        ? "var(--body-text-mobile-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth >= 1920
                        ? "var(--pull-quote-desktop-line-height)"
                        : screenWidth < 768
                        ? "var(--body-text-mobile-line-height)"
                        : undefined,
                  }}
                >
                  {screenWidth >= 1920 && <>Our network </>}

                  {screenWidth < 768 && <>We sponsored the Bay Air Center as a resource that offers</>}
                </span>
                {screenWidth >= 1920 && (
                  <p className="span-wrapper">
                    <span className="text-wrapper-10">measures concentrations of pollutants</span>
                  </p>
                )}

                <span
                  className="span-2"
                  style={{
                    fontFamily:
                      screenWidth < 768
                        ? "var(--body-text-mobile-bold-font-family)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 768
                        ? "var(--body-text-mobile-bold-font-size)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 768
                        ? "var(--body-text-mobile-bold-font-style)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 768
                        ? "var(--body-text-mobile-bold-font-weight)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 768
                        ? "var(--body-text-mobile-bold-letter-spacing)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 768
                        ? "var(--body-text-mobile-bold-line-height)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-line-height)"
                        : undefined,
                  }}
                >
                  {screenWidth < 768 && (
                    <>
                      {" "}
                      technical guidance, materials, and training on air monitoring and air quality data for
                      community-based organizations
                    </>
                  )}

                  {screenWidth >= 1920 && (
                    <>
                      {" "}
                      at ground level using monitoring methods set by the U.S. Environmental Protection Agency and other
                      state-of-the-art instruments. This data{" "}
                    </>
                  )}
                </span>
                {screenWidth >= 1920 && (
                  <p className="span-wrapper">
                    <span className="text-wrapper-10">
                      tracks trends in air pollution levels, demonstrates compliance with air quality standards, informs
                      air quality forecasts, regional and local air quality plans and air modeling, and other air
                      quality and health research.{" "}
                    </span>
                  </p>
                )}

                <span
                  className="span-2"
                  style={{
                    fontFamily:
                      screenWidth < 768
                        ? "var(--body-text-mobile-font-family)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 768
                        ? "var(--body-text-mobile-font-size)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 768
                        ? "var(--body-text-mobile-font-style)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 768
                        ? "var(--body-text-mobile-font-weight)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 768
                        ? "var(--body-text-mobile-letter-spacing)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 768
                        ? "var(--body-text-mobile-line-height)"
                        : screenWidth >= 1920
                        ? "var(--pull-quote-desktop-line-height)"
                        : undefined,
                  }}
                >
                  {screenWidth < 768 && (
                    <>
                      , with the goal of supporting their efforts to understand and improve air quality. The website
                      provides detailed information on the program, a way to request support, and an extensive resource
                      library that includes materials developed by the Bay Air Center as well as external links to
                      materials that cover a variety of air quality-related topics.
                    </>
                  )}

                  {screenWidth >= 1920 && (
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
      )}

      {screenWidth >= 1920 && (
        <>
          <SectionMap className="section-map-2" img="/img/map-6.svg" resolution="desktop" />
          <StatSection
            aligment="right"
            className="stat-section-5"
            quantity="three"
            resolution="desktop"
            statSetResolutionDesktopClassNameOverride="instance-node-8"
            statSetStatColor2="dark-blue"
            statSetStatColor3="blue"
            statSetStatText4="13"
            statSetStatText5="total air monitoring sites across the Bay Area"
            statSetStatText6="total meteorological sites across the Bay Area"
            statSetStatText7="31"
            statSetStatType1="quote"
            title={false}
          />
        </>
      )}

      {((screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920) && (
        <OpeningSection
          className={`${screenWidth >= 1440 && screenWidth < 1920 && "class-15"} ${screenWidth >= 1920 && "class-16"}`}
          font="body-text"
          headline="large"
          openingTextResolutionDesktopClassName="instance-node-8"
          openingTextText="Exposure to fine particulate matter is an important driver of health risk throughout the Bay Area and is linked to serious respiratory illnesses and increased risk of heart attacks. Exposure is especially harmful for children, the elderly, and those with respiratory conditions."
          openingTextText1="We fully support the EPA’s lowering of the National Ambient Air Quality Standards (NAAQS) for particulate matter pollution. The NAAQS are designed to "
          openingTextText2="protect public health to an adequate margin of safety and protect the public against adverse effects. "
          openingTextText3="EPA HEALTH STANDARDS FOR PARTICULATE MATTER"
          openingTextWeContinuedToWorkClassName="opening-section-3"
          resolution="desktop"
        />
      )}

      {screenWidth >= 1920 && (
        <>
          <PropertyDefaultWrapper
            className="hightlight-blurb-section"
            hightlightBlurbFrameClassName="instance-node-9"
            hightlightBlurbImageSquare="/img/image-square-6.png"
            hightlightBlurbJamesCarySmithClassName="text-wrapper-11"
            hightlightBlurbTypeDefaultImageClassName="instance-node-8"
            property1="default"
          />
          <div className="topics-section-2">
            <div className="topics-6">
              <div className="frame-44">
                <p className="james-cary-smith-6">
                  BAY AIR CENTER LAUNCHES <br />
                  PUBLIC WEBSITE
                </p>
                <p className="the-grant-program-6">
                  <span className="text-wrapper-12">We sponsored the Bay Air Center as a resource that offers </span>
                  <span className="text-wrapper-13">
                    technical guidance, materials, and training on air monitoring and air quality data for
                    community-based organizations
                  </span>
                  <span className="text-wrapper-12">
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
            arrowsCarrouselArrowsCarrouselClassName="instance-node-8"
            carrousel
            className="two-images"
            img="/img/rectangle-256-1.png"
            rectangle="/img/rectangle-255-4.png"
            resolution="desktop"
          />
          <div className="frame-51">
            <div className="topics-section-3">
              <div className="topics-6">
                <div className="frame-44">
                  <p className="james-cary-smith-6">AD HOC COMMITTEE ON INCIDENT RESPONSE MONITORING</p>
                  <p className="the-grant-program-6">
                    <span className="text-wrapper-12">
                      Our Board of Directors formed an ad hoc committee on incident response monitoring. The committee
                      has identified ways to{" "}
                    </span>
                    <span className="text-wrapper-13">
                      provide information more quickly to the public when there is an incident at a facility
                    </span>
                    <span className="text-wrapper-12">
                      , including how we are responding to the incident and what are potential impacts on air quality.
                      The ad hoc committee has also discussed opportunities to fill gaps in monitoring, which will be
                      considered as part of upcoming strategic planning and budget processes.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <ElementImage className="one-image" img="/img/rectangle-255-5.png" resolution="destop" />
            <SectionGraph
              chartCaption="z"
              className="section-graph-instance"
              graphs="zero"
              resolution="desktop"
              subTopicTitleText="BAY AREA POLLUTION SOURCES"
              subTopicTitleTypeDefaultClassNameOverride="instance-node-8"
              title="top"
            />
            <div className="section-graph-2">
              <div className="sub-topic-title-2">
                <p className="section-title-64">
                  <span className="text-wrapper-11">SOURCES OF GREENHOUSE GAS EMISSIONS </span>
                  <span className="text-wrapper-14">a</span>
                </p>
              </div>
              <div className="frame-52">
                <div className="frame-53">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-8"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName2="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionText="18.9%"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Residential/Commercial Fuel Usage"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Recycling and Waste"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Industrial - Others c"
                    resoolutionDesktopWrapperGraphBarCaptionText12="8.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Industrial - Oil Refineries b"
                    resoolutionDesktopWrapperGraphBarCaptionText14="5.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Transportation"
                    resoolutionDesktopWrapperGraphBarCaptionText16="Agriculture/Farming"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Electricity/Co-Generation"
                    resoolutionDesktopWrapperGraphBarCaptionText3="High Global Warming Potential Gases"
                    resoolutionDesktopWrapperGraphBarCaptionText5="1.5%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="11.7%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="13.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="39.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="2.7%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-8"
                    resoolutionDesktopWrapperVisible={false}
                    resoolutionDesktopWrapperVisible1={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-7"
                    columns="two"
                    frameClassName="graph-chart-line-10"
                    graphChartLineClassName="graph-chart-line-8"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-9"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-1"
                  clipPathGroup2="/img/clip-path-group.png"
                  groupClassName="graph-pie-7"
                  overlapGroupClassName="graph-pie-8"
                  overlapGroupClassNameOverride="graph-pie-8"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                />
              </div>
            </div>
            <div className="section-graph-2">
              <div className="sub-topic-title-2">
                <p className="section-title-64">
                  <span className="text-wrapper-11">Sources of Annual Fine Particulate Pollution </span>
                  <span className="text-wrapper-14">d</span>
                </p>
              </div>
              <div className="frame-52">
                <div className="frame-53">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-8"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionText="15.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Road Dust"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Other Dust e"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Mobile On-Road Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText12="13.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Stationary Non-Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText14="9.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Residential Wood Burning"
                    resoolutionDesktopWrapperGraphBarCaptionText16="Commercial Cooking"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Stationary Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText2="2.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Mobile Off-Road Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText4="Accidental &amp; Planned Fires"
                    resoolutionDesktopWrapperGraphBarCaptionText5="5.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="13.7%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="14.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="18.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="7.2%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-8"
                    resoolutionDesktopWrapperVisible={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-7"
                    columns="two"
                    frameClassName="graph-chart-line-10"
                    graphChartLineClassName="graph-chart-line-8"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-9"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-2"
                  clipPathGroup3="/img/clip-path-group-19.png"
                  groupClassName="graph-pie-9"
                  overlapGroupClassName="graph-pie-10"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                  vectorClassName="graph-pie-10"
                />
              </div>
            </div>
            <div className="section-graph-2">
              <div className="sub-topic-title-2">
                <p className="section-title-64">
                  <span className="text-wrapper-11">Sources of Annual Nitrogen Oxide Pollution </span>
                  <span className="text-wrapper-14">d</span>
                </p>
              </div>
              <div className="frame-54">
                <div className="frame-53">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-8"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassNameOverride="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionText="21.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Mobile Off-Road Sources - Aircraft"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Mobile On-Road Sources - Other Vehicles h"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Mobile Off-Road Sources - Equipment f"
                    resoolutionDesktopWrapperGraphBarCaptionText12="8.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Mobile On-Road Sources - Trucks"
                    resoolutionDesktopWrapperGraphBarCaptionText14="6.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Mobile Off-Road Sources - Ships"
                    resoolutionDesktopWrapperGraphBarCaptionText16="Residential Natural Gas Combustion"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Stationary Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText2="1.3%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Mobile Off-Road Sources - Other g"
                    resoolutionDesktopWrapperGraphBarCaptionText4="Stationary Non-Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText5="4.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="9.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="10.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="33.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="5.5%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-8"
                    resoolutionDesktopWrapperVisible={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-7"
                    columns="two"
                    frameClassName="graph-chart-line-10"
                    graphChartLineClassName="graph-chart-line-8"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-9"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-3"
                  clipPathGroup4="/img/clip-path-group-20.png"
                  groupClassName="graph-pie-11"
                  overlapGroupClassName="graph-pie-12"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                  vectorClassName="graph-pie-12"
                />
              </div>
            </div>
            <div className="section-chart-wrapper">
              <div className="section-chart">
                <div className="frame-55">
                  <p className="section-title-65">
                    <span className="text-wrapper-15">a</span>
                    <span className="text-wrapper-16">
                      {" "}
                      The Air District’s latest greenhouse gas (GHG) emissions estimates can be found here:{" "}
                    </span>
                    <a
                      href="https://nam02.safelinks.protection.outlook.com/?url=https://www.baaqmd.gov/capghg&amp;data=04%257C01%257Csbai@baaqmd.gov%257C8c0adf7d43f14e5b5a9d08d9dc2ac670%257C855defaabdae4e6281e53bb7aa04fc3a%257C0%257C0%257C637782898532015051%257CUnknown%257CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0=%257C3000&amp;sdata=Aqexj2d5+loYj+W1ZVBOI+JVpmaS2BY8MwUyLdrJBUY=&amp;reserved=0"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-wrapper-17">baaqmd.gov/capghg</span>
                    </a>
                    <span className="text-wrapper-16">
                      . These estimates do not reflect specific emissions changes in 2023 due to the impact of COVID-19
                      pandemic or wildfires.
                      <br />
                    </span>
                    <span className="text-wrapper-15">b</span>
                    <span className="text-wrapper-16">
                      {" "}
                      This category includes GHG emissions from refining processes and combustion of gas, liquid and
                      solid fuels at refineries; it does not include GHG emissions generated during cogeneration at
                      refineries, which is included in the Electricity/Co-Generation category.
                      <br />
                    </span>
                    <span className="text-wrapper-15">c</span>
                    <span className="text-wrapper-16">
                      {" "}
                      This category includes GHG emissions from combustion and processes at cement plants, natural gas
                      combustion, combustion of solid and liquid fuels in industries, natural gas distribution fugitive
                      losses (primarily methane), and industrial process emissions.
                      <br />
                    </span>
                    <span className="text-wrapper-15">d</span>
                    <span className="text-wrapper-16">
                      {" "}
                      These percentage estimates are developed based on the Air District’s currently available regional
                      inventory data. These estimates do not reflect specific emissions changes in 2023 due to the
                      impact of COVID-19 pandemic or wildfires.
                      <br />
                    </span>
                    <span className="text-wrapper-15">e</span>
                    <span className="text-wrapper-16">
                      {" "}
                      This category includes wind-blown dust from agricultural land and dust from construction
                      operations.
                      <br />
                    </span>
                    <span className="text-wrapper-15">f</span>
                    <span className="text-wrapper-16">
                      {" "}
                      This category includes construction and mining equipment, agricultural equipment, industrial and
                      light commercial equipment, and airport ground support equipment, etc.
                      <br />
                    </span>
                    <span className="text-wrapper-15">g</span>
                    <span className="text-wrapper-16">
                      {" "}
                      This category includes trains, lawn and garden equipment and other off-road equipment.
                      <br />
                    </span>
                    <span className="text-wrapper-15">h</span>
                    <span className="text-wrapper-16">
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
              className="section-graph-3"
              graphs="one"
              override={
                <GraphChart
                  className="graph-chart-instance"
                  graphChartLineColumns10="two"
                  graphChartLineColumns11="two"
                  graphChartLineColumns12="two"
                  graphChartLineColumns13="two"
                  graphChartLineFrameClassName1="graph-chart-2"
                  graphChartLineFrameClassName2="graph-chart-2"
                  graphChartLineFrameClassName3="graph-chart-2"
                  graphChartLineFrameClassName4="graph-chart-2"
                  graphChartLineGraphChartLineWrapperClassName="instance-node-8"
                  graphChartLineGraphChartLineWrapperClassNameOverride="instance-node-8"
                  graphChartLineLines10="one"
                  graphChartLineLines11="one"
                  graphChartLineLines12="one"
                  graphChartLineLines13="one"
                  graphChartLineLinesColumnsClassName="instance-node-8"
                  graphChartLineLinesColumnsClassNameOverride="instance-node-8"
                  graphChartLineSectionTitleClassName4="graph-chart-2"
                  graphChartLineSectionTitleClassName5="graph-chart-2"
                  graphChartLineSectionTitleClassName6="graph-chart-2"
                  graphChartLineSectionTitleClassName7="graph-chart-2"
                  graphChartLineText20="Particulate Matter"
                  graphChartLineText21="3,988"
                  graphChartLineText22="Toxics"
                  graphChartLineText23="1,118"
                  graphChartLineText24="Source-Oriented Analyses"
                  graphChartLineText25="41"
                  graphChartLineText26="Interagency and Development Projects"
                  graphChartLineText27="0"
                  graphChartTotalGraphChartLineColumns1="two"
                  graphChartTotalGraphChartLineDivClassName="graph-chart-2"
                  graphChartTotalGraphChartLineFrameClassName="graph-chart-2"
                  graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-8"
                  graphChartTotalGraphChartLineText2="5,147"
                  graphChartTotalLines1="one"
                  graphChartTotalLinesResolutionClassNameOverride="graph-chart-3"
                  hasFrame2={false}
                  hasGroup2={false}
                  quantity="one"
                  resolution="desktop"
                  sectionTitleClassName1="graph-chart-2"
                  sectionTitleClassName2="graph-chart-2"
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
          </div>
          <SectionGraph
            chartCaption="no"
            className="section-graph-4"
            graphs="one"
            override={
              <GraphChart
                graphChartLineColumns14="two"
                graphChartLineColumns15="two"
                graphChartLineColumns16="two"
                graphChartLineColumns17="two"
                graphChartLineColumns18="two"
                graphChartLineColumns19="two"
                graphChartLineFrameClassName5="graph-chart-4"
                graphChartLineFrameClassName6="graph-chart-6"
                graphChartLineFrameClassName7="graph-chart-7"
                graphChartLineFrameClassName8="graph-chart-7"
                graphChartLineFrameClassName9="graph-chart-6"
                graphChartLineLines14="one"
                graphChartLineLines15="one"
                graphChartLineLines16="one"
                graphChartLineLines17="one"
                graphChartLineLines18="one"
                graphChartLineLines19="one"
                graphChartLineLinesColumnsClassName1="instance-node-8"
                graphChartLineLinesColumnsClassName2="instance-node-8"
                graphChartLineLinesColumnsClassName3="instance-node-8"
                graphChartLineLinesColumnsClassName4="instance-node-8"
                graphChartLineLinesColumnsClassName5="instance-node-8"
                graphChartLineLinesColumnsClassName6="instance-node-8"
                graphChartLineResolution="desktop_1"
                graphChartLineResolution1="desktop_1"
                graphChartLineResolution2="desktop_1"
                graphChartLineResolution3="desktop_1"
                graphChartLineResolution4="desktop_1"
                graphChartLineResolution5="desktop_1"
                graphChartLineSectionTitleClassName10="graph-chart-8"
                graphChartLineSectionTitleClassName8="graph-chart-8"
                graphChartLineSectionTitleClassName9="graph-chart-8"
                graphChartLineSectionTitleWrapperClassName="graph-chart-5"
                graphChartLineSectionTitleWrapperClassNameOverride="graph-chart-5"
                graphChartLineText28="Days over National 8-Hour Standard"
                graphChartLineText29="Days over California 1-Hour Standard"
                graphChartLineText30="0"
                graphChartLineText31="Days over California 8-Hour Standard"
                graphChartLineText32="4*"
                graphChartLineText33="Days over National 24-Hour PM10 Standard"
                graphChartLineText34="0*"
                graphChartLineText35="Days over California 24-Hour PM10 Standard"
                graphChartLineText36="0*"
                graphChartLineText37="Days over National 24-Hour PM2.5 Standard"
                graphChartLineText38="3"
                graphChartLineText39="4*"
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
          <InternalMenu className="internal-menu-instance" resolution="desktop" />
          <Footer className="footer-instance" resolution="desktop" />
        </>
      )}

      {screenWidth < 768 && (
        <ElementImages
          carrousel
          className="element-images-instance"
          img="/img/rectangle-256-1.png"
          rectangle="/img/rectangle-255-4.png"
          resolution="mobile"
        />
      )}

      {screenWidth >= 1440 && screenWidth < 1920 && (
        <PropertyDefaultWrapper
          className="hightlight-blurb-section-instance"
          hightlightBlurbFrameClassName="hightlight-blurb-3"
          hightlightBlurbImageSquareClassName="hightlight-blurb-2"
          hightlightBlurbJamesCarySmithClassName="text-wrapper-11"
          hightlightBlurbTopicsClassName="instance-node-10"
          hightlightBlurbTypeDefaultImageClassName="instance-node-11"
          property1="default"
        />
      )}

      {((screenWidth >= 1440 && screenWidth < 1920) || (screenWidth >= 768 && screenWidth < 1440)) && (
        <div
          className="section-map-3"
          style={{
            padding:
              screenWidth >= 768 && screenWidth < 1440
                ? "0px 48px 80px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "160px 0px 48px 100px"
                : undefined,
            zIndex:
              screenWidth >= 768 && screenWidth < 1440
                ? "10"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "6"
                : undefined,
          }}
        >
          <div
            className="map-with-label-4"
            style={{
              alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
              gap:
                screenWidth >= 768 && screenWidth < 1440
                  ? "200px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "40px"
                  : undefined,
              justifyContent: screenWidth >= 768 && screenWidth < 1440 ? "center" : undefined,
              width:
                screenWidth >= 768 && screenWidth < 1440
                  ? "100%"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "1047px"
                  : undefined,
            }}
          >
            {screenWidth >= 768 && screenWidth < 1440 && (
              <>
                <div className="frame-46">
                  <div className="frame-47">
                    <div className="frame-48">
                      <div className="rectangle-19" />
                      <div className="section-title-63">AIR MONITORING SITES</div>
                    </div>
                  </div>
                  <div className="frame-49">
                    <div className="frame-48">
                      <div className="rectangle-20" />
                      <div className="section-title-63">METEOROLOGICAL SITES</div>
                    </div>
                  </div>
                </div>
                <img className="map-3" alt="Map" src="/img/map-3.svg" />
              </>
            )}

            {screenWidth >= 1440 && screenWidth < 1920 && (
              <div className="frame-44">
                <p className="james-cary-smith-6">
                  BAY AIR CENTER LAUNCHES <br />
                  PUBLIC WEBSITE
                </p>
                <p className="the-grant-program-6">
                  <span className="text-wrapper-12">We sponsored the Bay Air Center as a resource that offers </span>
                  <span className="text-wrapper-13">
                    technical guidance, materials, and training on air monitoring and air quality data for
                    community-based organizations
                  </span>
                  <span className="text-wrapper-12">
                    , with the goal of supporting their efforts to understand and improve air quality. The website
                    provides detailed information on the program, a way to request support, and an extensive resource
                    library that includes materials developed by the Bay Air Center as well as external links to
                    materials that cover a variety of air quality-related topics.
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {screenWidth >= 1440 && screenWidth < 1920 && (
        <>
          <ElementImages
            arrowsCarrouselArrowsCarrouselClassName="instance-node-12"
            carrousel
            className="element-images-3"
            frameClassName="two-images-instance"
            img="/img/rectangle-256-1.png"
            rectangle="/img/rectangle-255-4.png"
            rectangleClassName="element-images-2"
            resolution="desktop"
          />
          <div className="frame-56">
            <div className="topics-section-4">
              <div className="topics-6">
                <div className="frame-44">
                  <p className="james-cary-smith-6">AD HOC COMMITTEE ON INCIDENT RESPONSE MONITORING</p>
                  <p className="the-grant-program-6">
                    <span className="text-wrapper-12">
                      Our Board of Directors formed an ad hoc committee on incident response monitoring. The committee
                      has identified ways to{" "}
                    </span>
                    <span className="text-wrapper-13">
                      provide information more quickly to the public when there is an incident at a facility
                    </span>
                    <span className="text-wrapper-12">
                      , including how we are responding to the incident and what are potential impacts on air quality.
                      The ad hoc committee has also discussed opportunities to fill gaps in monitoring, which will be
                      considered as part of upcoming strategic planning and budget processes.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <ElementImage
              className="element-image-instance"
              img="/img/rectangle-255-5.png"
              rectangleClassName="one-image-instance"
              resolution="destop"
            />
            <SectionGraph
              chartCaption="z"
              className="section-graph-5"
              graphs="zero"
              resolution="desktop"
              subTopicTitleText="BAY AREA POLLUTION SOURCES"
              subTopicTitleTypeDefaultClassNameOverride="instance-node-12"
              title="top"
            />
            <div className="section-graph-6">
              <div className="sub-topic-title-3">
                <p className="section-title-64">
                  <span className="text-wrapper-11">SOURCES OF GREENHOUSE GAS EMISSIONS </span>
                  <span className="text-wrapper-14">a</span>
                </p>
              </div>
              <div className="frame-57">
                <div className="frame-53">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-8"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName2="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionText="18.9%"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Residential/Commercial Fuel Usage"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Recycling and Waste"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Industrial - Others c"
                    resoolutionDesktopWrapperGraphBarCaptionText12="8.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Industrial - Oil Refineries b"
                    resoolutionDesktopWrapperGraphBarCaptionText14="5.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Transportation"
                    resoolutionDesktopWrapperGraphBarCaptionText16="Agriculture/Farming"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Electricity/Co-Generation"
                    resoolutionDesktopWrapperGraphBarCaptionText3="High Global Warming Potential Gases"
                    resoolutionDesktopWrapperGraphBarCaptionText5="1.5%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="11.7%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="13.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="39.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="2.7%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-8"
                    resoolutionDesktopWrapperVisible={false}
                    resoolutionDesktopWrapperVisible1={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-7"
                    columns="two"
                    frameClassName="graph-chart-line-10"
                    graphChartLineClassName="graph-chart-line-8"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-9"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-1"
                  className="instance-node-13"
                  clipPathGroup2="/img/clip-path-group.png"
                  frameClassName="instance-node-10"
                  groupClassName="graph-pie-7"
                  overlapGroupClassName="graph-pie-8"
                  overlapGroupClassNameOverride="graph-pie-8"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                />
              </div>
            </div>
            <div className="section-graph-7">
              <div className="sub-topic-title-4">
                <p className="section-title-64">
                  <span className="text-wrapper-11">Sources of Annual Fine Particulate Pollution </span>
                  <span className="text-wrapper-14">d</span>
                </p>
              </div>
              <div className="frame-58">
                <div className="frame-53">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-8"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionText="15.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Road Dust"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Other Dust e"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Mobile On-Road Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText12="13.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Stationary Non-Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText14="9.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Residential Wood Burning"
                    resoolutionDesktopWrapperGraphBarCaptionText16="Commercial Cooking"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Stationary Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText2="2.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Mobile Off-Road Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText4="Accidental &amp; Planned Fires"
                    resoolutionDesktopWrapperGraphBarCaptionText5="5.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="13.7%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="14.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="18.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="7.2%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-8"
                    resoolutionDesktopWrapperVisible={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-7"
                    columns="two"
                    frameClassName="graph-chart-line-10"
                    graphChartLineClassName="graph-chart-line-8"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-9"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-2"
                  className="instance-node-13"
                  clipPathGroup3="/img/clip-path-group-13.png"
                  frameClassName="instance-node-10"
                  groupClassName="graph-pie-9"
                  overlapGroupClassName="graph-pie-10"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                  vectorClassName="graph-pie-10"
                />
              </div>
            </div>
            <div className="section-graph-7">
              <div className="sub-topic-title-4">
                <p className="section-title-64">
                  <span className="text-wrapper-11">Sources of Annual Nitrogen Oxide Pollution </span>
                  <span className="text-wrapper-14">d</span>
                </p>
              </div>
              <div className="frame-59">
                <div className="frame-53">
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-8"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-9"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassNameOverride="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionText="21.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Mobile Off-Road Sources - Aircraft"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Mobile On-Road Sources - Other Vehicles h"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Mobile Off-Road Sources - Equipment f"
                    resoolutionDesktopWrapperGraphBarCaptionText12="8.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Mobile On-Road Sources - Trucks"
                    resoolutionDesktopWrapperGraphBarCaptionText14="6.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Mobile Off-Road Sources - Ships"
                    resoolutionDesktopWrapperGraphBarCaptionText16="Residential Natural Gas Combustion"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Stationary Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText2="1.3%"
                    resoolutionDesktopWrapperGraphBarCaptionText3="Mobile Off-Road Sources - Other g"
                    resoolutionDesktopWrapperGraphBarCaptionText4="Stationary Non-Combustion Sources"
                    resoolutionDesktopWrapperGraphBarCaptionText5="4.8%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="9.6%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="10.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="33.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="5.5%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-8"
                    resoolutionDesktopWrapperVisible={false}
                    subtitle={false}
                  />
                  <GraphChartLine
                    className="graph-chart-line-7"
                    columns="two"
                    frameClassName="graph-chart-line-10"
                    graphChartLineClassName="graph-chart-line-8"
                    input="total"
                    lines="one"
                    resolution="desktop"
                    sectionTitleClassName="graph-chart-line-9"
                    text="100.0%"
                  />
                </div>
                <GraphPie
                  chart="chart-3"
                  className="instance-node-13"
                  clipPathGroup4="/img/clip-path-group-7.png"
                  frameClassName="instance-node-10"
                  groupClassName="graph-pie-11"
                  overlapGroupClassName="graph-pie-12"
                  resolution="desktop"
                  subtitle={false}
                  title={false}
                  vectorClassName="graph-pie-12"
                />
              </div>
            </div>
            <div className="frame-60">
              <div className="section-chart-2">
                <div className="frame-55">
                  <p className="section-title-65">
                    <span className="text-wrapper-15">a</span>
                    <span className="text-wrapper-16">
                      {" "}
                      The Air District’s latest greenhouse gas (GHG) emissions estimates can be found here:{" "}
                    </span>
                    <a
                      href="https://nam02.safelinks.protection.outlook.com/?url=https://www.baaqmd.gov/capghg&amp;data=04%257C01%257Csbai@baaqmd.gov%257C8c0adf7d43f14e5b5a9d08d9dc2ac670%257C855defaabdae4e6281e53bb7aa04fc3a%257C0%257C0%257C637782898532015051%257CUnknown%257CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0=%257C3000&amp;sdata=Aqexj2d5+loYj+W1ZVBOI+JVpmaS2BY8MwUyLdrJBUY=&amp;reserved=0"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-wrapper-17">baaqmd.gov/capghg</span>
                    </a>
                    <span className="text-wrapper-16">
                      . These estimates do not reflect specific emissions changes in 2023 due to the impact of COVID-19
                      pandemic or wildfires.
                      <br />
                    </span>
                    <span className="text-wrapper-15">b</span>
                    <span className="text-wrapper-16">
                      {" "}
                      This category includes GHG emissions from refining processes and combustion of gas, liquid and
                      solid fuels at refineries; it does not include GHG emissions generated during cogeneration at
                      refineries, which is included in the Electricity/Co-Generation category.
                      <br />
                    </span>
                    <span className="text-wrapper-15">c</span>
                    <span className="text-wrapper-16">
                      {" "}
                      This category includes GHG emissions from combustion and processes at cement plants, natural gas
                      combustion, combustion of solid and liquid fuels in industries, natural gas distribution fugitive
                      losses (primarily methane), and industrial process emissions.
                      <br />
                    </span>
                    <span className="text-wrapper-15">d</span>
                    <span className="text-wrapper-16">
                      {" "}
                      These percentage estimates are developed based on the Air District’s currently available regional
                      inventory data. These estimates do not reflect specific emissions changes in 2023 due to the
                      impact of COVID-19 pandemic or wildfires.
                      <br />
                    </span>
                    <span className="text-wrapper-15">e</span>
                    <span className="text-wrapper-16">
                      {" "}
                      This category includes wind-blown dust from agricultural land and dust from construction
                      operations.
                      <br />
                    </span>
                    <span className="text-wrapper-15">f</span>
                    <span className="text-wrapper-16">
                      {" "}
                      This category includes construction and mining equipment, agricultural equipment, industrial and
                      light commercial equipment, and airport ground support equipment, etc.
                      <br />
                    </span>
                    <span className="text-wrapper-15">g</span>
                    <span className="text-wrapper-16">
                      {" "}
                      This category includes trains, lawn and garden equipment and other off-road equipment.
                      <br />
                    </span>
                    <span className="text-wrapper-15">h</span>
                    <span className="text-wrapper-16">
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
            className="section-graph-9"
            frameClassName="section-graph-8"
            graphs="one"
            override={
              <GraphChart
                className="graph-chart-9"
                frameClassName="graph-chart-10"
                graphChartLineColumns10="two"
                graphChartLineColumns11="two"
                graphChartLineColumns12="two"
                graphChartLineColumns13="two"
                graphChartLineFrameClassName1="graph-chart-2"
                graphChartLineFrameClassName2="graph-chart-2"
                graphChartLineFrameClassName3="graph-chart-2"
                graphChartLineFrameClassName4="graph-chart-2"
                graphChartLineGraphChartLineWrapperClassName="instance-node-8"
                graphChartLineGraphChartLineWrapperClassNameOverride="instance-node-8"
                graphChartLineLines10="one"
                graphChartLineLines11="one"
                graphChartLineLines12="one"
                graphChartLineLines13="one"
                graphChartLineLinesColumnsClassName="instance-node-8"
                graphChartLineLinesColumnsClassNameOverride="instance-node-8"
                graphChartLineSectionTitleClassName4="graph-chart-2"
                graphChartLineSectionTitleClassName5="graph-chart-2"
                graphChartLineSectionTitleClassName6="graph-chart-2"
                graphChartLineSectionTitleClassName7="graph-chart-2"
                graphChartLineText20="Particulate Matter"
                graphChartLineText21="3,988"
                graphChartLineText22="Toxics"
                graphChartLineText23="1,118"
                graphChartLineText24="Source-Oriented Analyses"
                graphChartLineText25="41"
                graphChartLineText26="Interagency and Development Projects"
                graphChartLineText27="0"
                graphChartTotalGraphChartLineColumns1="two"
                graphChartTotalGraphChartLineDivClassName="graph-chart-2"
                graphChartTotalGraphChartLineFrameClassName="graph-chart-2"
                graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-8"
                graphChartTotalGraphChartLineText2="5,147"
                graphChartTotalLines1="one"
                graphChartTotalLinesResolutionClassNameOverride="graph-chart-3"
                hasFrame2={false}
                hasGroup2={false}
                quantity="one"
                resolution="desktop"
                sectionTitleClassName1="graph-chart-2"
                sectionTitleClassName2="graph-chart-2"
                sectionTitleWrapperClassNameOverride="graph-chart-11"
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
            className="section-graph-10"
            graphs="one"
            override={
              <GraphChart
                className="instance-node-13"
                graphChartLineColumns14="two"
                graphChartLineColumns15="two"
                graphChartLineColumns16="two"
                graphChartLineColumns17="two"
                graphChartLineColumns18="two"
                graphChartLineColumns19="two"
                graphChartLineFrameClassName5="graph-chart-4"
                graphChartLineFrameClassName6="graph-chart-6"
                graphChartLineFrameClassName7="graph-chart-7"
                graphChartLineFrameClassName8="graph-chart-7"
                graphChartLineFrameClassName9="graph-chart-6"
                graphChartLineLines14="one"
                graphChartLineLines15="one"
                graphChartLineLines16="one"
                graphChartLineLines17="one"
                graphChartLineLines18="one"
                graphChartLineLines19="one"
                graphChartLineLinesColumnsClassName1="instance-node-8"
                graphChartLineLinesColumnsClassName2="instance-node-8"
                graphChartLineLinesColumnsClassName3="instance-node-8"
                graphChartLineLinesColumnsClassName4="instance-node-8"
                graphChartLineLinesColumnsClassName5="instance-node-8"
                graphChartLineLinesColumnsClassName6="instance-node-8"
                graphChartLineResolution="desktop_1"
                graphChartLineResolution1="desktop_1"
                graphChartLineResolution2="desktop_1"
                graphChartLineResolution3="desktop_1"
                graphChartLineResolution4="desktop_1"
                graphChartLineResolution5="desktop_1"
                graphChartLineSectionTitleClassName10="graph-chart-8"
                graphChartLineSectionTitleClassName8="graph-chart-8"
                graphChartLineSectionTitleClassName9="graph-chart-8"
                graphChartLineSectionTitleWrapperClassName="graph-chart-5"
                graphChartLineSectionTitleWrapperClassNameOverride="graph-chart-5"
                graphChartLineText28="Days over National 8-Hour Standard"
                graphChartLineText29="Days over California 1-Hour Standard"
                graphChartLineText30="0"
                graphChartLineText31="Days over California 8-Hour Standard"
                graphChartLineText32="4*"
                graphChartLineText33="Days over National 24-Hour PM10 Standard"
                graphChartLineText34="0*"
                graphChartLineText35="Days over California 24-Hour PM10 Standard"
                graphChartLineText36="0*"
                graphChartLineText37="Days over National 24-Hour PM2.5 Standard"
                graphChartLineText38="3"
                graphChartLineText39="4*"
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
          <InternalMenu className="internal-menu-2" resolution="mobile" />
          <Footer className="footer-2" resolution="desktop" />
        </>
      )}

      {screenWidth >= 768 && screenWidth < 1440 && (
        <>
          <StatSection
            aligment="right"
            className="stat-section-6"
            hasSectionTitle={false}
            quantity="three"
            resolution="mobile"
            statSetResolutionDesktopClassName="instance-node-11"
            statSetStatColor="dark-blue"
            statSetStatColor1="blue"
            statSetStatText="13"
            statSetStatText1="total air monitoring sites across the Bay Area"
            statSetStatText2="total meteorological sites across the Bay Area"
            statSetStatText3="31"
            statSetStatType="quote"
            statSetStatTypeNumbersColorClassName="instance-node-10"
            statSetStatTypeNumbersColorClassNameOverride="instance-node-10"
            statSetStatTypeQuoteColorClassName="instance-node-10"
            title
          />
          <OpeningSection
            className="opening-section-6"
            font="body-text"
            headline="large"
            openingTextAbCommunityClassName="opening-section-5"
            openingTextFrameClassName="instance-node-7"
            openingTextResolutionDesktopClassName="instance-node-11"
            openingTextText="Exposure to fine particulate matter is an important driver of health risk throughout the Bay Area and is linked to serious respiratory illnesses and increased risk of heart attacks. Exposure is especially harmful for children, the elderly, and those with respiratory conditions."
            openingTextText1="We fully support the EPA’s lowering of the National Ambient Air Quality Standards (NAAQS) for particulate matter pollution. The NAAQS are designed to "
            openingTextText2="protect public health to an adequate margin of safety and protect the public against adverse effects. "
            openingTextText3="EPA HEALTH STANDARDS FOR PARTICULATE MATTER"
            openingTextWeContinuedToWorkClassName="opening-section-4"
            resolution="desktop"
          />
          <HightlightBlurb
            className="hightlight-blurb-7"
            detail="image"
            image="top"
            imageSquare="/img/image-square.png"
            jamesCarySmithClassName="text-wrapper-11"
            resolution="mobile"
            spanClassName="hightlight-blurb-5"
            spanClassName1="hightlight-blurb-5"
            spanClassNameOverride="hightlight-blurb-6"
            theGrantProgramClassName="hightlight-blurb-4"
            type="default"
          />
          <div className="topics-section-5">
            <div className="topics-7">
              <div className="frame-44">
                <p className="james-cary-smith-6">
                  BAY AIR CENTER LAUNCHES <br />
                  PUBLIC WEBSITE
                </p>
                <p className="the-grant-program-6">
                  <span className="text-wrapper-12">We sponsored the Bay Air Center as a resource that offers </span>
                  <span className="text-wrapper-13">
                    technical guidance, materials, and training on air monitoring and air quality data for
                    community-based organizations
                  </span>
                  <span className="text-wrapper-12">
                    , with the goal of supporting their efforts to understand and improve air quality. The website
                    provides detailed information on the program, a way to request support, and an extensive resource
                    library that includes materials developed by the Bay Air Center as well as external links to
                    materials that cover a variety of air quality-related topics.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="element-images-4">
            <div className="frame-61">
              <img className="rectangle-21" alt="Rectangle" src="/img/rectangle-255-4.png" />
              <img className="rectangle-22" alt="Rectangle" src="/img/rectangle-256-1.png" />
            </div>
            <ArrowsCarrousel className="instance-node-12" />
          </div>
        </>
      )}

      {((screenWidth >= 768 && screenWidth < 1440) || screenWidth < 768) && (
        <div
          className="frame-62"
          style={{
            backgroundImage:
              screenWidth < 768
                ? "url(/img/frame-19858.png)"
                : screenWidth >= 768 && screenWidth < 1440
                ? "url(/img/frame-19858-1.png)"
                : undefined,
          }}
        >
          <div
            className="topics-section-6"
            style={{
              alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
              padding:
                screenWidth < 768
                  ? "40px 24px"
                  : screenWidth >= 768 && screenWidth < 1440
                  ? "100px 48px 80px"
                  : undefined,
              width: screenWidth < 768 ? "375px" : screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
            }}
          >
            <div className="topics-7">
              <div className="frame-44">
                <p
                  className="james-cary-smith-7"
                  style={{
                    fontFamily:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-family)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h2-desktop-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-size)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h2-desktop-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-style)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h2-desktop-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-weight)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h2-desktop-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 768
                        ? "var(--h3-mobile-letter-spacing)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h2-desktop-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 768
                        ? "var(--h3-mobile-line-height)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h2-desktop-line-height)"
                        : undefined,
                  }}
                >
                  AD HOC COMMITTEE ON INCIDENT RESPONSE MONITORING
                </p>
                <div
                  className="the-grant-program-7"
                  style={{
                    fontSize:
                      screenWidth < 768 ? "15px" : screenWidth >= 768 && screenWidth < 1440 ? "21px" : undefined,
                    letterSpacing:
                      screenWidth < 768 ? "0.60px" : screenWidth >= 768 && screenWidth < 1440 ? "0.84px" : undefined,
                    lineHeight:
                      screenWidth < 768 ? "25.5px" : screenWidth >= 768 && screenWidth < 1440 ? "35.7px" : undefined,
                  }}
                >
                  <span
                    className="span-2"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--body-text-mobile-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--body-text-mobile-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--body-text-mobile-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--body-text-mobile-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--body-text-mobile-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--body-text-mobile-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-line-height)"
                          : undefined,
                    }}
                  >
                    {screenWidth < 768 && (
                      <>
                        Our Board of Directors formed an ad hoc committee on incident response monitoring. The committee
                        has identified ways to
                      </>
                    )}

                    {screenWidth >= 768 && screenWidth < 1440 && (
                      <>
                        Our Board of Directors formed an ad hoc committee on incident response monitoring. The committee
                        has identified ways to{" "}
                      </>
                    )}
                  </span>
                  <span
                    className="span-2"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--body-text-mobile-bold-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-bold-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--body-text-mobile-bold-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-bold-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--body-text-mobile-bold-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-bold-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--body-text-mobile-bold-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-bold-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--body-text-mobile-bold-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-bold-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--body-text-mobile-bold-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-bold-line-height)"
                          : undefined,
                    }}
                  >
                    {screenWidth < 768 && (
                      <> provide information more quickly to the public when there is an incident at a facility</>
                    )}

                    {screenWidth >= 768 && screenWidth < 1440 && (
                      <>provide information more quickly to the public when there is an incident at a facility</>
                    )}
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--body-text-mobile-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--body-text-mobile-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--body-text-mobile-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--body-text-mobile-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--body-text-mobile-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--body-text-mobile-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--body-text-desktop-line-height)"
                          : undefined,
                    }}
                  >
                    , including how we are responding to the incident and what are potential impacts on air quality. The
                    ad hoc committee has also discussed opportunities to fill gaps in monitoring, which will be
                    considered as part of upcoming strategic planning and budget processes.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ElementImage
            className={`${screenWidth < 768 && "class-18"} ${screenWidth >= 768 && screenWidth < 1440 && "class-19"}`}
            img={screenWidth >= 768 && screenWidth < 1440 ? "/img/rectangle-255-5.png" : undefined}
            rectangle={screenWidth < 768 ? "/img/rectangle-255-2.png" : undefined}
            rectangleClassName={`${screenWidth >= 768 && screenWidth < 1440 && "class-17"}`}
            resolution={screenWidth < 768 ? "mobile" : screenWidth >= 768 && screenWidth < 1440 ? "destop" : undefined}
          />
          <SectionGraph
            chartCaption="z"
            className={`${screenWidth < 768 && "class-20"} ${screenWidth >= 768 && screenWidth < 1440 && "class-21"}`}
            graphs="zero"
            resolution={screenWidth < 768 ? "mobile" : screenWidth >= 768 && screenWidth < 1440 ? "desktop" : undefined}
            subTopicTitleText="BAY AREA POLLUTION SOURCES"
            subTopicTitleTypeDefaultClassNameOverride={`${
              screenWidth >= 768 && screenWidth < 1440 && "instance-node-12"
            }`}
            title="top"
          />
          <div
            className="section-graph-11"
            style={{
              alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
              padding:
                screenWidth < 768
                  ? "0px 24px 100px"
                  : screenWidth >= 768 && screenWidth < 1440
                  ? "0px 48px 100px"
                  : undefined,
              width: screenWidth < 768 ? "375px" : screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
            }}
          >
            <div className="sub-topic-title-3">
              <p
                className="section-title-66"
                style={{
                  fontSize: screenWidth < 768 ? "30px" : screenWidth >= 768 && screenWidth < 1440 ? "44px" : undefined,
                  letterSpacing:
                    screenWidth < 768 ? "1.50px" : screenWidth >= 768 && screenWidth < 1440 ? "2.20px" : undefined,
                  lineHeight:
                    screenWidth < 768 ? "33.0px" : screenWidth >= 768 && screenWidth < 1440 ? "48.4px" : undefined,
                }}
              >
                <span
                  className="text-wrapper-19"
                  style={{
                    fontFamily:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-family)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-size)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-style)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-weight)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 768
                        ? "var(--h3-mobile-letter-spacing)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 768
                        ? "var(--h3-mobile-line-height)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-line-height)"
                        : undefined,
                  }}
                >
                  SOURCES OF GREENHOUSE GAS EMISSIONS{" "}
                </span>
                <span
                  className="text-wrapper-19"
                  style={{
                    letterSpacing:
                      screenWidth < 768 ? "0.45px" : screenWidth >= 768 && screenWidth < 1440 ? "0.97px" : undefined,
                  }}
                >
                  a
                </span>
              </p>
            </div>
            <div
              className="frame-63"
              style={{
                alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
                display:
                  screenWidth < 768 ? "inline-flex" : screenWidth >= 768 && screenWidth < 1440 ? "flex" : undefined,
                justifyContent: screenWidth >= 768 && screenWidth < 1440 ? "center" : undefined,
                width: screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <div
                className="frame-64"
                style={{
                  alignItems:
                    screenWidth < 768
                      ? "flex-start"
                      : screenWidth >= 768 && screenWidth < 1440
                      ? "flex-end"
                      : undefined,
                  alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
                  display:
                    screenWidth < 768 ? "inline-flex" : screenWidth >= 768 && screenWidth < 1440 ? "flex" : undefined,
                  gap: screenWidth < 768 ? "16px" : screenWidth >= 768 && screenWidth < 1440 ? "12px" : undefined,
                  justifyContent: screenWidth >= 768 && screenWidth < 1440 ? "center" : undefined,
                  width: screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
                }}
              >
                {screenWidth < 768 && (
                  <ResoolutionDesktopWrapper
                    className="graph-bar-caption-10"
                    graphBarCaptionColumnsResolutionClassName="instance-node-12"
                    graphBarCaptionColumnsResolutionClassName1="instance-node-12"
                    graphBarCaptionColumnsResolutionClassName2="instance-node-12"
                    graphBarCaptionColumnsResolutionClassName3="instance-node-12"
                    graphBarCaptionColumnsResolutionClassName4="instance-node-12"
                    graphBarCaptionColumnsResolutionClassNameOverride="instance-node-12"
                    graphBarCaptionDivClassName="graph-bar-caption-5"
                    graphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    graphBarCaptionFrameWrapperClassName="instance-node-12"
                    graphBarCaptionFrameWrapperClassNameOverride="instance-node-12"
                    graphBarCaptionRectangleClassName="graph-bar-caption-8"
                    graphBarCaptionRectangleClassName1="graph-bar-caption-2"
                    graphBarCaptionRectangleClassName2="instance-node-9"
                    graphBarCaptionRectangleClassName3="graph-bar-caption-7"
                    graphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
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
                )}

                {screenWidth >= 768 && screenWidth < 1440 && (
                  <SubtitleYesCaptionWrapper
                    caption={false}
                    className="instance-node-11"
                    resolution="desktop"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-12"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-12"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-12"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-12"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-12"
                    resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-12"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassName="instance-node-9"
                    resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-12"
                    resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-12"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-5"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-7"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-8"
                    resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName2="graph-bar-caption-6"
                    resoolutionDesktopWrapperGraphBarCaptionText="18.9%"
                    resoolutionDesktopWrapperGraphBarCaptionText1="Residential/Commercial Fuel Usage"
                    resoolutionDesktopWrapperGraphBarCaptionText10="Recycling and Waste"
                    resoolutionDesktopWrapperGraphBarCaptionText11="Industrial - Others c"
                    resoolutionDesktopWrapperGraphBarCaptionText12="8.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText13="Industrial - Oil Refineries b"
                    resoolutionDesktopWrapperGraphBarCaptionText14="5.0%"
                    resoolutionDesktopWrapperGraphBarCaptionText15="Transportation"
                    resoolutionDesktopWrapperGraphBarCaptionText16="Agriculture/Farming"
                    resoolutionDesktopWrapperGraphBarCaptionText17="Electricity/Co-Generation"
                    resoolutionDesktopWrapperGraphBarCaptionText3="High Global Warming Potential Gases"
                    resoolutionDesktopWrapperGraphBarCaptionText5="1.5%"
                    resoolutionDesktopWrapperGraphBarCaptionText6="11.7%"
                    resoolutionDesktopWrapperGraphBarCaptionText7="13.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText8="39.1%"
                    resoolutionDesktopWrapperGraphBarCaptionText9="2.7%"
                    resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-11"
                    resoolutionDesktopWrapperVisible={false}
                    resoolutionDesktopWrapperVisible1={false}
                    subtitle={false}
                  />
                )}

                <GraphChartLine
                  className={`${screenWidth < 768 && "class-22"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "class-23"
                  }`}
                  columns="two"
                  frameClassName={`${screenWidth < 768 && "class-24"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "graph-chart-line-10"
                  }`}
                  graphChartLineClassName={`${screenWidth < 768 && "class-26"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "graph-chart-line-8"
                  }`}
                  input={
                    screenWidth < 768 ? "total-sl" : screenWidth >= 768 && screenWidth < 1440 ? "total" : undefined
                  }
                  lines="one"
                  resolution={
                    screenWidth < 768 ? "mobile" : screenWidth >= 768 && screenWidth < 1440 ? "desktop" : undefined
                  }
                  sectionTitleClassName={`${screenWidth < 768 && "class-25"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "graph-chart-line-9"
                  }`}
                  text="100.0%"
                />
              </div>
              <GraphPie
                chart="chart-1"
                className="instance-node-12"
                clipPathGroup={screenWidth < 768 ? "/img/clip-path-group-5.png" : undefined}
                clipPathGroup2={screenWidth >= 768 && screenWidth < 1440 ? "/img/clip-path-group-12.png" : undefined}
                frameClassName={`${screenWidth >= 768 && screenWidth < 1440 && "instance-node-10"}`}
                groupClassName={`${screenWidth < 768 && "class-27"} ${
                  screenWidth >= 768 && screenWidth < 1440 && "class-28"
                }`}
                overlapGroupClassName={`${screenWidth >= 768 && screenWidth < 1440 && "graph-pie-8"}`}
                overlapGroupClassNameOverride={`${screenWidth >= 768 && screenWidth < 1440 && "graph-pie-8"}`}
                resolution={
                  screenWidth < 768 ? "mobile" : screenWidth >= 768 && screenWidth < 1440 ? "desktop" : undefined
                }
                subtitle={false}
                title={false}
              />
            </div>
          </div>
          <div
            className="section-graph-12"
            style={{
              alignItems:
                screenWidth < 768 ? "flex-end" : screenWidth >= 768 && screenWidth < 1440 ? "flex-start" : undefined,
              alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
              padding:
                screenWidth < 768
                  ? "0px 24px 100px"
                  : screenWidth >= 768 && screenWidth < 1440
                  ? "0px 48px 100px"
                  : undefined,
              width: screenWidth < 768 ? "375px" : screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
            }}
          >
            <div className="sub-topic-title-3">
              <p
                className="section-title-67"
                style={{
                  fontSize: screenWidth < 768 ? "30px" : screenWidth >= 768 && screenWidth < 1440 ? "44px" : undefined,
                  letterSpacing:
                    screenWidth < 768 ? "1.50px" : screenWidth >= 768 && screenWidth < 1440 ? "2.20px" : undefined,
                  lineHeight:
                    screenWidth < 768 ? "33.0px" : screenWidth >= 768 && screenWidth < 1440 ? "48.4px" : undefined,
                }}
              >
                <span
                  className="text-wrapper-19"
                  style={{
                    fontFamily:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-family)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-size)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-style)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-weight)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 768
                        ? "var(--h3-mobile-letter-spacing)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 768
                        ? "var(--h3-mobile-line-height)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-line-height)"
                        : undefined,
                  }}
                >
                  Sources of Annual Fine Particulate Pollution{" "}
                </span>
                <span
                  className="text-wrapper-19"
                  style={{
                    letterSpacing:
                      screenWidth < 768 ? "0.45px" : screenWidth >= 768 && screenWidth < 1440 ? "0.97px" : undefined,
                  }}
                >
                  d
                </span>
              </p>
            </div>
            <div
              className="frame-65"
              style={{
                alignItems:
                  screenWidth < 768 ? "flex-start" : screenWidth >= 768 && screenWidth < 1440 ? "flex-end" : undefined,
                alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
                display:
                  screenWidth < 768 ? "inline-flex" : screenWidth >= 768 && screenWidth < 1440 ? "flex" : undefined,
                justifyContent: screenWidth >= 768 && screenWidth < 1440 ? "center" : undefined,
                width: screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <div
                className="frame-66"
                style={{
                  alignItems:
                    screenWidth < 768
                      ? "flex-start"
                      : screenWidth >= 768 && screenWidth < 1440
                      ? "flex-end"
                      : undefined,
                  alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
                  display:
                    screenWidth < 768 ? "inline-flex" : screenWidth >= 768 && screenWidth < 1440 ? "flex" : undefined,
                  gap: screenWidth < 768 ? "16px" : screenWidth >= 768 && screenWidth < 1440 ? "12px" : undefined,
                  justifyContent: screenWidth >= 768 && screenWidth < 1440 ? "center" : undefined,
                  width: screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
                }}
              >
                <SubtitleYesCaptionWrapper
                  caption={false}
                  className="instance-node-11"
                  resolution={
                    screenWidth < 768 ? "mobile" : screenWidth >= 768 && screenWidth < 1440 ? "desktop" : undefined
                  }
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionDivClassName="instance-node-9"
                  resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-9"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-5"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-7"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-8"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName={`${
                    screenWidth < 768 && "graph-bar-caption-11"
                  } ${screenWidth >= 768 && screenWidth < 1440 && "graph-bar-caption-6"}`}
                  resoolutionDesktopWrapperGraphBarCaptionText="15.8%"
                  resoolutionDesktopWrapperGraphBarCaptionText1="Road Dust"
                  resoolutionDesktopWrapperGraphBarCaptionText10="Other Dust e"
                  resoolutionDesktopWrapperGraphBarCaptionText11="Mobile On-Road Sources"
                  resoolutionDesktopWrapperGraphBarCaptionText12="13.6%"
                  resoolutionDesktopWrapperGraphBarCaptionText13="Stationary Non-Combustion Sources"
                  resoolutionDesktopWrapperGraphBarCaptionText14="9.8%"
                  resoolutionDesktopWrapperGraphBarCaptionText15="Residential Wood Burning"
                  resoolutionDesktopWrapperGraphBarCaptionText16="Commercial Cooking"
                  resoolutionDesktopWrapperGraphBarCaptionText17="Stationary Combustion Sources"
                  resoolutionDesktopWrapperGraphBarCaptionText2="2.1%"
                  resoolutionDesktopWrapperGraphBarCaptionText3="Mobile Off-Road Sources"
                  resoolutionDesktopWrapperGraphBarCaptionText4="Accidental &amp; Planned Fires"
                  resoolutionDesktopWrapperGraphBarCaptionText5="5.6%"
                  resoolutionDesktopWrapperGraphBarCaptionText6="13.7%"
                  resoolutionDesktopWrapperGraphBarCaptionText7="14.1%"
                  resoolutionDesktopWrapperGraphBarCaptionText8="18.1%"
                  resoolutionDesktopWrapperGraphBarCaptionText9="7.2%"
                  resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-11"
                  resoolutionDesktopWrapperVisible={false}
                  subtitle={false}
                />
                <GraphChartLine
                  className={`${screenWidth < 768 && "class-22"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "class-23"
                  }`}
                  columns="two"
                  frameClassName={`${screenWidth < 768 && "class-24"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "graph-chart-line-10"
                  }`}
                  graphChartLineClassName={`${screenWidth < 768 && "class-26"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "graph-chart-line-8"
                  }`}
                  input={
                    screenWidth < 768 ? "total-sl" : screenWidth >= 768 && screenWidth < 1440 ? "total" : undefined
                  }
                  lines="one"
                  resolution={
                    screenWidth < 768 ? "mobile" : screenWidth >= 768 && screenWidth < 1440 ? "desktop" : undefined
                  }
                  sectionTitleClassName={`${screenWidth < 768 && "class-25"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "graph-chart-line-9"
                  }`}
                  text="100.0%"
                />
              </div>
              <GraphPie
                chart="chart-2"
                className="instance-node-12"
                clipPathGroup3={screenWidth >= 768 && screenWidth < 1440 ? "/img/clip-path-group-10.png" : undefined}
                frameClassName={`${screenWidth >= 768 && screenWidth < 1440 && "instance-node-10"}`}
                groupClassName={`${screenWidth < 768 && "class-29"} ${
                  screenWidth >= 768 && screenWidth < 1440 && "class-30"
                }`}
                img={screenWidth < 768 ? "/img/clip-path-group-9.png" : undefined}
                overlapGroupClassName={`${screenWidth >= 768 && screenWidth < 1440 && "graph-pie-10"}`}
                resolution={
                  screenWidth < 768 ? "mobile" : screenWidth >= 768 && screenWidth < 1440 ? "desktop" : undefined
                }
                subtitle={false}
                title={false}
                vectorClassName={`${screenWidth >= 768 && screenWidth < 1440 && "graph-pie-10"}`}
              />
            </div>
          </div>
          <div
            className="section-graph-13"
            style={{
              alignItems:
                screenWidth < 768 ? "flex-end" : screenWidth >= 768 && screenWidth < 1440 ? "flex-start" : undefined,
              alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
              padding:
                screenWidth < 768
                  ? "0px 24px 60px"
                  : screenWidth >= 768 && screenWidth < 1440
                  ? "0px 48px 60px"
                  : undefined,
              width: screenWidth < 768 ? "375px" : screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
            }}
          >
            <div className="sub-topic-title-3">
              <p
                className="section-title-68"
                style={{
                  fontSize: screenWidth < 768 ? "30px" : screenWidth >= 768 && screenWidth < 1440 ? "44px" : undefined,
                  letterSpacing:
                    screenWidth < 768 ? "1.50px" : screenWidth >= 768 && screenWidth < 1440 ? "2.20px" : undefined,
                  lineHeight:
                    screenWidth < 768 ? "33.0px" : screenWidth >= 768 && screenWidth < 1440 ? "48.4px" : undefined,
                }}
              >
                <span
                  className="text-wrapper-19"
                  style={{
                    fontFamily:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-family)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-size)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-style)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 768
                        ? "var(--h3-mobile-font-weight)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 768
                        ? "var(--h3-mobile-letter-spacing)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 768
                        ? "var(--h3-mobile-line-height)"
                        : screenWidth >= 768 && screenWidth < 1440
                        ? "var(--h3-desktop-line-height)"
                        : undefined,
                  }}
                >
                  Sources of Annual Nitrogen Oxide Pollution{" "}
                </span>
                <span
                  className="text-wrapper-19"
                  style={{
                    letterSpacing:
                      screenWidth < 768 ? "0.45px" : screenWidth >= 768 && screenWidth < 1440 ? "0.97px" : undefined,
                  }}
                >
                  d
                </span>
              </p>
            </div>
            <div
              className="frame-67"
              style={{
                alignItems:
                  screenWidth < 768 ? "flex-start" : screenWidth >= 768 && screenWidth < 1440 ? "flex-end" : undefined,
                alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
                display:
                  screenWidth < 768 ? "inline-flex" : screenWidth >= 768 && screenWidth < 1440 ? "flex" : undefined,
                width: screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <div
                className="frame-68"
                style={{
                  alignItems:
                    screenWidth < 768
                      ? "flex-start"
                      : screenWidth >= 768 && screenWidth < 1440
                      ? "flex-end"
                      : undefined,
                  alignSelf: screenWidth >= 768 && screenWidth < 1440 ? "stretch" : undefined,
                  display:
                    screenWidth < 768 ? "inline-flex" : screenWidth >= 768 && screenWidth < 1440 ? "flex" : undefined,
                  gap: screenWidth < 768 ? "16px" : screenWidth >= 768 && screenWidth < 1440 ? "12px" : undefined,
                  justifyContent: screenWidth >= 768 && screenWidth < 1440 ? "center" : undefined,
                  width: screenWidth >= 768 && screenWidth < 1440 ? "100%" : undefined,
                }}
              >
                <SubtitleYesCaptionWrapper
                  caption={false}
                  className="instance-node-11"
                  resolution={
                    screenWidth < 768 ? "mobile" : screenWidth >= 768 && screenWidth < 1440 ? "desktop" : undefined
                  }
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionDivClassName="instance-node-9"
                  resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-4"
                  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassName="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionFrameWrapperClassNameOverride="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-2"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-9"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-5"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName3="graph-bar-caption-7"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-8"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-3"
                  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName={`${
                    screenWidth < 768 && "graph-bar-caption-11"
                  } ${screenWidth >= 768 && screenWidth < 1440 && "graph-bar-caption-6"}`}
                  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassName1={`${
                    screenWidth < 768 && "graph-bar-caption-11"
                  } ${screenWidth >= 768 && screenWidth < 1440 && "graph-bar-caption-6"}`}
                  resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassNameOverride={`${
                    screenWidth < 768 && "graph-bar-caption-11"
                  } ${screenWidth >= 768 && screenWidth < 1440 && "graph-bar-caption-6"}`}
                  resoolutionDesktopWrapperGraphBarCaptionText="21.1%"
                  resoolutionDesktopWrapperGraphBarCaptionText1="Mobile Off-Road Sources - Aircraft"
                  resoolutionDesktopWrapperGraphBarCaptionText10={
                    screenWidth < 768 ? (
                      <>
                        Mobile On-Road Sources - <br />
                        Other Vehicles h
                      </>
                    ) : screenWidth >= 768 && screenWidth < 1440 ? (
                      "Mobile On-Road Sources - Other Vehicles h"
                    ) : undefined
                  }
                  resoolutionDesktopWrapperGraphBarCaptionText11="Mobile Off-Road Sources - Equipment f"
                  resoolutionDesktopWrapperGraphBarCaptionText12={
                    screenWidth < 768 ? "13.6%" : screenWidth >= 768 && screenWidth < 1440 ? "8.6%" : undefined
                  }
                  resoolutionDesktopWrapperGraphBarCaptionText13="Mobile On-Road Sources - Trucks"
                  resoolutionDesktopWrapperGraphBarCaptionText14="6.0%"
                  resoolutionDesktopWrapperGraphBarCaptionText15="Mobile Off-Road Sources - Ships"
                  resoolutionDesktopWrapperGraphBarCaptionText16="Residential Natural Gas Combustion"
                  resoolutionDesktopWrapperGraphBarCaptionText17="Stationary Combustion Sources"
                  resoolutionDesktopWrapperGraphBarCaptionText2="1.3%"
                  resoolutionDesktopWrapperGraphBarCaptionText3="Mobile Off-Road Sources - Other g"
                  resoolutionDesktopWrapperGraphBarCaptionText4="Stationary Non-Combustion Sources"
                  resoolutionDesktopWrapperGraphBarCaptionText5="4.8%"
                  resoolutionDesktopWrapperGraphBarCaptionText6="9.6%"
                  resoolutionDesktopWrapperGraphBarCaptionText7="10.1%"
                  resoolutionDesktopWrapperGraphBarCaptionText8="33.0%"
                  resoolutionDesktopWrapperGraphBarCaptionText9="5.5%"
                  resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-11"
                  resoolutionDesktopWrapperVisible={false}
                  subtitle={false}
                />
                <GraphChartLine
                  className={`${screenWidth < 768 && "class-22"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "class-23"
                  }`}
                  columns="two"
                  frameClassName={`${screenWidth < 768 && "class-24"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "graph-chart-line-10"
                  }`}
                  graphChartLineClassName={`${screenWidth < 768 && "class-26"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "graph-chart-line-8"
                  }`}
                  input={
                    screenWidth < 768 ? "total-sl" : screenWidth >= 768 && screenWidth < 1440 ? "total" : undefined
                  }
                  lines="one"
                  resolution={
                    screenWidth < 768 ? "mobile" : screenWidth >= 768 && screenWidth < 1440 ? "desktop" : undefined
                  }
                  sectionTitleClassName={`${screenWidth < 768 && "class-25"} ${
                    screenWidth >= 768 && screenWidth < 1440 && "graph-chart-line-9"
                  }`}
                  text="100.0%"
                />
              </div>
              <GraphPie
                chart="chart-3"
                className="instance-node-12"
                clipPathGroup1={screenWidth < 768 ? "/img/clip-path-group-11.png" : undefined}
                clipPathGroup4={screenWidth >= 768 && screenWidth < 1440 ? "/img/clip-path-group-14.png" : undefined}
                frameClassName={`${screenWidth >= 768 && screenWidth < 1440 && "instance-node-10"}`}
                groupClassName={`${screenWidth < 768 && "class-31"} ${
                  screenWidth >= 768 && screenWidth < 1440 && "class-32"
                }`}
                overlapGroupClassName={`${screenWidth >= 768 && screenWidth < 1440 && "graph-pie-12"}`}
                resolution={
                  screenWidth < 768 ? "mobile" : screenWidth >= 768 && screenWidth < 1440 ? "desktop" : undefined
                }
                subtitle={false}
                title={false}
                vectorClassName={`${screenWidth >= 768 && screenWidth < 1440 && "graph-pie-12"}`}
              />
            </div>
          </div>
          <div
            className="frame-69"
            style={{
              padding:
                screenWidth < 768
                  ? "0px 24px 60px"
                  : screenWidth >= 768 && screenWidth < 1440
                  ? "0px 48px 100px"
                  : undefined,
            }}
          >
            <div className="div-6">
              <div className="frame-55">
                <div
                  className="section-title-69"
                  style={{
                    fontSize:
                      screenWidth < 768 ? "14px" : screenWidth >= 768 && screenWidth < 1440 ? "19px" : undefined,
                    letterSpacing:
                      screenWidth < 768 ? "0.56px" : screenWidth >= 768 && screenWidth < 1440 ? "0.76px" : undefined,
                    lineHeight:
                      screenWidth < 768 ? "18.9px" : screenWidth >= 768 && screenWidth < 1440 ? "25.7px" : undefined,
                  }}
                >
                  <span
                    className="span-2"
                    style={{
                      letterSpacing:
                        screenWidth < 768 ? "0.08px" : screenWidth >= 768 && screenWidth < 1440 ? "0.14px" : undefined,
                    }}
                  >
                    {screenWidth < 768 && <>a </>}

                    {screenWidth >= 768 && screenWidth < 1440 && <>a</>}
                  </span>
                  <span
                    className="span-2"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--caption-mobile-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-line-height)"
                          : undefined,
                    }}
                  >
                    {screenWidth < 768 && (
                      <>The Air District’s latest greenhouse gas (GHG) emissions estimates can be found here: </>
                    )}

                    {screenWidth >= 768 && screenWidth < 1440 && (
                      <> The Air District’s latest greenhouse gas (GHG) emissions estimates can be found here: </>
                    )}
                  </span>
                  <a
                    href="https://nam02.safelinks.protection.outlook.com/?url=https://www.baaqmd.gov/capghg&amp;data=04%257C01%257Csbai@baaqmd.gov%257C8c0adf7d43f14e5b5a9d08d9dc2ac670%257C855defaabdae4e6281e53bb7aa04fc3a%257C0%257C0%257C637782898532015051%257CUnknown%257CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0=%257C3000&amp;sdata=Aqexj2d5+loYj+W1ZVBOI+JVpmaS2BY8MwUyLdrJBUY=&amp;reserved=0"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span
                      className="text-wrapper-18"
                      style={{
                        fontFamily:
                          screenWidth < 768
                            ? "var(--caption-mobile-font-family)"
                            : screenWidth >= 768 && screenWidth < 1440
                            ? "var(--caption-desktop-font-family)"
                            : undefined,
                        fontSize:
                          screenWidth < 768
                            ? "var(--caption-mobile-font-size)"
                            : screenWidth >= 768 && screenWidth < 1440
                            ? "var(--caption-desktop-font-size)"
                            : undefined,
                        fontStyle:
                          screenWidth < 768
                            ? "var(--caption-mobile-font-style)"
                            : screenWidth >= 768 && screenWidth < 1440
                            ? "var(--caption-desktop-font-style)"
                            : undefined,
                        fontWeight:
                          screenWidth < 768
                            ? "var(--caption-mobile-font-weight)"
                            : screenWidth >= 768 && screenWidth < 1440
                            ? "var(--caption-desktop-font-weight)"
                            : undefined,
                        letterSpacing:
                          screenWidth < 768
                            ? "var(--caption-mobile-letter-spacing)"
                            : screenWidth >= 768 && screenWidth < 1440
                            ? "var(--caption-desktop-letter-spacing)"
                            : undefined,
                        lineHeight:
                          screenWidth < 768
                            ? "var(--caption-mobile-line-height)"
                            : screenWidth >= 768 && screenWidth < 1440
                            ? "var(--caption-desktop-line-height)"
                            : undefined,
                      }}
                    >
                      baaqmd.gov/capghg
                    </span>
                  </a>
                  <span
                    className="text-wrapper-19"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--caption-mobile-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-line-height)"
                          : undefined,
                    }}
                  >
                    . These estimates do not reflect specific emissions changes in 2023 due to the impact of COVID-19
                    pandemic or wildfires.
                    <br />
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      letterSpacing:
                        screenWidth < 768 ? "0.08px" : screenWidth >= 768 && screenWidth < 1440 ? "0.14px" : undefined,
                    }}
                  >
                    b
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--caption-mobile-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-line-height)"
                          : undefined,
                    }}
                  >
                    {" "}
                    This category includes GHG emissions from refining processes and combustion of gas, liquid and solid
                    fuels at refineries; it does not include GHG emissions generated during cogeneration at refineries,
                    which is included in the Electricity/Co-Generation category.
                    <br />
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      letterSpacing:
                        screenWidth < 768 ? "0.08px" : screenWidth >= 768 && screenWidth < 1440 ? "0.14px" : undefined,
                    }}
                  >
                    c
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--caption-mobile-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-line-height)"
                          : undefined,
                    }}
                  >
                    {" "}
                    This category includes GHG emissions from combustion and processes at cement plants, natural gas
                    combustion, combustion of solid and liquid fuels in industries, natural gas distribution fugitive
                    losses (primarily methane), and industrial process emissions.
                    <br />
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      letterSpacing:
                        screenWidth < 768 ? "0.08px" : screenWidth >= 768 && screenWidth < 1440 ? "0.14px" : undefined,
                    }}
                  >
                    d
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--caption-mobile-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-line-height)"
                          : undefined,
                    }}
                  >
                    {" "}
                    These percentage estimates are developed based on the Air District’s currently available regional
                    inventory data. These estimates do not reflect specific emissions changes in 2023 due to the impact
                    of COVID-19 pandemic or wildfires.
                    <br />
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      letterSpacing:
                        screenWidth < 768 ? "0.08px" : screenWidth >= 768 && screenWidth < 1440 ? "0.14px" : undefined,
                    }}
                  >
                    e
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--caption-mobile-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-line-height)"
                          : undefined,
                    }}
                  >
                    {" "}
                    This category includes wind-blown dust from agricultural land and dust from construction operations.
                    <br />
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      letterSpacing:
                        screenWidth < 768 ? "0.08px" : screenWidth >= 768 && screenWidth < 1440 ? "0.14px" : undefined,
                    }}
                  >
                    f
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--caption-mobile-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-line-height)"
                          : undefined,
                    }}
                  >
                    {" "}
                    This category includes construction and mining equipment, agricultural equipment, industrial and
                    light commercial equipment, and airport ground support equipment, etc.
                    <br />
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      letterSpacing:
                        screenWidth < 768 ? "0.08px" : screenWidth >= 768 && screenWidth < 1440 ? "0.14px" : undefined,
                    }}
                  >
                    g
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--caption-mobile-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-line-height)"
                          : undefined,
                    }}
                  >
                    {" "}
                    This category includes trains, lawn and garden equipment and other off-road equipment.
                    <br />
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      letterSpacing:
                        screenWidth < 768 ? "0.08px" : screenWidth >= 768 && screenWidth < 1440 ? "0.14px" : undefined,
                    }}
                  >
                    h
                  </span>
                  <span
                    className="text-wrapper-19"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-family)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-size)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-style)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-font-weight)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--caption-mobile-letter-spacing)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--caption-mobile-line-height)"
                          : screenWidth >= 768 && screenWidth < 1440
                          ? "var(--caption-desktop-line-height)"
                          : undefined,
                    }}
                  >
                    {" "}
                    This category includes passenger cars, buses, motorcycles, etc.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {screenWidth >= 768 && screenWidth < 1440 && (
        <>
          <div className="section-graph-14">
            <div className="div-6">
              <SubTopicTitle className="instance-node-8" resolution="desktop" text="LABORATORY" type="left" />
            </div>
            <GraphChart
              className="graph-chart-15"
              frameClassName="graph-chart-10"
              frameClassNameOverride="instance-node-10"
              graphChartLineColumns10="two"
              graphChartLineColumns11="two"
              graphChartLineColumns12="two"
              graphChartLineColumns13="two"
              graphChartLineFrameClassName1="graph-chart-2"
              graphChartLineFrameClassName2="graph-chart-2"
              graphChartLineFrameClassName3="graph-chart-2"
              graphChartLineFrameClassName4="graph-chart-2"
              graphChartLineGraphChartLineClassName="instance-node-10"
              graphChartLineGraphChartLineClassName1="instance-node-10"
              graphChartLineGraphChartLineClassName2="graph-chart-13"
              graphChartLineGraphChartLineClassNameOverride="instance-node-10"
              graphChartLineGraphChartLineWrapperClassName="instance-node-11"
              graphChartLineGraphChartLineWrapperClassNameOverride="instance-node-11"
              graphChartLineLines10="one"
              graphChartLineLines11="one"
              graphChartLineLines12="one"
              graphChartLineLines13="one"
              graphChartLineLinesColumnsClassName="instance-node-11"
              graphChartLineLinesColumnsClassNameOverride="instance-node-11"
              graphChartLineSectionTitleClassName4="graph-chart-2"
              graphChartLineSectionTitleClassName5="graph-chart-2"
              graphChartLineSectionTitleClassName6="graph-chart-2"
              graphChartLineSectionTitleClassName7="graph-chart-2"
              graphChartLineText20="Particulate Matter"
              graphChartLineText21="3,988"
              graphChartLineText22="Toxics"
              graphChartLineText23="1,118"
              graphChartLineText24="Source-Oriented Analyses"
              graphChartLineText25="41"
              graphChartLineText26="Interagency and Development Projects"
              graphChartLineText27="0"
              graphChartTotalGraphChartLineColumns1="two"
              graphChartTotalGraphChartLineDivClassName="graph-chart-2"
              graphChartTotalGraphChartLineFrameClassName="graph-chart-2"
              graphChartTotalGraphChartLineGraphChartLineClassNameOverride="instance-node-10"
              graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-11"
              graphChartTotalGraphChartLineText2="5,147"
              graphChartTotalLines1="one"
              graphChartTotalLinesResolutionClassNameOverride="graph-chart-14"
              hasFrame2={false}
              hasGroup2={false}
              quantity="one"
              resolution="desktop"
              sectionTitleClassName1="graph-chart-2"
              sectionTitleClassName2="graph-chart-2"
              sectionTitleWrapperClassName="graph-chart-12"
              sectionTitleWrapperClassNameOverride="graph-chart-11"
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
          <div className="section-graph-15">
            <div className="sub-topic-title-wrapper">
              <SubTopicTitle
                className="instance-node-12"
                resolution="desktop"
                text="EXCEEDANCES OF AIR QUALITY STANDARDS"
                type="left"
              />
            </div>
            <GraphChart
              className="graph-chart-18"
              frameClassName1="instance-node-7"
              frameClassName2="instance-node-7"
              graphChartLineColumns14="two"
              graphChartLineColumns15="two"
              graphChartLineColumns16="two"
              graphChartLineColumns17="two"
              graphChartLineColumns18="two"
              graphChartLineColumns19="two"
              graphChartLineFrameClassName5="graph-chart-4"
              graphChartLineFrameClassName6="graph-chart-6"
              graphChartLineFrameClassName7="graph-chart-7"
              graphChartLineFrameClassName8="graph-chart-7"
              graphChartLineFrameClassName9="graph-chart-6"
              graphChartLineGraphChartLineClassName3="instance-node-10"
              graphChartLineGraphChartLineClassName4="instance-node-10"
              graphChartLineGraphChartLineClassName5="instance-node-10"
              graphChartLineGraphChartLineClassName6="instance-node-10"
              graphChartLineGraphChartLineClassName7="instance-node-10"
              graphChartLineGraphChartLineClassName8="instance-node-10"
              graphChartLineLines14="one"
              graphChartLineLines15="one"
              graphChartLineLines16="one"
              graphChartLineLines17="one"
              graphChartLineLines18="one"
              graphChartLineLines19="one"
              graphChartLineLinesColumnsClassName1="instance-node-11"
              graphChartLineLinesColumnsClassName2="instance-node-11"
              graphChartLineLinesColumnsClassName3="instance-node-11"
              graphChartLineLinesColumnsClassName4="instance-node-11"
              graphChartLineLinesColumnsClassName5="instance-node-11"
              graphChartLineLinesColumnsClassName6="instance-node-11"
              graphChartLineResolution="desktop_1"
              graphChartLineResolution1="desktop_1"
              graphChartLineResolution2="desktop_1"
              graphChartLineResolution3="desktop_1"
              graphChartLineResolution4="desktop_1"
              graphChartLineResolution5="desktop_1"
              graphChartLineSectionTitleClassName10="graph-chart-8"
              graphChartLineSectionTitleClassName8="graph-chart-8"
              graphChartLineSectionTitleClassName9="graph-chart-8"
              graphChartLineSectionTitleWrapperClassName="graph-chart-5"
              graphChartLineSectionTitleWrapperClassNameOverride="graph-chart-5"
              graphChartLineText28="Days over National 8-Hour Standard"
              graphChartLineText29="Days over California 1-Hour Standard"
              graphChartLineText30="0"
              graphChartLineText31="Days over California 8-Hour Standard"
              graphChartLineText32="4*"
              graphChartLineText33="Days over National 24-Hour PM10 Standard"
              graphChartLineText34="0*"
              graphChartLineText35="Days over California 24-Hour PM10 Standard"
              graphChartLineText36="0*"
              graphChartLineText37="Days over National 24-Hour PM2.5 Standard"
              graphChartLineText38="3"
              groupClassName1="graph-chart-16"
              groupClassName2="graph-chart-16"
              groupWrapperClassName="instance-node-10"
              groupWrapperClassNameOverride="instance-node-10"
              hasFrame3={false}
              hasFrame4={false}
              hasFrame5={false}
              hasGroup3={false}
              hasGroup4={false}
              quantity="two"
              resolution="desktop"
              sectionTitleClassName3="graph-chart-17"
              sectionTitleClassName4="graph-chart-17"
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
          <InternalMenu className="internal-menu-2" resolution="mobile" />
          <footer className="footer-3">
            <p className="section-title-70">
              375 Beale Street, Suite 600
              <br />
              San Francisco, CA 94105
            </p>
            <p className="section-title-71">
              (415) 749-5000 | 1-800-HELP-AIR | 877-4N0-BURN
              <br />
              Accessibility • Terms of Use • Privacy Policy
            </p>
            <img className="BAAQMD-logo-4" alt="Baaqmd logo" src="/img/baaqmd-logo-fullcolor-black-2.png" />
          </footer>
        </>
      )}

      {screenWidth < 768 && (
        <>
          <div className="section-graph-instance-wrapper">
            <SectionGraph
              chartCaption="no"
              className="section-graph-16"
              graphs="one"
              override={
                <GraphChart
                  className="graph-chart-19"
                  graphChartLineColumns="two"
                  graphChartLineColumns1="two"
                  graphChartLineColumns2="two"
                  graphChartLineColumns3="two"
                  graphChartLineDivClassName="graph-chart-2"
                  graphChartLineDivClassNameOverride="graph-chart-2"
                  graphChartLineFrameClassName="graph-chart-2"
                  graphChartLineFrameClassNameOverride="graph-chart-2"
                  graphChartLineFrameWrapperClassName="graph-chart-2"
                  graphChartLineFrameWrapperClassNameOverride="graph-chart-2"
                  graphChartLineLines="one"
                  graphChartLineLines1="one"
                  graphChartLineLines2="one"
                  graphChartLineLines3="one"
                  graphChartLineSectionTitleClassName="graph-chart-2"
                  graphChartLineSectionTitleClassNameOverride="graph-chart-2"
                  graphChartLineText="Particulate Matter"
                  graphChartLineText1="3,988"
                  graphChartLineText2="Toxics"
                  graphChartLineText3="1,118"
                  graphChartLineText4="Source-Oriented Analyses"
                  graphChartLineText5="41"
                  graphChartLineText6="Interagency and Development Projects"
                  graphChartLineText7="0"
                  graphChartTotalGraphChartLineColumns="two"
                  graphChartTotalGraphChartLineGraphChartLineClassName="graph-chart-22"
                  graphChartTotalGraphChartLineHasFrame={false}
                  graphChartTotalGraphChartLineSectionTitleClassName="graph-chart-21"
                  graphChartTotalGraphChartLineSectionTitleClassNameOverride="graph-chart-2"
                  graphChartTotalGraphChartLineText="5,147"
                  graphChartTotalGraphChartLineText1="Total"
                  graphChartTotalLines="one"
                  graphChartTotalLinesResolutionClassName="graph-chart-23"
                  hasFrame={false}
                  hasGroup={false}
                  quantity="one"
                  resolution="mobile"
                  sectionTitleClassName="graph-chart-20"
                  sectionTitleClassNameOverride="graph-chart-2"
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
              subTopicTitleTypeDefaultClassName="instance-node-12"
              title="with-graph"
            />
          </div>
          <SectionGraph
            chartCaption="no"
            className="section-graph-17"
            graphs="one"
            override={
              <GraphChart
                className="instance-node-12"
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
                graphChartLineText14="Days over National 24-Hour PM10 Standard"
                graphChartLineText15="0*"
                graphChartLineText16="Days over California 24-Hour PM10 Standard"
                graphChartLineText17="0*"
                graphChartLineText18="Days over National 24-Hour PM2.5 Standard"
                graphChartLineText19="3"
                graphChartLineText8="Days over National 8-Hour Standard"
                graphChartLineText9="4*"
                groupClassName="graph-chart-24"
                groupClassNameOverride="graph-chart-24"
                hasDiv={false}
                hasFrame1={false}
                hasGroup1={false}
                hasGroupWrapper={false}
                hasSectionTitleWrapper={false}
                quantity="two"
                resolution="mobile"
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
            subTopicTitleTypeDefaultClassName="instance-node-12"
            title="with-graph"
          />
          <InternalMenu className="internal-menu-instance" resolution="mobile" />
          <Footer className="footer-4" resolution="mobile" />
        </>
      )}
    </div>
  );
};

import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Footer } from "../../components/Footer";
import { GraphChart } from "../../components/GraphChart";
import { GraphPie } from "../../components/GraphPie";
import { Header } from "../../components/Header";
import { InternalMenu } from "../../components/InternalMenu";
import { SectionGraph } from "../../components/SectionGraph";
import { SubTopicTitle } from "../../components/SubTopicTitle";
import { SubtitleYesCaptionWrapper } from "../../components/SubtitleYesCaptionWrapper";
import { TitleSection } from "../../components/TitleSection";
import "./style.css";

export const AboutDesktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="ABOUT-DESKTOP"
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
        overflow:
          (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
            ? "hidden"
            : undefined,
      }}
    >
      <TitleSection
        blockOfTextElementAnnualReportClassName={`${
          ((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) &&
          "class-48"
        }`}
        blockOfTextResolutionMobileClassName={`${
          ((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) &&
          "class-52"
        }`}
        blockOfTextResolutionMobileClassNameOverride={`${screenWidth >= 1025 && "class-49"}`}
        blockOfTextSectionTitleClassName={`${
          ((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) &&
          "class-50"
        }`}
        blockOfTextSectionTitleClassNameOverride={`${screenWidth >= 1025 && "class-50"}`}
        blockOfTextText={
          (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
            ? "ABOUT US"
            : undefined
        }
        blockOfTextText1={
          (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
            ? "WHO ARE WE?"
            : undefined
        }
        blockOfTextText2={screenWidth >= 1025 ? "ABOUT US" : undefined}
        blockOfTextText3={screenWidth >= 1025 ? "WHO ARE WE?" : undefined}
        className="title-section-19"
        frameClassName={`${
          ((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) &&
          "class-51"
        }`}
        frameClassNameOverride={`${screenWidth >= 1025 && "class-51"}`}
        layout={
          (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
            ? "stacked"
            : screenWidth >= 1025
            ? "img-r"
            : undefined
        }
        resolution={
          screenWidth < 641
            ? "mobile"
            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
            ? "tablet"
            : screenWidth >= 1025
            ? "desktop"
            : undefined
        }
      />
      <div
        className="opening-section-7"
        style={{
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "100px 24px"
              : screenWidth >= 1025
              ? "160px 0px 160px 100px"
              : undefined,
        }}
      >
        <div
          className="opening-text-5"
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
            className="frame-70"
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
            <p
              className="AB-community-6"
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
              STRENGTHENING DIVERSITY, EQUITY AND INCLUSION WITHIN THE AIR DISTRICT
            </p>
            <div
              className="we-continued-to-work-7"
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
                    ? "34.5px"
                    : screenWidth >= 1025
                    ? "39px"
                    : undefined,
                width: screenWidth >= 1025 ? "855px" : undefined,
              }}
            >
              <span
                className="text-wrapper-39"
                style={{
                  fontFamily:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-family)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-font-family)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-size)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-style)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-font-style)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-weight)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-font-weight)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-letter-spacing)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-letter-spacing)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-line-height)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-line-height)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-line-height)"
                      : undefined,
                }}
              >
                Staff participated in a variety of internal events, activities, and trainings to strengthen DEI
                principles throughout our work, including events featuring labor leader and civil rights activist{" "}
              </span>
              <span
                className="text-wrapper-39"
                style={{
                  fontFamily:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-family)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-family)"
                      : undefined,
                  fontSize:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-size)"
                      : undefined,
                  fontStyle:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-style)"
                      : undefined,
                  fontWeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-weight)"
                      : undefined,
                  letterSpacing:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-letter-spacing)"
                      : undefined,
                  lineHeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-line-height)"
                      : undefined,
                }}
              >
                Dolores Huerta
              </span>
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
                , Chinese American author{" "}
              </span>
              <span
                className="text-wrapper-39"
                style={{
                  fontFamily:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-family)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-family)"
                      : undefined,
                  fontSize:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-size)"
                      : undefined,
                  fontStyle:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-style)"
                      : undefined,
                  fontWeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-weight)"
                      : undefined,
                  letterSpacing:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-letter-spacing)"
                      : undefined,
                  lineHeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-line-height)"
                      : undefined,
                }}
              >
                Amy Tan
              </span>
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
                , the
              </span>
              <span className="span-2">
                {((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) && <>&nbsp;</>}

                {screenWidth >= 1025 && <> GLBT Historical Society</>}
              </span>
              <span
                className="span-3"
                style={{
                  fontFamily:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-family)"
                      : (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025) ||
                        screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025) ||
                        screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-style)"
                      : (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025) ||
                        screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-weight)"
                      : (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025) ||
                        screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-letter-spacing)"
                      : (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025) ||
                        screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-line-height)"
                      : (screenWidth >= 641 && screenWidth < 769) ||
                        (screenWidth >= 769 && screenWidth < 1025) ||
                        screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-line-height)"
                      : undefined,
                }}
              >
                {screenWidth >= 1025 && <>, and environmental justice professional </>}

                {((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) && <>GLBT Historical Society</>}
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
                      ? "var(--pull-quote-desktop-bold-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-style)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-weight)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-letter-spacing)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-line-height)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-line-height)"
                      : undefined,
                }}
              >
                {((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) && <>, and environmental justice professional </>}

                {screenWidth >= 1025 && <>Bruce Strouble, Ph.D.</>}
              </span>
              <span
                className="span-3"
                style={{
                  fontFamily:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-family)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-family)"
                      : undefined,
                  fontSize:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-size)"
                      : undefined,
                  fontStyle:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-style)"
                      : undefined,
                  fontWeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-weight)"
                      : undefined,
                  letterSpacing:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-letter-spacing)"
                      : undefined,
                  lineHeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-line-height)"
                      : undefined,
                }}
              >
                {((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) && <>Bruce Strouble, Ph.D.</>}

                {screenWidth >= 1025 && <> We created our first formal </>}
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
                      ? "var(--pull-quote-desktop-bold-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-style)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-weight)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-letter-spacing)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-line-height)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-line-height)"
                      : undefined,
                }}
              >
                {((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) && <> We created our first formal </>}

                {screenWidth >= 1025 && <>Anti-Bullying Policy</>}
              </span>
              <span
                className="span-3"
                style={{
                  fontFamily:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-family)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-family)"
                      : undefined,
                  fontSize:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-size)"
                      : undefined,
                  fontStyle:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-style)"
                      : undefined,
                  fontWeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-weight)"
                      : undefined,
                  letterSpacing:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-letter-spacing)"
                      : undefined,
                  lineHeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-line-height)"
                      : undefined,
                }}
              >
                {((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) && <>Anti-Bullying Policy</>}

                {screenWidth >= 1025 && (
                  <>
                    {" "}
                    to ensure a workplace free from all forms of violence, intimidation and interpersonal abuse. We
                    updated our{" "}
                  </>
                )}
              </span>
              <span
                className="span-3"
                style={{
                  fontFamily:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-family)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-font-family)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-size)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-style)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-font-style)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-weight)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-font-weight)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-letter-spacing)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-letter-spacing)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-line-height)"
                      : screenWidth < 641
                      ? "var(--pull-quote-mobile-line-height)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-line-height)"
                      : undefined,
                }}
              >
                {screenWidth >= 1025 && <>Plan for Language Services to Limited English Proficient Populations</>}

                {((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) && (
                  <>
                    {" "}
                    to ensure a workplace free from all forms of violence, intimidation and interpersonal abuse. We
                    updated our{" "}
                  </>
                )}
              </span>
              <span
                className="span-3"
                style={{
                  fontFamily:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-family)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-family)"
                      : undefined,
                  fontSize:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-size)"
                      : undefined,
                  fontStyle:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-style)"
                      : undefined,
                  fontWeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-weight)"
                      : undefined,
                  letterSpacing:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-letter-spacing)"
                      : undefined,
                  lineHeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-line-height)"
                      : undefined,
                }}
              >
                {((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) && <>Plan for Language Services to Limited English Proficient Populations </>}

                {screenWidth >= 1025 && (
                  <>
                    {" "}
                    with the goal of ensuring that all community members are able to meaningfully access our services
                    and programs. Staff also participated in{" "}
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
                      ? "var(--pull-quote-desktop-bold-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-style)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-font-weight)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-letter-spacing)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-line-height)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-bold-line-height)"
                      : undefined,
                }}
              >
                {((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) && (
                  <>
                    with the goal of ensuring that all community members are able to meaningfully access our services
                    and programs. Staff also participated in{" "}
                  </>
                )}

                {screenWidth >= 1025 && <>Cultural Competency Training</>}
              </span>
              <span
                className="span-3"
                style={{
                  fontFamily:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-family)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-family)"
                      : undefined,
                  fontSize:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-size)"
                      : undefined,
                  fontStyle:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-style)"
                      : undefined,
                  fontWeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-weight)"
                      : undefined,
                  letterSpacing:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-letter-spacing)"
                      : undefined,
                  lineHeight:
                    (screenWidth >= 641 && screenWidth < 769) ||
                    (screenWidth >= 769 && screenWidth < 1025) ||
                    screenWidth < 641
                      ? "var(--pull-quote-mobile-bold-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-line-height)"
                      : undefined,
                }}
              >
                {((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) && <>Cultural Competency Training </>}

                {screenWidth >= 1025 && (
                  <>
                    {" "}
                    to encourage integration of these values in the planning, implementation, and evaluation of
                    programming.
                  </>
                )}
              </span>
              {((screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641) && (
                <p className="span-wrapper">
                  <span
                    className="text-wrapper-39"
                    style={{
                      fontFamily:
                        screenWidth < 641
                          ? "var(--pull-quote-mobile-font-family)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--pull-quote-tablet-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 641
                          ? "var(--pull-quote-mobile-font-size)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--pull-quote-tablet-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 641
                          ? "var(--pull-quote-mobile-font-style)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--pull-quote-tablet-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 641
                          ? "var(--pull-quote-mobile-font-weight)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--pull-quote-tablet-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 641
                          ? "var(--pull-quote-mobile-letter-spacing)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--pull-quote-tablet-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 641
                          ? "var(--pull-quote-mobile-line-height)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--pull-quote-tablet-line-height)"
                          : undefined,
                    }}
                  >
                    to encourage integration of these values in the planning, implementation, and evaluation of
                    programming.
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <SectionGraph
        chartCaption="z"
        className={`${
          ((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) &&
          "class-53"
        } ${screenWidth >= 1025 && "class-54"}`}
        graphs="zero"
        resolution={
          screenWidth < 641
            ? "mobile"
            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
            ? "tablet"
            : screenWidth >= 1025
            ? "desktop"
            : undefined
        }
        subTopicTitleText="DEMOGRAPHICS BY GENDER"
        subTopicTitleTypeDefaultClassNameOverride="instance-node-11"
        title="top"
      />
      <div
        className="section-graph-17"
        style={{
          alignItems:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "flex-end"
              : screenWidth >= 1025
              ? "flex-start"
              : undefined,
          flexDirection:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "column"
              : undefined,
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "0px 24px 100px"
              : screenWidth >= 1025
              ? "0px 30px 160px 100px"
              : undefined,
        }}
      >
        {((screenWidth >= 641 && screenWidth < 769) ||
          (screenWidth >= 769 && screenWidth < 1025) ||
          screenWidth < 641) && (
          <div className="frame-71">
            <SubtitleYesCaptionWrapper
              caption
              className="instance-node-11"
              resolution="mobile"
              resoolutionDesktopWrapperGraphBarCaptionColumns="one"
              resoolutionDesktopWrapperGraphBarCaptionColumns1="one"
              resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-11"
              resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-11"
              resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-12"
              resoolutionDesktopWrapperGraphBarCaptionText1="Male"
              resoolutionDesktopWrapperGraphBarCaptionText15="Female"
              resoolutionDesktopWrapperResoolutionDesktopClassName="graph-bar-caption-13"
              resoolutionDesktopWrapperVisible={false}
              resoolutionDesktopWrapperVisible1={false}
              resoolutionDesktopWrapperVisible2={false}
              resoolutionDesktopWrapperVisible3={false}
              resoolutionDesktopWrapperVisible4={false}
              resoolutionDesktopWrapperVisible5={false}
              resoolutionDesktopWrapperVisible6={false}
              resoolutionDesktopWrapperVisible7={false}
              subtitle={false}
              text="*American Community Survey (ACS) Census Bureau"
            />
            <div className="graph-bar-2">
              <div className="frame-72">
                <div className="frame-73">
                  <div className="section-title-75">Air District Staff</div>
                </div>
                <div
                  className="frame-74"
                  style={{
                    marginLeft: screenWidth < 641 ? "-33.72px" : undefined,
                    marginRight: screenWidth < 641 ? "-33.72px" : undefined,
                  }}
                >
                  <div className="frame-75">
                    <div className="group-21">
                      <div className="overlap-group-8">
                        <div className="group-22">
                          <div className="group-23">
                            <div className="section-title-76">56%</div>
                            <div className="section-title-77">44%</div>
                          </div>
                        </div>
                        <img
                          className="element-e"
                          alt="Element e"
                          src={
                            screenWidth < 641
                              ? "/img/2023-e-2022-15.png"
                              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                              ? "/img/2023-e-2022-20.png"
                              : undefined
                          }
                        />
                      </div>
                      <div className="section-title-78">2023</div>
                    </div>
                  </div>
                  <div className="frame-75">
                    <div className="group-21">
                      <div className="overlap-group-8">
                        <div className="group-22">
                          <div className="group-23">
                            <div className="section-title-76">56%</div>
                            <div className="section-title-77">44%</div>
                          </div>
                        </div>
                        <img
                          className="element-e"
                          alt="Element e"
                          src={
                            screenWidth < 641
                              ? "/img/2023-e-2022-15.png"
                              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                              ? "/img/2023-e-2022-20.png"
                              : undefined
                          }
                        />
                      </div>
                      <div className="section-title-78">2022</div>
                    </div>
                  </div>
                  <div className="frame-75">
                    <div className="group-24">
                      <div className="group-25">
                        <div className="frame-76">
                          <div className="section-title-79">2021</div>
                          <img
                            className="element-e-2"
                            alt="Element e"
                            src={
                              screenWidth < 641
                                ? "/img/2023-e-2022-17.png"
                                : (screenWidth >= 641 && screenWidth < 769) ||
                                  (screenWidth >= 769 && screenWidth < 1025)
                                ? "/img/2023-e-2022-22.png"
                                : undefined
                            }
                          />
                        </div>
                      </div>
                      <div className="section-title-80">58%</div>
                      <div className="section-title-81">42%</div>
                    </div>
                  </div>
                  <div className="group-24">
                    <div className="group-25">
                      <div className="frame-76">
                        <div className="section-title-79">2020</div>
                        <img
                          className="element-e-2"
                          alt="Element e"
                          src={
                            screenWidth < 641
                              ? "/img/2023-e-2022-18.png"
                              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                              ? "/img/2023-e-2022-23.png"
                              : undefined
                          }
                        />
                      </div>
                    </div>
                    <div className="section-title-80">57%</div>
                    <div className="section-title-81">43%</div>
                  </div>
                  <div className="group-24">
                    <div className="group-25">
                      <div className="frame-76">
                        <div className="section-title-79">2019</div>
                        <img
                          className="element-e-2"
                          alt="Element e"
                          src={
                            screenWidth < 641
                              ? "/img/2023-e-2022-17.png"
                              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                              ? "/img/2023-e-2022-22.png"
                              : undefined
                          }
                        />
                      </div>
                    </div>
                    <div className="section-title-80">58%</div>
                    <div className="section-title-81">42%</div>
                  </div>
                </div>
              </div>
            </div>
            <GraphPie
              chart="demo-gender"
              className="instance-node-11"
              groupClassNameOverride={`${screenWidth < 641 && "class-55"} ${
                ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && "class-56"
              }`}
              layer={
                screenWidth < 641
                  ? "/img/layer-1-14.png"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "/img/layer-1-16.png"
                  : undefined
              }
              resolution="mobile"
              subtitle
              text="5 YEAR AVERAGE&nbsp;&nbsp; Ages 18 — 64*"
              title
            />
          </div>
        )}

        {screenWidth >= 1025 && (
          <>
            <div className="graph-bar-caption-wrapper">
              <SubtitleYesCaptionWrapper
                caption
                className="instance-node-12"
                resolution="desktop"
                resoolutionDesktopWrapperGraphBarCaptionColumns="one"
                resoolutionDesktopWrapperGraphBarCaptionColumns1="one"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-12"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="graph-bar-caption-14"
                resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-12"
                resoolutionDesktopWrapperGraphBarCaptionText1="Male"
                resoolutionDesktopWrapperGraphBarCaptionText15="Female"
                resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-12"
                resoolutionDesktopWrapperVisible={false}
                resoolutionDesktopWrapperVisible1={false}
                resoolutionDesktopWrapperVisible2={false}
                resoolutionDesktopWrapperVisible3={false}
                resoolutionDesktopWrapperVisible4={false}
                resoolutionDesktopWrapperVisible5={false}
                resoolutionDesktopWrapperVisible6={false}
                resoolutionDesktopWrapperVisible7={false}
                sectionTitleClassName="graph-bar-caption-15"
                subtitle={false}
                text={
                  <>
                    * American Community Survey (ACS) Census Bureau
                    <br />
                    ** Total percentages may vary by 1% due to rounding
                  </>
                }
              />
            </div>
            <div className="frame-77">
              <div className="graph-bar-2">
                <div className="frame-78">
                  <div className="frame-73">
                    <div className="section-title-82">Air District Staff</div>
                  </div>
                  <div className="frame-79">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-9">
                        <div className="frame-80">
                          <div className="section-title-83">2023</div>
                          <img className="element-e-3" alt="Element e" src="/img/2023-e-2022-4.png" />
                        </div>
                        <div className="section-title-84">56%</div>
                        <div className="section-title-85">44%</div>
                      </div>
                    </div>
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-9">
                        <div className="frame-80">
                          <div className="section-title-83">2022</div>
                          <img className="element-e-3" alt="Element e" src="/img/2023-e-2022-4.png" />
                        </div>
                        <div className="section-title-86">56%</div>
                        <div className="section-title-87">44%</div>
                      </div>
                    </div>
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-9">
                        <div className="frame-80">
                          <div className="section-title-83">2021</div>
                          <img className="element-e-3" alt="Element e" src="/img/2023-e-2022-12.png" />
                        </div>
                        <div className="section-title-88">58%</div>
                        <div className="section-title-89">42%</div>
                      </div>
                    </div>
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-9">
                        <div className="frame-80">
                          <div className="section-title-83">2020</div>
                          <img className="element-e-3" alt="Element e" src="/img/2023-e-2022-13.png" />
                        </div>
                        <div className="section-title-88">57%</div>
                        <div className="section-title-89">43%</div>
                      </div>
                    </div>
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-9">
                        <div className="frame-80">
                          <div className="section-title-83">2019</div>
                          <img className="element-e-3" alt="Element e" src="/img/2023-e-2022-12.png" />
                        </div>
                        <div className="section-title-88">58%</div>
                        <div className="section-title-89">42%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <GraphPie
                chart="demo-gender"
                className="instance-node-11"
                frameClassName="graph-pie-21"
                frameClassNameOverride="graph-pie-19"
                overlapGroupWrapperClassName="graph-pie-20"
                resolution="desktop"
                subtitle
                text="5 YEAR AVERAGE&nbsp;&nbsp; Ages 18 — 64*"
                title
              />
            </div>
          </>
        )}
      </div>
      <SectionGraph
        chartCaption="z"
        className={`${
          ((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) &&
          "class-57"
        } ${screenWidth >= 1025 && "class-58"}`}
        graphs="zero"
        resolution={
          screenWidth < 641
            ? "mobile"
            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
            ? "tablet"
            : screenWidth >= 1025
            ? "desktop"
            : undefined
        }
        subTopicTitleSectionTitleClassName={`${screenWidth >= 1025 && "class-59"}`}
        subTopicTitleText="AIR DISTRICT EXECUTIVE MANAGEMENT (DIRECTORS &amp; ABOVE)"
        subTopicTitleTypeDefaultClassNameOverride="instance-node-11"
        title="top"
      />
      <div
        className="frame-81"
        style={{
          flexDirection:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "column"
              : undefined,
          gap: screenWidth >= 1025 ? "36px" : undefined,
          justifyContent: screenWidth >= 1025 ? "flex-end" : undefined,
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "0px 24px"
              : screenWidth >= 1025
              ? "0px 30px 36px 100px"
              : undefined,
        }}
      >
        {((screenWidth >= 641 && screenWidth < 769) ||
          (screenWidth >= 769 && screenWidth < 1025) ||
          screenWidth < 641) && (
          <div className="section-graph-18">
            <div className="frame-71">
              <SubtitleYesCaptionWrapper
                caption
                className="instance-node-11"
                hasFrame={false}
                hasSectionTitle={false}
                resolution="mobile"
                resoolutionDesktopWrapperGraphBarCaptionColumns="one"
                resoolutionDesktopWrapperGraphBarCaptionColumns2="one"
                resoolutionDesktopWrapperGraphBarCaptionColumns3="one"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-11"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="graph-bar-caption-17"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-11"
                resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-18"
                resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-16"
                resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-12"
                resoolutionDesktopWrapperGraphBarCaptionText="Black"
                resoolutionDesktopWrapperGraphBarCaptionText13="Asian"
                resoolutionDesktopWrapperGraphBarCaptionText15="Hispanic"
                resoolutionDesktopWrapperResoolutionDesktopClassName="graph-bar-caption-13"
                resoolutionDesktopWrapperVisible={false}
                resoolutionDesktopWrapperVisible1={false}
                resoolutionDesktopWrapperVisible3={false}
                resoolutionDesktopWrapperVisible4={false}
                resoolutionDesktopWrapperVisible6={false}
                resoolutionDesktopWrapperVisible7={false}
                resoolutionDesktopWrapperVisible8={false}
                subtitle
              />
              <div className="graph-bar-2">
                <div className="frame-72">
                  <div className="frame-73">
                    <div className="section-title-75">Race and Ethnicity</div>
                  </div>
                  <div
                    className="frame-82"
                    style={{
                      marginLeft: screenWidth < 641 ? "-31.40px" : undefined,
                      marginRight: screenWidth < 641 ? "-31.40px" : undefined,
                    }}
                  >
                    <div className="group-26">
                      <div className="overlap-group-10">
                        <div className="frame-83">
                          <div className="section-title-90">2023</div>
                          <img
                            className="frame-84"
                            alt="Frame"
                            src={
                              screenWidth < 641
                                ? "/img/frame-19890-1.png"
                                : (screenWidth >= 641 && screenWidth < 769) ||
                                  (screenWidth >= 769 && screenWidth < 1025)
                                ? "/img/frame-19890-2.png"
                                : undefined
                            }
                          />
                        </div>
                        <div className="section-title-91">13%</div>
                        <div className="section-title-92">4%</div>
                        <div className="section-title-93">29%</div>
                      </div>
                    </div>
                    <div className="group-27">
                      <div className="frame-83">
                        <div className="section-title-90">2019</div>
                        <img
                          className="frame-85"
                          alt="Frame"
                          src={
                            screenWidth < 641
                              ? "/img/frame-19891-1.png"
                              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                              ? "/img/frame-19891-2.png"
                              : undefined
                          }
                        />
                      </div>
                      <div className="section-title-94">10%</div>
                      <div className="section-title-95">0%</div>
                      <div className="section-title-96">15%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {screenWidth >= 1025 && (
          <>
            <div className="frame-86">
              <SubtitleYesCaptionWrapper
                caption
                className="graph-bar-caption-19"
                hasFrame={false}
                hasSectionTitle={false}
                resolution="desktop"
                resoolutionDesktopWrapperGraphBarCaptionColumns="one"
                resoolutionDesktopWrapperGraphBarCaptionColumns2="one"
                resoolutionDesktopWrapperGraphBarCaptionColumns3="one"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-12"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="graph-bar-caption-14"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-12"
                resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-18"
                resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-16"
                resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-12"
                resoolutionDesktopWrapperGraphBarCaptionText="Black"
                resoolutionDesktopWrapperGraphBarCaptionText13="Asian"
                resoolutionDesktopWrapperGraphBarCaptionText15="Hispanic"
                resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-12"
                resoolutionDesktopWrapperVisible={false}
                resoolutionDesktopWrapperVisible1={false}
                resoolutionDesktopWrapperVisible3={false}
                resoolutionDesktopWrapperVisible4={false}
                resoolutionDesktopWrapperVisible6={false}
                resoolutionDesktopWrapperVisible7={false}
                resoolutionDesktopWrapperVisible8={false}
                subtitle
              />
            </div>
            <div className="frame-77">
              <div className="graph-bar-2">
                <div className="frame-87">
                  <div className="frame-88">
                    <div className="section-title-82">Race and Ethnicity</div>
                  </div>
                  <div className="frame-89">
                    <div className="group-28">
                      <div className="overlap-group-9">
                        <div className="frame-80">
                          <div className="section-title-83">2023</div>
                          <img className="frame-90" alt="Frame" src="/img/frame-19890.png" />
                        </div>
                        <div className="section-title-97">13%</div>
                        <div className="section-title-98">4%</div>
                        <div className="section-title-85">29%</div>
                      </div>
                    </div>
                    <div className="group-28">
                      <div className="overlap-group-9">
                        <div className="frame-80">
                          <div className="section-title-83">2019</div>
                          <img className="frame-91" alt="Frame" src="/img/frame-19891.png" />
                        </div>
                        <div className="section-title-99">10%</div>
                        <div className="section-title-100">0%</div>
                        <div className="section-title-89">15%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className="section-graph-19"
        style={{
          alignItems:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "flex-end"
              : screenWidth >= 1025
              ? "flex-start"
              : undefined,
          flexDirection:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "column"
              : undefined,
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "0px 24px 100px"
              : screenWidth >= 1025
              ? "0px 30px 160px 100px"
              : undefined,
        }}
      >
        {((screenWidth >= 641 && screenWidth < 769) ||
          (screenWidth >= 769 && screenWidth < 1025) ||
          screenWidth < 641) && (
          <div className="frame-71">
            <SubtitleYesCaptionWrapper
              caption={false}
              className="graph-bar-caption-13"
              resolution="mobile"
              resoolutionDesktopWrapperGraphBarCaptionColumns="one"
              resoolutionDesktopWrapperGraphBarCaptionColumns1="one"
              resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-11"
              resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="instance-node-11"
              resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-12"
              resoolutionDesktopWrapperGraphBarCaptionText1="Male"
              resoolutionDesktopWrapperGraphBarCaptionText15="Female"
              resoolutionDesktopWrapperResoolutionDesktopClassName="graph-bar-caption-13"
              resoolutionDesktopWrapperVisible={false}
              resoolutionDesktopWrapperVisible1={false}
              resoolutionDesktopWrapperVisible2={false}
              resoolutionDesktopWrapperVisible3={false}
              resoolutionDesktopWrapperVisible4={false}
              resoolutionDesktopWrapperVisible5={false}
              resoolutionDesktopWrapperVisible6={false}
              resoolutionDesktopWrapperVisible7={false}
              subtitle={false}
            />
            <div className="graph-bar-2">
              <div className="frame-72">
                <div className="frame-73">
                  <div className="section-title-75">Gender</div>
                </div>
                <div
                  className="frame-92"
                  style={{
                    marginLeft: screenWidth < 641 ? "-35.00px" : undefined,
                    marginRight: screenWidth < 641 ? "-35.00px" : undefined,
                  }}
                >
                  <div className="group-29">
                    <div className="frame-83">
                      <div className="section-title-101">2023</div>
                      <img
                        className="frame-93"
                        alt="Frame"
                        src={
                          screenWidth < 641
                            ? "/img/frame-19893-1.png"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "/img/frame-19893-2.png"
                            : undefined
                        }
                      />
                    </div>
                    <div className="section-title-102">38%</div>
                    <div className="section-title-103">63%</div>
                  </div>
                  <div className="group-30">
                    <div className="frame-83">
                      <div className="section-title-101">2019</div>
                      <img
                        className="frame-93"
                        alt="Frame"
                        src={
                          screenWidth < 641
                            ? "/img/frame-19894-1.png"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "/img/frame-19894-2.png"
                            : undefined
                        }
                      />
                    </div>
                    <div className="section-title-104">35%</div>
                    <div className="section-title-105">65%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {screenWidth >= 1025 && (
          <>
            <div className="frame-86">
              <SubtitleYesCaptionWrapper
                caption
                className="graph-bar-caption-19"
                hasFrame={false}
                hasSectionTitle={false}
                resolution="desktop"
                resoolutionDesktopWrapperGraphBarCaptionColumns="one"
                resoolutionDesktopWrapperGraphBarCaptionColumns1="one"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-12"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="graph-bar-caption-14"
                resoolutionDesktopWrapperGraphBarCaptionRectangleClassName2="graph-bar-caption-12"
                resoolutionDesktopWrapperGraphBarCaptionText1="Male"
                resoolutionDesktopWrapperGraphBarCaptionText15="Female"
                resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-12"
                resoolutionDesktopWrapperVisible={false}
                resoolutionDesktopWrapperVisible1={false}
                resoolutionDesktopWrapperVisible2={false}
                resoolutionDesktopWrapperVisible3={false}
                resoolutionDesktopWrapperVisible4={false}
                resoolutionDesktopWrapperVisible5={false}
                resoolutionDesktopWrapperVisible6={false}
                resoolutionDesktopWrapperVisible7={false}
                subtitle
              />
            </div>
            <div className="frame-77">
              <div className="graph-bar-2">
                <div className="frame-87">
                  <div className="frame-88">
                    <div className="section-title-82">Gender</div>
                  </div>
                  <div className="frame-89">
                    <div className="group-31">
                      <div className="overlap-group-9">
                        <div className="frame-80">
                          <div className="section-title-83">2023</div>
                          <img className="frame-94" alt="Frame" src="/img/frame-19893.png" />
                        </div>
                        <div className="section-title-106">38%</div>
                        <div className="section-title-85">63%</div>
                      </div>
                    </div>
                    <div className="group-31">
                      <div className="overlap-group-9">
                        <div className="frame-80">
                          <div className="section-title-83">2019</div>
                          <img className="frame-94" alt="Frame" src="/img/frame-19894.png" />
                        </div>
                        <div className="section-title-107">35%</div>
                        <div className="section-title-89">65%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className="frame-95"
        style={{
          backgroundImage:
            screenWidth < 641
              ? "url(/img/frame-19857.png)"
              : screenWidth >= 641 && screenWidth < 769
              ? "url(/img/frame-19857-2.png)"
              : screenWidth >= 769 && screenWidth < 1025
              ? "url(/img/frame-19857-1.png)"
              : screenWidth >= 1025
              ? "url(/img/frame-19855.png)"
              : undefined,
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "60px 24px 0px"
              : screenWidth >= 1025
              ? "160px 0px 0px"
              : undefined,
        }}
      >
        <SectionGraph
          chartCaption="z"
          className={`${screenWidth < 641 && "class-60"} ${
            ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && "class-61"
          } ${screenWidth >= 1025 && "class-62"}`}
          graphs="zero"
          resolution={
            screenWidth < 641
              ? "mobile"
              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
              ? "tablet"
              : screenWidth >= 1025
              ? "desktop"
              : undefined
          }
          subTopicTitleText="DEMOGRAPHICS BY RACE AND ETHNICITY**"
          subTopicTitleTypeDefaultClassNameOverride="instance-node-11"
          title="top"
        />
        <div
          className="section-graph-20"
          style={{
            alignItems:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "flex-end"
                : screenWidth >= 1025
                ? "flex-start"
                : undefined,
            flexDirection:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "column"
                : undefined,
            justifyContent: screenWidth >= 1025 ? "flex-end" : undefined,
            padding:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "0px 0px 100px"
                : screenWidth >= 1025
                ? "0px 30px 160px 100px"
                : undefined,
          }}
        >
          {((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) && (
            <div className="frame-71">
              <SubtitleYesCaptionWrapper
                caption
                className="instance-node-11"
                hasSectionTitle={false}
                resolution="mobile"
                resoolutionDesktopWrapperGraphBarCaptionColumns="one"
                resoolutionDesktopWrapperGraphBarCaptionColumns1="one"
                resoolutionDesktopWrapperGraphBarCaptionColumns2="one"
                resoolutionDesktopWrapperGraphBarCaptionColumns3="one"
                resoolutionDesktopWrapperGraphBarCaptionColumns4="one"
                resoolutionDesktopWrapperGraphBarCaptionColumns5="one"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-11"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-11"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="graph-bar-caption-17"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-11"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-11"
                resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-11"
                resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-18"
                resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-16"
                resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-12"
                resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-21"
                resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-20"
                resoolutionDesktopWrapperGraphBarCaptionSectionTitleClassNameOverride="graph-bar-caption-22"
                resoolutionDesktopWrapperGraphBarCaptionText="Black"
                resoolutionDesktopWrapperGraphBarCaptionText1="White"
                resoolutionDesktopWrapperGraphBarCaptionText13="Asian"
                resoolutionDesktopWrapperGraphBarCaptionText15="Hispanic"
                resoolutionDesktopWrapperGraphBarCaptionText17="American Indian/ Alaskan Native"
                resoolutionDesktopWrapperGraphBarCaptionText3="Other/ Unkown"
                resoolutionDesktopWrapperResoolutionDesktopClassName="graph-bar-caption-13"
                resoolutionDesktopWrapperVisible={false}
                resoolutionDesktopWrapperVisible1={false}
                resoolutionDesktopWrapperVisible3={false}
                resoolutionDesktopWrapperVisible4={false}
                sectionTitleClassName="graph-bar-caption-15"
                subtitle
                text={
                  <>
                    *American Community Survey (ACS) Census Bureau
                    <br />
                    ** Total percentages may vary by 1% due to rounding
                  </>
                }
              />
              <div className="graph-bar-2">
                <div className="frame-72">
                  <div className="frame-73">
                    <div className="section-title-75">Air District Staff</div>
                  </div>
                  <div
                    className="frame-96"
                    style={{
                      marginLeft: screenWidth < 641 ? "-33.75px" : undefined,
                      marginRight: screenWidth < 641 ? "-33.75px" : undefined,
                    }}
                  >
                    <div className="frame-97">
                      <div className="section-title-108">2023</div>
                      <div className="group-32">
                        <div className="overlap-group-11">
                          <img
                            className="frame-98"
                            alt="Frame"
                            src={
                              screenWidth < 641
                                ? "/img/frame-19884-2.png"
                                : (screenWidth >= 641 && screenWidth < 769) ||
                                  (screenWidth >= 769 && screenWidth < 1025)
                                ? "/img/frame-19884-3.png"
                                : undefined
                            }
                          />
                          <div className="section-title-109">3%</div>
                          <div className="section-title-110">7%</div>
                          <div className="section-title-111">10%</div>
                          <div className="section-title-112">40%</div>
                          <div className="section-title-113">40%</div>
                        </div>
                        <div className="section-title-114">1%</div>
                      </div>
                    </div>
                    <div className="frame-75">
                      <div className="section-title-108">2022</div>
                      <div className="group-33">
                        <div className="section-title-114">1%</div>
                        <div className="overlap-group-11">
                          <div className="section-title-115">2%</div>
                          <div className="section-title-116">8%</div>
                          <div className="section-title-117">9%</div>
                          <div className="section-title-118">40%</div>
                          <div className="section-title-113">42%</div>
                          <img
                            className="frame-98"
                            alt="Frame"
                            src={
                              screenWidth < 641
                                ? "/img/frame-19883-5.png"
                                : (screenWidth >= 641 && screenWidth < 769) ||
                                  (screenWidth >= 769 && screenWidth < 1025)
                                ? "/img/frame-19883-6.png"
                                : undefined
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="frame-75">
                      <div className="section-title-108">2021</div>
                      <div className="group-33">
                        <div className="overlap-group-11">
                          <img
                            className="frame-98"
                            alt="Frame"
                            src={
                              screenWidth < 641
                                ? "/img/frame-19882-5.png"
                                : (screenWidth >= 641 && screenWidth < 769) ||
                                  (screenWidth >= 769 && screenWidth < 1025)
                                ? "/img/frame-19882-6.png"
                                : undefined
                            }
                          />
                          <div className="section-title-115">2%</div>
                          <div className="section-title-116">8%</div>
                          <div className="section-title-117">9%</div>
                          <div className="section-title-118">40%</div>
                          <div className="section-title-113">41%</div>
                        </div>
                        <div className="section-title-114">1%</div>
                      </div>
                    </div>
                    <div className="frame-75">
                      <div className="section-title-108">2020</div>
                      <div className="group-33">
                        <div className="overlap-group-12">
                          <img
                            className="frame-99"
                            alt="Frame"
                            src={
                              screenWidth < 641
                                ? "/img/frame-19881-5.png"
                                : (screenWidth >= 641 && screenWidth < 769) ||
                                  (screenWidth >= 769 && screenWidth < 1025)
                                ? "/img/frame-19881-6.png"
                                : undefined
                            }
                          />
                          <div className="section-title-115">1%</div>
                          <div className="section-title-116">8%</div>
                          <div className="section-title-119">8%</div>
                          <div className="section-title-120">40%</div>
                          <div className="section-title-113">42%</div>
                        </div>
                        <div className="section-title-114">1%</div>
                      </div>
                    </div>
                    <div className="frame-75">
                      <div className="section-title-108">2019</div>
                      <div className="group-34">
                        <div className="overlap-group-13">
                          <img
                            className="frame-98"
                            alt="Frame"
                            src={
                              screenWidth < 641
                                ? "/img/frame-19880-5.png"
                                : (screenWidth >= 641 && screenWidth < 769) ||
                                  (screenWidth >= 769 && screenWidth < 1025)
                                ? "/img/frame-19880-6.png"
                                : undefined
                            }
                          />
                          <div className="section-title-121">1%</div>
                          <div className="section-title-122">8%</div>
                          <div className="section-title-123">8%</div>
                          <div className="section-title-124">39%</div>
                          <div className="section-title-113">44%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <GraphPie
                chart="demo-race"
                className="instance-node-11"
                groupClassNameOverride={`${screenWidth < 641 && "class-63"} ${
                  ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                  "class-64"
                }`}
                layer1={
                  screenWidth < 641
                    ? "/img/layer-1-15.png"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "/img/layer-1-17.png"
                    : undefined
                }
                resolution="mobile"
                subtitle
                text="5 YEAR AVERAGE&nbsp;&nbsp; Ages 18 — 64*"
                title
              />
            </div>
          )}

          {screenWidth >= 1025 && (
            <>
              <div className="frame-86">
                <SubtitleYesCaptionWrapper
                  caption
                  className="instance-node-12"
                  resolution="desktop"
                  resoolutionDesktopWrapperGraphBarCaptionColumns="one"
                  resoolutionDesktopWrapperGraphBarCaptionColumns1="one"
                  resoolutionDesktopWrapperGraphBarCaptionColumns2="one"
                  resoolutionDesktopWrapperGraphBarCaptionColumns3="one"
                  resoolutionDesktopWrapperGraphBarCaptionColumns4="one"
                  resoolutionDesktopWrapperGraphBarCaptionColumns5="one"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName1="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName2="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName3="graph-bar-caption-14"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName4="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassName5="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionColumnsResolutionClassNameOverride="instance-node-12"
                  resoolutionDesktopWrapperGraphBarCaptionDivClassNameOverride="graph-bar-caption-18"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName="graph-bar-caption-16"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName1="graph-bar-caption-12"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassName4="graph-bar-caption-21"
                  resoolutionDesktopWrapperGraphBarCaptionRectangleClassNameOverride="graph-bar-caption-20"
                  resoolutionDesktopWrapperGraphBarCaptionText="Black"
                  resoolutionDesktopWrapperGraphBarCaptionText1="White"
                  resoolutionDesktopWrapperGraphBarCaptionText13="Asian"
                  resoolutionDesktopWrapperGraphBarCaptionText15="Hispanic"
                  resoolutionDesktopWrapperGraphBarCaptionText17="American Indian/ Alaskan Native"
                  resoolutionDesktopWrapperGraphBarCaptionText3="Other/ Unkown"
                  resoolutionDesktopWrapperResoolutionDesktopClassName="instance-node-12"
                  resoolutionDesktopWrapperVisible={false}
                  resoolutionDesktopWrapperVisible1={false}
                  resoolutionDesktopWrapperVisible3={false}
                  resoolutionDesktopWrapperVisible4={false}
                  sectionTitleClassName="graph-bar-caption-15"
                  subtitle={false}
                  text={
                    <>
                      *American Community Survey (ACS) Census Bureau
                      <br />
                      ** Total percentages may vary by 1% due to rounding
                    </>
                  }
                />
              </div>
              <div className="frame-77">
                <div className="graph-bar-2">
                  <div className="frame-87">
                    <div className="frame-88">
                      <div className="section-title-82">Air District Staff</div>
                    </div>
                    <div className="frame-100">
                      <div className="frame-101">
                        <div className="group-35">
                          <div className="overlap-2">
                            <img className="frame-102" alt="Frame" src="/img/frame-19880-4.png" />
                            <div className="section-title-125">1%</div>
                            <div className="section-title-126">8%</div>
                            <div className="section-title-127">8%</div>
                            <div className="section-title-128">39%</div>
                            <div className="section-title-129">44%</div>
                          </div>
                          <div className="overlap-3">
                            <img className="frame-103" alt="Frame" src="/img/frame-19881-2.png" />
                            <div className="section-title-130">1%</div>
                            <div className="section-title-131">8%</div>
                            <div className="section-title-132">8%</div>
                            <div className="section-title-133">40%</div>
                            <div className="section-title-129">42%</div>
                          </div>
                          <div className="overlap-4">
                            <img className="frame-102" alt="Frame" src="/img/frame-19882-2.png" />
                            <div className="section-title-134">2%</div>
                            <div className="section-title-131">8%</div>
                            <div className="section-title-135">9%</div>
                            <div className="section-title-136">40%</div>
                            <div className="section-title-129">41%</div>
                          </div>
                          <div className="section-title-137">2023</div>
                          <div className="section-title-138">2022</div>
                          <div className="section-title-139">2021</div>
                          <div className="section-title-140">2020</div>
                          <div className="section-title-141">2019</div>
                          <div className="overlap-5">
                            <img className="vector-7" alt="Vector" src="/img/vector-28.png" />
                            <img className="vector-8" alt="Vector" src="/img/vector-29.png" />
                            <div className="section-title-142">40%</div>
                            <div className="section-title-129">40%</div>
                          </div>
                          <div className="overlap-group-14">
                            <img className="vector-9" alt="Vector" src="/img/vector-30.png" />
                            <img className="vector-10" alt="Vector" src="/img/vector-31.png" />
                            <img className="vector-11" alt="Vector" src="/img/vector-32.png" />
                            <img className="vector-12" alt="Vector" src="/img/vector-33.png" />
                            <div className="section-title-143">3%</div>
                            <div className="section-title-144">7%</div>
                            <div className="section-title-129">10%</div>
                          </div>
                          <div className="section-title-145">1%</div>
                          <div className="section-title-146">1%</div>
                          <div className="section-title-147">1%</div>
                          <div className="section-title-148">1%</div>
                          <div className="overlap-6">
                            <div className="section-title-134">2%</div>
                            <div className="section-title-131">8%</div>
                            <div className="section-title-135">9%</div>
                            <div className="section-title-136">40%</div>
                            <div className="section-title-129">42%</div>
                            <img className="frame-102" alt="Frame" src="/img/frame-19883-2.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <GraphPie
                  chart="demo-race"
                  className="instance-node-11"
                  frameClassName="graph-pie-21"
                  frameClassNameOverride="graph-pie-19"
                  layer2="/img/layer-1-7.png"
                  overlapGroupWrapperClassName="graph-pie-22"
                  resolution="desktop"
                  subtitle
                  text="5 YEAR AVERAGE&nbsp;&nbsp; Ages 18 — 64*"
                  title
                />
              </div>
            </>
          )}
        </div>
        <SectionGraph
          chartCaption="no"
          className={`${
            ((screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641) &&
            "class-66"
          } ${screenWidth >= 1025 && "class-67"}`}
          frameClassName={`${screenWidth >= 1025 && "class-65"}`}
          graphs="one"
          override={
            <GraphChart
              className={`${
                ((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) &&
                "class-78"
              } ${screenWidth >= 1025 && "class-79"}`}
              divClassName={`${screenWidth < 641 && "class-75"} ${
                screenWidth >= 641 && screenWidth < 769 && "class-76"
              } ${screenWidth >= 769 && screenWidth < 1025 && "class-77"}`}
              divClassNameOverride={`${screenWidth < 641 && "class-75"} ${
                screenWidth >= 641 && screenWidth < 769 && "class-76"
              } ${screenWidth >= 769 && screenWidth < 1025 && "class-77"}`}
              frameClassName1={`${
                ((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) &&
                "class-69"
              }`}
              frameClassName2={`${
                ((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) &&
                "class-69"
              }`}
              graphChartLineColumns14={screenWidth >= 1025 ? "two" : undefined}
              graphChartLineColumns15={screenWidth >= 1025 ? "two" : undefined}
              graphChartLineColumns16={screenWidth >= 1025 ? "two" : undefined}
              graphChartLineColumns17={screenWidth >= 1025 ? "two" : undefined}
              graphChartLineColumns18={screenWidth >= 1025 ? "two" : undefined}
              graphChartLineColumns19={screenWidth >= 1025 ? "two" : undefined}
              graphChartLineColumns20={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "two"
                  : undefined
              }
              graphChartLineColumns21={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "two"
                  : undefined
              }
              graphChartLineColumns22={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "two"
                  : undefined
              }
              graphChartLineColumns23={screenWidth >= 1025 ? "two" : undefined}
              graphChartLineColumns24={screenWidth >= 1025 ? "two" : undefined}
              graphChartLineColumns25={screenWidth >= 1025 ? "two" : undefined}
              graphChartLineColumns4={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "two"
                  : undefined
              }
              graphChartLineColumns5={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "two"
                  : undefined
              }
              graphChartLineColumns6={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "two"
                  : undefined
              }
              graphChartLineColumns7={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "two"
                  : undefined
              }
              graphChartLineColumns8={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "two"
                  : undefined
              }
              graphChartLineColumns9={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "two"
                  : undefined
              }
              graphChartLineGraphChartLineWrapperClassName={`${screenWidth >= 1025 && "instance-node-11"}`}
              graphChartLineGraphChartLineWrapperClassNameOverride={`${screenWidth >= 1025 && "instance-node-11"}`}
              graphChartLineLines14={screenWidth >= 1025 ? "one" : undefined}
              graphChartLineLines15={screenWidth >= 1025 ? "one" : undefined}
              graphChartLineLines16={screenWidth >= 1025 ? "one" : undefined}
              graphChartLineLines17={screenWidth >= 1025 ? "one" : undefined}
              graphChartLineLines18={screenWidth >= 1025 ? "one" : undefined}
              graphChartLineLines19={screenWidth >= 1025 ? "one" : undefined}
              graphChartLineLines20={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "one"
                  : undefined
              }
              graphChartLineLines21={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "one"
                  : undefined
              }
              graphChartLineLines22={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "one"
                  : undefined
              }
              graphChartLineLines23={screenWidth >= 1025 ? "one" : undefined}
              graphChartLineLines24={screenWidth >= 1025 ? "one" : undefined}
              graphChartLineLines25={screenWidth >= 1025 ? "one" : undefined}
              graphChartLineLines4={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "one"
                  : undefined
              }
              graphChartLineLines5={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "one"
                  : undefined
              }
              graphChartLineLines6={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "one"
                  : undefined
              }
              graphChartLineLines7={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "one"
                  : undefined
              }
              graphChartLineLines8={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "one"
                  : undefined
              }
              graphChartLineLines9={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "one"
                  : undefined
              }
              graphChartLineLinesColumnsClassName={`${screenWidth >= 1025 && "instance-node-11"}`}
              graphChartLineLinesColumnsClassName1={`${screenWidth >= 1025 && "instance-node-11"}`}
              graphChartLineLinesColumnsClassName2={`${screenWidth >= 1025 && "instance-node-11"}`}
              graphChartLineLinesColumnsClassNameOverride={`${screenWidth >= 1025 && "instance-node-11"}`}
              graphChartLineResolution={screenWidth >= 1025 ? "desktop" : undefined}
              graphChartLineResolution1={screenWidth >= 1025 ? "desktop" : undefined}
              graphChartLineResolution2={screenWidth >= 1025 ? "desktop" : undefined}
              graphChartLineResolution3={screenWidth >= 1025 ? "desktop" : undefined}
              graphChartLineResolution4={screenWidth >= 1025 ? "desktop" : undefined}
              graphChartLineResolution5={screenWidth >= 1025 ? "desktop" : undefined}
              graphChartLineSectionTitleClassName11={`${screenWidth >= 1025 && "class-68"}`}
              graphChartLineSectionTitleClassName12={`${screenWidth >= 1025 && "class-68"}`}
              graphChartLineSectionTitleClassName13={`${screenWidth >= 1025 && "class-68"}`}
              graphChartLineSectionTitleClassName8={`${screenWidth >= 1025 && "class-68"}`}
              graphChartLineText10={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "County Property Tax"
                  : undefined
              }
              graphChartLineText11={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "$45,219,314"
                  : undefined
              }
              graphChartLineText12={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "Federal Grants"
                  : undefined
              }
              graphChartLineText13={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "$5,071,978"
                  : undefined
              }
              graphChartLineText14={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "$95,579,663"
                  : undefined
              }
              graphChartLineText15={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "Personnel"
                  : undefined
              }
              graphChartLineText16={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "$55,942,481"
                  : undefined
              }
              graphChartLineText17={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "Program Distribution"
                  : undefined
              }
              graphChartLineText18={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "$28,895,623"
                  : undefined
              }
              graphChartLineText19={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "Services and Supplies"
                  : undefined
              }
              graphChartLineText28={screenWidth >= 1025 ? "Permit-Related Revenue" : undefined}
              graphChartLineText30={screenWidth >= 1025 ? "County Property Tax" : undefined}
              graphChartLineText32={screenWidth >= 1025 ? "Federal Grants" : undefined}
              graphChartLineText34={screenWidth >= 1025 ? "Personnel" : undefined}
              graphChartLineText36={screenWidth >= 1025 ? "Program Distribution" : undefined}
              graphChartLineText38={screenWidth >= 1025 ? "Services and Supplies" : undefined}
              graphChartLineText40={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "State and Other Grants"
                  : undefined
              }
              graphChartLineText41={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "$76,623,547"
                  : undefined
              }
              graphChartLineText42={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "Other Revenue"
                  : undefined
              }
              graphChartLineText43={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "$2,412,989"
                  : undefined
              }
              graphChartLineText44={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "Capital Outlay"
                  : undefined
              }
              graphChartLineText45={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "$3,635,922"
                  : undefined
              }
              graphChartLineText46={screenWidth >= 1025 ? "$ 65,252,023" : undefined}
              graphChartLineText47={screenWidth >= 1025 ? "$45,219,314" : undefined}
              graphChartLineText48={screenWidth >= 1025 ? "$5,071,978" : undefined}
              graphChartLineText49={screenWidth >= 1025 ? "State and Other Grants" : undefined}
              graphChartLineText50={screenWidth >= 1025 ? "$76,623,547" : undefined}
              graphChartLineText51={screenWidth >= 1025 ? "$2,412,989" : undefined}
              graphChartLineText52={screenWidth >= 1025 ? "Other Revenue" : undefined}
              graphChartLineText53={screenWidth >= 1025 ? "$95,579,663" : undefined}
              graphChartLineText54={screenWidth >= 1025 ? "$55,942,481" : undefined}
              graphChartLineText55={screenWidth >= 1025 ? "$28,895,623" : undefined}
              graphChartLineText56={screenWidth >= 1025 ? "$3,635,922" : undefined}
              graphChartLineText57={screenWidth >= 1025 ? "Capital Outlay" : undefined}
              graphChartLineText8={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "Permit-Related Revenue"
                  : undefined
              }
              graphChartLineText9={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "$65,252,023"
                  : undefined
              }
              graphChartTotalGraphChartLineColumns2={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "two"
                  : undefined
              }
              graphChartTotalGraphChartLineColumns3={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "two"
                  : undefined
              }
              graphChartTotalGraphChartLineColumns4={screenWidth >= 1025 ? "two" : undefined}
              graphChartTotalGraphChartLineColumns5={screenWidth >= 1025 ? "two" : undefined}
              graphChartTotalGraphChartLineDivClassNameOverride={`${screenWidth < 641 && "class-74"} ${
                ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && "class-64"
              }`}
              graphChartTotalGraphChartLineFrameClassName1={`${screenWidth < 641 && "class-74"} ${
                ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && "class-64"
              }`}
              graphChartTotalGraphChartLineFrameClassName2={`${screenWidth >= 1025 && "class-70"}`}
              graphChartTotalGraphChartLineFrameWrapperClassName={`${screenWidth >= 1025 && "class-73"}`}
              graphChartTotalGraphChartLineFrameWrapperClassNameOverride={`${screenWidth >= 1025 && "class-81"}`}
              graphChartTotalGraphChartLineSectionTitleClassName1={`${screenWidth < 641 && "class-72"} ${
                ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && "class-64"
              }`}
              graphChartTotalGraphChartLineSectionTitleClassName2={`${screenWidth < 641 && "class-72"} ${
                ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && "class-64"
              }`}
              graphChartTotalGraphChartLineSectionTitleClassName3={`${screenWidth >= 1025 && "class-71"}`}
              graphChartTotalGraphChartLineSectionTitleClassName4={`${screenWidth >= 1025 && "class-71"}`}
              graphChartTotalGraphChartLineSectionTitleWrapperClassName={`${screenWidth >= 1025 && "class-73"}`}
              graphChartTotalGraphChartLineText3={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "$194,579,851"
                  : undefined
              }
              graphChartTotalGraphChartLineText4={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "Total"
                  : undefined
              }
              graphChartTotalGraphChartLineText5={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "$184,053,689"
                  : undefined
              }
              graphChartTotalGraphChartLineText6={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "Total"
                  : undefined
              }
              graphChartTotalGraphChartLineText7={screenWidth >= 1025 ? "$194,579,851" : undefined}
              graphChartTotalGraphChartLineText8={screenWidth >= 1025 ? "$184,053,689" : undefined}
              graphChartTotalLines2={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "one"
                  : undefined
              }
              graphChartTotalLines3={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "one"
                  : undefined
              }
              graphChartTotalLines4={screenWidth >= 1025 ? "one" : undefined}
              graphChartTotalLines5={screenWidth >= 1025 ? "one" : undefined}
              groupClassName1={`${screenWidth >= 1025 && "class-82"}`}
              groupClassName2={`${screenWidth >= 1025 && "class-82"}`}
              groupClassNameOverride={`${
                ((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) &&
                "class-83"
              }`}
              hasDiv={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              hasFrame1={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              hasFrame3={screenWidth >= 1025 ? false : undefined}
              hasFrame4={screenWidth >= 1025 ? false : undefined}
              hasFrame5={screenWidth >= 1025 ? false : undefined}
              hasFrame6={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              hasFrame7={screenWidth >= 1025 ? false : undefined}
              hasGroup1={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              hasGroup3={screenWidth >= 1025 ? false : undefined}
              hasGroup4={screenWidth >= 1025 ? false : undefined}
              hasGroupWrapper={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              hasSectionTitleWrapper={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              quantity="two"
              resolution={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? "mobile"
                  : screenWidth >= 1025
                  ? "desktop"
                  : undefined
              }
              sectionTitleClassName3={`${screenWidth >= 1025 && "class-80"}`}
              sectionTitleClassName4={`${screenWidth >= 1025 && "class-80"}`}
              sectionTitleWrapperClassName={`${
                ((screenWidth >= 641 && screenWidth < 769) ||
                  (screenWidth >= 769 && screenWidth < 1025) ||
                  screenWidth < 641) &&
                "class-83"
              }`}
              text="Expenditures"
              visible10={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible11={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible12={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible13={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible14={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible16={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible18={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible19={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible20={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible21={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible22={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible23={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
              visible32={screenWidth >= 1025 ? false : undefined}
              visible35={screenWidth >= 1025 ? false : undefined}
              visible36={screenWidth >= 1025 ? false : undefined}
              visible37={screenWidth >= 1025 ? false : undefined}
              visible38={screenWidth >= 1025 ? false : undefined}
              visible39={screenWidth >= 1025 ? false : undefined}
              visible41={screenWidth >= 1025 ? false : undefined}
              visible43={screenWidth >= 1025 ? false : undefined}
              visible44={screenWidth >= 1025 ? false : undefined}
              visible45={screenWidth >= 1025 ? false : undefined}
              visible46={screenWidth >= 1025 ? false : undefined}
              visible47={screenWidth >= 1025 ? false : undefined}
              visible48={screenWidth >= 1025 ? false : undefined}
              visible7={
                (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
                  ? false
                  : undefined
              }
            />
          }
          resolution={
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "mobile"
              : screenWidth >= 1025
              ? "desktop"
              : undefined
          }
          subTopicTitleResolution={
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
              ? "tablet"
              : undefined
          }
          subTopicTitleText1={
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "2023 AIR DISTRICT FINANCIAL REPORT"
              : undefined
          }
          subTopicTitleText2={screenWidth >= 1025 ? "2023 AIR DISTRICT FINANCIAL REPORT" : undefined}
          subTopicTitleType={
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
              ? "default"
              : undefined
          }
          subTopicTitleTypeDefaultClassName={`${
            ((screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641) &&
            "instance-node-11"
          }`}
          title={
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "with-graph"
              : screenWidth >= 1025
              ? "left"
              : undefined
          }
        />
      </div>
      <div
        className="section-graph-instance-wrapper"
        style={{
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "100px 0px 0px"
              : screenWidth >= 1025
              ? "160px 0px 0px"
              : undefined,
        }}
      >
        <SectionGraph
          chartCaption="z"
          className={`${
            ((screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641) &&
            "class-85"
          } ${screenWidth >= 1025 && "class-86"}`}
          graphs="zero"
          resolution={
            screenWidth < 641
              ? "mobile"
              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
              ? "tablet"
              : screenWidth >= 1025
              ? "desktop"
              : undefined
          }
          subTopicTitleText="LET&#39;S CONNECT"
          subTopicTitleTypeDefaultClassNameOverride={`${
            ((screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641) &&
            "instance-node-11"
          } ${screenWidth >= 1025 && "class-84"}`}
          title="top"
        />
      </div>
      <div
        className="section-graph-21"
        style={{
          flexDirection:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "column"
              : undefined,
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "60px 24px"
              : screenWidth >= 1025
              ? "0px 30px 160px 100px"
              : undefined,
        }}
      >
        {((screenWidth >= 641 && screenWidth < 769) ||
          (screenWidth >= 769 && screenWidth < 1025) ||
          screenWidth < 641) && (
          <>
            <SubTopicTitle
              className="instance-node-11"
              resolution={
                screenWidth < 641
                  ? "mobile"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "tablet"
                  : undefined
              }
              text="EXECUTIVE MANAGEMENT"
              type={
                screenWidth < 641
                  ? "left"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "default"
                  : undefined
              }
            />
            <div className="contact-info">
              <div className="frame-104">
                <div className="contact-info-line">
                  <div className="section-title-149">PHILIP M. FINE</div>
                  <p className="section-title-150">Executive Officer/Air Pollution Control Officer</p>
                </div>
                <div className="contact-info-line">
                  <div className="section-title-149">ALEXANDER CROCKETT</div>
                  <div className="section-title-150">General Counsel</div>
                </div>
                <div className="contact-info-line">
                  <div className="section-title-149">MEREDITH BAUER</div>
                  <p className="section-title-150">Deputy Executive Officer of Engineering and Compliance</p>
                </div>
                <div className="contact-info-line">
                  <div className="section-title-149">HYACINTH HINOJOSA</div>
                  <p className="section-title-150">Deputy Executive Officer of Finance and Administration</p>
                </div>
                <div className="contact-info-line">
                  <div className="section-title-149">GREG NUDD</div>
                  <p className="section-title-150">Deputy Executive Officer of Science and Policy</p>
                </div>
                <div className="contact-info-line">
                  <div className="section-title-149">VIET TRAN</div>
                  <p className="section-title-150">Deputy Executive Officer of Public Affairs</p>
                </div>
                <div className="contact-info-line">
                  <div className="section-title-149">VANESSA JOHNSON</div>
                  <div className="section-title-150">Manager, Executive Operations</div>
                </div>
                <div className="div-7">
                  <div className="section-title-149">ALAN ABBS</div>
                  <div className="section-title-150">Legislative Officer</div>
                </div>
              </div>
            </div>
          </>
        )}

        {screenWidth >= 1025 && (
          <>
            <div className="frame-86">
              <SubTopicTitle
                className="instance-node-12"
                resolution="desktop"
                text="EXECUTIVE MANAGEMENT"
                type="left"
              />
            </div>
            <div className="contact-info-2">
              <div className="frame-105">
                <div className="contact-info-line-2">
                  <div className="section-title-151">PHILIP M. FINE</div>
                  <p className="section-title-152">Executive Officer/Air Pollution Control Officer</p>
                </div>
                <div className="contact-info-line-2">
                  <div className="section-title-151">ALEXANDER CROCKETT</div>
                  <div className="section-title-152">General Counsel</div>
                </div>
                <div className="contact-info-line-2">
                  <div className="section-title-151">MEREDITH BAUER</div>
                  <p className="section-title-152">Deputy Executive Officer of Engineering and Compliance</p>
                </div>
                <div className="contact-info-line-2">
                  <div className="section-title-151">HYACINTH HINOJOSA</div>
                  <p className="section-title-152">Deputy Executive Officer of Finance and Administration</p>
                </div>
                <div className="contact-info-line-2">
                  <div className="section-title-151">GREG NUDD</div>
                  <p className="section-title-152">Deputy Executive Officer of Science and Policy</p>
                </div>
                <div className="contact-info-line-2">
                  <div className="section-title-151">VIET TRAN</div>
                  <p className="section-title-152">Deputy Executive Officer of Public Affairs</p>
                </div>
                <div className="contact-info-line-2">
                  <div className="section-title-151">VANESSA JOHNSON</div>
                  <div className="section-title-152">Manager, Executive Operations</div>
                </div>
                <div className="div-8">
                  <div className="section-title-151">ALAN ABBS</div>
                  <div className="section-title-152">Legislative Officer</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className="section-graph-22"
        style={{
          flexDirection:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "column"
              : undefined,
          justifyContent: screenWidth >= 1025 ? "flex-end" : undefined,
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "0px 24px 60px"
              : screenWidth >= 1025
              ? "0px 30px 160px 100px"
              : undefined,
        }}
      >
        {((screenWidth >= 641 && screenWidth < 769) ||
          (screenWidth >= 769 && screenWidth < 1025) ||
          screenWidth < 641) && (
          <>
            <SubTopicTitle
              className="instance-node-11"
              resolution={
                screenWidth < 641
                  ? "mobile"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "tablet"
                  : undefined
              }
              text="DIVISION DIRECTORS AND OFFICERS"
              type={
                screenWidth < 641
                  ? "left"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "default"
                  : undefined
              }
            />
            <div className="contact-info-3">
              <div className="frame-104">
                <div className="contact-info-line-3">
                  <div className="section-title-153">SONG BAI</div>
                  <div className="section-title-154">Assessment, Inventory and Modeling</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">LISA BAKER</div>
                  <div className="section-title-154">Human Resources</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">RANYEE CHIANG</div>
                  <div className="section-title-154">Meteorology and Measurements</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">JOHN CHILADAKIS</div>
                  <div className="section-title-154">Chief Technology Officer</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">JUDITH CUTINO</div>
                  <div className="section-title-154">Health Officer</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">LISA F. FASANO</div>
                  <div className="section-title-154">External Affairs</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">ANTHONY FOURNIER</div>
                  <div className="section-title-154">Technology Implementation</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">WENDY GOODFRIEND</div>
                  <div className="section-title-154">Planning and Climate Protection</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">JEFFREY GOVE</div>
                  <div className="section-title-154">Compliance and Enforcement</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">PAMELA LEONG</div>
                  <div className="section-title-154">Engineering</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">MARICELA MARTINEZ</div>
                  <div className="section-title-154">Administrative Resources</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">SUMA PEESAPATI</div>
                  <p className="section-title-154">Environmental Justice and Community Engagement</p>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">PATRICIA ROMAN</div>
                  <div className="section-title-154">My Air Online</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">KRISTINE ROSELIUS</div>
                  <div className="section-title-154">Communications</div>
                </div>
                <div className="contact-info-line-3">
                  <div className="section-title-153">KAREN SCHKOLNICK</div>
                  <div className="section-title-154">Strategic Incentives</div>
                </div>
                <div className="div-7">
                  <div className="section-title-153">ELIZABETH YURA</div>
                  <div className="section-title-154">Rules and Strategic Policy</div>
                </div>
              </div>
            </div>
          </>
        )}

        {screenWidth >= 1025 && (
          <>
            <div className="sub-topic-title-wrapper">
              <SubTopicTitle
                className="instance-node-12"
                resolution="desktop"
                text="DIVISION DIRECTORS AND OFFICERS"
                type="left"
              />
            </div>
            <div className="contact-info-4">
              <div className="frame-105">
                <div className="contact-info-line-4">
                  <div className="section-title-155">SONG BAI</div>
                  <div className="section-title-156">Assessment, Inventory and Modeling</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">LISA BAKER</div>
                  <div className="section-title-156">Human Resources</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">RANYEE CHIANG</div>
                  <div className="section-title-156">Meteorology and Measurements</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">JOHN CHILADAKIS</div>
                  <div className="section-title-156">Chief Technology Officer</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">JUDITH CUTINO</div>
                  <div className="section-title-156">Health Officer</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">LISA F. FASANO</div>
                  <div className="section-title-156">External Affairs</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">ANTHONY FOURNIER</div>
                  <div className="section-title-156">Technology Implementation</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">WENDY GOODFRIEND</div>
                  <div className="section-title-156">Planning and Climate Protection</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">JEFFREY GOVE</div>
                  <div className="section-title-156">Compliance and Enforcement</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">PAMELA LEONG</div>
                  <div className="section-title-156">Engineering</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">MARICELA MARTINEZ</div>
                  <div className="section-title-156">Administrative Resources</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">SUMA PEESAPATI</div>
                  <p className="section-title-156">Environmental Justice and Community Engagement</p>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">PATRICIA ROMAN</div>
                  <div className="section-title-156">My Air Online</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">KRISTINE ROSELIUS</div>
                  <div className="section-title-156">Communications</div>
                </div>
                <div className="contact-info-line-4">
                  <div className="section-title-155">KAREN SCHKOLNICK</div>
                  <div className="section-title-156">Strategic Incentives</div>
                </div>
                <div className="div-8">
                  <div className="section-title-155">ELIZABETH YURA</div>
                  <div className="section-title-156">Rules and Strategic Policy</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className="frame-106"
        style={{
          backgroundImage:
            screenWidth < 641
              ? "url(/img/frame-19853-1.png)"
              : screenWidth >= 641 && screenWidth < 769
              ? "url(/img/frame-19853-3.png)"
              : screenWidth >= 769 && screenWidth < 1025
              ? "url(/img/frame-19853-2.png)"
              : screenWidth >= 1025
              ? "url(/img/frame-19853.png)"
              : undefined,
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "60px 24px 0px"
              : screenWidth >= 1025
              ? "160px 0px 0px"
              : undefined,
        }}
      >
        <div
          className="section-graph-23"
          style={{
            flexDirection:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "column"
                : undefined,
            justifyContent: screenWidth >= 1025 ? "flex-end" : undefined,
            padding:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "0px 0px 100px"
                : screenWidth >= 1025
                ? "0px 30px 160px 100px"
                : undefined,
          }}
        >
          {((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) && (
            <>
              <SubTopicTitle
                className="instance-node-11"
                resolution={
                  screenWidth < 641
                    ? "mobile"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "tablet"
                    : undefined
                }
                text="CURRENT BOARD MEMBERS"
                type={
                  screenWidth < 641
                    ? "left"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "default"
                    : undefined
                }
              />
              <div className="contact-info">
                <div className="frame-104">
                  <div className="contact-info-line">
                    <div className="section-title-149">ALAMEDA</div>
                    <div className="section-title-150">John J. Bauters</div>
                    <div className="section-title-150">Juan Gonzalez</div>
                    <div className="section-title-150">David Haubert</div>
                    <div className="section-title-150">Nate Miley</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">CONTRA COSTA</div>
                    <div className="section-title-150">Ken Carlson</div>
                    <div className="section-title-150">John Gioia</div>
                    <div className="section-title-150">David E. Hudson</div>
                    <div className="section-title-150">Mark Ross</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">MARIN</div>
                    <div className="section-title-150">Katie Rice</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">NAPA</div>
                    <div className="section-title-150">Joelle Gallagher</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">SAN FRANCISCO</div>
                    <div className="section-title-150">Tyrone Jue (Mayor’s Appointee)</div>
                    <div className="section-title-150">Shamann Walton</div>
                    <div className="section-title-150">One seat currently vacant</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">SAN MATEO</div>
                    <div className="section-title-150">Noelia Corzo</div>
                    <div className="section-title-150">Davina Hurt, Chair</div>
                    <div className="section-title-150">Ray Mueller</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">SANTA CLARA</div>
                    <div className="section-title-150">Margaret Abe-Koga</div>
                    <div className="section-title-150">Otto Lee</div>
                    <div className="section-title-150">Sergio Lopez</div>
                    <div className="section-title-150">Vicki Veenker</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">SOLANO</div>
                    <div className="section-title-150">Erin Hannigan</div>
                    <div className="section-title-150">Steve Young</div>
                  </div>
                  <div className="div-7">
                    <div className="section-title-149">SONOMA</div>
                    <div className="section-title-150">Brian Barnacle</div>
                    <div className="section-title-150">Lynda Hopkins, Vice Chair</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {screenWidth >= 1025 && (
            <>
              <div className="frame-86">
                <SubTopicTitle
                  className="instance-node-12"
                  resolution="desktop"
                  text="CURRENT BOARD MEMBERS"
                  type="left"
                />
              </div>
              <div className="contact-info-2">
                <div className="frame-105">
                  <div className="contact-info-line-2">
                    <div className="section-title-151">ALAMEDA</div>
                    <div className="section-title-152">John. J. Bauters</div>
                    <div className="section-title-152">Juan Gonzalez</div>
                    <div className="section-title-152">David Haubert</div>
                    <div className="section-title-152">Nate Miley</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">CONTRA COSTA</div>
                    <div className="section-title-152">Ken Carlson</div>
                    <div className="section-title-152">John Gioia</div>
                    <div className="section-title-152">David E. Hudson</div>
                    <div className="section-title-152">Mark Ross</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">MARIN</div>
                    <div className="section-title-152">Katie Rice</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">NAPA</div>
                    <div className="section-title-152">Joelle Gallagher</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">SAN FRANCISCO</div>
                    <div className="section-title-152">Tyrone Jue (Mayor’s Appointee)</div>
                    <div className="section-title-152">Shamann Walton</div>
                    <div className="section-title-152">One seat currently vacant</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">SAN MATEO</div>
                    <div className="section-title-152">Noelia Corzo</div>
                    <div className="section-title-152">Davina Hurt, Chair</div>
                    <div className="section-title-152">Ray Mueller</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">SANTA CLARA</div>
                    <div className="section-title-152">Margaret Abe-Koga</div>
                    <div className="section-title-152">Otto Lee</div>
                    <div className="section-title-152">Sergio Lopez</div>
                    <div className="section-title-152">Vicki Veenker</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">SOLANO</div>
                    <div className="section-title-152">Erin Hannigan</div>
                    <div className="section-title-152">Steve Young</div>
                  </div>
                  <div className="div-8">
                    <div className="section-title-151">SONOMA</div>
                    <div className="section-title-152">Brian Barnacle</div>
                    <div className="section-title-152">Lynda Hopkins, Vice Chair</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div
          className="section-graph-24"
          style={{
            flexDirection:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "column"
                : undefined,
            padding:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "0px 0px 60px"
                : screenWidth >= 1025
                ? "0px 30px 160px 100px"
                : undefined,
          }}
        >
          {((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) && (
            <>
              <SubTopicTitle
                className="instance-node-11"
                resolution={
                  screenWidth < 641
                    ? "mobile"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "tablet"
                    : undefined
                }
                text="CONTACT INFORMATION"
                type={
                  screenWidth < 641
                    ? "left"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "default"
                    : undefined
                }
              />
              <div className="contact-info">
                <div className="frame-104">
                  <div className="contact-info-line">
                    <div className="section-title-149">AIR POLLUTION COMPLAINTS</div>
                    <div className="section-title-150">800.334.ODOR (6367)</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">AIR QUALITY INFO</div>
                    <div className="section-title-150">800.HELP.AIR (435.7247)</div>
                    <div className="section-title-150">Daily Air Quality Forecasts,</div>
                    <div className="section-title-150">Spare the Air Alerts,</div>
                    <div className="section-title-150">Agricultural Burn Days</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">COMPLIANCE ASSISTANCE</div>
                    <div className="section-title-150">415.749.4999</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">ENGINEERING SERVICES</div>
                    <div className="section-title-150">415.749.4990</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">GENERAL BUSINESS</div>
                    <div className="section-title-150">415.749.5000</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">PUBLIC INFORMATION</div>
                    <div className="section-title-150">415.749.4900</div>
                  </div>
                  <div className="contact-info-line">
                    <div className="section-title-149">REPORT SMOKING VEHICLES</div>
                    <div className="section-title-150">800.EXHAUST (394.2878)</div>
                  </div>
                  <div className="div-7">
                    <div className="section-title-149">WOOD BURNING BAN ALERTS</div>
                    <div className="section-title-150">877.4NO.BURN (466.2876)</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {screenWidth >= 1025 && (
            <>
              <div className="frame-86">
                <SubTopicTitle
                  className="instance-node-12"
                  resolution="desktop"
                  text="CONTACT INFORMATION"
                  type="left"
                />
              </div>
              <div className="contact-info-2">
                <div className="frame-105">
                  <div className="contact-info-line-2">
                    <div className="section-title-151">AIR POLLUTION COMPLAINTS</div>
                    <div className="section-title-152">800.334.ODOR (6367)</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">AIR QUALITY INFO</div>
                    <div className="section-title-152">800.HELP.AIR (435.7247)</div>
                    <div className="section-title-152">Daily Air Quality Forecasts,</div>
                    <div className="section-title-152">Spare the Air Alerts,</div>
                    <div className="section-title-152">Agricultural Burn Days</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">COMPLIANCE ASSISTANCE</div>
                    <div className="section-title-152">415.749.4999</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">ENGINEERING SERVICES</div>
                    <div className="section-title-152">415.749.4990</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">GENERAL BUSINESS</div>
                    <div className="section-title-152">415.749.5000</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">PUBLIC INFORMATION</div>
                    <div className="section-title-152">415.749.4900</div>
                  </div>
                  <div className="contact-info-line-2">
                    <div className="section-title-151">REPORT SMOKING VEHICLES</div>
                    <div className="section-title-152">800.EXHAUST (394.2878)</div>
                  </div>
                  <div className="div-8">
                    <div className="section-title-151">WOOD BURNING BAN ALERTS</div>
                    <div className="section-title-152">877.4NO.BURN (466.2876)</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className="frame-107"
        style={{
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "60px 24px 0px"
              : screenWidth >= 1025
              ? "160px 0px 0px"
              : undefined,
        }}
      >
        <div
          className="section-graph-25"
          style={{
            backgroundColor: screenWidth >= 1025 ? "var(--white)" : undefined,
            flexDirection:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "column"
                : undefined,
            padding:
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641
                ? "0px 0px 60px"
                : screenWidth >= 1025
                ? "0px 30px 160px 100px"
                : undefined,
          }}
        >
          {((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) && (
            <>
              <SubTopicTitle
                className="instance-node-11"
                resolution={
                  screenWidth < 641
                    ? "mobile"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "tablet"
                    : undefined
                }
                text="SOCIAL + WEBSITES"
                type={
                  screenWidth < 641
                    ? "left"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "default"
                    : undefined
                }
              />
              <div className="socials">
                <div className="frame-108">
                  <div className="frame-109">
                    <div className="group-36">
                      <div className="section-title-157">Bay Area Air District</div>
                    </div>
                  </div>
                  <div className="group-37">
                    <div
                      className="group-38"
                      style={{
                        width:
                          screenWidth < 641
                            ? "226px"
                            : screenWidth >= 641 && screenWidth < 769
                            ? "547px"
                            : screenWidth >= 769 && screenWidth < 1025
                            ? "675px"
                            : undefined,
                      }}
                    >
                      <div
                        className="section-title-158"
                        style={{
                          width:
                            screenWidth < 641
                              ? "224px"
                              : screenWidth >= 641 && screenWidth < 769
                              ? "545px"
                              : screenWidth >= 769 && screenWidth < 1025
                              ? "673px"
                              : undefined,
                        }}
                      >
                        baaqmd.gov
                      </div>
                    </div>
                  </div>
                  <div className="div-7">
                    <div className="frame-110">
                      <div className="div-wrapper-2">
                        <div className="img-wrapper">
                          <img className="XMLID" alt="Xmlid" src="/img/xmlid-26-6.png" />
                        </div>
                      </div>
                      <div className="section-title-159">@BayAreaAirDistrict</div>
                    </div>
                    <div className="div-7">
                      <div className="frame-110">
                        <div className="twitter">
                          <div className="img-wrapper">
                            <img className="icone" alt="Icone" src="/img/icone-6.png" />
                          </div>
                        </div>
                        <div className="section-title-160">@AirDistrict</div>
                      </div>
                    </div>
                    <div className="div-7">
                      <div className="frame-110">
                        <div className="div-wrapper-2">
                          <div className="img-wrapper">
                            <img className="group-39" alt="Group" src="/img/group-52-12.png" />
                          </div>
                        </div>
                        <div className="section-title-161">@BayAreaAirDistrict</div>
                      </div>
                    </div>
                    <div className="div-7">
                      <div className="frame-110">
                        <div className="div-wrapper-2">
                          <div className="img-wrapper">
                            <img className="group-40" alt="Group" src="/img/group-52-14.png" />
                          </div>
                        </div>
                        <div className="section-title-162">@BayAreaAirDistrict</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="group-41"
                    style={{
                      height:
                        screenWidth < 641
                          ? "52px"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "26px"
                          : undefined,
                    }}
                  >
                    <div
                      className="group-42"
                      style={{
                        height:
                          screenWidth < 641
                            ? "52px"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "26px"
                            : undefined,
                        width:
                          screenWidth < 641
                            ? "226px"
                            : screenWidth >= 641 && screenWidth < 769
                            ? "547px"
                            : screenWidth >= 769 && screenWidth < 1025
                            ? "675px"
                            : undefined,
                      }}
                    >
                      <p
                        className="section-title-163"
                        style={{
                          width:
                            screenWidth < 641
                              ? "224px"
                              : screenWidth >= 641 && screenWidth < 769
                              ? "545px"
                              : screenWidth >= 769 && screenWidth < 1025
                              ? "673px"
                              : undefined,
                        }}
                      >
                        Find us on Nextdoor and LinkedIn
                      </p>
                    </div>
                  </div>
                </div>
                <div className="frame-111">
                  <div className="frame-109">
                    <div className="group-43">
                      <div className="section-title-157">Spare the Air</div>
                    </div>
                  </div>
                  <div
                    className="group-44"
                    style={{
                      marginRight:
                        screenWidth < 641
                          ? "-473.54px"
                          : screenWidth >= 641 && screenWidth < 769
                          ? "-152.54px"
                          : screenWidth >= 769 && screenWidth < 1025
                          ? "-24.54px"
                          : undefined,
                    }}
                  >
                    <div className="group-45">
                      <div className="section-title-164">sparetheair.org</div>
                    </div>
                  </div>
                  <div className="div-7">
                    <div className="frame-110">
                      <div className="div-wrapper-2">
                        <div className="img-wrapper">
                          <img className="XMLID" alt="Xmlid" src="/img/xmlid-26-6.png" />
                        </div>
                      </div>
                      <div className="section-title-165">@SpareTheAir</div>
                    </div>
                    <div className="div-7">
                      <div className="frame-110">
                        <div className="twitter">
                          <div className="img-wrapper">
                            <img className="icone" alt="Icone" src="/img/icone-6.png" />
                          </div>
                        </div>
                        <div className="section-title-166">@SpareTheAir</div>
                      </div>
                    </div>
                    <div className="div-7">
                      <div className="frame-110">
                        <div className="div-wrapper-2">
                          <div className="img-wrapper">
                            <img className="group-39" alt="Group" src="/img/group-52-12.png" />
                          </div>
                        </div>
                        <div className="section-title-167">@SpareTheAir</div>
                      </div>
                    </div>
                    <div className="div-7">
                      <div className="frame-110">
                        <div
                          className="youtube"
                          style={{
                            marginBottom:
                              (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                                ? "-1.00px"
                                : undefined,
                            marginTop:
                              (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                                ? "-1.00px"
                                : undefined,
                          }}
                        >
                          <div className="img-wrapper">
                            <img className="group-40" alt="Group" src="/img/group-52-14.png" />
                          </div>
                        </div>
                        <div
                          className="section-title-168"
                          style={{
                            marginTop: screenWidth < 641 ? "-1.00px" : undefined,
                          }}
                        >
                          @SpareTheAirBayArea
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {screenWidth >= 1025 && (
            <>
              <div className="frame-86">
                <SubTopicTitle className="instance-node-12" resolution="desktop" text="SOCIAL + WEBSITES" type="left" />
              </div>
              <div className="socials-2">
                <div className="frame-112">
                  <div className="frame-113">
                    <div className="group-46">
                      <div className="section-title-169">Bay Area Air District</div>
                    </div>
                  </div>
                  <div className="group-47">
                    <div className="group-48">
                      <div className="section-title-170">baaqmd.gov</div>
                    </div>
                  </div>
                  <div className="div-8">
                    <div className="frame-110">
                      <div className="facebook">
                        <div className="img-wrapper">
                          <img className="XMLID" alt="Xmlid" src="/img/xmlid-26-4.png" />
                        </div>
                      </div>
                      <div className="section-title-171">@BayAreaAirDistrict</div>
                    </div>
                    <div className="div-8">
                      <div className="frame-110">
                        <div className="icon-twitter-wrapper">
                          <div className="img-wrapper">
                            <img className="icone" alt="Icone" src="/img/icone-4.png" />
                          </div>
                        </div>
                        <div className="section-title-171">@AirDistrict</div>
                      </div>
                    </div>
                    <div className="div-8">
                      <div className="frame-110">
                        <div className="insta">
                          <div className="img-wrapper">
                            <img className="group-39" alt="Group" src="/img/group-52-4.png" />
                          </div>
                        </div>
                        <div className="section-title-171">@BayAreaAirDistrict</div>
                      </div>
                    </div>
                    <div className="div-8">
                      <div className="frame-110">
                        <div className="icon-instagram-wrapper">
                          <div className="img-wrapper">
                            <img className="group-40" alt="Group" src="/img/group-52-10.png" />
                          </div>
                        </div>
                        <div className="section-title-171">@BayAreaAirDistrict</div>
                      </div>
                    </div>
                  </div>
                  <div className="group-47">
                    <div className="group-48">
                      <p className="section-title-172">Find us on Nextdoor and LinkedIn</p>
                    </div>
                  </div>
                </div>
                <div className="frame-105">
                  <div className="frame-113">
                    <div className="group-49">
                      <div className="section-title-169">Spare the Air</div>
                    </div>
                  </div>
                  <div className="group-47">
                    <div className="group-48">
                      <div className="section-title-170">sparetheair.org</div>
                    </div>
                  </div>
                  <div className="div-8">
                    <div className="frame-110">
                      <div className="icon-facebook-wrapper">
                        <div className="img-wrapper">
                          <img className="XMLID" alt="Xmlid" src="/img/xmlid-26-4.png" />
                        </div>
                      </div>
                      <div className="section-title-171">@SpareTheAir</div>
                    </div>
                    <div className="div-8">
                      <div className="frame-110">
                        <div className="icon-twitter-wrapper">
                          <div className="img-wrapper">
                            <img className="icone" alt="Icone" src="/img/icone-4.png" />
                          </div>
                        </div>
                        <div className="section-title-171">@SpareTheAir</div>
                      </div>
                    </div>
                    <div className="div-8">
                      <div className="frame-110">
                        <div className="insta-2">
                          <div className="img-wrapper">
                            <img className="group-39" alt="Group" src="/img/group-52-4.png" />
                          </div>
                        </div>
                        <div className="section-title-171">@SpareTheAir</div>
                      </div>
                    </div>
                    <div className="div-8">
                      <div className="frame-110">
                        <div className="youtube-2">
                          <div className="img-wrapper">
                            <img className="group-40" alt="Group" src="/img/group-52-10.png" />
                          </div>
                        </div>
                        <div className="section-title-171">@SpareTheAirBayArea</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <InternalMenu />
    </div>
  );
};

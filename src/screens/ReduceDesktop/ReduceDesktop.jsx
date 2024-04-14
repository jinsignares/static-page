import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { ArrowsCarrousel } from "../../components/ArrowsCarrousel";
import { ElementImage } from "../../components/ElementImage";
import { GraphChart } from "../../components/GraphChart";
import { GraphChartLine } from "../../components/GraphChartLine";
import { GraphChartTotal } from "../../components/GraphChartTotal";
import { HightlightBlurb } from "../../components/HightlightBlurb";
import { InternalMenu } from "../../components/InternalMenu";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { SectionGraph } from "../../components/SectionGraph";
import { Stat } from "../../components/Stat";
import { StatSection } from "../../components/StatSection";
import { SubTopicTitle } from "../../components/SubTopicTitle";
import { TitleSection } from "../../components/TitleSection";
import { Topics } from "../../components/Topics";
import { TopicsSection } from "../../components/TopicsSection";
import "./style.css";

export const ReduceDesktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="REDUCE-DESKTOP"
      style={{
        backgroundColor:
          (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
            ? "var(--white)"
            : screenWidth >= 1025
            ? "var(--neutrascinza)"
            : undefined,
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
        overflow: screenWidth >= 1025 ? "hidden" : undefined,
      }}
    >
      {((screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025) ||
        screenWidth < 641) && (
        <TitleSection
          blockOfTextElementAnnualReportClassName="title-section-29"
          blockOfTextResolutionMobileClassName="title-section-32"
          blockOfTextSectionTitleClassName={`${screenWidth < 641 && "class-97"} ${
            ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && "class-98"
          }`}
          blockOfTextSubtitle="yes"
          blockOfTextText="REDUCE"
          blockOfTextText1="HOW DO WE REDUCE EMISSIONS AND PROTECT COMMUNITIES AND THE CLIMATE?"
          className="title-section-30"
          frameClassName="title-section-31"
          layout="stacked"
          resolution={
            screenWidth < 641
              ? "mobile"
              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
              ? "tablet"
              : undefined
          }
        />
      )}

      {screenWidth >= 1025 && (
        <TitleSection
          blockOfTextResolutionMobileClassNameOverride="title-section-34"
          blockOfTextSubtitle1="two-lines"
          blockOfTextText2="REDUCE"
          blockOfTextText5="HOW DO WE REDUCE EMISSIONS AND PROTECT COMMUNITIES AND THE CLIMATE?"
          blockOfTextTextClassName="title-section-33"
          className="title-section-30"
          frameClassNameOverride="title-section-35"
          layout="img-r"
          resolution="desktop"
        />
      )}

      <div
        className="opening-section-10"
        style={{
          padding:
            screenWidth < 641
              ? "100px 24px 24px"
              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
              ? "100px 0px 24px 60px"
              : screenWidth >= 1025
              ? "160px 0px 80px 100px"
              : undefined,
        }}
      >
        <div
          className="opening-text-7"
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
            className="frame-124"
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
              className="AB-community-8"
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
              CLIMATE TECH FINANCE
            </div>
            <p
              className="we-continued-to-work-9"
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
                This year, in partnership with IBank, our Climate Tech Finance program took significant steps in{" "}
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
                endorsing sustainable technological advancements.
              </span>
            </p>
          </div>
        </div>
      </div>
      {screenWidth >= 1025 && (
        <TopicsSection
          alignment="center"
          className="topics-section-16"
          headline="medium"
          resolution="desktop"
          title={false}
        />
      )}

      <div
        className="topics-section-17"
        style={{
          padding:
            screenWidth < 641
              ? "40px 24px"
              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
              ? "40px 60px"
              : screenWidth >= 1025
              ? "0px 0px 60px 240px"
              : undefined,
          zIndex:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "20"
              : screenWidth >= 1025
              ? "19"
              : undefined,
        }}
      >
        <div
          className="topics-18"
          style={{
            gap:
              screenWidth >= 1025 || screenWidth < 641
                ? "40px"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "36px"
                : undefined,
          }}
        >
          <div className="div-9">
            {((screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025) ||
              screenWidth < 641) && (
              <p
                className="the-grant-program-11"
                style={{
                  fontSize:
                    screenWidth < 641
                      ? "15px"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "18px"
                      : undefined,
                  letterSpacing:
                    screenWidth < 641
                      ? "0.60px"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "0.72px"
                      : undefined,
                  lineHeight:
                    screenWidth < 641
                      ? "25.5px"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "30.6px"
                      : undefined,
                }}
              >
                <span
                  className="text-wrapper-39"
                  style={{
                    fontFamily:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-family)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-size)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-style)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-weight)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "var(--body-text-mobile-letter-spacing)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-line-height)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-line-height)"
                        : undefined,
                  }}
                >
                  We awarded a loan guarantee to{" "}
                </span>
                <span className="text-wrapper-33">SPARKZ</span>
                <span
                  className="text-wrapper-39"
                  style={{
                    fontFamily:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-family)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-size)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-style)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-weight)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "var(--body-text-mobile-letter-spacing)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-line-height)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-line-height)"
                        : undefined,
                  }}
                >
                  , whose energy storage solution reduces the cost of domestic lithium battery production by eliminating
                  the cobalt and nickel traditionally used in their manufacturing. The pioneering process developed by
                  SPARKZ not only lowers the cost of lithium-ion batteries, it removes environmental concerns around
                  mining cobalt, and reduces constrictions created by a foreign supply chain. Another loan guarantee was
                  accorded to{" "}
                </span>
                <span className="text-wrapper-33">EV Life</span>
                <span
                  className="text-wrapper-39"
                  style={{
                    fontFamily:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-family)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-size)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-style)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-weight)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "var(--body-text-mobile-letter-spacing)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-line-height)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-line-height)"
                        : undefined,
                  }}
                >
                  , a startup whose goal is making electric vehicles (EVs) more accessible by spearheading solutions to
                  eliminate the &#39;green premium&#39; — the additional cost often associated with eco-friendly
                  options. Their efforts are focused on making electric driving an achievable dream for millions
                  deterred by the hefty initial cost of EVs. The most recent loan guarantee we awarded was to{" "}
                </span>
                <span className="text-wrapper-33">One Way Trigger</span>
                <span
                  className="text-wrapper-39"
                  style={{
                    fontFamily:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-family)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-size)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-style)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-weight)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "var(--body-text-mobile-letter-spacing)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-line-height)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-line-height)"
                        : undefined,
                  }}
                >
                  , a company that specializes in pavement preservation techniques as a greener and more cost-effective
                  alternative to traditional road maintenance. This approach not only optimizes taxpayer dollars, but
                  also reduces greenhouse gas emissions, curtails energy demands, and ensures quicker application times.
                </span>
              </p>
            )}

            {screenWidth >= 1025 && (
              <>
                <div className="james-cary-smith-9">SUPPORTING ELECTRIC VEHICLE ADOPTION</div>
                <p className="the-grant-program-12">
                  <span className="text-wrapper-34">
                    We continued our commitment to accelerating electric vehicle adoption in the Bay Area. The{" "}
                  </span>
                  <span className="text-wrapper-35">Charge! Program</span>
                  <span className="text-wrapper-34">
                    {" "}
                    provided nearly $10 million in grants to fund 1,070 charging stations at 100 sites across the Bay
                    Area. The{" "}
                  </span>
                  <span className="text-wrapper-35">Clean Cars for All (CCFA) Program</span>
                  <span className="text-wrapper-34">
                    {" "}
                    helped income-qualified residents replace older vehicles with clean air vehicles or mobility
                    options, such as public transit cards or electric bicycles. CCFA received $31 million in funding
                    from the California Air Resources Board in 2023, bringing the total program funding to $73 million.
                    CCFA has awarded nearly $37 million to over 4,400 residents since the program began in March 2019.
                    The program relaunched in Fall 2023 with increased grant award amounts and will expand zip code
                    eligibility to all Bay Area residents in 2024.
                    <br />
                    <br />
                    Additionally, we were awarded nearly $3 million in funding from the California Energy Commission
                    (CEC) to expand equitable EV charging across the Bay Area. We are working with project partners and
                    community stakeholders to deploy over 200 charging stations in Oakland, Richmond, San Pablo, and
                    Vallejo. These chargers will serve multifamily residents, focusing on affordable and public housing
                    residents. The CEC grant, in conjunction with our Charge! Program and CCFA Program, will help the
                    Bay Area transition to a clean transportation economy and provide long-term economic, environmental,
                    and health benefits.
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      {screenWidth >= 1025 && (
        <>
          <StatSection
            aligment="right"
            className="stat-section-17"
            quantity="three"
            resolution="desktop"
            statSetResolutionDesktopClassNameOverride="instance-node-15"
            statSetStatColor2="blue"
            statSetStatColor3="dark-blue"
            statSetStatColor4="white"
            statSetStatDivClassName="stat-section-18"
            statSetStatDivClassNameOverride="stat-section-18"
            statSetStatSectionTitleClassName="stat-section-21"
            statSetStatSectionTitleClassName1="stat-section-19"
            statSetStatText4="3"
            statSetStatText5="sustainable technological advances were awarded loan guarantees through the Climate Tech Finance Program"
            statSetStatText6="1,800"
            statSetStatText7="electric vehicle charging stations were funded through the Charge! Program"
            statSetStatText8="4,100+"
            statSetStatText9="residents have participated in the Clean Cars For All Program since it began in March 2019"
            statSetStatType1="numbers"
            statSetStatTypeQuoteColorClassNameOverride="stat-section-20"
            title={false}
          />
          <PropertyDefaultWrapper
            className="hightlight-blurb-19"
            hightlightBlurbImage="right"
            hightlightBlurbImageSquare="/img/image-square-3-3.png"
            hightlightBlurbImageSquareClassName="hightlight-blurb-20"
            hightlightBlurbJamesCarySmithClassNameOverride="hightlight-blurb-17"
            hightlightBlurbText="We have included "
            hightlightBlurbText1="an environmental justice chapter "
            hightlightBlurbText2="FIRST-OF-ITS-KIND ENVIRONMENTAL JUSTICE GUIDANCE"
            hightlightBlurbText3="– the first of its kind to be published in California – in its recently-updated CEQA Guidelines. This chapter recognizes the policy imperative to address long-standing and emerging inequities in the siting, design, and development of potential sources of pollution. Apart from mitigating the impacts of pollution, this guidance promotes meaningful participation of community members in all phases of the environmental and land use decision making process."
            hightlightBlurbTopicsClassNameOverride="hightlight-blurb-18"
            hightlightBlurbTypeDefaultImageClassName="instance-node-15"
            property1="default"
          />
        </>
      )}

      <div
        className="frame-125"
        style={{
          backgroundColor:
            screenWidth >= 1025
              ? "var(--lighter-blue)"
              : (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
              ? "var(--white)"
              : undefined,
          padding:
            screenWidth >= 1025
              ? "160px 0px 0px"
              : screenWidth < 641
              ? "40px 24px"
              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
              ? "40px 60px"
              : undefined,
          zIndex:
            screenWidth >= 1025
              ? "16"
              : (screenWidth >= 641 && screenWidth < 769) ||
                (screenWidth >= 769 && screenWidth < 1025) ||
                screenWidth < 641
              ? "19"
              : undefined,
        }}
      >
        {screenWidth >= 1025 && (
          <>
            <div className="topics-section-18">
              <div className="topics-19">
                <div className="div-9">
                  <p className="james-cary-smith-9">US EPA REGIONAL CLIMATE PLANNING GRANT</p>
                  <p className="the-grant-program-12">
                    <span className="text-wrapper-34">
                      We secured a $1 million grant from the US EPA’s Climate Pollution Reduction Grant Program to lead
                      the development of a regional climate action plan that incorporates input from and reflects the
                      priorities of the region’s local governments and communities. The plan will highlight{" "}
                    </span>
                    <span className="text-wrapper-35">
                      priority greenhouse gas (GHG) reduction measures that benefit frontline communities — communities
                      that are marginalized, underserved, and overburdened by pollution.
                    </span>
                    <span className="text-wrapper-34">
                      {" "}
                      Measures included in the plan will be eligible for nationally competitive $4.6 billion in
                      implementation funding. We are leading this effort in collaboration with a regional advisory work
                      group, consisting of staff from Bay Area regional agencies and local governments.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <StatSection
              aligment="right"
              className="stat-section-22"
              quantity="three"
              resolution="desktop"
              statSetResolutionDesktopClassNameOverride="instance-node-15"
              statSetStatColor2="dark-blue"
              statSetStatColor3="white"
              statSetStatColor4="light-blue"
              statSetStatDivClassName="stat-section-18"
              statSetStatDivClassNameOverride="stat-section-23"
              statSetStatSectionTitleClassName="stat-section-25"
              statSetStatSectionTitleClassNameOverride="stat-section-24"
              statSetStatText14="priority greenhouse gas (GHG) reduction measures that benefit frontline communities."
              statSetStatText4="$1M"
              statSetStatText5="in funding was secured through the US EPA&#39;s Climate Protection Grant Program"
              statSetStatText6="67"
              statSetStatText7="residents enrolled in the Bay Area Healthy Homes Initiative"
              statSetStatType1="quote"
              statSetStatTypeQuoteColorClassNameOverride="stat-section-18"
              title={false}
            />
            <PropertyDefaultWrapper
              className="hightlight-blurb-21"
              hightlightBlurbFrameClassName="instance-node-16"
              hightlightBlurbImage="left"
              hightlightBlurbImg="/img/image-square-4.png"
              hightlightBlurbJamesCarySmithClassName="hightlight-blurb-17"
              hightlightBlurbText="We launched the initiative to improve health outcomes and climate resilience in overburdened communities of Contra Costa and Alameda counties in January 2023. The program brings "
              hightlightBlurbText1="asthma services and home retrofits to address health triggers, improve energy efficiency, and keep outdoor pollution out of the home"
              hightlightBlurbText2="BAY AREA HEALTHY HOMES INITIATIVE"
              hightlightBlurbText3=" through a unique partnership between our agency, the Bay Area Regional Energy Network, county health departments, and a local non-profit. By the end of 2023, the program had enrolled 71 residents in both multifamily and single-family homes."
              hightlightBlurbTopicsClassName="hightlight-blurb-18"
              hightlightBlurbTypeDefaultImageClassName="instance-node-15"
              property1="default"
            />
          </>
        )}

        {((screenWidth >= 641 && screenWidth < 769) ||
          (screenWidth >= 769 && screenWidth < 1025) ||
          screenWidth < 641) && (
          <div
            className="topics-20"
            style={{
              gap:
                screenWidth < 641
                  ? "40px"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "36px"
                  : undefined,
            }}
          >
            <div className="div-9">
              <div
                className="james-cary-smith-10"
                style={{
                  fontFamily:
                    screenWidth < 641
                      ? "var(--h3-mobile-font-family)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h3-tablet-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth < 641
                      ? "var(--h3-mobile-font-size)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h3-tablet-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth < 641
                      ? "var(--h3-mobile-font-style)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h3-tablet-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth < 641
                      ? "var(--h3-mobile-font-weight)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h3-tablet-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth < 641
                      ? "var(--h3-mobile-letter-spacing)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h3-tablet-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth < 641
                      ? "var(--h3-mobile-line-height)"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h3-tablet-line-height)"
                      : undefined,
                }}
              >
                SUPPORTING ELECTRIC VEHICLE ADOPTION
              </div>
              <p
                className="the-grant-program-13"
                style={{
                  fontSize:
                    screenWidth < 641
                      ? "15px"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "18px"
                      : undefined,
                  letterSpacing:
                    screenWidth < 641
                      ? "0.60px"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "0.72px"
                      : undefined,
                  lineHeight:
                    screenWidth < 641
                      ? "25.5px"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "30.6px"
                      : undefined,
                }}
              >
                <span
                  className="text-wrapper-39"
                  style={{
                    fontFamily:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-family)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-size)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-style)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-weight)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "var(--body-text-mobile-letter-spacing)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-line-height)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-line-height)"
                        : undefined,
                  }}
                >
                  We continued our commitment to accelerating electric vehicle adoption in the Bay Area. The{" "}
                </span>
                <span className="text-wrapper-33">Charge! Program </span>
                <span
                  className="text-wrapper-39"
                  style={{
                    fontFamily:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-family)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-size)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-style)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-weight)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "var(--body-text-mobile-letter-spacing)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-line-height)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-line-height)"
                        : undefined,
                  }}
                >
                  provided nearly $10 million in grants to fund 1,070 charging stations at 100 sites across the Bay
                  Area. The{" "}
                </span>
                <span className="text-wrapper-33">Clean Cars for All (CCFA) Program </span>
                <span
                  className="text-wrapper-39"
                  style={{
                    fontFamily:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-family)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-size)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-style)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-font-weight)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "var(--body-text-mobile-letter-spacing)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "var(--body-text-mobile-line-height)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--body-text-tablet-line-height)"
                        : undefined,
                  }}
                >
                  helped income-qualified residents replace older vehicles with clean air vehicles or mobility options,
                  such as public transit cards or electric bicycles. CCFA received $31 million in funding from the
                  California Air Resources Board in 2023, bringing the total program funding to $73 million. CCFA has
                  awarded nearly $37 million to over 4,400 residents since the program began in March 2019. The program
                  relaunched in Fall 2023 with increased grant award amounts and will expand zip code eligibility to all
                  Bay Area residents in 2024.
                  <br />
                  <br />
                  Additionally, we were awarded nearly $3 million in funding from the California Energy Commission (CEC)
                  to expand equitable EV charging across the Bay Area. We are working with project partners and
                  community stakeholders to deploy over 200 charging stations in Oakland, Richmond, San Pablo, and
                  Vallejo. These chargers will serve multifamily residents, focusing on affordable and public housing
                  residents. The CEC grant, in conjunction with our Charge! Program and CCFA Program, will help the Bay
                  Area transition to a clean transportation economy and provide long-term economic, environmental, and
                  health benefits.
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
      {screenWidth >= 1025 && (
        <>
          <div className="topics-section-19">
            <div className="topics-19">
              <div className="div-9">
                <p className="james-cary-smith-9">HEAVY-DUTY VEHICLE AND EQUIPMENT ELECTRIC CHARGING INFRASTRUCTURE</p>
                <p className="the-grant-program-12">
                  <span className="text-wrapper-34">
                    This grant program is a competitive solicitation providing funding for electric charging
                    infrastructure for heavy- and medium-duty vehicles and equipment. At least 80 percent of the total
                    funds will be awarded to{" "}
                  </span>
                  <span className="text-wrapper-35">
                    projects that reduce emissions in communities that have been identified through the AB 617 process
                  </span>
                  <span className="text-wrapper-34">
                    , such as West Oakland, East Oakland, Richmond-San Pablo, and Bayview Hunters Point, as well as
                    those designated as Disadvantaged Communities and Low-Income Communities.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="hightlight-blurb-wrapper">
            <div className="div-10">
              <Stat
                className="stat-7"
                color="white"
                resolution="desktop"
                text="$8M"
                text1="was awarded to projects that will reduce emissions from ports in West Oakland and Richmond"
                type="numbers"
              />
              <div className="frame-126">
                <div className="topics-19">
                  <div className="div-9">
                    <div className="james-cary-smith-11">CLEAN PORTS</div>
                    <p className="the-grant-program-14">
                      <span className="text-wrapper-34">
                        We awarded nearly $8 million to projects that will repower two tugboats, five rubber-tired
                        gantry cranes that operate at or near West Oakland and will replace one locomotive that operates
                        in Richmond with Tier 4 and hybrid diesel electric clean technologies.{" "}
                      </span>
                      <span className="text-wrapper-35">
                        The projects are estimated to reduce more than 40 tons of NOx, ROG, and PM per year.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hightlight-blurb-22">
            <div className="div-10">
              <div className="frame-127">
                <Topics
                  button={false}
                  className="instance-node-17"
                  textBodyClassName="instance-node-18"
                  headerTextClassName="instance-node-18"
                  headerText="SCHOOL BUS PROGRAM"
                  textBody="We awarded over $15 million in funding to support zero- and low-emission school buses, protecting student health and achieving significant air quality benefits for this highly sensitive group."
                />
              </div>
              <Stat
                className="stat-8"
                color="white"
                resolution="desktop"
                text="$15M"
                text1="was awarded to support zero- and low-emission school buses"
                type="numbers"
              />
            </div>
          </div>
          <div className="frame-128">
            <SectionGraph
              chartCaption="z"
              className="section-graph-35"
              graphs="zero"
              resolution="desktop"
              subTopicTitleSectionTitleClassName="section-graph-36"
              subTopicTitleText="2023 EMISSION REDUCTIONS FROM AIR DISTRICT INCENTIVE PROJECTS"
              subTopicTitleTypeDefaultClassNameOverride="instance-node-17"
              title="top"
            />
            <div className="graphs-carrousel">
              <div className="frame-129">
                <SectionGraph
                  chartCaption="no"
                  className="section-graph-37"
                  graphs="one"
                  override={
                    <GraphChart
                      className="instance-node-19"
                      graphChartLineColumns10="two"
                      graphChartLineColumns11="two"
                      graphChartLineColumns13="two"
                      graphChartLineFrameClassName11="graph-chart-27"
                      graphChartLineLines10="one"
                      graphChartLineLines11="one"
                      graphChartLineLines13="one"
                      graphChartLineResolution6="desktop"
                      graphChartLineResolution7="desktop"
                      graphChartLineResolution8="desktop"
                      graphChartLineResolution9="desktop"
                      graphChartLineSectionTitleClassName16="graph-chart-27"
                      graphChartLineSectionTitleClassName4="graph-chart-29"
                      graphChartLineSectionTitleClassName7="graph-chart-29"
                      graphChartLineText20="17.2"
                      graphChartLineText21="Oxides of Nitrogen (NOx)"
                      graphChartLineText22="1.9"
                      graphChartLineText23="Reactive Organic Compounds (ROG)"
                      graphChartLineText26="1.2"
                      graphChartLineText27="Particulate Matter (PM10)"
                      graphChartLineText58="$7.01M"
                      graphChartTotalGraphChartLineColumns1="two"
                      graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                      graphChartTotalGraphChartLineText2="20.3"
                      graphChartTotalLines1="one"
                      graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                      graphChartTotalResolution="desktop"
                      hasFrame2={false}
                      hasFrame8={false}
                      hasGroup2={false}
                      quantity="one"
                      resolution="desktop"
                      sectionTitleClassName1="graph-chart-27"
                      sectionTitleWrapperClassNameOverride="graph-chart-28"
                      text="Estimated Annual Emissions Reduction for the Projects Funded (tons/year)"
                      visible26={false}
                      visible27={false}
                      visible28={false}
                      visible29={false}
                      visible30={false}
                      visible31={false}
                      visible50={false}
                    />
                  }
                  resolution="desktop"
                  subTopicTitleResolution="desktop"
                  subTopicTitleText1="OFF-ROAD EQUIPMENT AND INFRASTRUCTURE"
                  subTopicTitleType="default"
                  subTopicTitleTypeDefaultClassName="instance-node-17"
                  title="with-graph"
                />
                <SectionGraph
                  chartCaption="no"
                  className="section-graph-38"
                  graphs="one"
                  override={
                    <GraphChart
                      className="instance-node-19"
                      graphChartLineColumns10="two"
                      graphChartLineColumns11="two"
                      graphChartLineColumns12="two"
                      graphChartLineFrameClassName11="graph-chart-27"
                      graphChartLineLines10="one"
                      graphChartLineLines11="one"
                      graphChartLineLines12="one"
                      graphChartLineResolution10="desktop"
                      graphChartLineResolution6="desktop"
                      graphChartLineResolution7="desktop"
                      graphChartLineResolution8="desktop"
                      graphChartLineSectionTitleClassName16="graph-chart-27"
                      graphChartLineSectionTitleClassName4="graph-chart-29"
                      graphChartLineSectionTitleClassName6="graph-chart-29"
                      graphChartLineText20="3.0"
                      graphChartLineText21="NOx"
                      graphChartLineText22="0.3"
                      graphChartLineText23="ROG"
                      graphChartLineText24="0.0"
                      graphChartLineText25="PM10"
                      graphChartLineText58="$21.60M"
                      graphChartTotalGraphChartLineColumns1="two"
                      graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                      graphChartTotalGraphChartLineText2="3.3"
                      graphChartTotalLines1="one"
                      graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                      graphChartTotalResolution="desktop"
                      hasFrame2={false}
                      hasFrame8={false}
                      hasGroup2={false}
                      quantity="one"
                      resolution="desktop"
                      sectionTitleClassName1="graph-chart-27"
                      sectionTitleWrapperClassNameOverride="graph-chart-28"
                      text="Estimated Annual Emissions Reduction for the Projects funded (tons/year)"
                      visible26={false}
                      visible27={false}
                      visible28={false}
                      visible29={false}
                      visible30={false}
                      visible31={false}
                      visible51={false}
                    />
                  }
                  resolution="desktop"
                  subTopicTitleResolution="desktop"
                  subTopicTitleText1="ON-ROAD VEHICLES AND INFRASTRUCTURE"
                  subTopicTitleType="default"
                  subTopicTitleTypeDefaultClassName="instance-node-17"
                  title="with-graph"
                />
                <SectionGraph
                  chartCaption="no"
                  className="section-graph-39"
                  graphs="one"
                  override={
                    <GraphChart
                      className="graph-chart-30"
                      graphChartLineColumns10="two"
                      graphChartLineColumns11="two"
                      graphChartLineColumns12="two"
                      graphChartLineFrameClassName11="graph-chart-27"
                      graphChartLineLines10="one"
                      graphChartLineLines11="one"
                      graphChartLineLines12="one"
                      graphChartLineResolution10="desktop"
                      graphChartLineResolution6="desktop"
                      graphChartLineResolution7="desktop"
                      graphChartLineResolution8="desktop"
                      graphChartLineSectionTitleClassName16="graph-chart-27"
                      graphChartLineSectionTitleClassName4="graph-chart-29"
                      graphChartLineSectionTitleClassName6="graph-chart-29"
                      graphChartLineText20="7.2"
                      graphChartLineText21="NOx"
                      graphChartLineText22="8.9"
                      graphChartLineText23="ROG"
                      graphChartLineText24="22.6"
                      graphChartLineText25="PM10"
                      graphChartLineText58="$1.91M"
                      graphChartTotalGraphChartLineColumns1="two"
                      graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                      graphChartTotalGraphChartLineText2="38.7"
                      graphChartTotalLines1="one"
                      graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                      graphChartTotalResolution="desktop"
                      hasFrame2={false}
                      hasFrame8={false}
                      hasGroup2={false}
                      quantity="one"
                      resolution="desktop"
                      sectionTitleClassName1="graph-chart-27"
                      sectionTitleWrapperClassNameOverride="graph-chart-28"
                      text="Estimated Annual Emissions Reduction for the Projects Funded (tons/year)"
                      visible26={false}
                      visible27={false}
                      visible28={false}
                      visible29={false}
                      visible30={false}
                      visible31={false}
                      visible51={false}
                    />
                  }
                  resolution="desktop"
                  subTopicTitleResolution="desktop"
                  subTopicTitleText1="OTHER PROJECTS (INCLUDING TRIP REDUCTION)"
                  subTopicTitleType="default"
                  subTopicTitleTypeDefaultClassName="instance-node-17"
                  title="with-graph"
                />
                <SectionGraph
                  chartCaption="no"
                  className="section-graph-40"
                  graphs="one"
                  override={
                    <GraphChart
                      className="instance-node-19"
                      graphChartLineColumns10="two"
                      graphChartLineColumns11="two"
                      graphChartLineColumns12="two"
                      graphChartLineFrameClassName11="graph-chart-27"
                      graphChartLineLines10="one"
                      graphChartLineLines11="one"
                      graphChartLineLines12="one"
                      graphChartLineResolution10="desktop"
                      graphChartLineResolution6="desktop"
                      graphChartLineResolution7="desktop"
                      graphChartLineResolution8="desktop"
                      graphChartLineSectionTitleClassName16="graph-chart-27"
                      graphChartLineSectionTitleClassName4="graph-chart-29"
                      graphChartLineSectionTitleClassName6="graph-chart-29"
                      graphChartLineText20="12.7"
                      graphChartLineText21="NOx"
                      graphChartLineText22="15.4"
                      graphChartLineText23="ROG"
                      graphChartLineText24="38.1"
                      graphChartLineText25="PM10"
                      graphChartLineText58="$12M"
                      graphChartTotalGraphChartLineColumns1="two"
                      graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                      graphChartTotalGraphChartLineText2="66.2"
                      graphChartTotalLines1="one"
                      graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                      graphChartTotalResolution="desktop"
                      hasFrame2={false}
                      hasFrame8={false}
                      hasGroup2={false}
                      quantity="one"
                      resolution="desktop"
                      sectionTitleClassName1="graph-chart-27"
                      sectionTitleWrapperClassNameOverride="graph-chart-28"
                      text="Estimated Annual Emissions Reduction for the Projects Funded (tons/year)"
                      visible26={false}
                      visible27={false}
                      visible28={false}
                      visible29={false}
                      visible30={false}
                      visible31={false}
                      visible51={false}
                    />
                  }
                  resolution="desktop"
                  subTopicTitleResolution="desktop"
                  subTopicTitleText1="CONGESTION MANAGEMENT AGENCY PROJECTS"
                  subTopicTitleType="default"
                  subTopicTitleTypeDefaultClassName="instance-node-17"
                  title="with-graph"
                />
              </div>
              <ArrowsCarrousel
                arrowsArrowElementTypeBack="/img/type-back.png"
                arrowsArrowElementTypeForward="/img/type-forward.png"
                className="instance-node-20"
              />
            </div>
          </div>
          <div className="hightlight-blurb-section-wrapper">
            <PropertyDefaultWrapper
              className="instance-node-17"
              hightlightBlurbFrameClassName="hightlight-blurb-23"
              hightlightBlurbImage="left"
              hightlightBlurbImg="/img/image-square-5-3.png"
              hightlightBlurbJamesCarySmithClassName="hightlight-blurb-17"
              hightlightBlurbText="We developed a "
              hightlightBlurbText1="methodology and modeling tools for assessing air quality and health impacts"
              hightlightBlurbText2="DEVELOPING METHODOLOGY AND TOOLS FOR CEQA AIR QUALITY ASSESSMENT"
              hightlightBlurbText3=" from exposure to toxic air contaminants and PM2.5 from individual projects. The step-by-step methodology and innovative modeling tools support lead agencies and practitioners in conducting cumulative impact analysis during the CEQA environmental review process, with visualization maps of screening-level cancer risks, chronic hazards, and PM2.5 concentrations from the Bay Area highways and surface streets, freight and passenger rail services, selected railyards, and permitted stationary sources."
              hightlightBlurbTopicsClassName="hightlight-blurb-18"
              hightlightBlurbTypeDefaultImageClassName="instance-node-15"
              property1="default"
            />
          </div>
          <TopicsSection
            alignment="center"
            className="topics-section-20"
            headline="large"
            resolution="desktop"
            title
            topicsClassName="topics-section-21"
          />
          <ElementImage
            className="element-image-2"
            img="/img/rectangle-255-2-3.png"
            rectangleClassName="element-image-3"
            resolution="destop"
          />
          <div className="topics-section-22">
            <div className="topics-19">
              <div className="div-9">
                <p className="james-cary-smith-9">AIR QUALITY VIOLATION DATA TOOL</p>
                <p className="the-grant-program-12">
                  <span className="text-wrapper-34">
                    In September, we launched a notices of violation data tool on our website that provides searchable
                    information of all violations that our agency has issued within the past five years. Members of the
                    public may now access information pertaining to violations and penalties issued by our inspectors.
                    Violations can be sorted by city, zip code and facility name and penalty amount and downloaded for
                    ease of review. This tool serves to{" "}
                  </span>
                  <span className="text-wrapper-35">
                    better inform communities about enforcement activities and streamlines accessibility.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <TopicsSection
            alignment="center"
            className="topics-section-23"
            headline="large"
            resolution="desktop"
            title
            topicsClassName="topics-section-21"
          />
          <StatSection
            aligment="right"
            className="stat-section-26"
            quantity="three"
            resolution="desktop"
            statSetResolutionDesktopClassNameOverride="instance-node-15"
            statSetStatColor2="dark-blue"
            statSetStatColor3="blue"
            statSetStatColor4="white"
            statSetStatDivClassName="stat-section-18"
            statSetStatDivClassNameOverride="instance-node-21"
            statSetStatSectionTitleClassName="stat-section-27"
            statSetStatText4="380"
            statSetStatText5="premature deaths could be prevented by eliminating residential wood burning."
            statSetStatText6="1.8M"
            statSetStatText7="water heaters and furnaces are one of the largest sources of NOx pollution in the Bay Area"
            statSetStatText8="$1.1M"
            statSetStatText9="fine was issued to Chemtrade for air quality violations"
            statSetStatType1="numbers"
            statSetStatTypeQuoteColorClassNameOverride="stat-section-18"
            title={false}
          />
          <div className="frame-130">
            <SectionGraph
              chartCaption="no"
              className="section-graph-41"
              graphs="one"
              override={
                <GraphChart
                  className="instance-node-17"
                  graphChartLineColumns10="three"
                  graphChartLineColumns11="three"
                  graphChartLineColumns12="three"
                  graphChartLineColumns13="three"
                  graphChartLineLines10="one"
                  graphChartLineLines11="one"
                  graphChartLineLines12="one"
                  graphChartLineLines13="one"
                  graphChartLineLines31="one"
                  graphChartLineLines32="one"
                  graphChartLineLines33="one"
                  graphChartLineLines34="one"
                  graphChartLineLines35="one"
                  graphChartLineResolution10="desktop"
                  graphChartLineResolution7="desktop"
                  graphChartLineResolution8="desktop"
                  graphChartLineResolution9="desktop"
                  graphChartLineText20="45.6%"
                  graphChartLineText21="Odor"
                  graphChartLineText22="32.4%"
                  graphChartLineText23="Wood Smoke"
                  graphChartLineText24="7.5%"
                  graphChartLineText25="Dust/Particulates"
                  graphChartLineText26="4.4%"
                  graphChartLineText27="Other*"
                  graphChartLineText78="1,720"
                  graphChartLineText79="1,220"
                  graphChartLineText80="283"
                  graphChartLineText81="164"
                  graphChartLineText82="Fire Out/Illegal Outdoor Fires"
                  graphChartLineText83="125"
                  graphChartLineText84="3.3%"
                  graphChartLineText85="Smoke"
                  graphChartLineText86="107"
                  graphChartLineText87="2.8%"
                  graphChartLineText88="Asbestos"
                  graphChartLineText89="96"
                  graphChartLineText90="2.5%"
                  graphChartLineText91="Idling Commercial Vehicles"
                  graphChartLineText92="30"
                  graphChartLineText93="0.8%"
                  graphChartLineText94="Gas Stations"
                  graphChartLineText95="23"
                  graphChartLineText96="0.6%"
                  graphChartTotalGraphChartLineColumns1="three"
                  graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                  graphChartTotalGraphChartLineText15="3,768"
                  graphChartTotalGraphChartLineText2="100%"
                  graphChartTotalLines1="one"
                  graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                  graphChartTotalResolution="desktop"
                  hasFrame11={false}
                  hasFrame2={false}
                  hasGroup2={false}
                  quantity="one"
                  resolution="desktop"
                  text1="* Includes commercial idling, flaring, gas stations, and unpermitted sources"
                  visible25={false}
                  visible31={false}
                />
              }
              resolution="mobile"
              subTopicTitleResolution="mobile"
              subTopicTitleText1="AIR POLLUTION COMPLAINTS"
              subTopicTitleType="left"
              subTopicTitleTypeDefaultClassName="instance-node-19"
              title="with-graph"
            />
            <SectionGraph
              chartCaption="no"
              className="section-graph-42"
              frameClassName="section-graph-43"
              graphs="one"
              override={
                <GraphChart
                  className="instance-node-21"
                  graphChartLineColumns10="two"
                  graphChartLineColumns11="two"
                  graphChartLineColumns12="two"
                  graphChartLineColumns13="two"
                  graphChartLineColumns31="two"
                  graphChartLineColumns32="two"
                  graphChartLineColumns33="two"
                  graphChartLineColumns34="two"
                  graphChartLineColumns35="two"
                  graphChartLineFrameClassName12="graph-chart-33"
                  graphChartLineGraphChartLineClassName5="graph-chart-32"
                  graphChartLineLines10="one"
                  graphChartLineLines11="one"
                  graphChartLineLines12="one"
                  graphChartLineLines13="one"
                  graphChartLineLines31="one"
                  graphChartLineLines32="one"
                  graphChartLineLines33="one"
                  graphChartLineLines34="one"
                  graphChartLineLines35="one"
                  graphChartLineLinesColumnsClassName3="graph-chart-31"
                  graphChartLineResolution10="desktop"
                  graphChartLineResolution7="desktop"
                  graphChartLineResolution8="desktop"
                  graphChartLineResolution9="desktop"
                  graphChartLineSectionTitleClassName17="graph-chart-34"
                  graphChartLineText20="4,755"
                  graphChartLineText21="Source Inspections"
                  graphChartLineText22="3,768"
                  graphChartLineText23="Air Pollution Complaints (excludes smoking vehicles)"
                  graphChartLineText24="965"
                  graphChartLineText25="Gasoline Dispensing Facility Inspections"
                  graphChartLineText26="2,070"
                  graphChartLineText27="Asbestos Inspections"
                  graphChartLineText82="Reportable Compliance Activities"
                  graphChartLineText84="734"
                  graphChartLineText85="Diesel Compliance and Grant Inspections"
                  graphChartLineText87="125"
                  graphChartLineText88="Portable Equipment Registration Program (PERP) Inspections"
                  graphChartLineText90="7"
                  graphChartLineText91="Open Burn Inspections"
                  graphChartLineText93="4"
                  graphChartLineText94="Naturally Occurring Asbestos (NOA) Inspections"
                  graphChartLineText96="549"
                  graphChartTotalGraphChartLineColumns1="two"
                  graphChartTotalGraphChartLineDivClassName="graph-chart-35"
                  graphChartTotalGraphChartLineFrameClassName="graph-chart-37"
                  graphChartTotalGraphChartLineFrameClassNameOverride="graph-chart-36"
                  graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                  graphChartTotalGraphChartLineText16="Total Compliance Inspections"
                  graphChartTotalGraphChartLineText2="12,977"
                  graphChartTotalLines1="one"
                  graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                  graphChartTotalResolution="desktop"
                  hasFrame11={false}
                  hasFrame2={false}
                  hasFrame8={false}
                  hasGroup2={false}
                  quantity="one"
                  resolution="desktop"
                  visible25={false}
                  visible31={false}
                />
              }
              resolution="desktop"
              subTopicTitleText2="COMPLIANCE INSPECTIONS"
              title="left"
            />
            <SectionGraph
              chartCaption="no"
              className="section-graph-42"
              frameClassName="section-graph-43"
              graphs="one"
              override={
                <GraphChart
                  className="instance-node-21"
                  graphChartLineColumns10="two"
                  graphChartLineColumns11="two"
                  graphChartLineFrameClassName1="graph-chart-38"
                  graphChartLineFrameClassName13="instance-node-16"
                  graphChartLineLines10="one"
                  graphChartLineLines11="one"
                  graphChartLineResolution7="desktop"
                  graphChartLineResolution8="desktop"
                  graphChartLineText20="$3,403,279"
                  graphChartLineText21="Civil Penalties"
                  graphChartLineText22="421"
                  graphChartLineText23="Violations Resolved with Penalties"
                  hasFrame11={false}
                  hasFrame2={false}
                  hasFrame8={false}
                  hasGroup2={false}
                  quantity="one"
                  resolution="desktop"
                  visible25={false}
                  visible26={false}
                  visible27={false}
                  visible28={false}
                  visible29={false}
                  visible30={false}
                  visible31={false}
                  visible50={false}
                  visible51={false}
                  visible55={false}
                />
              }
              resolution="desktop"
              subTopicTitleText2="CIVIL PENALTIES AND VIOLATIONS"
              title="left"
            />
            <div className="section-graph-44">
              <div className="sub-topic-title-instance-wrapper">
                <SubTopicTitle
                  className="instance-node-19"
                  resolution="desktop"
                  text="RULEMAKING ACTIVITY"
                  type="left"
                />
              </div>
              <div className="graph-chart-39">
                <div className="frame-131">
                  <div className="frame-132">
                    <div className="group-50">
                      <div className="section-title-178">Rules Adopted or Amended</div>
                    </div>
                  </div>
                  <div className="frame-133">
                    <div className="frame-134">
                      <div className="group-51">
                        <div className="section-title-179">December 20, 2023</div>
                      </div>
                    </div>
                    <div className="group-52">
                      <div className="group-53">
                        <p className="section-title-180">
                          Regulation 8: Organic Compounds, Rule 8: Wastewater Collection and Separation Systems
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-133">
                    <div className="frame-134">
                      <div className="group-54">
                        <div className="section-title-179">June 7, 2023</div>
                      </div>
                    </div>
                    <div className="group-55">
                      <div className="group-56">
                        <div className="section-title-180">Regulation 3: Fees</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-133">
                    <div className="frame-134">
                      <div className="group-57">
                        <div className="section-title-179">March 15, 2023</div>
                      </div>
                    </div>
                    <div className="group-58">
                      <div className="group-59">
                        <p className="section-title-180">
                          Regulation 9: Inorganic Gaseous Pollutants, Rule 4: Nitrogen Oxides from Fan Type Central
                          Furnaces, and Rule 6: Nitrogen Oxides Emissions from Natural Gas-Fired Boilers and Water
                          Heaters
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-135">
            <SectionGraph
              chartCaption="z"
              className="section-graph-45"
              graphs="zero"
              resolution="desktop"
              subTopicTitleText="PERMITTING ACTIVITY"
              subTopicTitleTypeDefaultClassNameOverride="instance-node-17"
              title="top"
            />
          </div>
          <div className="graphs-carrousel-2">
            <div className="frame-136">
              <SectionGraph
                chartCaption="no"
                className="section-graph-46"
                graphs="one"
                hasFrame={false}
                override={
                  <GraphChart
                    className="instance-node-19"
                    graphChartLineColumns10="two"
                    graphChartLineColumns11="two"
                    graphChartLineColumns12="two"
                    graphChartLineColumns13="two"
                    graphChartLineLines10="one"
                    graphChartLineLines11="one"
                    graphChartLineLines12="one"
                    graphChartLineLines13="one"
                    graphChartLineResolution10="desktop"
                    graphChartLineResolution7="desktop"
                    graphChartLineResolution8="desktop"
                    graphChartLineResolution9="desktop"
                    graphChartLineText20="5"
                    graphChartLineText21="Refineries"
                    graphChartLineText22="73"
                    graphChartLineText23="Major Facilities (excludes refineries)"
                    graphChartLineText24="2,264"
                    graphChartLineText25="Gasoline Dispensing Facilities"
                    graphChartLineText26="8,090"
                    graphChartLineText27="All Other Facilities"
                    graphChartTotalGraphChartLineColumns6="two"
                    graphChartTotalGraphChartLineSectionTitleClassName8="graph-chart-40"
                    graphChartTotalGraphChartLineText11="10,432"
                    graphChartTotalGraphChartLineText12="23,325"
                    graphChartTotalGraphChartLineText17="Permitted Devices and Operations"
                    graphChartTotalGraphChartLineText18="Total Permitted Facilities"
                    graphChartTotalLines1="two"
                    graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                    graphChartTotalResolution="desktop"
                    hasFrame2={false}
                    hasFrame8={false}
                    hasGroup2={false}
                    quantity="one"
                    resolution="desktop"
                    sectionTitleClassName1="graph-chart-27"
                    text="Bay Area Permitted Facilities"
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
                title="with-graph"
              />
              <SectionGraph
                chartCaption="no"
                className="section-graph-47"
                graphs="one"
                hasFrame={false}
                override={
                  <GraphChart
                    className="graph-chart-30"
                    graphChartLineColumns10="two"
                    graphChartLineColumns11="two"
                    graphChartLineColumns12="two"
                    graphChartLineLines10="one"
                    graphChartLineLines11="one"
                    graphChartLineLines12="one"
                    graphChartLineResolution10="desktop"
                    graphChartLineResolution7="desktop"
                    graphChartLineResolution8="desktop"
                    graphChartLineText20="47"
                    graphChartLineText21="Major Source Review (Title V)"
                    graphChartLineText22="907"
                    graphChartLineText23="New Source Review (NSR)"
                    graphChartLineText24="42"
                    graphChartLineText25="All other applications"
                    graphChartTotalGraphChartLineColumns1="two"
                    graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                    graphChartTotalGraphChartLineText16="Total New Permits Applications"
                    graphChartTotalGraphChartLineText2="996"
                    graphChartTotalLines1="one"
                    graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                    graphChartTotalResolution="desktop"
                    hasFrame2={false}
                    hasFrame8={false}
                    hasGroup2={false}
                    quantity="one"
                    resolution="desktop"
                    sectionTitleClassName1="graph-chart-27"
                    text="New Permit Applications"
                    visible25={false}
                    visible26={false}
                    visible27={false}
                    visible28={false}
                    visible29={false}
                    visible30={false}
                    visible31={false}
                    visible51={false}
                  />
                }
                resolution="desktop"
                title="with-graph"
              />
              <SectionGraph
                chartCaption="no"
                className="section-graph-48"
                graphs="one"
                hasFrame={false}
                override={
                  <GraphChart
                    className="graph-chart-30"
                    graphChartLineColumns10="two"
                    graphChartLineColumns11="two"
                    graphChartLineColumns12="two"
                    graphChartLineLines10="one"
                    graphChartLineLines11="one"
                    graphChartLineLines12="one"
                    graphChartLineResolution10="desktop"
                    graphChartLineResolution7="desktop"
                    graphChartLineResolution8="desktop"
                    graphChartLineText20="243"
                    graphChartLineText21="Diesel Engines"
                    graphChartLineText22="8"
                    graphChartLineText23="Gasoline Dispensing Facilities"
                    graphChartLineText24="56"
                    graphChartLineText25="Other Commercial/Industrial Facilities"
                    graphChartTotalGraphChartLineColumns1="two"
                    graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                    graphChartTotalGraphChartLineText16="Total Health Risk Assessments"
                    graphChartTotalGraphChartLineText2="307"
                    graphChartTotalLines1="one"
                    graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                    graphChartTotalResolution="desktop"
                    hasFrame2={false}
                    hasFrame8={false}
                    hasGroup2={false}
                    quantity="one"
                    resolution="desktop"
                    text="Application Health Risk Assessments"
                    visible25={false}
                    visible26={false}
                    visible27={false}
                    visible28={false}
                    visible29={false}
                    visible30={false}
                    visible31={false}
                    visible51={false}
                  />
                }
                resolution="desktop"
                title="with-graph"
              />
              <SectionGraph
                chartCaption="no"
                className="section-graph-49"
                graphs="one"
                hasFrame={false}
                override={
                  <GraphChart
                    className="graph-chart-30"
                    graphChartLineColumns10="two"
                    graphChartLineColumns11="two"
                    graphChartLineColumns12="two"
                    graphChartLineLines10="one"
                    graphChartLineLines11="one"
                    graphChartLineLines12="one"
                    graphChartLineResolution10="desktop"
                    graphChartLineResolution7="desktop"
                    graphChartLineResolution8="desktop"
                    graphChartLineText20="0"
                    graphChartLineText21="Preliminary"
                    graphChartLineText22="0"
                    graphChartLineText23="Draft"
                    graphChartLineText24="0"
                    graphChartLineText25="Final"
                    graphChartTotalGraphChartLineColumns1="two"
                    graphChartTotalGraphChartLineDivClassName="graph-chart-40"
                    graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                    graphChartTotalGraphChartLineText16="Total Facility Health Risk Assessments"
                    graphChartTotalGraphChartLineText2="0"
                    graphChartTotalLines1="one"
                    graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                    graphChartTotalResolution="desktop"
                    hasFrame2={false}
                    hasFrame8={false}
                    hasGroup2={false}
                    quantity="one"
                    resolution="desktop"
                    text="Facility Health Risk Assessments"
                    visible25={false}
                    visible26={false}
                    visible27={false}
                    visible28={false}
                    visible29={false}
                    visible30={false}
                    visible31={false}
                    visible51={false}
                  />
                }
                resolution="desktop"
                title="with-graph"
              />
            </div>
            <ArrowsCarrousel
              arrowsArrowElementTypeBack="/img/type-back.png"
              arrowsArrowElementTypeForward="/img/type-forward.png"
              className="instance-node-17"
            />
          </div>
          <div className="section-graph-50">
            <div className="frame-137">
              <SubTopicTitle
                className="instance-node-19"
                resolution="desktop"
                sectionTitleClassName="sub-topic-title-4"
                text="SOURCE TEST ACTIVITY"
                type="left"
              />
            </div>
            <div className="graph-chart-41">
              <div className="frame-131">
                <div className="frame-132">
                  <div className="group-50">
                    <p className="section-title-181">Number of Source Tests and Reviews in 2023</p>
                  </div>
                </div>
                <GraphChartLine
                  className="graph-chart-line-17"
                  columns="two"
                  frameWrapperClassName="instance-node-18"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  sectionTitleClassName1="instance-node-18"
                  sectionTitleClassName2="instance-node-18"
                  sectionTitleClassName3="instance-node-18"
                  text="100%"
                  text1="Refinery Source Tests"
                  text5="Compliance Rate"
                />
                <GraphChartLine
                  className="graph-chart-line-17"
                  columns="two"
                  frameWrapperClassName="instance-node-18"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  sectionTitleClassName1="graph-chart-line-18"
                  sectionTitleClassName2="instance-node-18"
                  sectionTitleClassName3="instance-node-18"
                  text="94.7%"
                  text1="Title V Source Tests (excludes refineries)"
                  text5="Compliance Rate"
                />
                <GraphChartLine
                  className="graph-chart-line-17"
                  columns="two"
                  frameWrapperClassName="instance-node-18"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  sectionTitleClassName1="instance-node-18"
                  sectionTitleClassName2="instance-node-18"
                  sectionTitleClassName3="instance-node-18"
                  text="92.3%"
                  text1="Non-Title V Source Tests"
                  text5="Compliance Rate"
                />
                <GraphChartLine
                  className="graph-chart-line-17"
                  columns="two"
                  frameWrapperClassName="instance-node-18"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  sectionTitleClassName1="instance-node-18"
                  sectionTitleClassName2="instance-node-18"
                  sectionTitleClassName3="instance-node-18"
                  text="66.7%"
                  text1="Synthetic Minor Source Tests"
                  text5="Compliance Rate"
                />
                <GraphChartLine
                  className="graph-chart-line-17"
                  columns="two"
                  frameWrapperClassName="instance-node-18"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  sectionTitleClassName1="instance-node-18"
                  sectionTitleClassName2="instance-node-18"
                  sectionTitleClassName3="instance-node-18"
                  text="97.6%"
                  text1="Gasoline Cargo Tanks"
                  text5="Compliance Rate"
                />
                <GraphChartLine
                  className="graph-chart-line-17"
                  columns="two"
                  frameWrapperClassName="instance-node-18"
                  frameWrapperClassNameOverride="graph-chart-line-19"
                  graphChartLineClassNameOverride="graph-chart-line-21"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  sectionTitleClassName1="graph-chart-line-22"
                  sectionTitleClassName2="graph-chart-line-22"
                  sectionTitleClassName3="instance-node-18"
                  sectionTitleWrapperClassName="graph-chart-line-20"
                  text="88.8%"
                  text1="Other Facility Source Tests Reviewed in 2023 (contractors)"
                  text5="Compliance Rate (reviewed and approved)"
                />
                <GraphChartLine
                  className="graph-chart-line-17"
                  columns="two"
                  frameWrapperClassName="instance-node-18"
                  frameWrapperClassNameOverride="graph-chart-line-19"
                  graphChartLineClassNameOverride="graph-chart-line-23"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  sectionTitleClassName1="graph-chart-line-22"
                  sectionTitleClassName2="instance-node-18"
                  sectionTitleClassName3="instance-node-18"
                  text="42.9%"
                  text1="Other Facility Source Tests Disapproved or Invalidated in 2023 (contractors)"
                  text5="Disapproval Rate (reviewed)"
                />
                <GraphChartLine
                  className="graph-chart-line-17"
                  columns="two"
                  frameWrapperClassName="instance-node-18"
                  frameWrapperClassNameOverride="graph-chart-line-19"
                  graphChartLineClassNameOverride="graph-chart-line-23"
                  hasGraphChartLine={false}
                  input="default"
                  lines="two"
                  resolution="desktop"
                  sectionTitleClassName1="graph-chart-line-22"
                  text="196"
                  text1="Other Facility Source Test Protocols Reviewed in 2023 (contractors)"
                />
                <GraphChartLine
                  className="graph-chart-line-17"
                  columns="two"
                  frameWrapperClassName="instance-node-18"
                  frameWrapperClassNameOverride="graph-chart-line-19"
                  graphChartLineClassNameOverride="graph-chart-line-23"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  sectionTitleClassName1="graph-chart-line-22"
                  sectionTitleClassName2="instance-node-18"
                  sectionTitleClassName3="instance-node-18"
                  text="26.9%"
                  text1="Facility CEMS Excess Emission Reports Reviewed in 2023 (reviewed)"
                  text5="Compliance Rate (reviewed)"
                />
                <GraphChartLine
                  className="graph-chart-line-17"
                  columns="two"
                  frameWrapperClassName="instance-node-18"
                  frameWrapperClassNameOverride="graph-chart-line-20"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  sectionTitleClassName1="graph-chart-line-22"
                  sectionTitleClassName2="instance-node-18"
                  sectionTitleClassName3="instance-node-18"
                  text="53.3%"
                  text1="Gasoline Dispensing Facilities (GDF)"
                  text5="Compliance Rate"
                />
                <GraphChartLine
                  className="graph-chart-line-17"
                  columns="two"
                  frameWrapperClassName="instance-node-18"
                  frameWrapperClassNameOverride="graph-chart-line-20"
                  input="default"
                  lines="two"
                  resolution="desktop"
                  sectionTitleClassName1="graph-chart-line-22"
                  sectionTitleClassName2="instance-node-18"
                  sectionTitleClassName3="instance-node-18"
                  text="99.7%"
                  text1="Other GDF Source Tests (contractors)"
                  text5="Compliance Rate"
                />
                <GraphChartTotal
                  className="graph-chart-total-2"
                  graphChartLineColumns2="two"
                  graphChartLineFrameClassName2="instance-node-18"
                  graphChartLineFrameWrapperClassName="instance-node-18"
                  graphChartLineFrameWrapperClassNameOverride="instance-node-18"
                  graphChartLineLinesColumnsClassNameOverride="instance-node-17"
                  graphChartLineSectionTitleClassName6="instance-node-18"
                  graphChartLineSectionTitleClassName7="instance-node-18"
                  graphChartLineSectionTitleClassName8="instance-node-18"
                  graphChartLineText12="16,318"
                  graphChartLineText13="Total Source Tests"
                  graphChartLineText14="134"
                  graphChartLineText15="Total Violations"
                  graphChartLineText16="99.2%"
                  graphChartLineText17="Compliance Rate"
                  lines="three"
                  resolution="desktop"
                />
              </div>
            </div>
          </div>
          <InternalMenu
            arrowElementTypeBack="/img/arrow-element.png"
            arrowElementTypeForward="/img/arrow-element-1.png"
            className="internal-menu-5"
            resolution="desktop"
          />
        </>
      )}

      {((screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025) ||
        screenWidth < 641) && (
        <>
          <StatSection
            aligment="centered"
            className="stat-section-28"
            quantity="three"
            resolution="mobile"
            statSetResolutionDesktopClassNameOverride="instance-node-15"
            statSetStatColor2="blue"
            statSetStatColor3="dark-blue"
            statSetStatColor4="white"
            statSetStatDivClassName="instance-node-22"
            statSetStatDivClassNameOverride="instance-node-22"
            statSetStatText4="3"
            statSetStatText5="sustainable technological advances were awarded loan guarantees through the Climate Tech Finance Program"
            statSetStatText6="1,800"
            statSetStatText7="electric vehicle charging stations were funded through the Charge! Program"
            statSetStatText8="4,100+"
            statSetStatText9="residents have participated in the Clean Cars For All Program since it began in March 2019"
            statSetStatType1="numbers"
            statSetStatTypeQuoteColorClassNameOverride="instance-node-22"
            title={false}
          />
          <HightlightBlurb
            className="hightlight-blurb-24"
            detail="image"
            frameClassName={`${screenWidth < 641 && "class-99"}`}
            image={
              screenWidth < 641
                ? "bottom"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "top"
                : undefined
            }
            imageSquare1={screenWidth < 641 ? "/img/image-square-8-2x.png" : undefined}
            imageSquare2={
              (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "/img/image-square-11-2.png"
                : undefined
            }
            resolution={
              screenWidth < 641
                ? "mobile"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "tablet"
                : undefined
            }
            text="FIRST-OF-ITS-KIND ENVIRONMENTAL JUSTICE GUIDANCE"
            text1="We have included "
            text2="an environmental justice chapter"
            text3=" – the first of its kind to be published in California – in its recently-updated CEQA Guidelines. This chapter recognizes the policy imperative to address long-standing and emerging inequities in the siting, design, and development of potential sources of pollution. Apart from mitigating the impacts of pollution, this guidance promotes meaningful participation of community members in all phases of the environmental and land use decision making process."
            type="default"
          />
          <div className="frame-138">
            <div
              className="topics-section-24"
              style={{
                padding:
                  screenWidth < 641
                    ? "40px 24px"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "40px 60px"
                    : undefined,
              }}
            >
              <div
                className="topics-21"
                style={{
                  gap:
                    screenWidth < 641
                      ? "40px"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "36px"
                      : undefined,
                }}
              >
                <div className="div-9">
                  <p
                    className="james-cary-smith-12"
                    style={{
                      fontFamily:
                        screenWidth < 641
                          ? "var(--h3-mobile-font-family)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 641
                          ? "var(--h3-mobile-font-size)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 641
                          ? "var(--h3-mobile-font-style)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 641
                          ? "var(--h3-mobile-font-weight)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 641
                          ? "var(--h3-mobile-letter-spacing)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 641
                          ? "var(--h3-mobile-line-height)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-line-height)"
                          : undefined,
                    }}
                  >
                    US EPA REGIONAL CLIMATE PLANNING GRANT
                  </p>
                  <p
                    className="the-grant-program-15"
                    style={{
                      fontSize:
                        screenWidth < 641
                          ? "15px"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "18px"
                          : undefined,
                      letterSpacing:
                        screenWidth < 641
                          ? "0.60px"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "0.72px"
                          : undefined,
                      lineHeight:
                        screenWidth < 641
                          ? "25.5px"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "30.6px"
                          : undefined,
                    }}
                  >
                    <span
                      className="text-wrapper-39"
                      style={{
                        fontFamily:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-family)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-family)"
                            : undefined,
                        fontSize:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-size)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-size)"
                            : undefined,
                        fontStyle:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-style)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-style)"
                            : undefined,
                        fontWeight:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-weight)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-weight)"
                            : undefined,
                        letterSpacing:
                          screenWidth < 641
                            ? "var(--body-text-mobile-letter-spacing)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-letter-spacing)"
                            : undefined,
                        lineHeight:
                          screenWidth < 641
                            ? "var(--body-text-mobile-line-height)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-line-height)"
                            : undefined,
                      }}
                    >
                      We secured a $1 million grant from the US EPA’s Climate Pollution Reduction Grant Program to lead
                      the development of a regional climate action plan that incorporates input from and reflects the
                      priorities of the region’s local governments and communities. The plan will highlight
                    </span>
                    <span className="text-wrapper-33">
                      {" "}
                      priority greenhouse gas (GHG) reduction measures that benefit frontline communities — communities
                      that are marginalized, underserved, and overburdened by pollution.{" "}
                    </span>
                    <span
                      className="text-wrapper-39"
                      style={{
                        fontFamily:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-family)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-family)"
                            : undefined,
                        fontSize:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-size)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-size)"
                            : undefined,
                        fontStyle:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-style)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-style)"
                            : undefined,
                        fontWeight:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-weight)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-weight)"
                            : undefined,
                        letterSpacing:
                          screenWidth < 641
                            ? "var(--body-text-mobile-letter-spacing)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-letter-spacing)"
                            : undefined,
                        lineHeight:
                          screenWidth < 641
                            ? "var(--body-text-mobile-line-height)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-line-height)"
                            : undefined,
                      }}
                    >
                      Measures included in the plan will be eligible for nationally competitive $4.6 billion in
                      implementation funding. We are leading this effort in collaboration with a regional advisory work
                      group, consisting of staff from Bay Area regional agencies and local governments.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <StatSection
              aligment="centered"
              className="instance-node-20"
              quantity="three"
              resolution="mobile"
              statSetResolutionDesktopClassNameOverride="instance-node-15"
              statSetStatColor2="dark-blue"
              statSetStatColor3="white"
              statSetStatColor4="light-blue"
              statSetStatDivClassName="instance-node-22"
              statSetStatDivClassNameOverride="instance-node-22"
              statSetStatText14="priority greenhouse gas (GHG) reduction measures that benefit frontline communities."
              statSetStatText4="$1M"
              statSetStatText5="in funding was secured through the US EPA&#39;s Climate Protection Grant Program"
              statSetStatText6="67"
              statSetStatText7="residents enrolled in the Bay Area Healthy Homes Initiative"
              statSetStatType1="quote"
              statSetStatTypeQuoteColorClassNameOverride="instance-node-22"
              title={false}
            />
          </div>
          <HightlightBlurb
            className="hightlight-blurb-25"
            detail="image"
            image="top"
            imageSquare={screenWidth < 641 ? "/img/image-square-9.png" : undefined}
            imageSquare2={
              (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "/img/image-square-12-2.png"
                : undefined
            }
            resolution={
              screenWidth < 641
                ? "mobile"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "tablet"
                : undefined
            }
            text="BAY AREA HEALTHY HOMES INITIATIVE"
            text1="We launched the initiative to improve health outcomes and climate resilience in overburdened communities of Contra Costa and Alameda counties in January 2023. The program brings "
            text2="asthma services and home retrofits to address health triggers, improve energy efficiency, and keep outdoor pollution out of the home"
            text3=" through a unique partnership between our agency, the Bay Area Regional Energy Network, county health departments, and a local non-profit. By the end of 2023, the program had enrolled 71 residents in both multifamily and single-family homes."
            type="default"
          />
          <div
            className="topics-section-25"
            style={{
              padding:
                screenWidth < 641
                  ? "60px 24px"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "60px"
                  : undefined,
            }}
          >
            <div
              className="topics-22"
              style={{
                gap:
                  screenWidth < 641
                    ? "40px"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "36px"
                    : undefined,
              }}
            >
              <div className="div-9">
                <p
                  className="james-cary-smith-13"
                  style={{
                    fontFamily:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-family)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-size)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-style)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-weight)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "var(--h3-mobile-letter-spacing)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "var(--h3-mobile-line-height)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-line-height)"
                        : undefined,
                  }}
                >
                  HEAVY-DUTY VEHICLE AND EQUIPMENT ELECTRIC CHARGING INFRASTRUCTURE
                </p>
                <p
                  className="the-grant-program-16"
                  style={{
                    fontSize:
                      screenWidth < 641
                        ? "15px"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "18px"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "0.60px"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "0.72px"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "25.5px"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "30.6px"
                        : undefined,
                  }}
                >
                  <span
                    className="text-wrapper-39"
                    style={{
                      fontFamily:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-family)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-size)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-style)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-weight)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 641
                          ? "var(--body-text-mobile-letter-spacing)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-line-height)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-line-height)"
                          : undefined,
                    }}
                  >
                    This grant program is a competitive solicitation providing funding for electric charging
                    infrastructure for heavy- and medium-duty vehicles and equipment. At least 80 percent of the total
                    funds will be awarded to
                  </span>
                  <span className="text-wrapper-33">
                    {" "}
                    projects that reduce emissions in communities that have been identified through the AB 617 process
                  </span>
                  <span
                    className="text-wrapper-39"
                    style={{
                      fontFamily:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-family)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-size)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-style)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-weight)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 641
                          ? "var(--body-text-mobile-letter-spacing)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-line-height)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-line-height)"
                          : undefined,
                    }}
                  >
                    , such as West Oakland, East Oakland, Richmond-San Pablo, and Bayview Hunters Point, as well as
                    those designated as Disadvantaged Communities and Low-Income Communities.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="hightlight-blurb-26">
            <Stat
              className="instance-node-22"
              color="white"
              resolution="mobile"
              text="$8M"
              text1="was awarded to projects that will reduce emissions from ports in West Oakland and Richmond"
              type="numbers"
            />
            <div className="frame-139">
              <div
                className="topics-23"
                style={{
                  gap:
                    screenWidth < 641
                      ? "40px"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "36px"
                      : undefined,
                }}
              >
                <div className="div-9">
                  <div
                    className="james-cary-smith-14"
                    style={{
                      fontFamily:
                        screenWidth < 641
                          ? "var(--h3-mobile-font-family)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 641
                          ? "var(--h3-mobile-font-size)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 641
                          ? "var(--h3-mobile-font-style)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 641
                          ? "var(--h3-mobile-font-weight)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 641
                          ? "var(--h3-mobile-letter-spacing)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 641
                          ? "var(--h3-mobile-line-height)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--h3-tablet-line-height)"
                          : undefined,
                    }}
                  >
                    CLEAN PORTS
                  </div>
                  <p
                    className="the-grant-program-17"
                    style={{
                      fontSize:
                        screenWidth < 641
                          ? "15px"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "18px"
                          : undefined,
                      letterSpacing:
                        screenWidth < 641
                          ? "0.60px"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "0.72px"
                          : undefined,
                      lineHeight:
                        screenWidth < 641
                          ? "25.5px"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "30.6px"
                          : undefined,
                    }}
                  >
                    <span
                      className="text-wrapper-39"
                      style={{
                        fontFamily:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-family)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-family)"
                            : undefined,
                        fontSize:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-size)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-size)"
                            : undefined,
                        fontStyle:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-style)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-style)"
                            : undefined,
                        fontWeight:
                          screenWidth < 641
                            ? "var(--body-text-mobile-font-weight)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-font-weight)"
                            : undefined,
                        letterSpacing:
                          screenWidth < 641
                            ? "var(--body-text-mobile-letter-spacing)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-letter-spacing)"
                            : undefined,
                        lineHeight:
                          screenWidth < 641
                            ? "var(--body-text-mobile-line-height)"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "var(--body-text-tablet-line-height)"
                            : undefined,
                      }}
                    >
                      We awarded nearly $8 million to projects that will repower two tugboats, five rubber-tired gantry
                      cranes that operate at or near West Oakland and will replace one locomotive that operates in
                      Richmond with Tier 4 and hybrid diesel electric clean technologies.{" "}
                    </span>
                    <span className="text-wrapper-33">
                      The projects are estimated to reduce more than 40 tons of NOx, ROG, and PM per year.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hightlight-blurb-27">
            <div className="frame-139">
              <Topics
                button={false}
                className="instance-node-17"
                textBodyClassName="instance-node-18"
                headerTextClassName={`${screenWidth < 641 && "class-100"} ${
                  ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                  "instance-node-18"
                }`}
                headerText="SCHOOL BUS PROGRAM"
                textBody="We awarded over $15 million in funding to support zero- and low-emission school buses, protecting student health and achieving significant air quality benefits for this highly sensitive group."
              />
            </div>
            <Stat
              className="instance-node-22"
              color="white"
              resolution="mobile"
              text="$15M"
              text1="was awarded to support zero- and low-emission school buses"
              type="numbers"
            />
          </div>
          <div
            className="frame-140"
            style={{
              backgroundImage:
                screenWidth < 641
                  ? "url(/img/frame-19854.png)"
                  : screenWidth >= 641 && screenWidth < 769
                  ? "url(/img/frame-19854-2.png)"
                  : screenWidth >= 769 && screenWidth < 1025
                  ? "url(/img/frame-19854-1.png)"
                  : undefined,
            }}
          >
            <SectionGraph
              chartCaption="z"
              className="section-graph-52"
              graphs="zero"
              resolution={
                screenWidth < 641
                  ? "mobile"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "tablet"
                  : undefined
              }
              subTopicTitleSectionTitleClassName={`${screenWidth < 641 && "class-101"} ${
                ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                "section-graph-36"
              }`}
              subTopicTitleText="2023 EMISSION REDUCTIONS FROM AIR DISTRICT INCENTIVE PROJECTS"
              subTopicTitleTypeDefaultClassNameOverride="section-graph-51"
              title="top"
            />
            <SectionGraph
              chartCaption="no"
              className="section-graph-45"
              graphs="one"
              override={
                <GraphChart
                  className="graph-chart-44"
                  graphChartLineColumns10="two"
                  graphChartLineColumns11="two"
                  graphChartLineColumns13="two"
                  graphChartLineFrameClassName10={`${screenWidth < 641 && "class-103"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "graph-chart-45"
                  }`}
                  graphChartLineLines10="one"
                  graphChartLineLines11="one"
                  graphChartLineLines13="one"
                  graphChartLineResolution6="mobile"
                  graphChartLineResolution7="mobile"
                  graphChartLineResolution8="mobile"
                  graphChartLineResolution9="mobile"
                  graphChartLineSectionTitleClassName14="graph-chart-27"
                  graphChartLineSectionTitleClassName15={`${screenWidth < 641 && "class-104"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "class-105"
                  }`}
                  graphChartLineSectionTitleClassName4="graph-chart-43"
                  graphChartLineSectionTitleClassName7="graph-chart-43"
                  graphChartLineText20="17.2"
                  graphChartLineText21="Oxides of Nitrogen (NOx)"
                  graphChartLineText22="1.9"
                  graphChartLineText23="Reactive Organic Compounds (ROG)"
                  graphChartLineText26="1.2"
                  graphChartLineText27="Particulate Matter (PM10)"
                  graphChartLineText58="$7.01M"
                  graphChartTotalGraphChartLineColumns1="two"
                  graphChartTotalGraphChartLineHasDiv={false}
                  graphChartTotalGraphChartLineLinesColumnsClassName="graph-chart-42"
                  graphChartTotalGraphChartLineSectionTitleClassName5="graph-chart-46"
                  graphChartTotalGraphChartLineText2="20.3"
                  graphChartTotalGraphChartLineText9="Total"
                  graphChartTotalLines1="one"
                  graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                  graphChartTotalResolution="mobile"
                  hasFrame2={false}
                  hasFrame8={false}
                  hasGroup2={false}
                  quantity="one"
                  resolution="desktop"
                  sectionTitleClassName1={`${screenWidth < 641 && "class-106"} ${
                    screenWidth >= 641 && screenWidth < 769 && "class-107"
                  } ${screenWidth >= 769 && screenWidth < 1025 && "class-108"}`}
                  sectionTitleWrapperClassNameOverride={`${screenWidth < 641 && "class-109"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "class-110"
                  }`}
                  text="Estimated Annual Emissions Reduction for the Projects Funded (tons/year)"
                  visible26={false}
                  visible27={false}
                  visible28={false}
                  visible29={false}
                  visible30={false}
                  visible31={false}
                  visible50={false}
                />
              }
              resolution="mobile"
              subTopicTitleResolution={
                screenWidth < 641
                  ? "mobile"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "tablet"
                  : undefined
              }
              subTopicTitleSectionTitleClassNameOverride={`${screenWidth >= 641 && screenWidth < 769 && "class-102"}`}
              subTopicTitleText1="OFF-ROAD EQUIPMENT AND INFRASTRUCTURE"
              subTopicTitleType={
                screenWidth < 641
                  ? "left"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "default"
                  : undefined
              }
              subTopicTitleTypeDefaultClassName="instance-node-17"
              title="with-graph"
            />
            <SectionGraph
              chartCaption="no"
              className="section-graph-45"
              graphs="one"
              override={
                <GraphChart
                  className="graph-chart-44"
                  graphChartLineColumns10="two"
                  graphChartLineColumns11="two"
                  graphChartLineColumns12="two"
                  graphChartLineFrameClassName10={`${screenWidth < 641 && "class-103"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "graph-chart-45"
                  }`}
                  graphChartLineLines10="one"
                  graphChartLineLines11="one"
                  graphChartLineLines12="one"
                  graphChartLineResolution10="mobile"
                  graphChartLineResolution6="mobile"
                  graphChartLineResolution7="mobile"
                  graphChartLineResolution8="mobile"
                  graphChartLineSectionTitleClassName14="graph-chart-27"
                  graphChartLineSectionTitleClassName15={`${screenWidth < 641 && "class-104"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "class-105"
                  }`}
                  graphChartLineSectionTitleClassName4="graph-chart-43"
                  graphChartLineSectionTitleClassName6="graph-chart-43"
                  graphChartLineText20="3.0"
                  graphChartLineText21="NOx"
                  graphChartLineText22="0.3"
                  graphChartLineText23="ROG"
                  graphChartLineText24="0.0"
                  graphChartLineText25="PM10"
                  graphChartLineText58="$21.60M"
                  graphChartTotalGraphChartLineColumns1="two"
                  graphChartTotalGraphChartLineFrameClassName3={`${screenWidth < 641 && "class-103"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "graph-chart-45"
                  }`}
                  graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                  graphChartTotalGraphChartLineSectionTitleClassName5={`${screenWidth < 641 && "class-112"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "graph-chart-45"
                  }`}
                  graphChartTotalGraphChartLineText2="3.3"
                  graphChartTotalGraphChartLineText9="Total"
                  graphChartTotalLines1="one"
                  graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                  graphChartTotalResolution="mobile"
                  hasFrame2={false}
                  hasFrame8={false}
                  hasGroup2={false}
                  quantity="one"
                  resolution="desktop"
                  sectionTitleClassName1={`${screenWidth < 641 && "class-106"} ${
                    screenWidth >= 641 && screenWidth < 769 && "class-107"
                  } ${screenWidth >= 769 && screenWidth < 1025 && "class-108"}`}
                  sectionTitleWrapperClassNameOverride={`${screenWidth < 641 && "class-109"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "class-110"
                  }`}
                  text="Estimated Annual Emissions Reduction for the Projects funded (tons/year)"
                  visible26={false}
                  visible27={false}
                  visible28={false}
                  visible29={false}
                  visible30={false}
                  visible31={false}
                  visible51={false}
                />
              }
              resolution="mobile"
              subTopicTitleResolution={
                screenWidth < 641
                  ? "mobile"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "tablet"
                  : undefined
              }
              subTopicTitleSectionTitleClassNameOverride={`${screenWidth >= 641 && screenWidth < 769 && "class-111"}`}
              subTopicTitleText1="ON-ROAD VEHICLES AND INFRASTRUCTURE"
              subTopicTitleType={
                screenWidth < 641
                  ? "left"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "default"
                  : undefined
              }
              subTopicTitleTypeDefaultClassName="instance-node-17"
              title="with-graph"
            />
            <div className="graphs-carrousel-3">
              <div className="frame-141">
                <SectionGraph
                  chartCaption="no"
                  className="section-graph-53"
                  graphs="one"
                  override={
                    <GraphChart
                      className="graph-chart-44"
                      graphChartLineColumns10="two"
                      graphChartLineColumns11="two"
                      graphChartLineColumns12="two"
                      graphChartLineFrameClassName10={`${screenWidth < 641 && "class-103"} ${
                        ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                        "graph-chart-45"
                      }`}
                      graphChartLineLines10="one"
                      graphChartLineLines11="one"
                      graphChartLineLines12="one"
                      graphChartLineResolution10="mobile"
                      graphChartLineResolution6="mobile"
                      graphChartLineResolution7="mobile"
                      graphChartLineResolution8="mobile"
                      graphChartLineSectionTitleClassName14="graph-chart-27"
                      graphChartLineSectionTitleClassName15={`${screenWidth < 641 && "class-104"} ${
                        ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                        "class-105"
                      }`}
                      graphChartLineSectionTitleClassName4="graph-chart-43"
                      graphChartLineSectionTitleClassName6="graph-chart-43"
                      graphChartLineText20="7.2"
                      graphChartLineText21="NOx"
                      graphChartLineText22="8.9"
                      graphChartLineText23="ROG"
                      graphChartLineText24="22.6"
                      graphChartLineText25="PM10"
                      graphChartLineText58="$1.91M"
                      graphChartTotalGraphChartLineColumns1="two"
                      graphChartTotalGraphChartLineFrameClassName3={`${screenWidth < 641 && "class-103"} ${
                        ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                        "graph-chart-45"
                      }`}
                      graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                      graphChartTotalGraphChartLineSectionTitleClassName5={`${screenWidth < 641 && "class-112"} ${
                        ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                        "graph-chart-45"
                      }`}
                      graphChartTotalGraphChartLineText2="38.7"
                      graphChartTotalGraphChartLineText9="Total"
                      graphChartTotalLines1="one"
                      graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                      graphChartTotalResolution="mobile"
                      hasFrame2={false}
                      hasFrame8={false}
                      hasGroup2={false}
                      quantity="one"
                      resolution="desktop"
                      sectionTitleClassName1={`${screenWidth < 641 && "class-106"} ${
                        screenWidth >= 641 && screenWidth < 769 && "class-107"
                      } ${screenWidth >= 769 && screenWidth < 1025 && "class-108"}`}
                      sectionTitleWrapperClassNameOverride={`${screenWidth < 641 && "class-109"} ${
                        ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                        "class-110"
                      }`}
                      text="Estimated Annual Emissions Reduction for the Projects Funded (tons/year)"
                      visible26={false}
                      visible27={false}
                      visible28={false}
                      visible29={false}
                      visible30={false}
                      visible31={false}
                      visible51={false}
                    />
                  }
                  resolution="mobile"
                  subTopicTitleResolution={
                    screenWidth < 641
                      ? "mobile"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "tablet"
                      : undefined
                  }
                  subTopicTitleSectionTitleClassNameOverride={`${
                    screenWidth >= 641 && screenWidth < 769 && "class-113"
                  }`}
                  subTopicTitleText1="OTHER PROJECTS (INCLUDING TRIP REDUCTION)"
                  subTopicTitleType={
                    screenWidth < 641
                      ? "left"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "default"
                      : undefined
                  }
                  subTopicTitleTypeDefaultClassName="instance-node-17"
                  title="with-graph"
                />
              </div>
            </div>
            <div className="div-9">
              <div className="frame-141">
                <SectionGraph
                  chartCaption="no"
                  className="section-graph-53"
                  graphs="one"
                  override={
                    <GraphChart
                      className="graph-chart-44"
                      graphChartLineColumns10="two"
                      graphChartLineColumns11="two"
                      graphChartLineColumns12="two"
                      graphChartLineFrameClassName10={`${screenWidth < 641 && "class-103"} ${
                        ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                        "graph-chart-45"
                      }`}
                      graphChartLineLines10="one"
                      graphChartLineLines11="one"
                      graphChartLineLines12="one"
                      graphChartLineResolution10="mobile"
                      graphChartLineResolution6="mobile"
                      graphChartLineResolution7="mobile"
                      graphChartLineResolution8="mobile"
                      graphChartLineSectionTitleClassName14="graph-chart-27"
                      graphChartLineSectionTitleClassName15={`${screenWidth < 641 && "class-104"} ${
                        ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                        "class-105"
                      }`}
                      graphChartLineSectionTitleClassName4="graph-chart-43"
                      graphChartLineSectionTitleClassName6="graph-chart-43"
                      graphChartLineText20="12.7"
                      graphChartLineText21="NOx"
                      graphChartLineText22="15.4"
                      graphChartLineText23="ROG"
                      graphChartLineText24="38.1"
                      graphChartLineText25="PM10"
                      graphChartLineText58="$12M"
                      graphChartTotalGraphChartLineColumns1="two"
                      graphChartTotalGraphChartLineFrameClassName3={`${screenWidth < 641 && "class-103"} ${
                        ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                        "graph-chart-45"
                      }`}
                      graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                      graphChartTotalGraphChartLineSectionTitleClassName5={`${screenWidth < 641 && "class-112"} ${
                        ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                        "graph-chart-45"
                      }`}
                      graphChartTotalGraphChartLineText2="66.2"
                      graphChartTotalGraphChartLineText9="Total"
                      graphChartTotalLines1="one"
                      graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                      graphChartTotalResolution="mobile"
                      hasFrame2={false}
                      hasFrame8={false}
                      hasGroup2={false}
                      quantity="one"
                      resolution="desktop"
                      sectionTitleClassName1={`${screenWidth < 641 && "class-106"} ${
                        screenWidth >= 641 && screenWidth < 769 && "class-107"
                      } ${screenWidth >= 769 && screenWidth < 1025 && "class-108"}`}
                      sectionTitleWrapperClassNameOverride={`${screenWidth < 641 && "class-109"} ${
                        ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                        "class-110"
                      }`}
                      text="Estimated Annual Emissions Reduction for the Projects Funded (tons/year)"
                      visible26={false}
                      visible27={false}
                      visible28={false}
                      visible29={false}
                      visible30={false}
                      visible31={false}
                      visible51={false}
                    />
                  }
                  resolution="mobile"
                  subTopicTitleResolution={
                    screenWidth < 641
                      ? "mobile"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "tablet"
                      : undefined
                  }
                  subTopicTitleSectionTitleClassNameOverride={`${
                    screenWidth >= 641 && screenWidth < 769 && "class-114"
                  }`}
                  subTopicTitleText1="CONGESTION MANAGEMENT AGENCY PROJECTS"
                  subTopicTitleType={
                    screenWidth < 641
                      ? "left"
                      : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "default"
                      : undefined
                  }
                  subTopicTitleTypeDefaultClassName="instance-node-17"
                  title="with-graph"
                />
              </div>
            </div>
          </div>
          <HightlightBlurb
            className="hightlight-blurb-28"
            detail="image"
            image="top"
            imageSquare={screenWidth < 641 ? "/img/image-square-10-2x.png" : undefined}
            imageSquare2={
              (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "/img/image-square-13.png"
                : undefined
            }
            resolution={
              screenWidth < 641
                ? "mobile"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "tablet"
                : undefined
            }
            text="DEVELOPING METHODOLOGY AND TOOLS FOR CEQA AIR QUALITY ASSESSMENT"
            text1="We developed a "
            text2="methodology and modeling tools for assessing air quality and health impacts"
            text3=" from exposure to toxic air contaminants and PM2.5 from individual projects. The step-by-step methodology and innovative modeling tools support lead agencies and practitioners in conducting cumulative impact analysis during the CEQA environmental review process, with visualization maps of screening-level cancer risks, chronic hazards, and PM2.5 concentrations from the Bay Area highways and surface streets, freight and passenger rail services, selected railyards, and permitted stationary sources."
            type="default"
          />
          <div
            className="topics-section-26"
            style={{
              padding:
                screenWidth < 641
                  ? "60px 24px 24px"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "60px 60px 24px"
                  : undefined,
            }}
          >
            <div
              className="topics-24"
              style={{
                gap:
                  screenWidth < 641
                    ? "40px"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "36px"
                    : undefined,
              }}
            >
              <div className="div-9">
                <div
                  className="james-cary-smith-15"
                  style={{
                    fontFamily:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-family)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-size)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-style)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-weight)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "var(--h3-mobile-letter-spacing)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "var(--h3-mobile-line-height)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-line-height)"
                        : undefined,
                  }}
                >
                  BUILDING APPLIANCE RULE AMENDMENTS
                </div>
                <p
                  className="the-grant-program-18"
                  style={{
                    fontSize:
                      screenWidth < 641
                        ? "15px"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "18px"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "0.60px"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "0.72px"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "25.5px"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "30.6px"
                        : undefined,
                  }}
                >
                  <span
                    className="text-wrapper-39"
                    style={{
                      fontFamily:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-family)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-size)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-style)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-weight)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 641
                          ? "var(--body-text-mobile-letter-spacing)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-line-height)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-line-height)"
                          : undefined,
                    }}
                  >
                    Amendments to Regulation 9, Rules 4 and 6, were adopted to eliminate emissions of nitrogen oxides,
                    or NOx, from
                  </span>
                  <span className="text-wrapper-33">
                    {" "}
                    residential and commercial natural gas furnaces and water heaters in the Bay Area by requiring new
                    appliances to be zero-NOx.
                  </span>
                  <span
                    className="text-wrapper-39"
                    style={{
                      fontFamily:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-family)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-size)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-style)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-weight)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 641
                          ? "var(--body-text-mobile-letter-spacing)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-line-height)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-line-height)"
                          : undefined,
                    }}
                  >
                    {" "}
                    Collectively, the 1.8 million water heaters and furnaces are one of the largest NOx-emitting
                    stationary sources of air pollution in the region. The rule amendments would apply only to new
                    appliances sold in the Bay Area and will improve overall regional air quality from the outdoor
                    venting of these appliances, lower exposure to particulate matter — particularly in communities of
                    color — and eliminate up to $890 million per year in health impacts due to air pollution exposure.
                    <br />
                    <br />
                    We established a multi-stakeholder Implementation Working Group to track and assess market
                    readiness, technology accessibility, and identify barriers and solutions to an equitable transition.
                    The diverse stakeholders include utility and energy service providers, technology manufacturers,
                    environmental justice and community-based organizations, state agencies, local and regional
                    governments, incentive program administrators, labor unions, contractors, and others.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <ElementImage className="element-image-4" rectangle="/img/rectangle-255-2-3.png" resolution="mobile" />
          <div
            className="topics-section-27"
            style={{
              padding:
                screenWidth < 641
                  ? "100px 24px"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "100px 60px"
                  : undefined,
            }}
          >
            <div
              className="topics-25"
              style={{
                gap:
                  screenWidth < 641
                    ? "40px"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "36px"
                    : undefined,
              }}
            >
              <div className="div-9">
                <p
                  className="james-cary-smith-16"
                  style={{
                    fontFamily:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-family)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-size)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-style)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-weight)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "var(--h3-mobile-letter-spacing)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "var(--h3-mobile-line-height)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-line-height)"
                        : undefined,
                  }}
                >
                  AIR QUALITY VIOLATION DATA TOOL
                </p>
                <p
                  className="the-grant-program-19"
                  style={{
                    fontSize:
                      screenWidth < 641
                        ? "15px"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "18px"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "0.60px"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "0.72px"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "25.5px"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "30.6px"
                        : undefined,
                  }}
                >
                  <span
                    className="text-wrapper-39"
                    style={{
                      fontFamily:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-family)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-size)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-style)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-weight)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 641
                          ? "var(--body-text-mobile-letter-spacing)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-line-height)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-line-height)"
                          : undefined,
                    }}
                  >
                    In September, we launched a notices of violation data tool on our website that provides searchable
                    information of all violations that our agency has issued within the past five years. Members of the
                    public may now access information pertaining to violations and penalties issued by our inspectors.
                    Violations can be sorted by city, zip code and facility name and penalty amount and downloaded for
                    ease of review. This tool serves to
                  </span>
                  <span className="text-wrapper-33">
                    {" "}
                    better inform communities about enforcement activities and streamlines accessibility.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="topics-section-28"
            style={{
              padding:
                screenWidth < 641
                  ? "0px 24px 36px"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "0px 60px 36px"
                  : undefined,
            }}
          >
            <div
              className="topics-26"
              style={{
                gap:
                  screenWidth < 641
                    ? "40px"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "36px"
                    : undefined,
              }}
            >
              <div className="div-9">
                <div
                  className="james-cary-smith-17"
                  style={{
                    fontFamily:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-family)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-size)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-style)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 641
                        ? "var(--h3-mobile-font-weight)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 641
                        ? "var(--h3-mobile-letter-spacing)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 641
                        ? "var(--h3-mobile-line-height)"
                        : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "var(--h3-tablet-line-height)"
                        : undefined,
                  }}
                >
                  CHEMTRADE VIOLATIONS SETTLEMENT
                </div>
                <p className="the-grant-program-20">
                  <span className="text-wrapper-33">
                    We fined Chemtrade over $1.1 million for air quality violations{" "}
                  </span>
                  <span
                    className="text-wrapper-39"
                    style={{
                      fontFamily:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-family)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-size)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-style)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-font-weight)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 641
                          ? "var(--body-text-mobile-letter-spacing)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 641
                          ? "var(--body-text-mobile-line-height)"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "var(--body-text-tablet-line-height)"
                          : undefined,
                    }}
                  >
                    at their sulfuric acid manufacturing plant in Richmond. The seven violations issued primarily
                    involved Chemtrade’s continuous emissions monitoring system, which measures the plant’s sulfur
                    dioxide emissions to ensure the facility complies with permit limits. Chemtrade failed to properly
                    calibrate, operate, and maintain this monitoring system over an eight-year period. This caused the
                    monitoring system to under-report sulfur dioxide emissions by an estimated 33 percent per year on
                    average.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <StatSection
            aligment="centered"
            className="stat-section-29"
            quantity="three"
            resolution="mobile"
            statSetResolutionDesktopClassNameOverride="instance-node-15"
            statSetStatColor2="dark-blue"
            statSetStatColor3="blue"
            statSetStatColor4="white"
            statSetStatDivClassName="instance-node-22"
            statSetStatDivClassNameOverride="instance-node-22"
            statSetStatText4="380"
            statSetStatText5="premature deaths could be prevented by eliminating residential wood burning."
            statSetStatText6="1.8M"
            statSetStatText7="water heaters and furnaces are one of the largest sources of NOx pollution in the Bay Area"
            statSetStatText8="$1.1M"
            statSetStatText9="fine was issued to Chemtrade for air quality violations"
            statSetStatType1="numbers"
            statSetStatTypeQuoteColorClassNameOverride="instance-node-22"
            title={false}
          />
          <div className="frame-142">
            <SectionGraph
              chartCaption="no"
              className="section-graph-54"
              graphs="one"
              override={
                <GraphChart
                  className="instance-node-17"
                  graphChartLineColumns="three"
                  graphChartLineColumns1="three"
                  graphChartLineColumns2="three"
                  graphChartLineColumns26={
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "three"
                      : undefined
                  }
                  graphChartLineColumns27={
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "three"
                      : undefined
                  }
                  graphChartLineColumns28={
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "three"
                      : undefined
                  }
                  graphChartLineColumns29={
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "three"
                      : undefined
                  }
                  graphChartLineColumns3="three"
                  graphChartLineColumns30={
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "three"
                      : undefined
                  }
                  graphChartLineLines="one"
                  graphChartLineLines1="one"
                  graphChartLineLines2="one"
                  graphChartLineLines26="one"
                  graphChartLineLines27="one"
                  graphChartLineLines28="one"
                  graphChartLineLines29="one"
                  graphChartLineLines3="one"
                  graphChartLineLines30="one"
                  graphChartLineText="45.6%"
                  graphChartLineText1="Odor"
                  graphChartLineText2="32.4%"
                  graphChartLineText3="Wood Smoke"
                  graphChartLineText4="7.5%"
                  graphChartLineText5="Dust/Particulates"
                  graphChartLineText59="1,720"
                  graphChartLineText6="4.4%"
                  graphChartLineText60="1,220"
                  graphChartLineText61="283"
                  graphChartLineText62="164"
                  graphChartLineText63="Fire Out/Illegal Outdoor Fires"
                  graphChartLineText64="125"
                  graphChartLineText65="3.3%"
                  graphChartLineText66="Smoke"
                  graphChartLineText67="107"
                  graphChartLineText68="2.8%"
                  graphChartLineText69="Asbestos"
                  graphChartLineText7="Other*"
                  graphChartLineText70="96"
                  graphChartLineText71="2.15%"
                  graphChartLineText72="Idling Commercial Vehicles"
                  graphChartLineText73="30"
                  graphChartLineText74="0.8%"
                  graphChartLineText75="Gas Stations"
                  graphChartLineText76="23"
                  graphChartLineText77="0.6%"
                  graphChartTotalGraphChartLineColumns="three"
                  graphChartTotalGraphChartLineFrameClassName4="graph-chart-45"
                  graphChartTotalGraphChartLineLinesColumnsClassNameOverride="instance-node-17"
                  graphChartTotalGraphChartLineSectionTitleClassName="graph-chart-47"
                  graphChartTotalGraphChartLineText="100%"
                  graphChartTotalGraphChartLineText1="Total"
                  graphChartTotalGraphChartLineText10="3,768"
                  graphChartTotalLines="one"
                  graphChartTotalLinesResolutionClassName="instance-node-17"
                  hasFrame={false}
                  hasFrame9={false}
                  hasGroup={false}
                  quantity="one"
                  resolution="mobile"
                  text1="*includes flaring, generators, and unpermitted sources"
                  visible={false}
                  visible6={false}
                />
              }
              resolution="mobile"
              subTopicTitleResolution={
                screenWidth < 641
                  ? "mobile"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "tablet"
                  : undefined
              }
              subTopicTitleText1="AIR POLLUTION COMPLAINTS"
              subTopicTitleType={
                screenWidth < 641
                  ? "left"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "default"
                  : undefined
              }
              subTopicTitleTypeDefaultClassName="instance-node-17"
              title="with-graph"
            />
            <SectionGraph
              chartCaption="no"
              className="section-graph-54"
              graphs="one"
              override={
                <GraphChart
                  className="instance-node-17"
                  graphChartLineColumns="two"
                  graphChartLineColumns1="two"
                  graphChartLineColumns2="two"
                  graphChartLineColumns26="two"
                  graphChartLineColumns27="two"
                  graphChartLineColumns28="two"
                  graphChartLineColumns29="two"
                  graphChartLineColumns3="two"
                  graphChartLineColumns30="two"
                  graphChartLineLines="one"
                  graphChartLineLines1="one"
                  graphChartLineLines2="one"
                  graphChartLineLines26="one"
                  graphChartLineLines27="one"
                  graphChartLineLines28="one"
                  graphChartLineLines29="one"
                  graphChartLineLines3="one"
                  graphChartLineLines30="one"
                  graphChartLineText="4,755"
                  graphChartLineText1="Source Inspections"
                  graphChartLineText2="3,768"
                  graphChartLineText3="Air Pollution Complaints (excludes smoking vehicles)"
                  graphChartLineText4="965"
                  graphChartLineText5="Gasoline Dispensing Facility Inspections"
                  graphChartLineText6="2,070"
                  graphChartLineText63="Reportable Compliance Activities"
                  graphChartLineText65="734"
                  graphChartLineText66="Diesel Compliance and Grant Inspections"
                  graphChartLineText68="125"
                  graphChartLineText69="Portable Equipment Registration Program (PERP) Inspections"
                  graphChartLineText7="Asbestos Inspections"
                  graphChartLineText71="7"
                  graphChartLineText72="Open Burn Inspections"
                  graphChartLineText74="4"
                  graphChartLineText75="Naturally Occurring Asbestos (NOA) Inspections"
                  graphChartLineText77="549"
                  graphChartTotalGraphChartLineColumns="two"
                  graphChartTotalGraphChartLineFrameClassName4="graph-chart-45"
                  graphChartTotalGraphChartLineLinesColumnsClassNameOverride="instance-node-17"
                  graphChartTotalGraphChartLineSectionTitleClassName="graph-chart-47"
                  graphChartTotalGraphChartLineText="12,977"
                  graphChartTotalGraphChartLineText1="Total"
                  graphChartTotalLines="one"
                  graphChartTotalLinesResolutionClassName="instance-node-17"
                  hasFrame={false}
                  hasFrame10={false}
                  hasFrame9={false}
                  hasGroup={false}
                  quantity="one"
                  resolution="mobile"
                  visible={false}
                  visible6={false}
                />
              }
              resolution="mobile"
              subTopicTitleResolution={
                screenWidth < 641
                  ? "mobile"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "tablet"
                  : undefined
              }
              subTopicTitleText1="COMPLIANCE INSPECTIONS"
              subTopicTitleType={
                screenWidth < 641
                  ? "left"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "default"
                  : undefined
              }
              subTopicTitleTypeDefaultClassName="instance-node-17"
              title="with-graph"
            />
            <SectionGraph
              chartCaption="no"
              className="section-graph-54"
              graphs="one"
              override={
                <GraphChart
                  className="instance-node-17"
                  graphChartLineColumns="two"
                  graphChartLineColumns1="two"
                  graphChartLineLines="one"
                  graphChartLineLines1="one"
                  graphChartLineText="$3,403,279"
                  graphChartLineText1="Civil Penalties"
                  graphChartLineText2="421"
                  graphChartLineText3="Violations Resolved with Penalties"
                  hasFrame={false}
                  hasFrame10={false}
                  hasFrame9={false}
                  hasGroup={false}
                  quantity="one"
                  resolution="mobile"
                  visible={false}
                  visible1={false}
                  visible2={false}
                  visible3={false}
                  visible4={false}
                  visible5={false}
                  visible52={false}
                  visible53={false}
                  visible54={false}
                  visible6={false}
                />
              }
              resolution="mobile"
              subTopicTitleResolution={
                screenWidth < 641
                  ? "mobile"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "tablet"
                  : undefined
              }
              subTopicTitleText1="CIVIL PENALTIES AND VIOLATIONS"
              subTopicTitleType={
                screenWidth < 641
                  ? "left"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "default"
                  : undefined
              }
              subTopicTitleTypeDefaultClassName="instance-node-17"
              title="with-graph"
            />
            <div className="section-graph-55">
              <SubTopicTitle
                className="instance-node-17"
                resolution={
                  screenWidth < 641
                    ? "mobile"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "tablet"
                    : undefined
                }
                text="RULEMAKING ACTIVITY"
                type={
                  screenWidth < 641
                    ? "left"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "default"
                    : undefined
                }
              />
              <div className="graph-chart-48">
                <div className="div-9">
                  <div className="frame-143">
                    <div
                      className="group-60"
                      style={{
                        height:
                          screenWidth < 641
                            ? "50px"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "25px"
                            : undefined,
                      }}
                    >
                      <div
                        className="section-title-182"
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
                        Rules Adopted or Amended
                      </div>
                    </div>
                  </div>
                  <div className="frame-144">
                    <div className="frame-145">
                      <div className="group-61">
                        <div
                          className="section-title-183"
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
                          December 20, 2023
                        </div>
                      </div>
                    </div>
                    <div
                      className="group-62"
                      style={{
                        height:
                          screenWidth < 641
                            ? "104px"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "52px"
                            : undefined,
                      }}
                    >
                      <div
                        className="group-63"
                        style={{
                          height:
                            screenWidth < 641
                              ? "104px"
                              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                              ? "52px"
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
                          className="section-title-184"
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
                          Regulation 8: Organic Compounds, Rule 8: Wastewater Collection and Separation Systems
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-144">
                    <div className="frame-145">
                      <div className="group-61">
                        <div
                          className="section-title-185"
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
                          June 7, 2023
                        </div>
                      </div>
                    </div>
                    <div className="group-64">
                      <div
                        className="group-65"
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
                          className="section-title-186"
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
                          Regulation 3: Fees
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-144">
                    <div className="frame-145">
                      <div className="group-61">
                        <div
                          className="section-title-187"
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
                          March 15, 2023
                        </div>
                      </div>
                    </div>
                    <div
                      className="group-66"
                      style={{
                        height:
                          screenWidth < 641
                            ? "208px"
                            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                            ? "78px"
                            : undefined,
                      }}
                    >
                      <div
                        className="group-67"
                        style={{
                          height:
                            screenWidth < 641
                              ? "208px"
                              : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                              ? "78px"
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
                          className="section-title-188"
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
                          Regulation 9: Inorganic Gaseous Pollutants, Rule 4: Nitrogen Oxides from Fan Type Central
                          Furnaces, and Rule 6: Nitrogen Oxides Emissions from Natural Gas-Fired Boilers and Water
                          Heaters
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-146">
            <SectionGraph
              chartCaption="z"
              className={`${screenWidth < 641 && "class-115"} ${
                ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && "class-116"
              }`}
              graphs="zero"
              resolution={
                screenWidth < 641
                  ? "mobile"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "tablet"
                  : undefined
              }
              subTopicTitleSectionTitleClassName={`${screenWidth < 641 && "class-101"} ${
                ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                "section-graph-36"
              }`}
              subTopicTitleText="PERMITTING ACTIVITY"
              subTopicTitleTypeDefaultClassNameOverride="instance-node-17"
              title="top"
            />
            <SectionGraph
              chartCaption="no"
              className="section-graph-45"
              graphs="one"
              hasFrame={false}
              override={
                <GraphChart
                  className="graph-chart-44"
                  graphChartLineColumns10="two"
                  graphChartLineColumns11="two"
                  graphChartLineColumns12="two"
                  graphChartLineColumns13="two"
                  graphChartLineLines10="one"
                  graphChartLineLines11="one"
                  graphChartLineLines12="one"
                  graphChartLineLines13="one"
                  graphChartLineResolution10="mobile"
                  graphChartLineResolution7="mobile"
                  graphChartLineResolution8="mobile"
                  graphChartLineResolution9="mobile"
                  graphChartLineText20="5"
                  graphChartLineText21="Refineries"
                  graphChartLineText22="73"
                  graphChartLineText23="Major Facilities (excludes refineries)"
                  graphChartLineText24="2,264"
                  graphChartLineText25="Gasoline Dispensing Facilities"
                  graphChartLineText26="8,090"
                  graphChartLineText27="All Other Facilities"
                  graphChartTotalGraphChartLineColumns6="two"
                  graphChartTotalGraphChartLineHasFrame1={false}
                  graphChartTotalGraphChartLineSectionTitleClassName6="graph-chart-47"
                  graphChartTotalGraphChartLineSectionTitleClassName7="graph-chart-47"
                  graphChartTotalGraphChartLineText11="10,432"
                  graphChartTotalGraphChartLineText12="23,325"
                  graphChartTotalGraphChartLineText13="Total Permitted Facilities"
                  graphChartTotalGraphChartLineText14="Permitted Devices and Operations"
                  graphChartTotalGraphChartLineVisible={false}
                  graphChartTotalLines1="two"
                  graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                  graphChartTotalResolution="mobile"
                  hasFrame2={false}
                  hasFrame8={false}
                  hasGroup2={false}
                  quantity="one"
                  resolution="desktop"
                  sectionTitleClassName1={`${screenWidth < 641 && "class-106"} ${
                    screenWidth >= 641 && screenWidth < 769 && "class-107"
                  } ${screenWidth >= 769 && screenWidth < 1025 && "class-108"}`}
                  sectionTitleWrapperClassNameOverride={`${screenWidth < 641 && "class-110"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "class-117"
                  }`}
                  text="Bay Area Permitted Facilities"
                  visible25={false}
                  visible26={false}
                  visible27={false}
                  visible28={false}
                  visible29={false}
                  visible30={false}
                  visible31={false}
                />
              }
              resolution="mobile"
              title="with-graph"
            />
            <SectionGraph
              chartCaption="no"
              className="section-graph-45"
              graphs="one"
              hasFrame={false}
              override={
                <GraphChart
                  className="graph-chart-49"
                  graphChartLineColumns10="two"
                  graphChartLineColumns11="two"
                  graphChartLineColumns12="two"
                  graphChartLineLines10="one"
                  graphChartLineLines11="one"
                  graphChartLineLines12="one"
                  graphChartLineResolution10="mobile"
                  graphChartLineResolution7="mobile"
                  graphChartLineResolution8="mobile"
                  graphChartLineText20="47"
                  graphChartLineText21="Major Source Review (Title V)"
                  graphChartLineText22="907"
                  graphChartLineText23="New Source Review (NSR)"
                  graphChartLineText24="42"
                  graphChartLineText25="All other applications"
                  graphChartTotalGraphChartLineColumns1="two"
                  graphChartTotalGraphChartLineHasDiv={false}
                  graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                  graphChartTotalGraphChartLineSectionTitleClassName5="graph-chart-47"
                  graphChartTotalGraphChartLineText2="996"
                  graphChartTotalGraphChartLineText9="Total New Permits Applications"
                  graphChartTotalLines1="one"
                  graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                  graphChartTotalResolution="mobile"
                  hasFrame2={false}
                  hasFrame8={false}
                  hasGroup2={false}
                  quantity="one"
                  resolution="desktop"
                  sectionTitleClassName1={`${screenWidth < 641 && "class-106"} ${
                    screenWidth >= 641 && screenWidth < 769 && "class-107"
                  } ${screenWidth >= 769 && screenWidth < 1025 && "class-108"}`}
                  sectionTitleWrapperClassNameOverride={`${screenWidth < 641 && "class-110"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "class-117"
                  }`}
                  text="New Permit Applications"
                  visible25={false}
                  visible26={false}
                  visible27={false}
                  visible28={false}
                  visible29={false}
                  visible30={false}
                  visible31={false}
                  visible51={false}
                />
              }
              resolution="mobile"
              title="with-graph"
            />
            <SectionGraph
              chartCaption="no"
              className="section-graph-45"
              graphs="one"
              hasFrame={false}
              override={
                <GraphChart
                  className="graph-chart-49"
                  graphChartLineColumns10="two"
                  graphChartLineColumns11="two"
                  graphChartLineColumns12="two"
                  graphChartLineLines10="one"
                  graphChartLineLines11="one"
                  graphChartLineLines12="one"
                  graphChartLineResolution10="mobile"
                  graphChartLineResolution7="mobile"
                  graphChartLineResolution8="mobile"
                  graphChartLineText20="243"
                  graphChartLineText21="Diesel Engines"
                  graphChartLineText22="8"
                  graphChartLineText23="Gasoline Dispensing Facilities"
                  graphChartLineText24="56"
                  graphChartLineText25="Other Commercial/Industrial Facilities"
                  graphChartTotalGraphChartLineColumns1="two"
                  graphChartTotalGraphChartLineHasDiv={false}
                  graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                  graphChartTotalGraphChartLineSectionTitleClassName5="graph-chart-47"
                  graphChartTotalGraphChartLineText2="307"
                  graphChartTotalGraphChartLineText9="Total Health Risk Assessments"
                  graphChartTotalLines1="one"
                  graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                  graphChartTotalResolution="mobile"
                  hasFrame2={false}
                  hasFrame8={false}
                  hasGroup2={false}
                  quantity="one"
                  resolution="desktop"
                  sectionTitleClassName1={`${screenWidth < 641 && "class-106"} ${
                    screenWidth >= 641 && screenWidth < 769 && "class-107"
                  } ${screenWidth >= 769 && screenWidth < 1025 && "class-108"}`}
                  sectionTitleWrapperClassNameOverride={`${screenWidth < 641 && "class-110"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "class-117"
                  }`}
                  text="Application Health Risk Assessments"
                  visible25={false}
                  visible26={false}
                  visible27={false}
                  visible28={false}
                  visible29={false}
                  visible30={false}
                  visible31={false}
                  visible51={false}
                />
              }
              resolution="mobile"
              title="with-graph"
            />
            <SectionGraph
              chartCaption="no"
              className="instance-node-17"
              graphs="one"
              hasFrame={false}
              override={
                <GraphChart
                  className="graph-chart-49"
                  graphChartLineColumns10="two"
                  graphChartLineColumns11="two"
                  graphChartLineColumns12="two"
                  graphChartLineLines10="one"
                  graphChartLineLines11="one"
                  graphChartLineLines12="one"
                  graphChartLineResolution10="mobile"
                  graphChartLineResolution7="mobile"
                  graphChartLineResolution8="mobile"
                  graphChartLineText20="0"
                  graphChartLineText21="Preliminary"
                  graphChartLineText22="0"
                  graphChartLineText23="Draft"
                  graphChartLineText24="0"
                  graphChartLineText25="Final"
                  graphChartTotalGraphChartLineColumns1="two"
                  graphChartTotalGraphChartLineHasDiv={false}
                  graphChartTotalGraphChartLineLinesColumnsClassName="instance-node-17"
                  graphChartTotalGraphChartLineSectionTitleClassName5="graph-chart-47"
                  graphChartTotalGraphChartLineText2="0"
                  graphChartTotalGraphChartLineText9="Total Facility Health Risk Assessments"
                  graphChartTotalLines1="one"
                  graphChartTotalLinesResolutionClassNameOverride="instance-node-17"
                  graphChartTotalResolution="mobile"
                  hasFrame2={false}
                  hasFrame8={false}
                  hasGroup2={false}
                  quantity="one"
                  resolution="desktop"
                  sectionTitleClassName1={`${screenWidth < 641 && "class-106"} ${
                    screenWidth >= 641 && screenWidth < 769 && "class-107"
                  } ${screenWidth >= 769 && screenWidth < 1025 && "class-108"}`}
                  sectionTitleWrapperClassNameOverride={`${screenWidth < 641 && "class-110"} ${
                    ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                    "class-117"
                  }`}
                  text="Facility Health Risk Assessments"
                  visible25={false}
                  visible26={false}
                  visible27={false}
                  visible28={false}
                  visible29={false}
                  visible30={false}
                  visible31={false}
                  visible51={false}
                />
              }
              resolution="mobile"
              title="with-graph"
            />
          </div>
          <div className="section-graph-56">
            <SubTopicTitle
              className="instance-node-17"
              resolution={
                screenWidth < 641
                  ? "mobile"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "tablet"
                  : undefined
              }
              text="SOURCE TEST ACTIVITY"
              type={
                screenWidth < 641
                  ? "left"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "default"
                  : undefined
              }
            />
            <div className="graph-chart-50">
              <div className="div-9">
                <div className="frame-143">
                  <div
                    className="group-68"
                    style={{
                      height:
                        screenWidth < 641
                          ? "75px"
                          : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                          ? "25px"
                          : undefined,
                    }}
                  >
                    <p
                      className="section-title-189"
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
                      Number of Source Tests and Reviews in 2023
                    </p>
                  </div>
                </div>
                <div className="frame-147">
                  <GraphChartLine
                    className="instance-node-17"
                    columns="two"
                    frameClassName1="instance-node-18"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    sectionTitleClassName1="instance-node-18"
                    sectionTitleClassName2="instance-node-18"
                    sectionTitleClassName3="instance-node-18"
                    text="100%"
                    text1="Refinery Source Tests"
                    text5={
                      (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "Compliance Rate"
                        : undefined
                    }
                  />
                  <GraphChartLine
                    className="instance-node-17"
                    columns="two"
                    frameClassName1="instance-node-18"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    sectionTitleClassName1="instance-node-18"
                    sectionTitleClassName2="instance-node-18"
                    sectionTitleClassName3="instance-node-18"
                    text="94.7%"
                    text1="Title V Source Tests (excludes refineries)"
                    text5={
                      (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "Compliance Rate"
                        : undefined
                    }
                  />
                  <GraphChartLine
                    className="instance-node-17"
                    columns="two"
                    frameClassName1="instance-node-18"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    sectionTitleClassName1="instance-node-18"
                    sectionTitleClassName2="instance-node-18"
                    sectionTitleClassName3="instance-node-18"
                    text="92.3%"
                    text1="Non-Title V Source Tests"
                    text5={
                      (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "Compliance Rate"
                        : undefined
                    }
                  />
                  <GraphChartLine
                    className="instance-node-17"
                    columns="two"
                    frameClassName1="instance-node-18"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    sectionTitleClassName1="instance-node-18"
                    sectionTitleClassName2="instance-node-18"
                    sectionTitleClassName3="instance-node-18"
                    text="66.7%"
                    text1="Synthetic Minor Source Tests"
                    text5={
                      (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "Compliance Rate"
                        : undefined
                    }
                  />
                  <GraphChartLine
                    className="instance-node-17"
                    columns="two"
                    frameClassName1="instance-node-18"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    sectionTitleClassName1="instance-node-18"
                    sectionTitleClassName2="instance-node-18"
                    sectionTitleClassName3="instance-node-18"
                    text="97.6%"
                    text1="Gasoline Cargo Tanks"
                    text5={
                      (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                        ? "Compliance Rate"
                        : undefined
                    }
                  />
                  <GraphChartLine
                    className="instance-node-17"
                    columns="two"
                    frameClassName1="instance-node-18"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    sectionTitleClassName1="instance-node-18"
                    sectionTitleClassName2="instance-node-18"
                    sectionTitleClassName3="instance-node-18"
                    text="88.8%"
                    text1="Other Facility Source Tests Reviewed in 2023 (contractors)"
                    text5="Compliance Rate (reviewed and approved)"
                  />
                  <GraphChartLine
                    className="instance-node-17"
                    columns="two"
                    frameClassName1="instance-node-18"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    sectionTitleClassName1="instance-node-18"
                    sectionTitleClassName2="instance-node-18"
                    sectionTitleClassName3="instance-node-18"
                    text="42.9%"
                    text1="Other Facility Source Tests Disapproved or Invalidated in 2023 (contractors)"
                    text5="Disapproval Rate (reviewed)"
                  />
                  <GraphChartLine
                    className="instance-node-17"
                    columns="two"
                    frameClassName1="instance-node-18"
                    hasGraphChartLine={false}
                    input="default"
                    lines="two"
                    resolution="mobile"
                    sectionTitleClassName1="instance-node-18"
                    text="196"
                    text1="Other Facility Source Test Protocols Reviewed in 2023 (contractors)"
                  />
                  <GraphChartLine
                    className="instance-node-17"
                    columns="two"
                    frameClassName1="instance-node-18"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    sectionTitleClassName1="instance-node-18"
                    sectionTitleClassName2="instance-node-18"
                    sectionTitleClassName3="instance-node-18"
                    text="26.9%"
                    text1="Facility CEMS Excess Emission Reports Reviewed in 2023 (reviewed)"
                    text5="Compliance Rate (reviewed)"
                  />
                  <GraphChartLine
                    className="instance-node-17"
                    columns="two"
                    frameClassName1="instance-node-18"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    sectionTitleClassName1="instance-node-18"
                    sectionTitleClassName2="instance-node-18"
                    sectionTitleClassName3="instance-node-18"
                    text="53.3%"
                    text1="Gasoline Dispensing Facilities (GDF)"
                    text5="Compliance Rate"
                  />
                  <GraphChartLine
                    className="instance-node-17"
                    columns="two"
                    frameClassName1="instance-node-18"
                    input="default"
                    lines="two"
                    resolution="mobile"
                    sectionTitleClassName1="instance-node-18"
                    sectionTitleClassName2="instance-node-18"
                    sectionTitleClassName3="instance-node-18"
                    text="99.7%"
                    text1="Other GDF Source Tests (contractors)"
                    text5="Compliance Rate"
                  />
                </div>
                <div className="frame-148">
                  <GraphChartTotal
                    className="graph-chart-total-3"
                    graphChartLineFrameClassName1={`${screenWidth < 641 && "class-103"} ${
                      ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                      "graph-chart-45"
                    }`}
                    graphChartLineGraphChartLineClassNameOverride="graph-chart-total-5"
                    graphChartLineHasSectionTitle={false}
                    graphChartLineLinesColumnsClassNameOverride="graph-chart-total-4"
                    graphChartLineSectionTitleClassName3="instance-node-18"
                    graphChartLineSectionTitleClassName4={`${screenWidth < 641 && "class-118"} ${
                      ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                      "class-119"
                    }`}
                    graphChartLineText7="Total Source Tests"
                    graphChartLineText8="16,318"
                    lines="three"
                    resolution="mobile"
                    visible={false}
                    visible1={false}
                  />
                  <div className="graph-chart-line-wrapper">
                    <div className="graph-chart-line-24">
                      <div className="frame-149">
                        <div className="div-10">
                          <p className="section-title-190">Total Source Test Related Violations</p>
                        </div>
                      </div>
                      <div className="frame-150">
                        <div className="section-title-191">134</div>
                      </div>
                    </div>
                  </div>
                  <GraphChartTotal
                    className="graph-chart-total-6"
                    graphChartLineFrameClassName1={`${screenWidth < 641 && "class-103"} ${
                      ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                      "graph-chart-45"
                    }`}
                    graphChartLineGraphChartLineClassNameOverride="graph-chart-total-5"
                    graphChartLineHasSectionTitle={false}
                    graphChartLineLinesColumnsClassNameOverride="graph-chart-total-4"
                    graphChartLineSectionTitleClassName3="instance-node-18"
                    graphChartLineSectionTitleClassName4={`${screenWidth < 641 && "class-118"} ${
                      ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                      "class-119"
                    }`}
                    graphChartLineText7="Compliance Rate"
                    graphChartLineText8="99.2%"
                    lines="three"
                    resolution="mobile"
                    visible={false}
                    visible1={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <InternalMenu
            arrowElementTypeBack="/img/arrow-element.png"
            arrowElementTypeForward="/img/arrow-element-1.png"
            className="internal-menu-5"
            resolution="mobile"
          />
        </>
      )}
    </div>
  );
};

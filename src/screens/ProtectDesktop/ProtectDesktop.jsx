import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Arrows } from "../../components/Arrows";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HightlightBlurb } from "../../components/HightlightBlurb";
import { InternalMenu } from "../../components/InternalMenu";
import { OpeningSection } from "../../components/OpeningSection";
import { SectionGraph } from "../../components/SectionGraph";
import { Stat } from "../../components/Stat";
import { StatSection } from "../../components/StatSection";
import { TitleSection } from "../../components/TitleSection";
import { Topics } from "../../components/Topics";
import "./style.css";

export const ProtectDesktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="PROTECT-DESKTOP"
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
        overflow: screenWidth >= 1025 || (screenWidth >= 769 && screenWidth < 1025) ? "hidden" : undefined,
      }}
    >
      {((screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025) ||
        screenWidth < 641) && (
        <TitleSection
          blockOfTextElementAnnualReportClassName="title-section-20"
          blockOfTextResolutionMobileClassName="title-section-24"
          blockOfTextSectionTitleClassName="title-section-22"
          blockOfTextText="PROTECT"
          blockOfTextText1="HOW ARE WE CHAMPIONING LEGISLATION TO PROTECT AIR QUALITY?"
          className="title-section-21"
          frameClassName="title-section-23"
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

      {screenWidth < 641 && (
        <OpeningSection
          className="opening-section-8"
          font="opening"
          headline="large"
          resolution="mobile"
          text="FROM THE STATE CAPITOL"
          text1="Statewide 2023 funding that will cover several of our programs:"
        />
      )}

      {screenWidth >= 1025 && (
        <TitleSection
          blockOfTextElementAnnualReportClassName="title-section-26"
          blockOfTextResolutionMobileClassName="title-section-28"
          blockOfTextSectionTitleClassName="title-section-27"
          blockOfTextSubtitle="two-lines"
          blockOfTextText="PROTECT"
          blockOfTextText4="HOW ARE WE CHAMPIONING LEGISLATION TO PROTECT AIR QUALITY?"
          className="title-section-25"
          frameClassName="title-section-23"
          layout="img-l"
          resolution="desktop"
        />
      )}

      <div
        className="opening-section-9"
        style={{
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
              ? "90px 24px 50px"
              : screenWidth < 641
              ? "0px 0px 100px"
              : screenWidth >= 1025
              ? "160px 0px 36px 100px"
              : undefined,
          zIndex:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
              ? "10"
              : screenWidth >= 1025 || screenWidth < 641
              ? "9"
              : undefined,
        }}
      >
        {(screenWidth >= 1025 ||
          (screenWidth >= 641 && screenWidth < 769) ||
          (screenWidth >= 769 && screenWidth < 1025)) && (
          <div
            className="opening-text-6"
            style={{
              alignSelf:
                (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "stretch"
                  : undefined,
              display:
                (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "flex"
                  : screenWidth >= 1025
                  ? "inline-flex"
                  : undefined,
              width:
                (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "100%"
                  : undefined,
            }}
          >
            <div
              className="frame-114"
              style={{
                alignSelf:
                  (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "stretch"
                    : undefined,
                display:
                  (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "flex"
                    : screenWidth >= 1025
                    ? "inline-flex"
                    : undefined,
                width:
                  (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "100%"
                    : undefined,
              }}
            >
              <div
                className="AB-community-7"
                style={{
                  alignSelf:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "stretch"
                      : undefined,
                  fontFamily:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h2-tablet-font-family)"
                      : screenWidth >= 1025
                      ? "var(--h2-desktop-font-family)"
                      : undefined,
                  fontSize:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h2-tablet-font-size)"
                      : screenWidth >= 1025
                      ? "var(--h2-desktop-font-size)"
                      : undefined,
                  fontStyle:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h2-tablet-font-style)"
                      : screenWidth >= 1025
                      ? "var(--h2-desktop-font-style)"
                      : undefined,
                  fontWeight:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h2-tablet-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--h2-desktop-font-weight)"
                      : undefined,
                  letterSpacing:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h2-tablet-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--h2-desktop-letter-spacing)"
                      : undefined,
                  lineHeight:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--h2-tablet-line-height)"
                      : screenWidth >= 1025
                      ? "var(--h2-desktop-line-height)"
                      : undefined,
                  width: screenWidth >= 1025 ? "841px" : undefined,
                }}
              >
                FROM THE STATE CAPITOL
              </div>
              <p
                className="we-continued-to-work-8"
                style={{
                  alignSelf:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "stretch"
                      : undefined,
                  fontFamily:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-family)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-family)"
                      : undefined,
                  fontSize:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-size)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-size)"
                      : undefined,
                  fontStyle:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-style)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-style)"
                      : undefined,
                  fontWeight:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-font-weight)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-font-weight)"
                      : undefined,
                  letterSpacing:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-letter-spacing)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-letter-spacing)"
                      : undefined,
                  lineHeight:
                    (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                      ? "var(--pull-quote-tablet-line-height)"
                      : screenWidth >= 1025
                      ? "var(--pull-quote-desktop-line-height)"
                      : undefined,
                  width: screenWidth >= 1025 ? "855px" : undefined,
                }}
              >
                Statewide 2023 funding that will cover several of our programs:
              </p>
            </div>
          </div>
        )}

        {screenWidth < 641 && (
          <>
            <div className="frame-115">
              <div className="frame-116">
                <SectionGraph
                  chartCaption="z"
                  className="section-graph-26"
                  graphs="zero"
                  resolution="desktop"
                  subTopicTitleSectionTitleClassName="section-graph-28"
                  subTopicTitleText="AB 617 STATEWIDE FUNDING"
                  subTopicTitleTypeDefaultClassNameOverride="section-graph-27"
                  title="top"
                />
                <StatSection
                  aligment="centered"
                  className="stat-section-7"
                  quantity="three"
                  resolution="mobile"
                  statSetResolutionDesktopClassNameOverride="stat-section-10"
                  statSetStatColor2="dark-blue"
                  statSetStatColor3="light-blue"
                  statSetStatColor4="green"
                  statSetStatDivClassName="stat-section-9"
                  statSetStatDivClassNameOverride="stat-section-9"
                  statSetStatText4="$60M"
                  statSetStatText5="for implementation"
                  statSetStatText6="$234M"
                  statSetStatText7="For incentives"
                  statSetStatText8="$6M"
                  statSetStatText9="Community grants"
                  statSetStatType1="numbers"
                  statSetStatTypeQuoteColorClassNameOverride="stat-section-8"
                  title={false}
                />
              </div>
              <div className="frame-116">
                <div className="topics-section-15">
                  <Topics
                    button={false}
                    className="instance-node-13"
                    divClassNameOverride="topics-14"
                    hasJamesCarySmith={false}
                    headline="medium"
                    resolution="desktop"
                    text1="From this funding, we are expecting to receive:"
                  />
                </div>
                <StatSection
                  aligment="centered"
                  className="stat-section-12"
                  quantity="two"
                  resolution="mobile"
                  statSetResolutionDesktopClassNameOverride="stat-section-10"
                  statSetStatColor5="light-blue"
                  statSetStatText10="For our incentive programs"
                  statSetStatText11="For implementation"
                  statSetStatText12="$11M"
                  statSetStatText13="~$33M"
                  statSetStatTypeNumbersColorClassName1="instance-node-14"
                  statSetStatTypeNumbersColorClassName2="stat-section-11"
                  title={false}
                />
              </div>
            </div>
            <div className="stat-set-wrapper">
              <div className="stat-set-2">
                <div className="stat-2">
                  <div className="section-title-173">$80M</div>
                  <p className="section-title-174">
                    <span className="text-wrapper-31">
                      for a suite of statewide equity transportation programs, including, but not limited to, the{" "}
                    </span>
                    <span className="text-wrapper-32">Clean Cars For All Program.</span>
                  </p>
                </div>
                <div className="stat-3">
                  <div className="section-title-175">$310.5M</div>
                  <p className="section-title-176">
                    <span className="text-wrapper-31">for the </span>
                    <span className="text-wrapper-32">Equitable Building Decarbonization Program.</span>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {(screenWidth >= 1025 ||
        (screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025)) && (
        <div
          className="frame-117"
          style={{
            padding:
              screenWidth >= 1025
                ? "0px 30px 60px 240px"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "0px 0px 100px"
                : undefined,
            zIndex:
              screenWidth >= 1025
                ? "8"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "9"
                : undefined,
          }}
        >
          {screenWidth >= 1025 && (
            <div className="frame-118">
              <div className="frame-116">
                <SectionGraph
                  chartCaption="z"
                  className="section-graph-26"
                  graphs="zero"
                  resolution="desktop"
                  subTopicTitleSectionTitleClassName="section-graph-30"
                  subTopicTitleText="AB 617 STATEWIDE FUNDING"
                  subTopicTitleTypeDefaultClassNameOverride="section-graph-29"
                  title="top"
                />
                <StatSection
                  aligment="centered"
                  className="stat-section-12"
                  quantity="three"
                  resolution="desktop"
                  statSetResolutionDesktopClassNameOverride="stat-section-10"
                  statSetStatColor2="dark-blue"
                  statSetStatColor3="light-blue"
                  statSetStatColor4="green"
                  statSetStatDivClassName="stat-section-15"
                  statSetStatDivClassNameOverride="stat-section-15"
                  statSetStatSectionTitleClassName1="stat-section-13"
                  statSetStatSectionTitleClassName2="stat-section-14"
                  statSetStatText4="$60M"
                  statSetStatText5="for implementation"
                  statSetStatText6="$234M"
                  statSetStatText7="For incentives"
                  statSetStatText8="$6M"
                  statSetStatText9="Community grants"
                  statSetStatType1="numbers"
                  statSetStatTypeQuoteColorClassNameOverride="stat-section-15"
                  title={false}
                />
              </div>
              <div className="frame-116">
                <div className="topics-section-15">
                  <Topics
                    button={false}
                    className="topics-15"
                    divClassNameOverride="topics-16"
                    hasJamesCarySmith={false}
                    headline="medium"
                    resolution="desktop"
                    text1="From this funding, we are expecting to receive:"
                  />
                </div>
                <StatSection
                  aligment="centered"
                  className="stat-section-12"
                  quantity="two"
                  resolution="desktop"
                  statSetResolutionDesktopClassNameOverride="stat-section-10"
                  statSetStatColor5="light-blue"
                  statSetStatText10="For our incentive programs"
                  statSetStatText11="For implementation"
                  statSetStatText12="$11M"
                  statSetStatText13="~$33M"
                  statSetStatTypeNumbersColorClassName1="stat-section-15"
                  statSetStatTypeNumbersColorClassName2="stat-section-15"
                  title={false}
                />
              </div>
            </div>
          )}

          {((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && (
            <>
              <div className="frame-115">
                <div className="frame-116">
                  <SectionGraph
                    chartCaption="z"
                    className="section-graph-26"
                    graphs="zero"
                    resolution="tablet"
                    subTopicTitleSectionTitleClassName="section-graph-31"
                    subTopicTitleText="AB 617 STATEWIDE FUNDING"
                    subTopicTitleTypeDefaultClassNameOverride="section-graph-27"
                    title="top"
                  />
                  <StatSection
                    aligment="centered"
                    className="stat-section-7"
                    quantity="three"
                    resolution="mobile"
                    statSetResolutionDesktopClassNameOverride="stat-section-10"
                    statSetStatColor2="dark-blue"
                    statSetStatColor3="light-blue"
                    statSetStatColor4="green"
                    statSetStatDivClassName="stat-section-9"
                    statSetStatDivClassNameOverride="stat-section-9"
                    statSetStatText4="$60M"
                    statSetStatText5="for implementation"
                    statSetStatText6="$234M"
                    statSetStatText7="For incentives"
                    statSetStatText8="$6M"
                    statSetStatText9="Community grants"
                    statSetStatType1="numbers"
                    statSetStatTypeQuoteColorClassNameOverride="stat-section-8"
                    title={false}
                  />
                </div>
                <div className="frame-116">
                  <div className="topics-section-15">
                    <Topics
                      button={false}
                      className="instance-node-13"
                      divClassNameOverride="topics-16"
                      hasJamesCarySmith={false}
                      headline="medium"
                      resolution="desktop"
                      text1="From this funding, we are expecting to receive:"
                    />
                  </div>
                  <StatSection
                    aligment="centered"
                    className="stat-section-12"
                    quantity="two"
                    resolution="mobile"
                    statSetResolutionDesktopClassNameOverride="stat-section-10"
                    statSetStatColor5="light-blue"
                    statSetStatText10="For our incentive programs"
                    statSetStatText11="For implementation"
                    statSetStatText12="$11M"
                    statSetStatText13="~$33M"
                    statSetStatTypeNumbersColorClassName1="instance-node-14"
                    statSetStatTypeNumbersColorClassName2="stat-section-11"
                    title={false}
                  />
                </div>
              </div>
              <div className="stat-set-wrapper">
                <div className="stat-set-2">
                  <div className="stat-2">
                    <div className="section-title-173">$80M</div>
                    <p className="section-title-174">
                      <span className="text-wrapper-31">
                        for a suite of statewide equity transportation programs, including, but not limited to, the{" "}
                      </span>
                      <span className="text-wrapper-32">Clean Cars For All Program.</span>
                    </p>
                  </div>
                  <div className="stat-3">
                    <div className="section-title-175">$310.5M</div>
                    <p className="section-title-176">
                      <span className="text-wrapper-31">for the </span>
                      <span className="text-wrapper-32">Equitable Building Decarbonization Program.</span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {screenWidth >= 1025 && (
        <>
          <div className="stat-section-16">
            <div className="stat-set-3">
              <div className="stat-4">
                <div className="section-title-173">$80M</div>
                <p className="section-title-174">
                  <span className="text-wrapper-31">
                    for a suite of statewide equity transportation programs, including, but not limited to, the{" "}
                  </span>
                  <span className="text-wrapper-32">Clean Cars For All Program.</span>
                </p>
              </div>
              <div className="stat-5">
                <div className="section-title-177">$310.5M</div>
                <p className="section-title-176">
                  <span className="text-wrapper-31">for the </span>
                  <span className="text-wrapper-32">Equitable Building Decarbonization Program.</span>
                </p>
              </div>
            </div>
          </div>
          <SectionGraph
            chartCaption="z"
            className="section-graph-32"
            graphs="zero"
            resolution="desktop"
            subTopicTitleText="BILLS WE SPONSORED THAT PASSED"
            subTopicTitleTypeDefaultClassNameOverride="instance-node-13"
            title="top"
          />
          <div className="stat-wrapper">
            <Stat
              className="instance-node-14"
              color="green"
              resolution="desktop"
              text="AB 536"
              text1="AB 536 (Wilson) – Repeals the compensation prohibition for the Air District’s Advisory Council and allows members to receive compensation for attending specified meetings."
              type="numbers"
            />
          </div>
        </>
      )}

      <SectionGraph
        chartCaption="z"
        className={`${
          ((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) &&
          "class-92"
        } ${screenWidth >= 1025 && "class-93"}`}
        graphs="zero"
        resolution={
          (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
            ? "tablet"
            : screenWidth < 641
            ? "mobile"
            : screenWidth >= 1025
            ? "desktop"
            : undefined
        }
        subTopicTitleSectionTitleClassName={`${
          ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
          "section-graph-31"
        } ${screenWidth < 641 && "class-94"} ${screenWidth >= 1025 && "class-95"}`}
        subTopicTitleText={
          (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
            ? "BILLS WE SPONSORED THAT PASSED"
            : screenWidth >= 1025
            ? "BILLS WE SPONSORED/CO-SPONSORED THAT DID NOT ADVANCE"
            : undefined
        }
        subTopicTitleTypeDefaultClassNameOverride={`${
          ((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) &&
          "section-graph-33"
        } ${screenWidth >= 1025 && "instance-node-13"}`}
        title="top"
      />
      <div
        className="frame-119"
        style={{
          padding:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "0px 24px 100px"
              : screenWidth >= 1025
              ? "0px 30px 160px 240px"
              : undefined,
          zIndex:
            (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
              ? "7"
              : screenWidth >= 1025
              ? "3"
              : undefined,
        }}
      >
        {((screenWidth >= 641 && screenWidth < 769) ||
          (screenWidth >= 769 && screenWidth < 1025) ||
          screenWidth < 641) && (
          <Stat
            className="stat-instance"
            color="green"
            resolution="mobile"
            sectionTitleClassName="stat-6"
            text="AB 536"
            text1="AB 536 (Wilson) – Repeals the compensation prohibition for the Air District’s Advisory Council and allows members to receive compensation for attending specified meetings."
            type="numbers"
          />
        )}

        {screenWidth >= 1025 && (
          <>
            <Stat
              className="instance-node-14"
              color="dark-blue"
              resolution="desktop"
              text="AB 953"
              text1="AB 953 (Connolly and Hart) – Expands the Protecting Blue Whales and Blue Skies Program to be statewide. (co-sponsor)"
              type="numbers"
            />
            <Stat
              className="instance-node-14"
              color="white"
              resolution="desktop"
              text="AB 1465"
              text1="AB 1465 (Wicks) – Triples the civil penalty ceiling at Title V sources for violations in which a discharge contains toxic air contaminants. (sponsor) This is a 2-year bill and may be acted upon in 2024."
              type="numbers"
            />
            <Stat
              className="instance-node-14"
              color="dark-blue"
              resolution="desktop"
              text="AB 1609"
              text1="AB 1609 (Garcia) – Requires an annual $4 fee for each registered motor vehicle statewide to provide funding for air districts to reduce air pollution. (co-sponsor)"
              type="numbers"
            />
          </>
        )}
      </div>
      {screenWidth >= 1025 && (
        <>
          <div className="hightlight-blurb-6">
            <div className="frame-120">
              <div className="frame-121">
                <HightlightBlurb
                  className="hightlight-blurb-8"
                  detail="image"
                  image="left"
                  img="/img/image-square-5-2.png"
                  resolution="desktop"
                  topicsResolutionDesktopClassName="hightlight-blurb-7"
                  topicsText="In response to the recent wildfires in Canada affecting much of the East Coast and Midwest, we worked with California legislators at the federal level to reintroduce several smoke-related bills to expand clean air centers, home air filtration, and monitoring. While previous attempts were not successful, the additional regions of the U.S. experiencing wildfire smoke impacts have heightened awareness of this issue beyond the West Coast, which may assist in eventual funding in the federal budget."
                  type="carrousel"
                />
                <HightlightBlurb
                  className="hightlight-blurb-9"
                  detail="image"
                  frameClassName="hightlight-blurb-10"
                  image="left"
                  img="/img/image-square-6.png"
                  resolution="desktop"
                  topicsResolutionDesktopClassName="instance-node-13"
                  topicsText="In addition to introducing a bill at the state level to expand voluntary vessel speed reduction programs, our staff have worked along with the Santa Barbara County Air Pollution Control District to inform legislators at the federal level of our existing local program, and to solicit greater federal support through a budget appropriation or a bill to provide greater agency support."
                  topicsText1="BLUE SKIES BLUE WHALES PROGRAM"
                  type="carrousel"
                />
                <HightlightBlurb
                  className="hightlight-blurb-11"
                  detail="image"
                  frameClassName="hightlight-blurb-12"
                  image="left"
                  img="/img/image-square-7-2.png"
                  resolution="desktop"
                  topicsResolutionDesktopClassName="instance-node-13"
                  topicsText="Despite a tough budget environment at the state level, we were successful in working with other air districts to maintain funding for the AB 617 Community Air Protection Program at prior levels, which will allow us to continue support for the four AB 617 communities in the Bay Area."
                  topicsText1="STATE BUDGET"
                  type="carrousel"
                />
                <HightlightBlurb
                  className="hightlight-blurb-13"
                  detail="image"
                  image="left"
                  img="/img/image-square-5.png"
                  resolution="desktop"
                  topicsResolutionDesktopClassName="instance-node-13"
                  topicsText="While our federal proposal for wildfire response was not included in the final IRA package, we continue to advocate for programs that expand clean air center networks and home air filtration in our most vulnerable communities. To that end, we are continuing to support proposals from House and Senate members that we hope will be part of 2023 federal budget or legislation."
                  topicsText1="WILDFIRE SMOKE RESPONSE"
                  type="carrousel"
                />
              </div>
            </div>
            <div className="arrows-wrapper">
              <Arrows
                arrowElementTypeBack="/img/type-back.png"
                arrowElementTypeForward="/img/type-forward.png"
                className="arrows-2"
              />
            </div>
          </div>
          <InternalMenu
            arrowElementTypeBack="/img/arrow-element.png"
            arrowElementTypeForward="/img/arrow-element-1.png"
            className="internal-menu-4"
            resolution="desktop"
          />
        </>
      )}

      {((screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025) ||
        screenWidth < 641) && (
        <>
          <SectionGraph
            chartCaption="z"
            className="section-graph-34"
            graphs="zero"
            resolution={
              (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "tablet"
                : screenWidth < 641
                ? "mobile"
                : undefined
            }
            subTopicTitleSectionTitleClassName={`${
              ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
              "section-graph-31"
            } ${screenWidth < 641 && "class-94"}`}
            subTopicTitleText="BILLS WE SPONSORED/CO-SPONSORED THAT DID NOT ADVANCE"
            subTopicTitleTypeDefaultClassNameOverride="section-graph-33"
            title="top"
          />
          <div className="frame-122">
            <Stat
              className="stat-instance"
              color="dark-blue"
              resolution="mobile"
              sectionTitleClassName="stat-6"
              text="AB 953"
              text1="AB 953 (Connolly and Hart) – Expands the Protecting Blue Whales and Blue Skies Program to be statewide. (co-sponsor)"
              type="numbers"
            />
            <Stat
              className="stat-instance"
              color="white"
              resolution="mobile"
              sectionTitleClassName="stat-6"
              text="AB 1465"
              text1="AB 1465 (Wicks) – Triples the civil penalty ceiling at Title V sources for violations in which a discharge contains toxic air contaminants. (sponsor) This is a 2-year bill and may be acted upon in 2024."
              type="numbers"
            />
            <Stat
              className="stat-instance"
              color="dark-blue"
              resolution="mobile"
              sectionTitleClassName="stat-6"
              text="AB 1609"
              text1="AB 1609 (Garcia) – Requires an annual $4 fee for each registered motor vehicle statewide to provide funding for air districts to reduce air pollution. (co-sponsor)"
              type="numbers"
            />
          </div>
          <div className="hightlight-blurb-14">
            <img
              className="image-square-4"
              alt="Image square"
              src={
                screenWidth < 641
                  ? "/img/image-square-7.png"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "/img/image-square-11.png"
                  : undefined
              }
            />
            <div className="frame-123">
              <Topics
                button={false}
                className="instance-node-13"
                divClassNameOverride="topics-17"
                headline={
                  screenWidth < 641
                    ? "large"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "medium"
                    : undefined
                }
                jamesCarySmithClassNameOverride={`${screenWidth < 641 && "class-96"} ${
                  ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                  "topics-17"
                }`}
                resolution={
                  screenWidth < 641
                    ? "mobile"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "tablet"
                    : undefined
                }
                text="WILDFIRE SMOKE RESPONSE"
                text1="In response to the recent wildfires in Canada affecting much of the East Coast and Midwest, we worked with California legislators at the federal level to reintroduce several smoke-related bills to expand clean air centers, home air filtration, and monitoring. While previous attempts were not successful, the additional regions of the U.S. experiencing wildfire smoke impacts have heightened awareness of this issue beyond the West Coast, which may assist in eventual funding in the federal budget."
              />
            </div>
          </div>
          <div className="hightlight-blurb-15">
            <img
              className="image-square-4"
              alt="Image square"
              src={
                screenWidth < 641
                  ? "/img/image-square-8.png"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "/img/image-square-12-3.png"
                  : undefined
              }
            />
            <div className="frame-123">
              <Topics
                button={false}
                className="instance-node-13"
                divClassNameOverride="topics-17"
                headline={
                  screenWidth < 641
                    ? "large"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "medium"
                    : undefined
                }
                jamesCarySmithClassNameOverride={`${screenWidth < 641 && "class-96"} ${
                  ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                  "topics-17"
                }`}
                resolution={
                  screenWidth < 641
                    ? "mobile"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "tablet"
                    : undefined
                }
                text="BLUE SKIES BLUE WHALES PROGRAM"
                text1="In addition to introducing a bill at the state level to expand voluntary vessel speed reduction programs, our staff have worked along with the Santa Barbara County Air Pollution Control District to inform legislators at the federal level of our existing local program, and to solicit greater federal support through a budget appropriation or a bill to provide greater agency support."
              />
            </div>
          </div>
          <div className="hightlight-blurb-16">
            <img
              className="image-square-4"
              alt="Image square"
              src={
                screenWidth < 641
                  ? "/img/image-square-9-2.png"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "/img/image.png"
                  : undefined
              }
            />
            <div className="frame-123">
              <Topics
                button={false}
                className="instance-node-13"
                divClassNameOverride="topics-17"
                headline={
                  screenWidth < 641
                    ? "large"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "medium"
                    : undefined
                }
                jamesCarySmithClassNameOverride={`${screenWidth < 641 && "class-96"} ${
                  ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) &&
                  "topics-17"
                }`}
                resolution={
                  screenWidth < 641
                    ? "mobile"
                    : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                    ? "tablet"
                    : undefined
                }
                text="STATE BUDGET"
                text1="Despite a tough budget environment at the state level, we were successful in working with other air districts to maintain funding for the AB 617 Community Air Protection Program at prior levels, which will allow us to continue support for the four AB 617 communities in the Bay Area."
              />
            </div>
          </div>
          <InternalMenu
            arrowElementTypeBack="/img/arrow-element.png"
            arrowElementTypeForward="/img/arrow-element-1.png"
            className="internal-menu-4"
            resolution="mobile"
          />
        </>
      )}
    </div>
  );
};

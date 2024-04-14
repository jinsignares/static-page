import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { InternalMenu } from "../../components/InternalMenu";
import { Quote } from "../../components/Quote";
import { TitleSection } from "../../components/TitleSection";
import { Topics } from "../../components/Topics";
import { TopicsSection } from "../../components/TopicsSection";
import "./style.css";

export const IntroMobilePx = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="INTRO-MOBILE-px"
      style={{
        backgroundColor:
          screenWidth < 641
            ? "var(--white)"
            : screenWidth >= 1025 ||
              (screenWidth >= 641 && screenWidth < 769) ||
              (screenWidth >= 769 && screenWidth < 1025)
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
        overflow:
          (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
            ? "hidden"
            : undefined,
      }}
    >
      {((screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025) ||
        screenWidth < 641) && (
        <>
          <TitleSection
            blockOfTextElementAnnualReportClassName="title-section-13"
            blockOfTextResolutionMobileClassName="title-section-16"
            blockOfTextSectionTitleClassName="title-section-15"
            blockOfTextText="INTRODUCTION"
            blockOfTextText1="MESSAGE FROM OUR NEW EXECUTIVE OFFICER"
            className={`${screenWidth < 641 && "title-section-14"} ${
              ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && "class-47"
            }`}
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

      {((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && (
        <div className="opening-section-4">
          <div className="frame-wrapper-2">
            <div className="frame-68">
              <div className="AB-community-3">EXECUTIVE SUMMARY 2023</div>
              <p className="we-continued-to-work-4">
                <span className="text-wrapper-20">This year was a year of </span>
                <span className="text-wrapper-21">renewal and change</span>
                <span className="text-wrapper-20">
                  {" "}
                  at the Air District. I joined as Executive Officer in February and am joined by a new executive team.
                  This new executive team will help steer our work towards{" "}
                </span>
                <span className="text-wrapper-21">
                  increasing transparency, collaboration, and protection for communities with environmental justice
                  concerns.
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {((screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025) ||
        screenWidth < 641) && (
        <div
          className="opening-section-5"
          style={{
            padding:
              screenWidth < 641
                ? "80px 24px 24px"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "40px 60px"
                : undefined,
          }}
        >
          <div
            className="opening-text-3"
            style={{
              gap:
                screenWidth < 641
                  ? "40px"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "36px"
                  : undefined,
            }}
          >
            <div className="frame-68">
              {screenWidth < 641 && (
                <>
                  <div className="AB-community-4">EXECUTIVE SUMMARY 2023</div>
                  <p className="we-continued-to-work-5">
                    <span className="text-wrapper-22">This year was a year of </span>
                    <span className="text-wrapper-23">renewal and change</span>
                    <span className="text-wrapper-22">
                      {" "}
                      at the Air District. I joined as Executive Officer in February and am joined by a new executive
                      team. This new executive team will help steer our work towards{" "}
                    </span>
                    <span className="text-wrapper-23">
                      increasing transparency, collaboration, and protection for communities with environmental justice
                      concerns.
                    </span>
                  </p>
                </>
              )}

              {((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && (
                <p className="the-grant-program-9">
                  <span className="text-wrapper-24">
                    Our mission is to significantly reduce the disproportionate levels of air pollution that many
                    communities face and provide clean air for all Bay Area residents.{" "}
                  </span>
                  <span className="text-wrapper-25">
                    Through the AB 617 Community Health Protection Program and other community-focused programs, we will
                    continue to implement stronger air quality protections for those most impacted. This year, Bayview
                    Hunters Point was adopted as the fourth AB 617 community, joining East Oakland, Richmond-North
                    Richmond-San Pablo, and West Oakland, to receive resources for much-needed air pollution reductions.
                    <br />
                    <br />
                    Our groundbreaking rule amendments for natural gas furnaces and water heaters will phase out the
                    most polluting appliances in homes and businesses to protect Bay Area residents from the harmful air
                    pollution they cause. Our innovative climate protection programs are funding and supporting
                    cutting-edge technologies and projects to reduce greenhouse gas emissions. Through our extensive
                    grant programs, communities and businesses can reduce their air quality impacts, upgrade to cleaner
                    technologies, and educate and engage others on air quality and climate improvements.
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && (
        <>
          <img className="rectangle-26" alt="Rectangle" src="/img/rectangle-251.png" />
          <Quote
            className="quote-instance"
            text="We will continue to implement stronger air quality protections for those most impacted."
            type="default"
          />
          <TopicsSection
            alignment="center"
            className="topics-section-8"
            headline="medium"
            resolution="tablet"
            title={false}
            topicsText={
              <>
                As part of our efforts to increase transparency around our enforcement work, we developed an online tool
                that allows the public to view air quality violations and penalties issued to local facilities. Our
                ongoing partnerships with environmental justice leaders from around the Bay Area, including through the
                AB 617 Community Steering Committees and Community Advisory Council, are giving the most impacted
                communities a leading voice in developing strategies, plans and implementation of on-the-ground
                improvements in air quality.
                <br />
                <br />
                Our new Strategic Plan, which will be finalized in mid-2024, will guide our agency over the next five
                years. The plan will be grounded in equity and align with the environmental justice priorities developed
                by the Community Advisory Council, integrating staff expertise and real-life experiences of communities
                through shared leadership.
                <br />
                <br />
                After my first year at the Air District, I am confident that we can achieve our goals based on staff’s
                and community partners’ dedication and determination to address longstanding air quality and
                environmental justice issues. I am confident that together we can strengthen our efforts to protect our
                air, our climate and our communities.
              </>
            }
          />
        </>
      )}

      {((screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025) ||
        screenWidth < 641) && (
        <div
          className="signature-wrapper"
          style={{
            padding:
              (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "0px 0px 0px 460px"
                : screenWidth < 641
                ? "40px 24px"
                : undefined,
            zIndex:
              (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "3"
                : screenWidth < 641
                ? "6"
                : undefined,
          }}
        >
          <div
            className="signature"
            style={{
              alignItems: screenWidth < 641 ? "flex-start" : undefined,
              alignSelf: screenWidth < 641 ? "stretch" : undefined,
              display: screenWidth < 641 ? "flex" : undefined,
              flex: screenWidth < 641 ? "0 0 auto" : undefined,
              flexDirection: screenWidth < 641 ? "column" : undefined,
              gap: screenWidth < 641 ? "40px" : undefined,
              height:
                (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "105px"
                  : undefined,
              marginRight:
                screenWidth >= 641 && screenWidth < 769
                  ? "-234.96px"
                  : screenWidth >= 769 && screenWidth < 1025
                  ? "-106.96px"
                  : undefined,
              width:
                (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "415.96px"
                  : screenWidth < 641
                  ? "100%"
                  : undefined,
            }}
          >
            {screenWidth < 641 && (
              <div className="frame-68">
                <p className="the-grant-program-10">
                  <span className="text-wrapper-26">
                    Our mission is to significantly reduce the disproportionate levels of air pollution that many
                    communities face and provide clean air for all Bay Area residents.{" "}
                  </span>
                  <span className="text-wrapper-27">
                    Through the AB 617 Community Health Protection Program and other community-focused programs, we will
                    continue to implement stronger air quality protections for those most impacted. This year, Bayview
                    Hunters Point was adopted as the fourth AB 617 community, joining East Oakland, Richmond-North
                    Richmond-San Pablo, and West Oakland, to receive resources for much-needed air pollution reductions.
                    <br />
                    <br />
                    Our groundbreaking rule amendments for natural gas furnaces and water heaters will phase out the
                    most polluting appliances in homes and businesses to protect Bay Area residents from the harmful air
                    pollution they cause. Our innovative climate protection programs are funding and supporting
                    cutting-edge technologies and projects to reduce greenhouse gas emissions. Through our extensive
                    grant programs, communities and businesses can reduce their air quality impacts, upgrade to cleaner
                    technologies, and educate and engage others on air quality and climate improvements.
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && (
        <>
          <div className="topics-section-9">
            <div className="topics-11">
              <div className="frame-68">
                <p className="the-grant-program-9">
                  <span className="text-wrapper-24">
                    Dr. Philip Fine
                    <br />
                  </span>
                  <span className="text-wrapper-25">Executive Officer /Air Pollution Control Officer</span>
                </p>
              </div>
            </div>
          </div>
          <InternalMenu
            arrowElementTypeBack="/img/arrow-element.png"
            arrowElementTypeForward="/img/arrow-element-1.png"
            className="internal-menu-2"
            resolution="mobile"
          />
        </>
      )}

      {screenWidth >= 1025 && (
        <>
          <TitleSection
            blockOfTextElementAnnualReportClassName="title-section-13"
            blockOfTextResolutionMobileClassName="title-section-18"
            blockOfTextSectionTitleClassName="title-section-15"
            blockOfTextText="INTRODUCTION"
            blockOfTextText1="MESSAGE FROM OUR NEW EXECUTIVE OFFICER"
            className="title-section-14"
            frameClassName="title-section-17"
            layout="img-l"
            resolution="desktop"
          />
          <div className="opening-section-6">
            <div className="opening-text-4">
              <div className="frame-68">
                <div className="AB-community-5">EXECUTIVE SUMMARY 2023</div>
                <p className="we-continued-to-work-6">
                  <span className="text-wrapper-28">This year was a year of </span>
                  <span className="text-wrapper-29">renewal and change</span>
                  <span className="text-wrapper-28">
                    {" "}
                    at the Air District. I joined as Executive Officer in February and am joined by a new executive
                    team. This new executive team will help steer our work towards{" "}
                  </span>
                  <span className="text-wrapper-29">
                    increasing transparency, collaboration, and protection for communities with environmental justice
                    concerns.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="topics-section-10">
            <div className="frame-wrapper-2">
              <div className="frame-68">
                <p className="the-grant-program-9">
                  <span className="text-wrapper-24">
                    Our mission is to significantly reduce the disproportionate levels of air pollution that many
                    communities face and provide clean air for all Bay Area residents.{" "}
                  </span>
                  <span className="text-wrapper-30">
                    Through the AB 617 Community Health Protection Program and other community-focused programs, we will
                    continue to implement stronger air quality protections for those most impacted. This year, Bayview
                    Hunters Point was adopted as the fourth AB 617 community, joining East Oakland, Richmond-North
                    Richmond-San Pablo, and West Oakland, to receive resources for much-needed air pollution reductions.
                    <br />
                    <br />
                    Our groundbreaking rule amendments for natural gas furnaces and water heaters will phase out the
                    most polluting appliances in homes and businesses to protect Bay Area residents from the harmful air
                    pollution they cause. Our innovative climate protection programs are funding and supporting
                    cutting-edge technologies and projects to reduce greenhouse gas emissions. Through our extensive
                    grant programs, communities and businesses can reduce their air quality impacts, upgrade to cleaner
                    technologies, and educate and engage others on air quality and climate improvements.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="row-5">
            <img className="rectangle-27" alt="Rectangle" src="/img/rectangle-251.png" />
            <Quote
              className="quote-2"
              text="We will continue to implement stronger air quality protections for those most impacted."
              type="default"
            />
          </div>
          <div className="topics-section-11">
            <Topics
              button={false}
              className="topics-12"
              textBodyClassName="topics-13"
              textBody={
                <>
                  As part of our efforts to increase transparency around our enforcement work, we developed an online
                  tool that allows the public to view air quality violations and penalties issued to local facilities.
                  Our ongoing partnerships with environmental justice leaders from around the Bay Area, including
                  through the AB 617 Community Steering Committees and Community Advisory Council, are giving the most
                  impacted communities a leading voice in developing strategies, plans and implementation of
                  on-the-ground improvements in air quality.
                  <br />
                  <br />
                  Our new Strategic Plan, which will be finalized in mid-2024, will guide our agency over the next five
                  years. The plan will be grounded in equity and align with the environmental justice priorities
                  developed by the Community Advisory Council, integrating staff expertise and real-life experiences of
                  communities through shared leadership.
                  <br />
                  <br />
                  After my first year at the Air District, I am confident that we can achieve our goals based on staff’s
                  and community partners’ dedication and determination to address longstanding air quality and
                  environmental justice issues. I am confident that together we can strengthen our efforts to protect
                  our air, our climate and our communities.
                </>
              }
            />
          </div>
          <div className="frame-69">
            <div className="signature-2" />
          </div>
          <div className="topics-section-12">
            <div className="frame-wrapper-2">
              <div className="frame-68">
                <p className="the-grant-program-9">
                  <span className="text-wrapper-24">
                    Dr. Philip Fine
                    <br />
                  </span>
                  <span className="text-wrapper-30">Executive Officer /Air Pollution Control Officer</span>
                </p>
              </div>
            </div>
          </div>
          <InternalMenu
            arrowElementTypeBack="/img/arrow-element.png"
            arrowElementTypeForward="/img/arrow-element-1.png"
            className="internal-menu-2"
            resolution="mobile"
          />
        </>
      )}

      {screenWidth < 641 && (
        <>
          <div className="row-6">
            <img className="rectangle-28" alt="Rectangle" src="/img/rectangle-251.png" />
            <Quote
              className="quote-3"
              sectionTitleClassName="text-wrapper-22"
              text="We will continue to implement stronger air quality protections for those most impacted."
              type="default"
            />
          </div>
          <TopicsSection
            alignment="center"
            className="topics-section-13"
            headline="medium"
            resolution="mobile"
            title={false}
            topicsText={
              <>
                As part of our efforts to increase transparency around our enforcement work, we developed an online tool
                that allows the public to view air quality violations and penalties issued to local facilities. Our
                ongoing partnerships with environmental justice leaders from around the Bay Area, including through the
                AB 617 Community Steering Committees and Community Advisory Council, are giving the most impacted
                communities a leading voice in developing strategies, plans and implementation of on-the-ground
                improvements in air quality.
                <br />
                <br />
                Our new Strategic Plan, which will be finalized in mid-2024, will guide our agency over the next five
                years. The plan will be grounded in equity and align with the environmental justice priorities developed
                by the Community Advisory Council, integrating staff expertise and real-life experiences of communities
                through shared leadership.
                <br />
                <br />
                After my first year at the Air District, I am confident that we can achieve our goals based on staff’s
                and community partners’ dedication and determination to address longstanding air quality and
                environmental justice issues. I am confident that together we can strengthen our efforts to protect our
                air, our climate and our communities.
              </>
            }
          />
          <div className="frame-69">
            <div className="signature-3" />
          </div>
          <div className="topics-section-14">
            <div className="frame-wrapper-2">
              <div className="frame-68">
                <p className="the-grant-program-10">
                  <span className="text-wrapper-26">
                    Dr. Philip Fine
                    <br />
                  </span>
                  <span className="text-wrapper-27">Executive Officer /Air Pollution Control Officer</span>
                </p>
              </div>
            </div>
          </div>
          <InternalMenu
            arrowElementTypeBack="/img/arrow-element.png"
            arrowElementTypeForward="/img/arrow-element-1.png"
            className="internal-menu-2"
            resolution="mobile"
          />
        </>
      )}
    </div>
  );
};

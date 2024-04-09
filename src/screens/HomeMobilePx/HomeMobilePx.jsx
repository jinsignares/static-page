import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { BlockOfText } from "../../components/BlockOfText";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TitleSection } from "../../components/TitleSection";
import { Topics } from "../../components/Topics";
import "./style.css";

export const HomeMobilePx = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="HOME-MOBILE-px"
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
      }}
    >
      {((screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025) ||
        screenWidth < 641) && (
        <>
          <Header
            className="header-2"
            resolution={
              screenWidth < 641
                ? "mobile"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "tablet"
                : undefined
            }
          />
          <BlockOfText
            className="block-of-text-instance"
            resolution={
              screenWidth < 641
                ? "mobile"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "tablet"
                : undefined
            }
            subtitle="no"
            text="PROTECTING"
          />
          <BlockOfText
            className="block-of-text-2"
            resolution={
              screenWidth < 641
                ? "mobile"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "tablet"
                : undefined
            }
            subtitle="no"
            text="OUR AIR,"
          />
          <TitleSection
            className="title-section-7"
            frameClassName="title-section-8"
            hasFrame={false}
            layout="stacked"
            resolution="mobile"
          />
          <BlockOfText
            className="block-of-text-3"
            resolution={
              screenWidth < 641
                ? "mobile"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "tablet"
                : undefined
            }
            subtitle="no"
            text="CLIMATE"
          />
          <TitleSection
            className="title-section-9"
            frameClassName="title-section-10"
            hasFrame={false}
            layout="stacked"
            resolution="mobile"
          />
          <BlockOfText
            className="block-of-text-7"
            elementAnnualReportClassName="block-of-text-6"
            resolution={
              screenWidth < 641
                ? "mobile"
                : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "tablet"
                : undefined
            }
            sectionTitleClassName={`${screenWidth < 641 && "block-of-text-4"} ${
              ((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && "class-43"
            }`}
            subtitle="yes"
            text={
              screenWidth < 641 ? (
                <>
                  AND <br />
                  COMMUNITIES
                </>
              ) : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) ? (
                "AND COMMUNITIES"
              ) : undefined
            }
            text1="2023 ANNUAL REPORT"
            textClassName={`${screenWidth < 641 && "block-of-text-5"}`}
          />
          <TitleSection
            className="title-section-11"
            frameClassName="title-section-12"
            hasFrame={false}
            layout="stacked"
            resolution="mobile"
          />
          <div
            className="topics-instance-wrapper"
            style={{
              padding:
                screenWidth < 641
                  ? "80px 24px"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "80px 60px"
                  : undefined,
            }}
          >
            <Topics
              button
              buttonGroup="/img/group-9.png"
              buttonGroupClassName="topics-6"
              buttonIconYesTypeFilledClassName="topics-9"
              className="topics-8"
              divClassName="topics-7"
              headline="medium"
              jamesCarySmithClassName="topics-7"
              resolution={
                screenWidth < 641
                  ? "mobile"
                  : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                  ? "tablet"
                  : undefined
              }
              text={
                <>
                  IMPROVING AIR QUALITY PROTECTIONS <br />
                  FOR ALL BAY AREA RESIDENTS.
                </>
              }
              text1="In 2023, we continued to strengthen our partnerships with Bay Area communities most impacted by air pollution. Our innovative emission reduction and climate protection programs supported cutting-edge projects to reduce greenhouse gases."
            />
          </div>
        </>
      )}

      {screenWidth >= 1025 && (
        <>
          <Header
            className="header-3"
            resolution="desktop-1025"
            to="/air-quality-desktop-1025-px-u40works-from-1025pxu43u41"
          />
          <div className="row">
            <BlockOfText className="block-of-text-8" resolution="tablet" subtitle="no" text="PROTECTING" />
            <div className="image-square-2" />
            <BlockOfText className="block-of-text-9" resolution="tablet" subtitle="no" text="OUR AIR," />
          </div>
          <div className="row-2">
            <div className="image-large" />
            <div className="frame-65">
              <div className="frame-66">
                <BlockOfText
                  className="block-of-text-10"
                  resolution="tablet"
                  subtitle="no"
                  text="CLIMATE"
                  textClassName="block-of-text-11"
                />
                <div className="image-square-3" />
              </div>
              <BlockOfText
                className="block-of-text-12"
                resolution="tablet"
                sectionTitleClassName="block-of-text-4"
                subtitle="yes"
                text="AND COMMUNITIES"
                text1="2023 ANNUAL REPORT"
                textClassName="block-of-text-5"
              />
            </div>
          </div>
          <div className="row-3">
            <div className="frame-67">
              <Topics
                button
                buttonGroup="/img/group-9.png"
                buttonGroupClassName="topics-6"
                buttonIconYesTypeFilledClassName="topics-10"
                className="topics-8"
                divClassName="topics-7"
                headline="medium"
                jamesCarySmithClassName="topics-7"
                resolution="tablet"
                text={
                  <>
                    CLIMATE CHANGE BRINGS <br />
                    NEW CHALLENGES FOR US ALL.
                  </>
                }
                text1="In 2022, we continued to partner with Bay Area communities most impacted by pollution and sought new paths forward to reduce climate-warming greenhouse gases. Our innovative grant programs enabled residents and businesses to lower emissions and overall carbon footprint through funds for cleaner engines and electric vehicles to programs that educate residents on how to reduce their impact."
              />
            </div>
            <img className="adobestock" alt="Adobestock" src="/img/adobestock-526164757-1.png" />
          </div>
          <div className="row-4">
            <div className="rectangle-23" />
            <img className="rectangle-24" alt="Rectangle" src="/img/rectangle-251.png" />
            <div className="rectangle-25" />
          </div>
        </>
      )}

      <Footer
        className={`${
          ((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) &&
          "class-44"
        } ${screenWidth >= 1025 && "class-45"}`}
        resolution={
          screenWidth < 641
            ? "mobile"
            : (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
            ? "tablet"
            : screenWidth >= 1025
            ? "desktop-1025"
            : undefined
        }
      />
    </div>
  );
};

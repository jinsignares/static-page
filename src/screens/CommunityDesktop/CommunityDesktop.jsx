import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Arrows } from "../../components/Arrows";
import { ElementImage } from "../../components/ElementImage";
import { HightlightBlurb } from "../../components/HightlightBlurb";
import { InternalMenu } from "../../components/InternalMenu";
import { OpeningSection } from "../../components/OpeningSection";
import { OpeningText } from "../../components/OpeningText";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { StatSection } from "../../components/StatSection";
import { TitleSection } from "../../components/TitleSection";
import { Topics } from "../../components/Topics";
import { TopicsSection } from "../../components/TopicsSection";
import "./style.css";

export const CommunityDesktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="COMMUNITY-DESKTOP"
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
          (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
            ? "hidden"
            : undefined,
      }}
    >
      <TitleSection
        blockOfTextElementAnnualReportClassName="title-section-36"
        blockOfTextResolutionMobileClassName={`${
          ((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) &&
          "class-124"
        } ${screenWidth >= 1025 && "class-125"}`}
        blockOfTextSectionTitleClassName="title-section-37"
        blockOfTextSubtitle="yes"
        blockOfTextText="COMMUNITY"
        blockOfTextText1="WHAT COMMUNITY PARTNERSHIPS HAVE WE BUILT?"
        className={`${
          ((screenWidth >= 641 && screenWidth < 769) ||
            (screenWidth >= 769 && screenWidth < 1025) ||
            screenWidth < 641) &&
          "class-122"
        } ${screenWidth >= 1025 && "class-123"}`}
        frameClassName="title-section-38"
        layout={
          (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025) || screenWidth < 641
            ? "stacked"
            : screenWidth >= 1025
            ? "img-l"
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
      {((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && (
        <>
          <OpeningSection
            className="opening-section-11"
            font="opening"
            headline="large"
            openingTextResolutionDesktopClassName="instance-node-24"
            openingTextSpanClassName="instance-node-23"
            openingTextText="AB 617 COMMUNITY HEALTH PROTECTION PROGRAM"
            openingTextText1="develop and implement health-protective measures in highly impacted communities "
            openingTextText2="as part of statewide AB 617 implementation."
            openingTextText3="We continued to work in collaboration with community members and other stakeholders to "
            resolution="tablet"
          />
          <div className="frame-151">
            <div className="hightlight-blurb-29">
              <img className="image-square-5" alt="Image square" src="/img/image-square-15.png" />
              <div className="frame-152">
                <Topics
                  button={false}
                  className="instance-node-25"
                  textBodyClassName="topics-27"
                  headerTextClassName="topics-27"
                  headerText="WEST OAKLAND"
                  textBody="In West Oakland, through our AB 617 project that began four years ago, we continued our partnership with West Oakland Environmental Indicators Project (WOEIP) with monthly meetings and implementation teams to support emissions reduction strategies. WOEIP’s Health Equity Advisory Committee focused on the public health aspects of hyperlocal emissions reductions and outreach and recruitment efforts to increase West Oakland resident engagement."
                />
              </div>
            </div>
            <div className="hightlight-blurb-30">
              <img className="image-square-5" alt="Image square" src="/img/image-square-16.png" />
              <div className="frame-152">
                <Topics
                  button={false}
                  className="instance-node-25"
                  textBodyClassName="topics-27"
                  headerTextClassName="topics-27"
                  headerText="RICHMOND-NORTH RICHMOND-SAN PABLO"
                  textBody="In Richmond-North Richmond-San Pablo, we continued to partner with 21 steering committee members that represent Richmond, North Richmond and San Pablo working to develop and finalize the Community Emission Reduction Plan. The plan remains focused on six priority areas that include mobile, public health, marine and rail, commercial and industrial, fuel refining, and land use and urban greening. Within the last year, an additional subset of strategies has been developed that include compliance and enforcement, penalties, emissions inventory improvement and reporting."
                />
              </div>
            </div>
            <div className="hightlight-blurb-31">
              <img className="image-square-5" alt="Image square" src="/img/image-square-17.png" />
              <div className="frame-152">
                <Topics
                  button={false}
                  className="instance-node-25"
                  textBodyClassName="topics-28"
                  headerText="EAST OAKLAND"
                  textBody="In East Oakland, we collaborated with Communities for a Better Environment and a 26-member steering committee to start a Community Emissions Reduction Plan to address air quality and environmental justice issues. We developed the vision and principles, confirmed the community boundary, completed the emissions inventory, and compiled community knowledge on pollution sources and community assets into a community mapping project of the area."
                />
              </div>
            </div>
            <div className="hightlight-blurb-32">
              <img className="image-square-5" alt="Image square" src="/img/image-square-18.png" />
              <div className="frame-152">
                <Topics
                  button={false}
                  className="instance-node-25"
                  textBodyClassName="topics-27"
                  headerTextClassName="topics-27"
                  headerText={
                    <>
                      BAYVIEW HUNTERS POINT/
                      <br />
                      SOUTHEAST SAN FRANCISCO
                    </>
                  }
                  textBody="In Bayview Hunters Point/Southeast San Francisco, we worked with community co-leads from the Marie Harrison Community Foundation and Bayview Hunters Point Community Advocates to recruit members to the Community Steering Committee (BVHP CSC) to develop a Community Emissions Reduction Plan. We have held two gatherings with the BVHP CSC members to introduce them to the project and began holding monthly meetings in September."
                />
              </div>
            </div>
          </div>
          <div className="frame-153">
            <img className="screenshot" alt="Screenshot" src="/img/screenshot-2024-03-14-at-5-37-1.png" />
            <img className="play" alt="Play" src="/img/play.png" />
          </div>
          <StatSection
            aligment="right"
            className="stat-section-31"
            quantity="three"
            resolution="mobile"
            statSetResolutionDesktopClassName="instance-node-24"
            statSetStatColor="light-blue"
            statSetStatColor1="dark-blue"
            statSetStatText="22"
            statSetStatText1="James Cary Smith Community Grant awardees continued on to a second year of capacity-building projects"
            statSetStatText15="17"
            statSetStatText16="community leaders serve on the Community Advisory Council, helping to direct our environmental justice policies"
            statSetStatText2="594"
            statSetStatText3="home air filtration units and replacement filters were distributed through the Home and School Air Filtration Program"
            statSetStatType="numbers"
            statSetStatTypeNumbersColorClassName="stat-section-30"
            statSetStatTypeNumbersColorClassNameOverride="stat-section-30"
            statSetStatTypeQuoteColorClassName="stat-section-30"
            title
          />
        </>
      )}

      {((screenWidth >= 641 && screenWidth < 769) ||
        (screenWidth >= 769 && screenWidth < 1025) ||
        screenWidth < 641) && (
        <div
          className="topics-section-29"
          style={{
            padding:
              (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "100px 60px 40px"
                : screenWidth < 641
                ? "100px 24px 60px"
                : undefined,
            zIndex:
              (screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)
                ? "6"
                : screenWidth < 641
                ? "10"
                : undefined,
          }}
        >
          {((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && (
            <div className="topics-29">
              <div className="frame-154">
                <p className="james-cary-smith-18">JAMES CARY SMITH COMMUNITY GRANT PROGRAM</p>
                <p className="the-grant-program-21">
                  <span className="text-wrapper-36">The grant program funded 33 nonprofits to </span>
                  <span className="text-wrapper-37">
                    engage community members in decisions that impact their air quality and health
                  </span>
                  <span className="text-wrapper-36">
                    , focusing on neighborhoods most impacted by air pollution. Twenty-two eligible awardees continued
                    on to a second year of capacity-building projects, including bilingual environmental justice
                    academies and interactive youth advocacy campaigns.
                  </span>
                </p>
              </div>
            </div>
          )}

          {screenWidth < 641 && (
            <OpeningText
              className="instance-node-25"
              resolution="mobile"
              spanClassName="opening-text-8"
              spanClassName1="opening-text-8"
              spanClassNameOverride="instance-node-23"
              text="AB 617 COMMUNITY HEALTH PROTECTION PROGRAM"
              text1="We continued to work in collaboration with community members and other stakeholders to "
              text2="develop and implement health-protective measures in highly impacted communities "
              text3="as part of statewide AB 617 implementation."
              weContinuedToWorkClassName="opening-text-instance"
            />
          )}
        </div>
      )}

      {((screenWidth >= 641 && screenWidth < 769) || (screenWidth >= 769 && screenWidth < 1025)) && (
        <>
          <ElementImage className="element-image-5" rectangle="/img/rectangle-255-2-2.png" resolution="mobile" />
          <HightlightBlurb
            className="hightlight-blurb-33"
            detail="image"
            image="top"
            imageSquare2="/img/image-square-14.png"
            resolution="tablet"
            text="HOME AND SCHOOL AIR FILTRATION PROGRAM"
            text1="The program engaged with six partners in the Asthma Mitigation Program, five local health centers, two community-based organizations, and six James Cary Smith Community grantees to "
            text2="distribute 594 home air filtration units and replacement filters to vulnerable populations and communities impacted by air pollution."
            text3=" We installed high-performance air filtration systems in four West Contra Costa Unified District Schools: King Elementary School, Washington Elementary School, Riverside Elementary School, and Dover Elementary School."
            type="default"
          />
          <TopicsSection
            alignment="center"
            className="topics-section-30"
            headline="medium"
            resolution="tablet"
            title
            topicsText="The Community Advisory Council (CAC), consisting of 17 members from across the Bay Area, was created in 2021 to advise our leadership on community-related matters, advance an equity-forward policy agenda, and provide input on key policies and programs. In 2023, the CAC recommended, and our Board approved, the CAC’s foundational documents: the Community Advisory Council Charter and the Community Advisory Council Compensation Policy and Procedures. The Board also approved the Resolution Establishing a Governance Structure for the Community Advisory Council. The CAC ad hoc committees developed an annual work plan and environmental justice policy goals for integration into our strategic plan. In September, the CAC held its inaugural retreat, an event focused on environmental justice and community action."
            topicsText1="COMMUNITY ADVISORY COUNCIL"
          />
          <ElementImage className="element-image-6" rectangle="/img/rectangle-255-3-2.png" resolution="mobile" />
          <InternalMenu/>
        </>
      )}

      {screenWidth >= 1025 && (
        <>
          <OpeningSection
            className="opening-section-12"
            font="opening"
            headline="large"
            openingTextResolutionDesktopClassName="instance-node-26"
            openingTextText="AB 617 COMMUNITY HEALTH PROTECTION PROGRAM"
            openingTextText1="develop and implement health-protective measures in highly impacted communities "
            openingTextText2="as part of statewide AB 617 implementation."
            openingTextText3="We continued to work in collaboration with community members and other stakeholders to "
            resolution="desktop"
          />
          <div className="hightlight-blurb-34">
            <div className="frame-155">
              <div className="frame-156">
                <HightlightBlurb
                  className="hightlight-blurb-35"
                  detail="image"
                  image="left"
                  img="/img/image-square-5-2.png"
                  resolution="desktop"
                  topicsResolutionDesktopClassName="instance-node-25"
                  topicsText="In response to the recent wildfires in Canada affecting much of the East Coast and Midwest, we worked with California legislators at the federal level to reintroduce several smoke-related bills to expand clean air centers, home air filtration, and monitoring. While previous attempts were not successful, the additional regions of the U.S. experiencing wildfire smoke impacts have heightened awareness of this issue beyond the West Coast, which may assist in eventual funding in the federal budget."
                  topicsText1="WILDFIRE SMOKE RESPONSE"
                  type="carrousel"
                />
                <HightlightBlurb
                  className="hightlight-blurb-36"
                  detail="image"
                  frameClassName="hightlight-blurb-37"
                  image="left"
                  img="/img/image-square-6.png"
                  resolution="desktop"
                  topicsResolutionDesktopClassName="instance-node-25"
                  topicsText="In addition to introducing a bill at the state level to expand voluntary vessel speed reduction programs, our staff have worked along with the Santa Barbara County Air Pollution Control District to inform legislators at the federal level of our existing local program, and to solicit greater federal support through a budget appropriation or a bill to provide greater agency support."
                  topicsText1="BLUE SKIES BLUE WHALES PROGRAM"
                  type="carrousel"
                />
                <HightlightBlurb
                  className="hightlight-blurb-38"
                  detail="image"
                  frameClassName="hightlight-blurb-39"
                  image="left"
                  img="/img/image-square-7-2.png"
                  resolution="desktop"
                  topicsResolutionDesktopClassName="instance-node-25"
                  topicsText="Despite a tough budget environment at the state level, we were successful in working with other air districts to maintain funding for the AB 617 Community Air Protection Program at prior levels, which will allow us to continue support for the four AB 617 communities in the Bay Area."
                  topicsText1="STATE BUDGET"
                  type="carrousel"
                />
                <HightlightBlurb
                  className="hightlight-blurb-40"
                  detail="image"
                  image="left"
                  img="/img/image-square-3-2.png"
                  resolution="desktop"
                  topicsResolutionDesktopClassName="instance-node-25"
                  topicsText="While our federal proposal for wildfire response was not included in the final IRA package, we continue to advocate for programs that expand clean air center networks and home air filtration in our most vulnerable communities. To that end, we are continuing to support proposals from House and Senate members that we hope will be part of 2023 federal budget or legislation."
                  topicsText1="WILDFIRE SMOKE RESPONSE"
                  type="carrousel"
                />
              </div>
            </div>
            <div className="arrows-instance-wrapper">
              <Arrows
                arrowElementTypeBack="/img/type-back.png"
                arrowElementTypeForward="/img/type-forward.png"
                className="instance-node-26"
              />
            </div>
          </div>
          <div className="frame-157">
            <div className="frame-158">
              <img className="screenshot-2" alt="Screenshot" src="/img/screenshot-2024-03-14-at-5-37-1.png" />
              <img className="play-2" alt="Play" src="/img/play.png" />
            </div>
          </div>
          <StatSection
            aligment="right"
            className="stat-section-32"
            quantity="three"
            resolution="desktop"
            statSetResolutionDesktopClassName="instance-node-24"
            statSetStatColor="light-blue"
            statSetStatColor1="dark-blue"
            statSetStatText="22"
            statSetStatText1="James Cary Smith Community Grant awardees continued on to a second year of capacity-building projects"
            statSetStatText15="17"
            statSetStatText16="community leaders serve on the Community Advisory Council, helping to direct our environmental justice policies"
            statSetStatText2="594"
            statSetStatText3="home air filtration units and replacement filters were distributed through the Home and School Air Filtration Program"
            statSetStatType="numbers"
            statSetStatTypeNumbersColorClassName="stat-section-33"
            statSetStatTypeNumbersColorClassNameOverride="stat-section-33"
            statSetStatTypeQuoteColorClassName="stat-section-34"
            title
          />
          <div className="frame-159">
            <TopicsSection
              alignment="center"
              className="topics-section-31"
              headline="large"
              resolution="desktop"
              text="JAMES CARY SMITH COMMUNITY GRANT PROGRAM"
              text1="The grant program funded 33 nonprofits to "
              text2="engage community members in decisions that impact their air quality and health"
              text3=", focusing on neighborhoods most impacted by air pollution. Twenty-two eligible awardees continued on to a second year of capacity-building projects, including bilingual environmental justice academies and interactive youth advocacy campaigns."
              title
              topicsClassName="topics-section-32"
            />
            <ElementImage
              className="element-image-7"
              img="/img/rectangle-255-2-2.png"
              rectangleClassName="element-image-8"
              resolution="destop"
            />
            <PropertyDefaultWrapper
              className="hightlight-blurb-41"
              hightlightBlurbFrameClassName="hightlight-blurb-44"
              hightlightBlurbImage="left"
              hightlightBlurbImg="/img/image-square-2.png"
              hightlightBlurbJamesCarySmithClassName="hightlight-blurb-43"
              hightlightBlurbText="The program engaged with six partners in the Asthma Mitigation Program, five local health centers, two community-based organizations, and six James Cary Smith Community grantees to "
              hightlightBlurbText1="distribute 594 home air filtration units and replacement filters to vulnerable populations and communities impacted by air pollution."
              hightlightBlurbText2="HOME AND SCHOOL AIR FILTRATION PROGRAM"
              hightlightBlurbText3=" We installed high-performance air filtration systems in four West Contra Costa Unified District Schools: King Elementary School, Washington Elementary School, Riverside Elementary School, and Dover Elementary School."
              hightlightBlurbTopicsClassName="hightlight-blurb-42"
              hightlightBlurbTypeDefaultImageClassName="instance-node-24"
              property1="default"
            />
          </div>
          <div className="topics-section-33">
            <Topics
              button={false}
              className="instance-node-25"
              headerText="COMMUNITY ADVISORY COUNCIL"
              textBody="The Community Advisory Council (CAC), consisting of 17 members from across the Bay Area, was created in 2021 to advise our leadership on community-related matters, advance an equity-forward policy agenda, and provide input on key policies and programs. In 2023, the CAC recommended, and our Board approved, the CAC’s foundational documents: the Community Advisory Council Charter and the Community Advisory Council Compensation Policy and Procedures. The Board also approved the Resolution Establishing a Governance Structure for the Community Advisory Council. The CAC ad hoc committees developed an annual work plan and environmental justice policy goals for integration into our strategic plan. In September, the CAC held its inaugural retreat, an event focused on environmental justice and community action."
            />
          </div>
          <ElementImage
            className="element-image-9"
            img="/img/rectangle-255-3-2.png"
            rectangleClassName="element-image-8"
            resolution="destop"
          />
          <InternalMenu/>
        </>
      )}

      {screenWidth < 641 && (
        <>
          <div className="frame-151">
            <div className="hightlight-blurb-29">
              <img className="image-square-5" alt="Image square" src="/img/image-square-9-2x.png" />
              <div className="frame-152">
                <Topics
                  button={false}
                  className="instance-node-25"
                  textBodyClassName="topics-27"
                  headerTextClassName="topics-30"
                  headerText="WEST OAKLAND"
                  textBody="In West Oakland, through our AB 617 project that began four years ago, we continued our partnership with West Oakland Environmental Indicators Project (WOEIP) with monthly meetings and implementation teams to support emissions reduction strategies. WOEIP’s Health Equity Advisory Committee focused on the public health aspects of hyperlocal emissions reductions and outreach and recruitment efforts to increase West Oakland resident engagement."
                />
              </div>
            </div>
            <div className="hightlight-blurb-30">
              <img className="image-square-5" alt="Image square" src="/img/image-square-10.png" />
              <div className="frame-152">
                <Topics
                  button={false}
                  className="instance-node-25"
                  textBodyClassName="topics-27"
                  headerTextClassName="topics-30"
                  headerText="RICHMOND-NORTH RICHMOND-SAN PABLO"
                  textBody="In Richmond-North Richmond-San Pablo, we continued to partner with 21 steering committee members that represent Richmond, North Richmond and San Pablo working to develop and finalize the Community Emission Reduction Plan. The plan remains focused on six priority areas that include mobile, public health, marine and rail, commercial and industrial, fuel refining, and land use and urban greening. Within the last year, an additional subset of strategies has been developed that include compliance and enforcement, penalties, emissions inventory improvement and reporting."
                />
              </div>
            </div>
            <div className="hightlight-blurb-31">
              <img className="image-square-5" alt="Image square" src="/img/image-square-11-2x.png" />
              <div className="frame-152">
                <Topics
                  button={false}
                  className="instance-node-25"
                  textBodyClassName="topics-28"
                  headerTextClassName="topics-31"
                  headerText="EAST OAKLAND"
                  textBody="In East Oakland, we collaborated with Communities for a Better Environment and a 26-member steering committee to start a Community Emissions Reduction Plan to address air quality and environmental justice issues. We developed the vision and principles, confirmed the community boundary, completed the emissions inventory, and compiled community knowledge on pollution sources and community assets into a community mapping project of the area."
                />
              </div>
            </div>
            <div className="hightlight-blurb-32">
              <img className="image-square-5" alt="Image square" src="/img/image-square-12.png" />
              <div className="frame-152">
                <Topics
                  button={false}
                  className="instance-node-25"
                  textBodyClassName="topics-27"
                  headerTextClassName="topics-30"
                  headerText={
                    <>
                      BAYVIEW HUNTERS POINT/
                      <br />
                      SOUTHEAST SAN FRANCISCO
                    </>
                  }
                  textBody="In Bayview Hunters Point/Southeast San Francisco, we worked with community co-leads from the Marie Harrison Community Foundation and Bayview Hunters Point Community Advocates to recruit members to the Community Steering Committee (BVHP CSC) to develop a Community Emissions Reduction Plan. We have held two gatherings with the BVHP CSC members to introduce them to the project and began holding monthly meetings in September."
                />
              </div>
            </div>
          </div>
          <div className="frame-153">
            <img className="screenshot-3" alt="Screenshot" src="/img/screenshot-2024-03-14-at-5-37-1.png" />
            <img className="play-3" alt="Play" src="/img/play.png" />
          </div>
          <StatSection
            aligment="right"
            className="stat-section-31"
            quantity="three"
            resolution="mobile"
            statSetResolutionDesktopClassName="instance-node-24"
            statSetStatColor="light-blue"
            statSetStatColor1="dark-blue"
            statSetStatText="22"
            statSetStatText1="James Cary Smith Community Grant awardees continued on to a second year of capacity-building projects"
            statSetStatText15="17"
            statSetStatText16="community leaders serve on the Community Advisory Council, helping to direct our environmental justice policies"
            statSetStatText2="594"
            statSetStatText3="home air filtration units and replacement filters were distributed through the Home and School Air Filtration Program"
            statSetStatType="numbers"
            statSetStatTypeNumbersColorClassName="stat-section-30"
            statSetStatTypeNumbersColorClassNameOverride="stat-section-30"
            statSetStatTypeQuoteColorClassName="stat-section-30"
            title
          />
          <div className="topics-section-34">
            <div className="topics-32">
              <div className="frame-154">
                <p className="james-cary-smith-19">JAMES CARY SMITH COMMUNITY GRANT PROGRAM</p>
                <p className="the-grant-program-21">
                  <span className="text-wrapper-38">The grant program funded 33 nonprofits to </span>
                  <span className="text-wrapper-37">
                    engage community members in decisions that impact their air quality and health
                  </span>
                  <span className="text-wrapper-38">
                    , focusing on neighborhoods most impacted by air pollution. Twenty-two eligible awardees continued
                    on to a second year of capacity-building projects, including bilingual environmental justice
                    academies and interactive youth advocacy campaigns.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <ElementImage className="element-image-5" rectangle="/img/rectangle-255-2-2.png" resolution="mobile" />
          <HightlightBlurb
            className="hightlight-blurb-33"
            detail="image"
            image="top"
            imageSquare="/img/image-square-13-2x.png"
            resolution="mobile"
            text="HOME AND SCHOOL AIR FILTRATION PROGRAM"
            text1="The program engaged with six partners in the Asthma Mitigation Program, five local health centers, two community-based organizations, and six James Cary Smith Community grantees to "
            text2="distribute 594 home air filtration units and replacement filters to vulnerable populations and communities impacted by air pollution."
            text3=" We installed high-performance air filtration systems in four West Contra Costa Unified District Schools: King Elementary School, Washington Elementary School, Riverside Elementary School, and Dover Elementary School."
            type="default"
          />
          <TopicsSection
            alignment="center"
            className="topics-section-35"
            headline="medium"
            resolution="mobile"
            title
            topicsText="The Community Advisory Council (CAC), consisting of 17 members from across the Bay Area, was created in 2021 to advise our leadership on community-related matters, advance an equity-forward policy agenda, and provide input on key policies and programs. In 2023, the CAC recommended, and our Board approved, the CAC’s foundational documents: the Community Advisory Council Charter and the Community Advisory Council Compensation Policy and Procedures. The Board also approved the Resolution Establishing a Governance Structure for the Community Advisory Council. The CAC ad hoc committees developed an annual work plan and environmental justice policy goals for integration into our strategic plan. In September, the CAC held its inaugural retreat, an event focused on environmental justice and community action."
            topicsText1="COMMUNITY ADVISORY COUNCIL"
          />
          <ElementImage className="element-image-6" rectangle="/img/rectangle-255-3-2.png" resolution="mobile" />
          <InternalMenu/>
        </>
      )}
    </div>
  );
};

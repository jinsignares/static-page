import React from "react";
import { BlockOfText } from "../../components/BlockOfText";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { ImageDescSection } from "../../components/ImageDescSection/ImageDescSection";
import { CardCarousel } from "../../components/CardCarousel/CardCarousel";
import { InternalMenu } from "../../components/InternalMenu";

import "./style.css";
import "../../common/main.css";
import {
  emissionsCarouselCards,
  permittingActivityCards,
  airPollutionStats,
  complianceStats,
  sourceTestStats,
} from "../../utils/constants";

export const ReduceDesktop = () => {
  return (
    <div className="reduce-wrapper">
      <div className="emissions-wrapper">
        <BlockOfText
          className="text-block-emissions"
          subtitle="yes"
          text="REDUCE"
          text1="HOW DO WE REDUCE EMISSIONS AND PROTECT COMMUNITIES AND THE CLIMATE?"
        />
        <div className="image-reduce" />
      </div>

      <div className="opening-section">
        <div className="opening-text">
          <div className="frame-inner">
            <div className="frame-title-large">CLIMATE TECH FINANCE</div>
            <p className="text-body-large">
              <span>
                This year, in partnership with IBank, our Climate Tech Finance
                program took significant steps in{" "}
              </span>
              <span className="text-wrapper-blue-bold">
                endorsing sustainable technological advancements.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="topics-section-wrapper">
        <div className="frame-wrapper">
          <div className="frame-inner">
            <p className="frame-inner-wrapper">
              <span className="text-wrapper-body">
                We awarded a loan guarantee to
              </span>
              <span className="text-wrapper-bold"> SPARKZ</span>
              <span className="text-wrapper-body">
                , whose energy storage solution reduces the cost of domestic
                lithium battery production by eliminating the cobalt and nickel
                traditionally used in their manufacturing. The pioneering
                process developed by SPARKZ not only lowers the cost of
                lithium-ion batteries, it removes environmental concerns around
                mining cobalt, and reduces constrictions created by a foreign
                supply chain. Another loan guarantee was accorded to
              </span>
              <span className="text-wrapper-bold"> EV Life</span>
              <span className="text-wrapper-body">
                , a startup whose goal is making electric vehicles (EVs) more
                accessible by spearheading solutions to eliminate the 'green
                premium' — the additional cost often associated with
                eco-friendly options. Their efforts are focused on making
                electric driving an achievable dream for millions deterred by
                the hefty initial cost of EVs. The most recent loan guarantee we
                awarded was to
              </span>
              <span className="text-wrapper-bold"> One Way Trigger</span>
              <span className="text-wrapper-body">
                , a company that specializes in pavement preservation techniques
                as a greener and more cost-effective alternative to traditional
                road maintenance. This approach not only optimizes taxpayer
                dollars, but also reduces greenhouse gas emissions, curtails
                energy demands, and ensures quicker application times.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="topics-section-wrapper">
        <div className="frame-wrapper">
          <div className="frame-inner">
            <div className="frame-title-medium">
              SUPPORTING ELECTRIC VEHICLE ADOPTION
            </div>
            <p className="frame-inner-wrapper">
              <span className="text-wrapper-body">
                We continued our commitment to accelerating electric vehicle
                adoption in the Bay Area. The{" "}
              </span>
              <span className="text-wrapper-bold">Charge! Program </span>
              <span className="text-wrapper-body">
                provided nearly $10 million in grants to fund 1,070 charging
                stations at 100 sites across the Bay Area. The{" "}
              </span>
              <span className="text-wrapper-bold">
                Clean Cars for All (CCFA) Program{" "}
              </span>
              <span className="text-wrapper-body">
                helped income-qualified residents replace older vehicles with
                clean air vehicles or mobility options, such as public transit
                cards or electric bicycles. CCFA received $31 million in funding
                from the California Air Resources Board in 2023, bringing the
                total program funding to $73 million. CCFA has awarded nearly
                $37 million to over 4,400 residents since the program began in
                March 2019. The program relaunched in Fall 2023 with increased
                grant award amounts and will expand zip code eligibility to all
                Bay Area residents in 2024.
              </span>
              <br />
              <br />
              <span className="text-wrapper-body">
                Additionally, we were awarded nearly $3 million in funding from
                the California Energy Commission (CEC) to expand equitable EV
                charging across the Bay Area. We are working with project
                partners and community stakeholders to deploy over 200 charging
                stations in Oakland, Richmond, San Pablo, and Vallejo. These
                chargers will serve multifamily residents, focusing on
                affordable and public housing residents. The CEC grant, in
                conjunction with our Charge! Program and CCFA Program, will help
                the Bay Area transition to a clean transportation economy and
                provide long-term economic, environmental, and health benefits.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="info-section-wrapper bottom-margin">
        <div className="info-inner-horizontal">
          <InfoCard
            borderColor="--dark-blue"
            bgColor="--dark-blue"
            textcolor="--white"
            cardTitle="3"
            cardBody="sustainable technological advances were awarded loan guarantees through the Climate Tech Finance Program"
          />
          <InfoCard
            cardTitle="1,800"
            cardBody="electric vehicle charging stations were funded through the Charge! Program"
          />
          <InfoCard
            borderColor="--blue"
            bgColor="--blue"
            textcolor="--white"
            cardTitle="4,100+"
            cardBody="residents have participated in the Clean Cars For All Program since it began in March 2019"
          />
        </div>
      </div>

      <ImageDescSection
        bgColor="--gray"
        textcolor="--white"
        descTitle="FIRST-OF-ITS-KIND ENVIRONMENTAL JUSTICE GUIDANCE"
        descBody={
          <>
            <span className="text-wrapper-body">We have included </span>
            <span className="text-wrapper-bold">
              an environmental justice chapter{" "}
            </span>
            <span className="text-wrapper-body">
              – the first of its kind to be published in California – in its
              recently-updated CEQA Guidelines. This chapter recognizes the
              policy imperative to address long-standing and emerging inequities
              in the siting, design, and development of potential sources of
              pollution. Apart from mitigating the impacts of pollution, this
              guidance promotes meaningful participation of community members in
              all phases of the environmental and land use decision making
              process.
            </span>
          </>
        }
        imageSrc="image-square-3-3.png"
      />

      <div className="climate-planning-section margin-top-spacing">
        <div className="topics-section-wrapper">
          <div className="frame-wrapper">
            <div className="frame-inner">
              <div className="frame-title-medium">
                US EPA REGIONAL CLIMATE PLANNING GRANT
              </div>
              <p className="frame-inner-wrapper">
                <span className="text-wrapper-body">
                  We secured a $1 million grant from the US EPA’s Climate
                  Pollution Reduction Grant Program to lead the development of a
                  regional climate action plan that incorporates input from and
                  reflects the priorities of the region’s local governments and
                  communities. The plan will highlight{" "}
                </span>
                <span className="text-wrapper-bold">Charge! Program </span>
                <span className="text-wrapper-body">
                  provided nearly $10 million in grants to fund 1,070 charging
                  stations at 100 sites across the Bay Area. The{" "}
                </span>
                <span className="text-wrapper-bold">
                  priority greenhouse gas (GHG) reduction measures that benefit
                  frontline communities — communities that are marginalized,
                  underserved, and overburdened by pollution.{" "}
                </span>
                <span className="text-wrapper-body">
                  Measures included in the plan will be eligible for nationally
                  competitive $4.6 billion in implementation funding. We are
                  leading this effort in collaboration with a regional advisory
                  work group, consisting of staff from Bay Area regional
                  agencies and local governments.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="info-section-wrapper bottom-margin">
          <div className="info-inner-horizontal">
            <InfoCard
              cardTitle="$1M"
              cardBody="in funding was secured through the US EPA&#39;s Climate Protection Grant Program"
            />
            <InfoCard
              borderColor="--light-blue"
              bgColor="--light-blue"
              cardTitle="67"
              cardBody="residents enrolled in the Bay Area Healthy Homes Initiative"
            />
            <InfoCard
              borderColor="--dark-blue"
              bgColor="--dark-blue"
              textcolor="--white"
              cardTitle="“"
              cardBody="priority greenhouse gas (GHG) reduction measures that benefit frontline communities."
              className="quoted-info-card"
            />
          </div>
        </div>

        <ImageDescSection
          bgColor="--blue"
          textcolor="--white"
          descTitle="BAY AREA HEALTHY HOMES INITIATIVE"
          descBody={
            <>
              <span className="text-wrapper-body">
                We launched the initiative to improve health outcomes and
                climate resilience in overburdened communities of Contra Costa
                and Alameda counties in January 2023. The program brings{" "}
              </span>
              <span className="text-wrapper-bold">
                asthma services and home retrofits to address health triggers,
                improve energy efficiency, and keep outdoor pollution out of the
                home{" "}
              </span>
              <span className="text-wrapper-body">
                through a unique partnership between our agency, the Bay Area
                Regional Energy Network, county health departments, and a local
                non-profit. By the end of 2023, the program had enrolled 71
                residents in both multifamily and single-family homes.
              </span>
            </>
          }
          imageSrc="image-square-4.png"
          rightAligned={false}
        />
      </div>

      <div className="margin-top-spacing bottom-margin">
        <div className="topics-section-wrapper">
          <div className="frame-wrapper">
            <div className="frame-inner">
              <div className="frame-title-medium">
                HEAVY-DUTY VEHICLE AND EQUIPMENT ELECTRIC CHARGING
                INFRASTRUCTURE
              </div>
              <p className="frame-inner-wrapper">
                <span className="text-wrapper-body">
                  This grant program is a competitive solicitation providing
                  funding for electric charging infrastructure for heavy- and
                  medium-duty vehicles and equipment. At least 80 percent of the
                  total funds will be awarded to{" "}
                </span>
                <span className="text-wrapper-bold">Charge! Program </span>
                <span className="text-wrapper-body">
                  provided nearly $10 million in grants to fund 1,070 charging
                  stations at 100 sites across the Bay Area. The{" "}
                </span>
                <span className="text-wrapper-bold">
                  projects that reduce emissions in communities that have been
                  identified through the AB 617 process{" "}
                </span>
                <span className="text-wrapper-body">
                  , such as West Oakland, East Oakland, Richmond-San Pablo, and
                  Bayview Hunters Point, as well as those designated as
                  Disadvantaged Communities and Low-Income Communities.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ImageDescSection
        bgColor="--blue"
        textcolor="--white"
        descTitle="CLEAN PORTS"
        descBody={
          <>
            <span className="text-wrapper-body">
              We awarded nearly $8 million to projects that will repower two
              tugboats, five rubber-tired gantry cranes that operate at or near
              West Oakland and will replace one locomotive that operates in
              Richmond with Tier 4 and hybrid diesel electric clean
              technologies.{" "}
            </span>
            <span className="text-wrapper-bold">
              The projects are estimated to reduce more than 40 tons of NOx,
              ROG, and PM per year.
            </span>
          </>
        }
        rightAligned={false}
        textSide={true}
        textTitle="$8M"
        textBody="was awarded to projects that will reduce emissions from ports in West Oakland and Richmond"
      />

      <ImageDescSection
        className="short-padding-top"
        bgColor="--dark-blue"
        textcolor="--white"
        descTitle="SCHOOL BUS PROGRAM"
        descBody={
          <>
            <span className="text-wrapper-body">
              We awarded over $15 million in funding to support zero- and
              low-emission school buses, protecting student health and achieving
              significant air quality benefits for this highly sensitive group.
            </span>
          </>
        }
        rightAligned={true}
        textSide={true}
        textTitle="$15M"
        textBody="was awarded to support zero- and low-emission school buses"
      />

      <CardCarousel
        bgImage="frame-19849.png"
        carouselTitle="2022 EMISSION REDUCTIONS FROM AIR DISTRICT INCENTIVE PROJECTS"
        carouselData={emissionsCarouselCards}
      />

      <ImageDescSection
        bgColor="--green"
        textcolor="--white"
        descTitle="DEVELOPING METHODOLOGY AND TOOLS FOR CEQA AIR QUALITY ASSESSMENT"
        descBody={
          <>
            <span className="text-wrapper-body">We developed a </span>
            <span className="text-wrapper-bold">
              methodology and modeling tools for assessing air quality and
              health impacts{" "}
            </span>
            <span className="text-wrapper-body">
              from exposure to toxic air contaminants and PM2.5 from individual
              projects. The step-by-step methodology and innovative modeling
              tools support lead agencies and practitioners in conducting
              cumulative impact analysis during the CEQA environmental review
              process, with visualization maps of screening-level cancer risks,
              chronic hazards, and PM2.5 concentrations from the Bay Area
              highways and surface streets, freight and passenger rail services,
              selected railyards, and permitted stationary sources.
            </span>
          </>
        }
        imageSrc="image-square-5-3.png"
        rightAligned={false}
      />

      <div className="topics-section-wrapper no-margin-top">
        <div className="frame-wrapper">
          <div className="frame-inner">
            <div className="frame-title-medium">
              BUILDING APPLIANCE RULE AMENDMENTS
            </div>
            <p className="frame-inner-wrapper">
              <span className="text-wrapper-body">
                Amendments to Regulation 9, Rules 4 and 6, were adopted to
                eliminate emissions of nitrogen oxides, or NOx, from{" "}
              </span>
              <span className="text-wrapper-bold">
                residential and commercial natural gas furnaces and water
                heaters in the Bay Area by requiring new appliances to be
                zero-NOx.{" "}
              </span>
              <span className="text-wrapper-body">
                Collectively, the 1.8 million water heaters and furnaces are one
                of the largest NOx-emitting stationary sources of air pollution
                in the region. The rule amendments would apply only to new
                appliances sold in the Bay Area and will improve overall
                regional air quality from the outdoor venting of these
                appliances, lower exposure to particulate matter — particularly
                in communities of color — and eliminate up to $890 million per
                year in health impacts due to air pollution exposure.
              </span>
              <br />
              <br />
              <span className="text-wrapper-body">
                We established a multi-stakeholder Implementation Working Group
                to track and assess market readiness, technology accessibility,
                and identify barriers and solutions to an equitable transition.
                The diverse stakeholders include utility and energy service
                providers, technology manufacturers, environmental justice and
                community-based organizations, state agencies, local and
                regional governments, incentive program administrators, labor
                unions, contractors, and others.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="article-img-wrapper">
        <div className="furnace-img" />
      </div>

      <div className="topics-section-wrapper">
        <div className="frame-wrapper">
          <div className="frame-inner">
            <div className="frame-title-medium">
              AIR QUALITY VIOLATION DATA TOOL
            </div>
            <p className="frame-inner-wrapper">
              <span className="text-wrapper-body">
                In September, we launched a notices of violation data tool on
                our website that provides searchable information of all
                violations that our agency has issued within the past five
                years. Members of the public may now access information
                pertaining to violations and penalties issued by our inspectors.
                Violations can be sorted by city, zip code and facility name and
                penalty amount and downloaded for ease of review. This tool
                serves to{" "}
              </span>
              <span className="text-wrapper-bold">
                better inform communities about enforcement activities and
                streamlines accessibility.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="topics-section-wrapper">
        <div className="frame-wrapper">
          <div className="frame-inner">
            <div className="frame-title-medium">
              CHEMTRADE VIOLATIONS SETTLEMENT
            </div>
            <p className="frame-inner-wrapper">
              <span className="text-wrapper-bold">
                We fined Chemtrade over $1.1 million for air quality violations{" "}
              </span>
              <span className="text-wrapper-body">
                at their sulfuric acid manufacturing plant in Richmond. The
                seven violations issued primarily involved Chemtrade’s
                continuous emissions monitoring system, which measures the
                plant’s sulfur dioxide emissions to ensure the facility complies
                with permit limits. Chemtrade failed to properly calibrate,
                operate, and maintain this monitoring system over an eight-year
                period. This caused the monitoring system to under-report sulfur
                dioxide emissions by an estimated 33 percent per year on
                average.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="info-section-wrapper big-margin">
        <div className="info-inner-horizontal">
          <InfoCard
            borderColor="--blue"
            bgColor="--blue"
            textcolor="--white"
            cardTitle="380"
            cardBody="premature deaths could be prevented by eliminating residential wood burning."
          />
          <InfoCard
            cardTitle="1.8M"
            cardBody="water heaters and furnaces are one of the largest sources of NOx pollution in the Bay Area"
          />
          <InfoCard
            borderColor="--dark-blue"
            bgColor="--dark-blue"
            textcolor="--white"
            cardTitle="$1.1M"
            cardBody="fine was issued to Chemtrade for air quality violations"
          />
        </div>
      </div>

      <div className="graph-cards-wrapper">
        <div className="graph-inner">
          <div className="graph-cards">
            <div className="graph-card-wrapper">
              <div className="graph-header-wrapper">
                <h3 className="graph-header">AIR POLLUTION COMPLAINTS</h3>
              </div>
              <div className="graph-card-container">
                <div className="graph-stats-list-wrapper">
                  {airPollutionStats.map((stat) => (
                    <div key={stat.id} className="graph-stat-wrapper">
                      <span className="graph-statistic">{stat.stat}</span>
                      <span className="values">
                        <span className="val-1">{stat.val1}</span>
                        <span className="val-2">{stat.val2}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="graph-bottom-list-wrapper">
                  <div className="graph-bottom-wrapper">
                    <span className="graph-bottom-subheader">Total</span>
                    <span className="values">
                      <span className="val-1">4,419</span>
                      <span className="val-2">100%</span>
                    </span>
                  </div>
                  <span className="graph-bottom-subnote">
                    *includes flaring, generators, and unpermitted sources
                  </span>
                </div>
              </div>
            </div>

            <div className="graph-card-wrapper">
              <div className="graph-header-wrapper">
                <h3 className="graph-header">COMPLIANCE INSPECTIONS</h3>
              </div>
              <div className="graph-card-container">
                <div className="graph-stats-list-wrapper">
                  {complianceStats.map((stat) => (
                    <div key={stat.id} className="graph-stat-wrapper">
                      <span className="graph-statistic">{stat.stat}</span>
                      <span className="values">
                        <span className="val-1">{stat.val1}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="graph-bottom-list-wrapper">
                  <div className="graph-bottom-wrapper">
                    <span className="graph-bottom-subheader">Total</span>
                    <span className="values">
                      <span className="val-1">12,977</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="graph-card-wrapper">
              <div className="graph-header-wrapper">
                <h3 className="graph-header">CIVIL PENALTIES AND VIOLATIONS</h3>
              </div>
              <div className="graph-card-container">
                <div className="graph-stats-list-wrapper">
                  <div className="graph-stat-wrapper">
                    <span className="graph-statistic">Civil Penalties</span>
                    <span className="values">
                      <span className="val-1">$3,403,279</span>
                    </span>
                  </div>
                  <div className="graph-stat-wrapper">
                    <span className="graph-statistic">
                      Violations Resolved with Penalties
                    </span>
                    <span className="values">
                      <span className="val-1">421</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="graph-card-wrapper">
              <div className="graph-header-wrapper">
                <h3 className="graph-header">RULEMAKING ACTIVITY</h3>
              </div>
              <div className="graph-card-container">
                <h3 className="graph-subtitle">Rules Adopted or Amended</h3>
                <div className="graph-stats-list-wrapper graph-details">
                  <div className="graph-stat-wrapper graph-detail-section">
                    <h3 className="graph-subtitle">December 20, 2023</h3>
                    <span className="graph-statistic">
                      Regulation 8: Organic Compounds, Rule 8: Wastewater
                      Collection and Separation Systems
                    </span>
                  </div>
                  <div className="graph-stat-wrapper graph-detail-section">
                    <h3 className="graph-subtitle">June 7, 2023</h3>
                    <span className="graph-statistic">Regulation 3: Fees</span>
                  </div>
                  <div className="graph-stat-wrapper graph-detail-section">
                    <h3 className="graph-subtitle">March 15, 2023</h3>
                    <span className="graph-statistic">
                      Regulation 9: Inorganic Gaseous Pollutants, Rule 4:
                      Nitrogen Oxides from Fan Type Central Furnaces, and Rule
                      6: Nitrogen Oxides Emissions from Natural Gas-Fired
                      Boilers and Water Heaters
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardCarousel
        carouselTitle="PERMITTING ACTIVITY"
        carouselData={permittingActivityCards}
      />

      <div className="graph-cards-wrapper graph-wrapper-no-bg">
        <div className="graph-inner">
          <div className="graph-cards">
            <div className="graph-card-wrapper">
              <div className="graph-header-wrapper">
                <h3 className="graph-header">SOURCE TEST ACTIVITY</h3>
              </div>
              <div className="graph-card-container graph-bg-blue">
                <div className="graph-stats-list-wrapper">
                  <h3 className="graph-subtitle graph-text-white">
                    Number of Source Tests in 2022
                  </h3>
                  {sourceTestStats.map((stats) => (
                    <div
                      key={stats.id}
                      className="graph-stat-wrapper graph-stacked graph-text-white"
                    >
                      <div className="graph-stat-1">
                        <span className="graph-statistic">
                          {stats.stat1.stat}
                        </span>
                        <span className="values">
                          <span className="val-1">{stats.stat1.value}</span>
                        </span>
                      </div>

                      {stats.stat2 && (
                        <div className="graph-stat-2">
                          <span className="graph-statistic stat-indented">
                            {stats.stat2.stat}
                          </span>
                          <span className="values">
                            <span className="val-1">{stats.stat2.value}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="graph-bottom-list-wrapper">
                  <div className="graph-bottom-wrapper graph-text-white graph-border-white graph-stacked">
                    <div className="graph-bottom-section">
                      <span className="graph-bottom-subheader">
                        Total Source Tests
                      </span>
                      <span className="values">
                        <span className="val-1">16,318</span>
                      </span>
                    </div>
                    <div className="graph-bottom-section">
                      <span className="graph-bottom-subheader">
                        Total Source Test Related Violations
                      </span>
                      <span className="values">
                        <span className="val-1">134</span>
                      </span>
                    </div>
                    <div className="graph-bottom-section">
                      <span className="graph-bottom-subheader">
                        Compliance Rate
                      </span>
                      <span className="values">
                        <span className="val-1">99.2%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InternalMenu/>
    </div>
  );
};

import { TopicsSection } from ".";

export default {
  title: "Components/TopicsSection",
  component: TopicsSection,
  argTypes: {
    resolution: {
      options: ["tablet", "desktop", "mobile"],
      control: { type: "select" },
    },
    alignment: {
      options: ["center", "left"],
      control: { type: "select" },
    },
    headline: {
      options: ["large", "medium"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "tablet",
    title: true,
    alignment: "center",
    headline: "large",
    className: {},
    topicsClassName: {},
    topicsText:
      "The grant program funded 33 nonprofits to engage community members in decisions that impact their air quality and health, focusing on neighborhoods most impacted by air pollution. Twenty-two eligible awardees continued on to a second year of capacity-building projects, including bilingual environmental justice academies and interactive youth advocacy campaigns.",
    topicsText1: "JAMES CARY SMITH COMMUNITY GRANT PROGRAM",
    text: "BUILDING APPLIANCE RULE AMENDMENTS",
    text1:
      "Amendments to Regulation 9, Rules 4 and 6, were adopted to eliminate emissions of nitrogen oxides, or NOx, from ",
    text2:
      "residential and commercial natural gas furnaces and water heaters in the Bay Area by requiring new appliances to be zero-NOx.",
    text3:
      " Collectively, the 1.8 million water heaters and furnaces are one of the largest NOx-emitting stationary sources of air pollution in the region. The rule amendments would apply only to new appliances sold in the Bay Area and will improve overall regional air quality from the outdoor venting of these appliances, lower exposure to particulate matter — particularly in communities of color — and eliminate up to $890 million per year in health impacts due to air pollution exposure.<br/><br/>We established a multi-stakeholder Implementation Working Group to track and assess market readiness, technology accessibility, and identify barriers and solutions to an equitable transition. The diverse stakeholders include utility and energy service providers, technology manufacturers, environmental justice and community-based organizations, state agencies, local and regional governments, incentive program administrators, labor unions, contractors, and others.",
  },
};

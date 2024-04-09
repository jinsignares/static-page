import { BlockOfText } from ".";

export default {
  title: "Components/BlockOfText",
  component: BlockOfText,
  argTypes: {
    resolution: {
      options: ["tablet", "desktop", "mobile"],
      control: { type: "select" },
    },
    subtitle: {
      options: ["two-lines", "yes", "no"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "tablet",
    subtitle: "two-lines",
    className: {},
    textClassName: {},
    sectionTitleClassName: {},
    text: "CLIMATE ACTION",
    elementAnnualReportClassName: {},
    text1: "2023 ANNUAL REPORT",
    text2: "HOW DO WE REDUCE EMISSIONS AND PROTECT COMMUNITIES AND THE CLIMATE?",
  },
};

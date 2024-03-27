import { BlockOfText } from ".";

export default {
  title: "Components/BlockOfText",
  component: BlockOfText,
  argTypes: {
    resolution: {
      options: ["desktop", "mobile"],
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
    resolution: "desktop",
    subtitle: "two-lines",
    className: {},
    sectionTitleClassName: {},
    text: "CLIMATE ACTION",
    elementAnnualReportClassName: {},
    text1: "2023 ANNUAL REPORT",
    textClassName: {},
  },
};

import { SectionGraph } from ".";

export default {
  title: "Components/SectionGraph",
  component: SectionGraph,
  argTypes: {
    title: {
      options: ["with-graph", "top", "left"],
      control: { type: "select" },
    },
    graphs: {
      options: ["two", "zero", "one"],
      control: { type: "select" },
    },
    chartCaption: {
      options: ["yes", "z", "no"],
      control: { type: "select" },
    },
    resolution: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    title: "with-graph",
    graphs: "two",
    chartCaption: "yes",
    resolution: "desktop",
    className: {},
    subTopicTitleText: "ANNUAL NUMBERS",
    subTopicTitleText1: "ANNUAL NUMBERS",
    subTopicTitleTypeDefaultClassName: {},
    subTopicTitleTypeDefaultClassNameOverride: {},
    frameClassName: {},
    subTopicTitleText2: "ANNUAL NUMBERS",
  },
};

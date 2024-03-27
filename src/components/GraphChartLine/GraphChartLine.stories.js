import { GraphChartLine } from ".";

export default {
  title: "Components/GraphChartLine",
  component: GraphChartLine,
  argTypes: {
    lines: {
      options: ["two", "one"],
      control: { type: "select" },
    },
    columns: {
      options: ["two", "three"],
      control: { type: "select" },
    },
    input: {
      options: ["title", "total-sl", "total", "default"],
      control: { type: "select" },
    },
    resolution: {
      options: ["desktop", "mobile", "desktop_1"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    lines: "two",
    columns: "two",
    input: "title",
    resolution: "desktop",
    className: {},
    graphChartLineClassName: {},
    sectionTitleClassName: {},
    frameClassName: {},
    text: "49.0%",
    text1: "Refinery Source Tests",
    frameClassNameOverride: {},
    graphChartLineClassNameOverride: {},
    sectionTitleClassNameOverride: {},
    text2: "TOTAL FUNDS AWARDED",
    hasFrame: true,
    divClassName: {},
    text3: "4*",
    divClassNameOverride: {},
  },
};

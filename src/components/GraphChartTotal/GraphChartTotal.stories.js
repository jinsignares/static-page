import { GraphChartTotal } from ".";

export default {
  title: "Components/GraphChartTotal",
  component: GraphChartTotal,
  argTypes: {
    lines: {
      options: ["two", "three", "one"],
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
    lines: "two",
    resolution: "desktop",
    className: {},
    graphChartLineGraphChartLineClassName: {},
    graphChartLineSectionTitleClassName: {},
    graphChartLineText: "49.0%",
    graphChartLineText1: "TOTAL FUNDS AWARDED",
    graphChartLineHasFrame: true,
    graphChartLineColumns: "three",
    graphChartLineSectionTitleClassNameOverride: {},
    graphChartLineDivClassName: {},
    graphChartLineLinesColumnsClassName: {},
    graphChartLineGraphChartLineClassNameOverride: {},
    graphChartLineFrameClassName: {},
    graphChartLineFrameClassNameOverride: {},
    graphChartLineDivClassNameOverride: {},
    graphChartLineFrameClassName1: {},
    graphChartLineSectionTitleClassName1: {},
    graphChartLineFrameClassName2: {},
    graphChartLineSectionTitleClassName2: {},
  },
};

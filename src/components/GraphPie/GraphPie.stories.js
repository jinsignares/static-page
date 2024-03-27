import { GraphPie } from ".";

export default {
  title: "Components/GraphPie",
  component: GraphPie,
  argTypes: {
    resolution: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
    chart: {
      options: ["example", "chart-2", "demo-race", "chart-3", "demo-gender", "chart-1"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    title: true,
    resolution: "desktop",
    chart: "example",
    subtitle: true,
    className: {},
    groupClassName: {},
    clipPathGroup: "/img/clip-path-group-2.png",
    img: "/img/clip-path-group-3.png",
    clipPathGroup1: "/img/clip-path-group-4.png",
    frameClassName: {},
    overlapGroupClassName: {},
    overlapGroupClassNameOverride: {},
    clipPathGroup2: "/img/clip-path-group-1.png",
    vectorClassName: {},
    clipPathGroup3: "/img/clip-path-group-6.png",
    clipPathGroup4: "/img/clip-path-group-8.png",
    vector: "/img/vector-21.svg",
    vector1: "/img/vector.svg",
    vectorClassNameOverride: {},
    sectionTitleClassName: {},
  },
};

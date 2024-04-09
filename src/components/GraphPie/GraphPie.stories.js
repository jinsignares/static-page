import { GraphPie } from ".";

export default {
  title: "Components/GraphPie",
  component: GraphPie,
  argTypes: {
    resolution: {
      options: ["desktop", "mobile-sm", "mobile"],
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
    overlapGroupClassName: {},
    clipPathGroup: "/img/clip-path-group-5.png",
    overlapGroupClassNameOverride: {},
    img: "/img/clip-path-group-7.png",
    clipPathGroup1: "/img/clip-path-group-9.png",
    frameClassName: {},
    clipPathGroup2: "/img/clip-path-group-3.png",
    clipPathGroup3: "/img/clip-path-group-10.png",
    clipPathGroup4: "/img/clip-path-group-11.png",
    text: "Subtitle",
    groupClassNameOverride: {},
    layer: "/img/layer-1-4.png",
    layer1: "/img/layer-1-10.png",
    frameClassNameOverride: {},
    overlapGroupWrapperClassName: {},
    layer2: "/img/layer-1-6.png",
    vector: "/img/vector-21.png",
    overlapGroupWrapperClassNameOverride: {},
    vectorClassName: {},
    vector1: "/img/vector.png",
    vectorClassNameOverride: {},
    sectionTitleClassName: {},
  },
};

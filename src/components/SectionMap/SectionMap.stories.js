import { SectionMap } from ".";

export default {
  title: "Components/SectionMap",
  component: SectionMap,
  argTypes: {
    resolution: {
      options: ["tablet", "desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "tablet",
    className: {},
    map: "/img/map-2.png",
    sectionTitleClassName: {},
    sectionTitleClassNameOverride: {},
    img: "/img/map-3.png",
  },
};

import { SectionMap } from ".";

export default {
  title: "Components/SectionMap",
  component: SectionMap,
  argTypes: {
    resolution: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "desktop",
    className: {},
    map: "/img/map-1.svg",
    img: "/img/map.svg",
  },
};

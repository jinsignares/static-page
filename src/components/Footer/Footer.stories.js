import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    resolution: {
      options: ["tablet", "desktop-1025", "desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "tablet",
    className: {},
    sectionTitleClassName: {},
    BAAQMDLogoClassName: {},
  },
};

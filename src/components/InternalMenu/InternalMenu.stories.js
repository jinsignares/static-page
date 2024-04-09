import { InternalMenu } from ".";

export default {
  title: "Components/InternalMenu",
  component: InternalMenu,
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
    arrowElementTypeBack: "/img/arrow-element.png",
    arrowElementTypeForward: "/img/arrow-element-1.png",
  },
};

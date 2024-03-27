import { SubTopicTitle } from ".";

export default {
  title: "Components/SubTopicTitle",
  component: SubTopicTitle,
  argTypes: {
    type: {
      options: ["left", "type-3", "default"],
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
    type: "left",
    resolution: "desktop",
    className: {},
    sectionTitleClassName: {},
    text: "SOURCES OF GREENHOUSE GAS EMISSIONSA",
  },
};

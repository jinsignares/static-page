import { GraphBarCaption } from ".";

export default {
  title: "Components/GraphBarCaption",
  component: GraphBarCaption,
  argTypes: {
    columns: {
      options: ["two", "one"],
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
    columns: "two",
    resolution: "desktop",
    className: {},
    rectangleClassName: {},
    text: "39.2%",
    sectionTitleClassName: {},
    text1: "Transportation",
  },
};

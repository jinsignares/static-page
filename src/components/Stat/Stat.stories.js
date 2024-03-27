import { Stat } from ".";

export default {
  title: "Components/Stat",
  component: Stat,
  argTypes: {
    type: {
      options: ["numbers", "quote"],
      control: { type: "select" },
    },
    color: {
      options: ["white", "dark-gray", "black", "dark-blue", "gray", "blue", "green", "light-blue"],
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
    type: "numbers",
    color: "white",
    resolution: "desktop",
    text: "$381M",
    text1: "for Clean Cars For All Program and Clean School Bus Program",
    className: {},
  },
};

import { StatSet } from ".";

export default {
  title: "Components/StatSet",
  component: StatSet,
  argTypes: {
    resolution: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
    type: {
      options: ["set-of-3", "set-of-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "desktop",
    type: "set-of-3",
    className: {},
    statColor: "white",
    statText: "$381M",
    statText1: "for Clean Cars For All Program and Clean School Bus Program",
    statText2: "$381M",
    statText3: "for Clean Cars For All Program and Clean School Bus Program",
    statColor1: "white",
    statType: "numbers",
    statTypeNumbersColorClassName: {},
    statTypeNumbersColorClassNameOverride: {},
    statTypeQuoteColorClassName: {},
  },
};

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
    statTypeNumbersColorClassName: {},
    statText: "$381M",
    statText1: "for Clean Cars For All Program and Clean School Bus Program",
    statTypeNumbersColorClassNameOverride: {},
    statText2: "$381M",
    statText3: "for Clean Cars For All Program and Clean School Bus Program",
    statColor1: "white",
    statTypeQuoteColorClassName: {},
    statType: "numbers",
    statSectionTitleClassName: {},
    statSectionTitleClassNameOverride: {},
    statColor2: "white",
    statText4: "$381M",
    statText5: "for Clean Cars For All Program and Clean School Bus Program",
    statTypeQuoteColorClassNameOverride: {},
    statText6: "$381M",
    statText7: "for Clean Cars For All Program and Clean School Bus Program",
    statColor3: "white",
    statDivClassName: {},
    statText8: "$381M",
    statText9: "for Clean Cars For All Program and Clean School Bus Program",
    statDivClassNameOverride: {},
    statSectionTitleClassName1: {},
    statText10: "abc",
  },
};

import { StatSection } from ".";

export default {
  title: "Components/StatSection",
  component: StatSection,
  argTypes: {
    resolution: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
    quantity: {
      options: ["two", "three"],
      control: { type: "select" },
    },
    aligment: {
      options: ["right", "centered"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "desktop",
    quantity: "two",
    aligment: "right",
    title: true,
    className: {},
    hasSectionTitle: true,
    statSetStatText: "$381M",
    statSetStatText1: "for Clean Cars For All Program and Clean School Bus Program",
    statSetStatColor: "white",
    statSetStatType: "numbers",
    statSetStatText2: "for Clean Cars For All Program and Clean School Bus Program",
    statSetStatText3: "$381M",
    statSetStatColor1: "white",
    statSetStatTypeNumbersColorClassName: {},
    statSetStatTypeNumbersColorClassNameOverride: {},
    statSetResolutionDesktopClassName: {},
    statSetStatTypeQuoteColorClassName: {},
    statSetStatText4: "$381M",
    statSetStatText5: "for Clean Cars For All Program and Clean School Bus Program",
    statSetStatColor2: "white",
    statSetStatType1: "numbers",
    statSetResolutionDesktopClassNameOverride: {},
    statSetStatText6: "for Clean Cars For All Program and Clean School Bus Program",
    statSetStatTypeQuoteColorClassNameOverride: {},
    statSetStatDivClassName: {},
    statSetStatDivClassNameOverride: {},
    statSetStatText7: "$381M",
    statSetStatColor3: "white",
  },
};

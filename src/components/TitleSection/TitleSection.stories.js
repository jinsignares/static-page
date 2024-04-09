import { TitleSection } from ".";

export default {
  title: "Components/TitleSection",
  component: TitleSection,
  argTypes: {
    resolution: {
      options: ["tablet", "desktop", "mobile-sm", "mobile"],
      control: { type: "select" },
    },
    layout: {
      options: ["img-r", "stacked", "img-l"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "tablet",
    layout: "img-r",
    className: {},
    frameClassName: {},
    blockOfTextText: "INTRODUCTION",
    blockOfTextElementAnnualReportClassName: {},
    blockOfTextSectionTitleClassName: {},
    blockOfTextResolutionMobileClassName: {},
    blockOfTextText1: "MESSAGE FROM OUR NEW EXECUTIVE OFFICER",
    blockOfTextText2: "INTRODUCTION",
    blockOfTextElementAnnualReportClassNameOverride: {},
    blockOfTextSectionTitleClassNameOverride: {},
    blockOfTextResolutionMobileClassNameOverride: {},
    blockOfTextText3: "MESSAGE FROM OUR NEW EXECUTIVE OFFICER",
    frameClassNameOverride: {},
    hasFrame: true,
    blockOfTextText4: "abc",
    blockOfTextSubtitle: "yes",
    blockOfTextTextClassName: {},
    blockOfTextText5: "abc",
    blockOfTextSubtitle1: "yes",
  },
};

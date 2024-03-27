import { TitleSection } from ".";

export default {
  title: "Components/TitleSection",
  component: TitleSection,
  argTypes: {
    resolution: {
      options: ["desktop", "mobile-sm", "mobile"],
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
    resolution: "desktop",
    layout: "img-r",
    className: {},
    frameClassName: {},
    blockOfTextSectionTitleClassName: {},
    blockOfTextElementAnnualReportClassName: {},
    blockOfTextText: "MESSAGE FROM OUR NEW EXECUTIVE OFFICER",
    blockOfTextText1: "INTRODUCTION",
    blockOfTextResolutionMobileClassName: {},
    blockOfTextTextClassName: {},
    blockOfTextResolution: "mobile",
    blockOfTextSectionTitleClassNameOverride: {},
    blockOfTextElementAnnualReportClassNameOverride: {},
    blockOfTextText2: "MESSAGE FROM OUR NEW EXECUTIVE OFFICER",
    blockOfTextText3: "INTRODUCTION",
    blockOfTextResolutionMobileClassNameOverride: {},
    frameClassNameOverride: {},
  },
};

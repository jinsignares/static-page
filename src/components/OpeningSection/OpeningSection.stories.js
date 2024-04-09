import { OpeningSection } from ".";

export default {
  title: "Components/OpeningSection",
  component: OpeningSection,
  argTypes: {
    resolution: {
      options: ["desktop", "tablet", "mobile"],
      control: { type: "select" },
    },
    font: {
      options: ["body-text", "opening"],
      control: { type: "select" },
    },
    headline: {
      options: ["large", "medium"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "desktop",
    font: "body-text",
    headline: "large",
    className: {},
    openingTextText: "AB 617 COMMUNITY HEALTH PROTECTION PROGRAM",
    openingTextResolutionDesktopClassName: {},
    openingTextText1: "develop and implement health-protective measures in highly impacted communities",
    openingTextText2: " as part of statewide AB 617 implementation.",
    openingTextText3: "We continued to work in collaboration with community members and other stakeholders to ",
    openingTextSpanClassName: {},
    text: "AB 617 COMMUNITY HEALTH PROTECTION PROGRAM",
    text1:
      "We continued to work in collaboration with community members and other stakeholders to develop and implement health-protective measures in highly impacted communities as part of statewide AB 617 implementation.",
  },
};

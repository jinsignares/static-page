import { OpeningSection } from ".";

export default {
  title: "Components/OpeningSection",
  component: OpeningSection,
  argTypes: {
    resolution: {
      options: ["desktop", "mobile"],
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
    openingTextText: " as part of statewide AB 617 implementation.",
    openingTextText1: "We continued to work in collaboration with community members and other stakeholders to ",
    openingTextText2: "develop and implement health-protective measures in highly impacted communities",
    openingTextText3: "AB 617 COMMUNITY HEALTH PROTECTION PROGRAM",
    openingTextWeContinuedToWorkClassName: {},
    openingTextAbCommunityClassName: {},
    openingTextFrameClassName: {},
    openingTextResolutionDesktopClassName: {},
  },
};

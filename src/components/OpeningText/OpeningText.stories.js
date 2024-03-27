import { OpeningText } from ".";

export default {
  title: "Components/OpeningText",
  component: OpeningText,
  argTypes: {
    resolution: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "desktop",
    className: {},
    text: "AB 617 COMMUNITY HEALTH PROTECTION PROGRAM",
    weContinuedToWorkClassName: {},
    spanClassName: {},
    text1: "We continued to work in collaboration with community members and other stakeholders to ",
    spanClassNameOverride: {},
    text2: "develop and implement health-protective measures in highly impacted communities",
    spanClassName1: {},
    text3: " as part of statewide AB 617 implementation.",
    frameClassName: {},
    ABCommunityClassName: {},
  },
};

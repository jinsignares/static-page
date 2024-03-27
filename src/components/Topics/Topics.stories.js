import { Topics } from ".";

export default {
  title: "Components/Topics",
  component: Topics,
  argTypes: {
    resolution: {
      options: ["desktop", "mobile"],
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
    headline: "large",
    button: true,
    className: {},
    jamesCarySmithClassName: {},
    text: "JAMES CARY SMITH COMMUNITY GRANT PROGRAM",
    divClassName: {},
    text1:
      "The grant program funded 33 nonprofits to engage community members in decisions that impact their air quality and health, focusing on neighborhoods most impacted by air pollution. Twenty-two eligible awardees continued on to a second year of capacity-building projects, including bilingual environmental justice academies and interactive youth advocacy campaigns.",
    hasJamesCarySmith: true,
  },
};

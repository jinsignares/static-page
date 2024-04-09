import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["outlined", "filled"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium"],
      control: { type: "select" },
    },
    color: {
      options: ["brick", "blue", "white"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icon: true,
    type: "outlined",
    size: "large",
    color: "brick",
    className: {},
    downloadPdfClassName: {},
    text: "DOWNLOAD PDF",
    groupClassName: {},
    group: "/img/group.png",
  },
};

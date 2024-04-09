import { Quote } from ".";

export default {
  title: "Components/Quote",
  component: Quote,
  argTypes: {
    type: {
      options: ["rounded", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "rounded",
    className: {},
    sectionTitleClassName: {},
    text: "The savings, jobs and other benefits provided by this legislation will reach communities across California.",
  },
};

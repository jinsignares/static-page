import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    resolution: {
      options: ["tablet", "desktop-1920", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "tablet",
    className: {},
  },
};

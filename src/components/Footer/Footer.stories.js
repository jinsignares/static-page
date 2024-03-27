import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
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
  },
};

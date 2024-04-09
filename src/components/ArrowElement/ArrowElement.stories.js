import { ArrowElement } from ".";

export default {
  title: "Components/ArrowElement",
  component: ArrowElement,
  argTypes: {
    type: {
      options: ["forward", "back"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "forward",
    className: {},
    typeBack: "/img/type-back.png",
    typeForward: "/img/type-forward.png",
  },
};

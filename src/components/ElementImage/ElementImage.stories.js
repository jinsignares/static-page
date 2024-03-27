import { ElementImage } from ".";

export default {
  title: "Components/ElementImage",
  component: ElementImage,
  argTypes: {
    resolution: {
      options: ["destop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    resolution: "destop",
    className: {},
    rectangle: "/img/rectangle-255-1.png",
    rectangleClassName: {},
    img: "/img/rectangle-255.png",
  },
};

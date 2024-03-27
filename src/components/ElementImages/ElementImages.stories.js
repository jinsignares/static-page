import { ElementImages } from ".";

export default {
  title: "Components/ElementImages",
  component: ElementImages,
  argTypes: {
    resolution: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    carrousel: true,
    resolution: "desktop",
    className: {},
    rectangle: "/img/rectangle-255-3.png",
    img: "/img/rectangle-256.png",
    frameClassName: {},
    rectangleClassName: {},
    arrowsCarrouselArrowsCarrouselClassName: {},
  },
};

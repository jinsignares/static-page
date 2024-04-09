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
    frameClassName: {},
    rectangle: "/img/rectangle-255-4.png",
    img: "/img/rectangle-256-1.png",
    arrowsCarrouselArrowsArrowElementTypeBack: "/img/type-back.png",
    arrowsCarrouselArrowsArrowElementTypeForward: "/img/type-forward.png",
    rectangleClassName: {},
    arrowsCarrouselArrowsCarrouselClassName: {},
  },
};

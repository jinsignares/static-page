import { HightlightBlurb } from ".";

export default {
  title: "Components/HightlightBlurb",
  component: HightlightBlurb,
  argTypes: {
    type: {
      options: ["carrousel", "default"],
      control: { type: "select" },
    },
    image: {
      options: ["right", "bottom", "top", "left"],
      control: { type: "select" },
    },
    detail: {
      options: ["image", "stat"],
      control: { type: "select" },
    },
    resolution: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "carrousel",
    image: "right",
    detail: "image",
    resolution: "desktop",
    className: {},
    imageSquare: "/img/image-square-2.png",
    jamesCarySmithClassName: {},
    theGrantProgramClassName: {},
    spanClassName: {},
    spanClassNameOverride: {},
    spanClassName1: {},
    imageSquareClassName: {},
    frameClassName: {},
    topicsClassName: {},
    img: "/img/image-square-3.png",
  },
};

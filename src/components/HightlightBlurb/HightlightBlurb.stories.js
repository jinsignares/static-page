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
      options: ["tablet", "desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "carrousel",
    image: "right",
    detail: "image",
    resolution: "tablet",
    className: {},
    imageSquare: "/img/image-square-2-2x.png",
    theGrantProgramClassName: {},
    spanClassName: {},
    spanClassNameOverride: {},
    spanClassName1: {},
    imageSquareClassName: {},
    frameClassName: {},
    topicsClassName: {},
    jamesCarySmithClassName: {},
    img: "/img/image-square-3.png",
    topicsText:
      "While our federal proposal for wildfire response was not included in the final IRA package, we continue to advocate for programs that expand clean air center networks and home air filtration in our most vulnerable communities. To that end, we are continuing to support proposals from House and Senate members that we hope will be part of 2023 federal budget or legislation.",
    topicsResolutionDesktopClassName: {},
    topicsText1: "WILDFIRE SMOKE RESPONSE",
    text: "EAST OAKLAND COMMUNITY AIR MONITORING PARTNERSHIP",
    text1:
      "We launched a three-year community air monitoring project in partnership with Communities for a Better Environment (CBE) to characterize local-scale air quality impacts in East Oakland supported by a U.S. EPA American Rescue Plan Enhanced Air Quality Monitoring for Communities Grant. We will work with CBE to ",
    text2:
      "design and implement air monitoring to assess the impacts of sources or areas of interest to the community.",
    text3:
      " Air quality data from local pollution sources in overburdened communities and the effectiveness of exposure reduction measures can help inform our programs.",
    imageSquare1: "/img/image-square-2-2x.png",
    imageSquare2: "/img/image-square-6-2.png",
    topicsClassNameOverride: {},
    jamesCarySmithClassNameOverride: {},
    imageSquare3: "/img/image-square-3.png",
  },
};

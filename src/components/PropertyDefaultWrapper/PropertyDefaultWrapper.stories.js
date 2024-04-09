import { PropertyDefaultWrapper } from ".";

export default {
  title: "Components/PropertyDefaultWrapper",
  component: PropertyDefaultWrapper,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    hightlightBlurbTopicsClassName: {},
    hightlightBlurbTypeDefaultImageClassName: {},
    hightlightBlurbJamesCarySmithClassName: {},
    hightlightBlurbImageSquareClassName: {},
    hightlightBlurbFrameClassName: {},
    hightlightBlurbText:
      "We launched a three-year community air monitoring project in partnership with Communities for a Better Environment (CBE) to characterize local-scale air quality impacts in East Oakland supported by a U.S. EPA American Rescue Plan Enhanced Air Quality Monitoring for Communities Grant. We will work with CBE to ",
    hightlightBlurbJamesCarySmithClassNameOverride: {},
    hightlightBlurbImage: "left",
    hightlightBlurbText1:
      "design and implement air monitoring to assess the impacts of sources or areas of interest to the community.",
    hightlightBlurbText2: "EAST OAKLAND COMMUNITY AIR MONITORING PARTNERSHIP",
    hightlightBlurbText3:
      " Air quality data from local pollution sources in overburdened communities and the effectiveness of exposure reduction measures can help inform our programs.",
    hightlightBlurbImageSquare: "abc",
    hightlightBlurbTopicsClassNameOverride: {},
    hightlightBlurbImg: "/img/image-square-3.png",
  },
};

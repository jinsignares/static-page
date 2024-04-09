import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeMobilePx } from "./screens/HomeMobilePx";
import { AirQualityDesktop } from "./screens/AirQualityDesktop";
import { IntroMobilePx } from "./screens/IntroMobilePx";
import { AboutDesktop } from "./screens/AboutDesktop";
import { ProtectDesktop } from "./screens/ProtectDesktop";
import { ReduceDesktop } from "./screens/ReduceDesktop";
import { CommunityDesktop } from "./screens/CommunityDesktop";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomeMobilePx />,
  },
  {
    path: "/air-quality",
    element: <AirQualityDesktop />,
  },
  {
    path: "/introduction",
    element: <IntroMobilePx />,
  },
  {
    path: "/about-us",
    element: <AboutDesktop />,
  },
  {
    path: "/protect",
    element: <ProtectDesktop />,
  },
  {
    path: "/reduce",
    element: <ReduceDesktop />,
  },
  {
    path: "/community",
    element: <CommunityDesktop />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

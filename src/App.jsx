import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeMobilePx } from "./screens/HomeMobilePx";
import { AirQualityDesktop } from "./screens/AirQualityDesktop";
import { IntroMobilePx } from "./screens/IntroMobilePx";
import { AboutDesktop } from "./screens/AboutDesktop";
import { ProtectDesktop } from "./screens/ProtectDesktop";
import { ReduceDesktop } from "./screens/ReduceDesktop";
import { CommunityDesktop } from "./screens/CommunityDesktop";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeMobilePx />} />
        <Route path="/air-quality" element={<AirQualityDesktop />} />
        <Route path="/introduction" element={<IntroMobilePx />} />
        <Route path="/about-us" element={<AboutDesktop />} />
        <Route path="/protect" element={<ProtectDesktop />} />
        <Route path="/reduce" element={<ReduceDesktop />} />
        <Route path="/community" element={<CommunityDesktop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

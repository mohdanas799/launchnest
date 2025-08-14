"use client";
import Link from "next/link";
import HeroSection from './components/HeroSection'
import BoilerplateLoopSection from "./components/BoilerplateLoopSection";
import BuildAIAppsSection from "./components/BuildAIAppsSection";
import FeatureSlider from "./components/FeatureSlider";
import Testimonials from "./components/Testimonials";
import Page from "./pricing/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BoilerplateLoopSection/>
      <BuildAIAppsSection/>
      <FeatureSlider/>
      <Testimonials/>
      <Page/>
    </>
  );
}

import AboutSection from "@/components/AboutSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
    </div>
  );
};

export default page;

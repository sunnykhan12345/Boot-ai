import AboutSection from "@/components/AboutSection";
import AttinSection from "@/components/AttinSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import QuoteSection from "@/components/QuoteSection";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <AttinSection />
      <QuoteSection />
    </div>
  );
};

export default page;

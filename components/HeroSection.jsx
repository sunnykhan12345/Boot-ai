"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import HeroBottomCard from "./HeroBottomCard";

const Calendar = dynamic(
  () => import("lucide-react").then((mod) => mod.Calendar),
  {
    ssr: false,
  }
);
export default function HeroSection() {
  return (
    <section
      id="section-hero"
      className="relative w-full min-h-[800px] text-white overflow-hidden"
      style={{ backgroundColor: "var(--bg-dark-1)" }}
    >
      {/* Video overlay background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Bottom Glow */}
      {/* <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#442490]/60 to-transparent z-10 pointer-events-none"></div> */}
      {/* Soft Dark Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1558]/70 via-[#0a021a]/40 to-[#000000]/20 z-10 pointer-events-none"></div>

      {/* Bottom Dark Glow */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2a1558]/80 to-transparent z-10 pointer-events-none"></div>

      {/* <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div> */}

      {/* Hero content */}
      <div className="container mx-auto absolute inset-0 flex items-center justify-center z-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className="subtitle mb-4 text-[15px] font-medium rounded-[2px] inline-block "
            style={{
              fontFamily: "var(--body-font)", // use your CSS variable
              background: "rgba(16, 60, 59, 0.05)", // rgba must be a string
            }}
          >
            <span className="text-[#442490]">[</span> The Future of Intelligence{" "}
            <span className="text-[#442490]">]</span>
          </div>

          <h1
            className="uppercase mb-6 leading-[1.1] lg:text-[100px] text-5xl font-bold"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            AI Summit 2025
          </h1>

          {/* Info blocks */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <div className="md:flex  items-center gap-10">
              {/* <i className="fa fa-calendar text-[var(--primary-color)] text-xl"></i> */}
              <div className="flex items-center gap-3">
                {/* whue err */}
                <Calendar className="w-4 h-4 text-[#442490]" />
                <h4 className="m-0 font-[var(--body-font)] text-xl">
                  October 1–5, 2025
                </h4>
              </div>
              <div className="flex items-center gap-3">
                {/* whue err */}
                <MapPin className="w-4 h-4 text-[#442490]" />
                <h4 className="m-0 font-[var(--body-font)] text-xl">
                  San Francisco, CA
                </h4>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-7">
            {/* Buy Tickets Button */}
            <div className="block">
              <Link
                href="/tickets-2"
                className="px-6 py-2.5 uppercase bg-[#764DF0] rounded-md text-sm font-semibold  text-white  hover:bg-orange-700 transition"
              >
                Get Tickets
              </Link>
            </div>
            <div className="block">
              <Link
                href="/tickets-2"
                className="px-6 py-2.5 uppercase border bg-[#764DF000] rounded-md text-sm font-semibold  text-white  hover:bg-orange-700 transition"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom card */}
      <div className="absolute bottom-0 left-0 w-full z-30 px-4 ">
        <HeroBottomCard />
        {/* <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="text-white text-xl font-bold mb-1"
              style={{ fontFamily: "var(--heading-font)" }}
            >
              Hurry Up!
            </h2>
            <h4
              className="text-white m-0"
              style={{ fontFamily: "var(--body-font)" }}
            >
              Book Your Seat Now
            </h4>
          </div>

          <div id="defaultCountdown" className="text-white"></div>

          <div className="flex items-center gap-3">
            <i className="icofont-google-map text-[var(--primary-color)] text-4xl"></i>
            <div>
              <h4
                className="text-white m-0"
                style={{ fontFamily: "var(--body-font)" }}
              >
                121 AI Blvd,
                <br />
                San Francisco BCA 94107
              </h4>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

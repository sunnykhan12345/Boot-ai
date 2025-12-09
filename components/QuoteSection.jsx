"use client";
import Image from "next/image";

export default function BannerWithOverlay() {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* =======================
          BACKGROUND IMAGE
      ======================== */}
      <Image
        src="/images/s2.webp"
        alt="Banner"
        fill
        className="object-cover"
        priority
      />

      {/* =======================
          OVERLAY (sw-overlay op-8)
      ======================== */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>

      {/* =======================
          TOP GRADIENT EDGE
      ======================== */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/60 to-transparent"></div>

      {/* =======================
          BOTTOM GRADIENT EDGE
      ======================== */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* =======================
          TEXT CONTENT
      ======================== */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-4xl font-bold mb-4">Why Attend</h2>
        <p className="text-lg max-w-xl mx-auto">
          Your content goes here. Add anything you want.
        </p>
      </div>
    </section>
  );
}

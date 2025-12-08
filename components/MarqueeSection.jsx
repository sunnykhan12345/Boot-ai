"use client";

export default function MarqueeSection() {
  return (
    <section className="w-full py-10 overflow-hidden relative">
      {/* Top Marquee */}
      <div className="bg-[#442490] text-white py-6 leading-none rotate-2">
        <div className="marquee-left flex whitespace-nowrap">
          <MarqueeItems />
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="bg-[#2a1558] text-white py-6 leading-none -rotate-2 -mt-5">
        <div className="marquee-right flex whitespace-nowrap">
          <MarqueeItems />
        </div>
      </div>
    </section>
  );
}

function MarqueeItems() {
  return (
    <>
      <span className="text-5xl mx-3">Next Intelligence</span>
      <span className="text-5xl mx-3 opacity-40">/</span>

      <span className="text-5xl mx-3">Future Now</span>
      <span className="text-5xl mx-3 opacity-40">/</span>

      <span className="text-5xl mx-3">Empowering Innovation</span>
      <span className="text-5xl mx-3 opacity-40">/</span>

      <span className="text-5xl mx-3">Smarter Tomorrow</span>
      <span className="text-5xl mx-3 opacity-40">/</span>

      <span className="text-5xl mx-3">Think Forward</span>
      <span className="text-5xl mx-3 opacity-40">/</span>

      <span className="text-5xl mx-3">Cognitive Shift</span>
      <span className="text-5xl mx-3 opacity-40">/</span>
    </>
  );
}

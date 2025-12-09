import React from "react";
import WhyAttendCard from "./WhyAttendCard";

const AttinSection = () => {
  return (
    <section id="section-why-attend" className="bg-[#101435] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-white text-base mb-5">
            <span className="text-[#442490]">[</span> Why Attend{" "}
            <span className="text-[#442490]">]</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 opacity-90">
            What You’ll Gain
          </h2>
          <p className="text-lg opacity-80">
            Hear from global AI pioneers, industry disruptors, and bold thinkers
            shaping the future across every domain.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <WhyAttendCard
            title="Cutting-Edge Knowledge"
            text="Stay ahead of the curve with insights from AI leaders shaping tomorrow’s technology."
            img="/images/s3.webp"
          />

          {/* Card 2 */}
          <WhyAttendCard
            title="Hands-On Learning"
            text="Join live workshops and labs to build practical skills in AI and machine learning."
            img="/images/s4.webp"
          />

          {/* Card 3 */}
          <WhyAttendCard
            title="Global Networking"
            text="Meet developers, founders, and researchers from around the world to collaborate and grow."
            img="/images/s5.webp"
          />

          {/* Card 4 */}
          <WhyAttendCard
            title="Startup Showcase"
            text="Explore the latest AI tools and ideas from promising startups and research labs."
            img="/images/s6.webp"
          />

          {/* Card 5 */}
          <WhyAttendCard
            title="AI Career Boost"
            text="Access exclusive job fairs, mentorship sessions, and recruiting events to grow your career."
            img="/images/s7.webp"
          />

          {/* Card 6 */}
          <WhyAttendCard
            title="Ethics & Future"
            text="Engage in vital conversations around AI ethics, policy, and the future of intelligence."
            img="/images/s8.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default AttinSection;

"use client";

import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="section-about" className="container mx-auto text-white py-16">
      <div className="px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12 py-5 my-5">
            <div
              className="subtitle mb-3 text-[15px] font-medium "
              // You can integrate AOS or framer-motion for fadeInUp
              // data-aos="fade-up"
              // data-aos-delay="200"
            >
              <span className="text-[#442490]"> [</span> About the Event{" "}
              <span className="text-[#442490]">]</span>
            </div>
            <h2
              className="md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]"
              // data-aos="fade-up"
              // data-aos-delay="400"
            >
              A Global Gathering of AI{" "}
              <span className="opacity-60">Innovators</span>
            </h2>
            <p
              className="mb-6 text-gray-300"
              // data-aos="fade-up"
              // data-aos-delay="600"
            >
              Join thought leaders, developers, researchers, and founders as we
              explore how artificial intelligence is reshaping industries,
              creativity, and the future of work.
            </p>

            <ul className="list-none space-y-2">
              <li
                className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#442490]"
                // data-aos="fade-up"
                // data-aos-delay="800"
              >
                5 days of keynotes, workshops, and networking
              </li>
              <li
                className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#442490]"
                // data-aos="fade-up"
                // data-aos-delay="900"
              >
                50 world-class speakers
              </li>
              <li
                className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#442490]"
                // data-aos="fade-up"
                // data-aos-delay="1000"
              >
                Startup showcase and live demos
              </li>
            </ul>
          </div>

          {/* Right Image */}

          <div className="lg:w-5/12 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-full rotate-animation">
              <Image
                src="https://reactheme.com/products/wordpress/aivent/wp-content/uploads/2025/06/c1-1024x1024.webp"
                alt="About Event"
                width={500}
                height={500}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* <div className="lg:w-5/12 w-full flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md lg:max-w-full rotate-animation"
              // data-aos="zoom-in"
            >
              <Image
                src="https://reactheme.com/products/wordpress/aivent/wp-content/uploads/2025/06/c1-1024x1024.webp"
                alt="About Event"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

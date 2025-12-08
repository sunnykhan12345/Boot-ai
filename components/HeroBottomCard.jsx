"use client";

import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react"; // Tailwind-ready icon

export default function HeroBottomCard() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("2025-12-09T06:57:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto border hidden border-gray-500  bg-blue-400/5 backdrop-blur-md rounded-lg px-24 py-10 lg:flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Countdown */}
      <ul className="flex gap-28 text-white text-center ">
        <li>
          <span className="block text-3xl font-bold">{timeLeft.days}</span>
          <span className="block text-base">Days</span>
        </li>
        <li>
          <span className="block text-3xl font-bold">{timeLeft.hours}</span>
          <span className="block text-base">Hours</span>
        </li>
        <li>
          <span className="block text-3xl font-bold">{timeLeft.minutes}</span>
          <span className="block text-base">Minutes</span>
        </li>
        <li>
          <span className="block text-3xl font-bold">{timeLeft.seconds}</span>
          <span className="block text-base">Seconds</span>
        </li>
      </ul>

      {/* Right Location */}
      <div className="flex items-center gap-3 text-white">
        <MapPin className="w-10 h-10 text-[#442490]" />
        <div>
          <span className="block  text-2xl">121 AI Blvd,</span>
          <span className="block text-2xl mt-1">San Francisco BCA 94107</span>
        </div>
      </div>
    </div>
  );
}

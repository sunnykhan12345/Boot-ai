"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#section-hero", label: "Home" },
    { href: "#section-about", label: "About" },
    { href: "#section-why-attend", label: "Why Attend" },
    { href: "#section-speakers", label: "Speakers" },
    { href: "#section-schedule", label: "Schedule" },
    { href: "#section-tickets", label: "Tickets" },
    { href: "#section-venue", label: "Venue" },
    { href: "#section-faq", label: "FAQ" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 lg:py-3 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#101435]/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.webp"
            width={120}
            height={40}
            alt="logo"
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white font-[var(--mainmenu-font)] font-medium text-[var(--mainmenu-font-size)] relative group"
            >
              {link.label}
              <span className="block w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full mt-1"></span>
            </Link>
          ))}
        </nav>

        {/* Buy Tickets Button */}
        <div className="hidden lg:block">
          <Link
            href="/tickets-2"
            className="px-6 py-2.5 uppercase bg-[#442490] rounded-md text-sm font-medium text-white hover:bg-orange-700 transition"
          >
            Buy Tickets
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden backdrop-blur-md p-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white font-[var(--mainmenu-font)] font-bold text-[var(--mainmenu-font-size)]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/tickets-2"
            className="block w-full text-center px-4 py-2 bg-[#442490] text-white rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Buy Tickets
          </Link>
        </div>
      )}
    </header>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: "offers",
    title: "Exclusive Banking Offers",
    desc: "Enjoy cashback, low interest loans and exciting rewards made for you.",
    btn1: "View Offers",
    btn2: "Open Account",
    image: "/images/hero/offers.png",
  },
  {
    id: "accounts",
    title: "Open Account in Minutes",
    desc: "Zero balance savings account with instant digital onboarding.",
    btn1: "Open Account",
    btn2: "Know More",
    image: "/images/hero/accounts.png",
  },
  {
    id: "cards",
    title: "Smart Credit Cards",
    desc: "Best cards for travel, shopping and lifestyle rewards.",
    btn1: "Apply Card",
    btn2: "Compare Cards",
    image: "/images/hero/cards.png",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-130 text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src={slides[active].image}
        alt="hero"
        fill
        className="object-cover"
        priority
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">

        {/* TOP TABS */}
        <div className="mb-10 flex gap-6 text-sm font-semibold">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`pb-2 transition ${active === i
                  ? "border-b-2 border-white"
                  : "opacity-70 hover:opacity-100"
                }`}
            >
              {s.id.toUpperCase()}
            </button>
          ))}
        </div>

        {/* TEXT */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {slides[active].title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            {slides[active].desc}
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              href="/register"
              className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100"
            >
              {slides[active].btn1}
            </Link>

            <Link
              href="/cards"
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700"
            >
              {slides[active].btn2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

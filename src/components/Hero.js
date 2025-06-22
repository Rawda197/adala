"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const fullText = "Growth Marketing - Digital Excellence Partner";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const resetDelay = 2000;

    const timeout = setTimeout(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, resetDelay);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, fullText]);

  return (
    <section className="bg-white text-primary py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* النصوص */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 min-h-[110px]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            We help brands Growth Marketing creative digital marketing,
            social media strategies, and smart business campaigns.
          </p>
          <Link
            href="/services"
            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-primary-light transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* صورة متجاوبة ومؤثرات حولها */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[90%] max-w-[500px] transition-transform duration-500 hover:scale-105">
            <Image
              src="/1.svg"
              alt="Growth Marketing"
              width={500}
              height={500}
              className="w-full h-auto object-contain rounded-xl"
            />
            {/* تأثير الحواف البيضاء الشفافة */}
            <div className="absolute inset-0 rounded-xl border-[8px] border-primary opacity-40 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

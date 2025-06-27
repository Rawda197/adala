"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const fullText = "نحن في عدالة، نؤمن أن الحق لا يُهدر";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [loopCount, setLoopCount] = useState(0);
  const textRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);

  // مراقبة ظهور العنصر
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayedText("");
          setIndex(0);
          setLoopCount(0);
          setStartTyping(true);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  // تأثير الكتابة المتكرر 3 مرات فقط
  useEffect(() => {
    let interval;

    if (startTyping && loopCount < 3) {
      interval = setInterval(() => {
        setDisplayedText((prev) =>
          index < fullText.length ? prev + fullText[index] : ""
        );
        setIndex((prev) => {
          if (prev < fullText.length - 1) {
            return prev + 1;
          } else {
            // إعادة التكرار
            setLoopCount((c) => c + 1);
            setDisplayedText("");
            return 0;
          }
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [startTyping, index, loopCount]);

  return (
    <section className="relative bg-gradient-to-b from-[#f1efef] to-[#555454] text-white pt-20 md:pt-48 pb-12 px-6 md:px-12 lg:px-32 overflow-hidden min-h-[80vh]">
      {/* خلفية شفافة */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1
          ref={textRef}
          className="text-2xl md:text-5xl font-bold mb-1 md:mb-2 leading-relaxed tracking-wide min-h-[80px]"
        >
          <span className="text-primary">{displayedText || fullText}</span>
        </h1>

        <p className="text-sm md:text-lg mb-4 md:mb-8 text-gray-300 tracking-wide leading-loose">
          خبرة قانونية متميزة في تقديم الاستشارات، وصياغة العقود، والمرافعات أمام جميع المحاكم
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/services"
            className="bg-primary text-white px-6 py-3 rounded-full text-sm md:text-base font-medium shadow-md transition-all duration-300 hover:bg-red-700 hover:scale-105"
          >
            تعرف على خدماتنا
          </Link>
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-full text-sm md:text-base font-medium shadow-md transition-all duration-300 hover:bg-gray-200 hover:scale-105"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

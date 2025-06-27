// src/components/GoToServicesButton.js

"use client";

import Link from "next/link";

const GoToServicesButton = () => {
  return (
    <div className="text-center mt-10">
      <Link
        href="/services"
        className="inline-block bg-[#7a1c1c] text-white px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-red-700 hover:scale-105"
      >
        الذهاب إلى صفحة الخدمات
      </Link>
    </div>
  );
};

export default GoToServicesButton;

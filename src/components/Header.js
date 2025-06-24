"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا", href: "/services" },
    { name: "من نحن", href: "/about" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: "المدونة", href: "/blog" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <header className="bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 relative">
        {/* اللوجو داخل بيضاوي */}
        <Link href="/" className="z-20">
          <div className="bg-white shadow-md p-1 w-24 h-12 md:w-32 md:h-16 flex items-center justify-center rounded-[9999px] overflow-hidden">
            <Image
              src="/logo.svg"
              alt="شعار ميزان"
              width={120}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* روابط التنقل - لسطح المكتب */}
        <nav className="hidden md:flex absolute inset-0 items-center justify-center space-x-6 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-gray-300 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* زر القائمة للموبايل */}
        <button
          className="md:hidden z-20"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="قائمة الموبايل"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* القائمة الجانبية للموبايل */}
      {menuOpen && (
        <nav className="md:hidden bg-green-800 px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-white hover:text-gray-300 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

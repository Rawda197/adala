"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-[#7a1c1c] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* الشعار */}
        <Link
          href="/"
          className="w-[100px] h-[50px] overflow-hidden rounded-full bg-white flex items-center justify-center shadow-md transition duration-300 hover:opacity-90 z-10"
        >
          <Image
            src="/logo.svg"
            alt="لوجو مكتب عدالة"
            width={100}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* أيقونة الموبايل */}
        <div className="md:hidden z-20">
          {mobileMenuOpen ? (
            <X size={28} className="cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
          ) : (
            <Menu size={28} className="cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
          )}
        </div>

        {/* التنقل - شاشات كبيرة */}
        <nav className="hidden md:flex gap-10 items-center text-base font-medium absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="hover:text-gray-200 transition duration-300">
            الرئيسية
          </Link>

          <div
            onMouseEnter={() => setShowServicesMenu(true)}
            onMouseLeave={() => setShowServicesMenu(false)}
            className="relative group cursor-pointer flex items-center gap-1"
          >
            <span className="hover:text-gray-200 transition duration-300">
              خدماتنا
            </span>
            <ChevronDown size={18} className="inline" />
            {showServicesMenu && (
              <div className="hidden md:block absolute top-full right-0 bg-white text-black shadow-lg rounded-md p-3 w-64 z-50 space-y-1">
                <Link href="/services/law" className="block py-1 hover:text-red-600">الاستشارات القانونية</Link>
                <Link href="/services/contracts" className="block py-1 hover:text-red-600">صياغة العقود</Link>
                <Link href="/services/defense" className="block py-1 hover:text-red-600">المرافعات والدفاع</Link>
                <Link href="/services/legal-research" className="block py-1 hover:text-red-600">الأبحاث القانونية</Link>
                <Link href="/services/company-setup" className="block py-1 hover:text-red-600">تأسيس الشركات</Link>
                <Link href="/services/legal-training" className="block py-1 hover:text-red-600">الدورات القانونية</Link>
                <Link href="/services/disputes" className="block py-1 hover:text-red-600">حل النزاعات</Link>
                <Link href="/services/contracts-review" className="block py-1 hover:text-red-600">مراجعة العقود</Link>
                <Link href="/services/cyber-law" className="block py-1 hover:text-red-600">القانون السيبراني</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-gray-200 transition duration-300">
            من نحن
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition duration-300">
            تواصل معنا
          </Link>
        </nav>
      </div>

      {/* القائمة في الموبايل */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#7a1c1c] px-6 pb-6 pt-2 flex flex-col space-y-3 transition-all duration-300">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            الرئيسية
          </Link>

          {/* خدماتنا - بدون Dropdown في الموبايل */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center gap-2"
            >
              خدماتنا
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 pt-2 space-y-1 text-sm">
                <Link href="/services/law" onClick={() => setMobileMenuOpen(false)}>الاستشارات القانونية</Link>
                <Link href="/services/contracts" onClick={() => setMobileMenuOpen(false)}>صياغة العقود</Link>
                <Link href="/services/defense" onClick={() => setMobileMenuOpen(false)}>المرافعات والدفاع</Link>
                <Link href="/services/legal-research" onClick={() => setMobileMenuOpen(false)}>الأبحاث القانونية</Link>
                <Link href="/services/company-setup" onClick={() => setMobileMenuOpen(false)}>تأسيس الشركات</Link>
                <Link href="/services/legal-training" onClick={() => setMobileMenuOpen(false)}>الدورات القانونية</Link>
                <Link href="/services/disputes" onClick={() => setMobileMenuOpen(false)}>حل النزاعات</Link>
                <Link href="/services/contracts-review" onClick={() => setMobileMenuOpen(false)}>مراجعة العقود</Link>
                <Link href="/services/cyber-law" onClick={() => setMobileMenuOpen(false)}>القانون السيبراني</Link>
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
            من نحن
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            تواصل معنا
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

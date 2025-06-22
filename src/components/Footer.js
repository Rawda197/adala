"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Growth Marketing</h3>
          <p className="text-sm text-white leading-relaxed opacity-80">
            Growth Marketing is a leading digital solutions provider, offering smart, scalable, and creative marketing strategies to boost your business performance and online presence.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-white opacity-90">
            <li><Link className="hover:text-primary transition duration-300" href="/services/social-media-marketing">Social Media Marketing</Link></li>
            <li><Link className="hover:text-primary transition duration-300" href="/services/performance-advertising">Performance Advertising</Link></li>
            <li><Link className="hover:text-primary transition duration-300" href="/services/seo-optimization">SEO Optimization</Link></li>
            <li><Link className="hover:text-primary transition duration-300" href="/services/email-marketing">Email Marketing</Link></li>
            <li><Link className="hover:text-primary transition duration-300" href="/services/web-design">Web Design</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white opacity-90">
            <li><Link className="hover:text-primary transition duration-300" href="/">Home</Link></li>
            <li><Link className="hover:text-primary transition duration-300" href="/about">About Us</Link></li>
            <li><Link className="hover:text-primary transition duration-300" href="/services">Services</Link></li>
            <li><Link className="hover:text-primary transition duration-300" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-primary transition duration-300" href="/articles">Blog</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="text-sm text-white opacity-90 space-y-2">
            <li>Email: <span className="hover:text-primary transition duration-300">contact@Growth Marketing.com</span></li>
            <li>Phone: <span className="hover:text-primary transition duration-300">+20 100 000 0000</span></li>
            <li>Location: <span className="hover:text-primary transition duration-300">Cairo, Egypt</span></li>
            <li>
              Follow us:
              <div className="flex gap-4 mt-2">
                <Link className="hover:text-primary transition duration-300" href="#">Facebook</Link>
                <Link className="hover:text-primary transition duration-300" href="#">Instagram</Link>
                <Link className="hover:text-primary transition duration-300" href="#">LinkedIn</Link>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} All rights reserved. Powered by <span className="text-white font-semibold">Ummah-Tech</span>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "services ", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/articles" },
  ];

  return (
    <header className="bg-primary text-white py-4 shadow-md w-full z-50 relative">
      <div className="container mx-auto px-6 flex items-center justify-between">

       <Link href="/" className="flex-shrink-0 mr-4 ">
  <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center cursor-pointer">
    <Image
      src="/logo.svg"
      alt="Logo"
      width={120}
      height={120}
      className="object-contain"
    />
  </div>
</Link>


        {/* Desktop Menu */}
<nav className="hidden md:flex flex-1 justify-center">
  <ul className="flex space-x-8">
    {links.map((link) => (
      <li key={link.name}>
        <a
          href={link.href}
          className="text-lg hover:text-primary-light transition duration-300"
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</nav>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-primary text-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg hover:text-primary-light transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

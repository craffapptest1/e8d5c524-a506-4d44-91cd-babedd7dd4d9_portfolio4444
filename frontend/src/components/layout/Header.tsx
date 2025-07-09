"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiDownload, FiMail, FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
            >
              portfolio4444
            </Link>
            <span className="ml-2 text-sm text-gray-500 hidden sm:block">
              | Creative Developer
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 hover:text-indigo-600 rounded-md transition-all duration-300 hover:scale-110"
            >
              {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="flex items-center text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <FiMail className="mr-1" size={16} />
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/resume"
              className="flex items-center bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FiDownload className="mr-2" size={16} />
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-indigo-600 rounded-md transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Actions */}
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                <FiMail className="mr-2" size={16} />
                Contact Me
              </Link>
              
              <Link
                href="/resume"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 justify-center"
              >
                <FiDownload className="mr-2" size={16} />
                Download Resume
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
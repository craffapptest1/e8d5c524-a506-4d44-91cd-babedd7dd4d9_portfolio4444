"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">portfolio4444</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              A passionate developer creating innovative solutions and memorable digital experiences. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <span className="sr-only">GitHub</span>
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Portfolio
              </Link>
              <Link
                href="/skills"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@portfolio4444.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                <FiMail className="h-4 w-4 mr-2" />
                hello@portfolio4444.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                <FiPhone className="h-4 w-4 mr-2" />
                +1 (234) 567-890
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                <FiDownload className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-sm mb-4">
            Ready to start your next project? Let's work together!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} portfolio4444. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
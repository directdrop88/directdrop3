import React from "react";
import { Github, Twitter, Mail, Heart, Shield, Lock } from "lucide-react";

const Footer = ({ isDarkMode }) => {
  // Function to handle scroll to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className={`w-full py-10 px-6 mt-auto border-t transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900 text-gray-300 border-gray-700"
          : "bg-gray-50 text-gray-600 border-gray-200"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* App Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <div
                className={`flex items-center justify-center h-10 w-10 rounded-lg ${
                  isDarkMode ? "bg-blue-600" : "bg-blue-500"
                } text-white mr-3`}
              >
                <Lock size={20} />
              </div>
              <h2 className="text-xl font-bold">
                Direct<span className="text-blue-500">Drop</span>
              </h2>
            </div>
            <p
              className={`text-sm mb-5 text-center md:text-left ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Simple, secure file sharing for everyone. Share files instantly
              with a generated link and QR code.
            </p>
            <div className="flex space-x-5 mt-2">
              <a
                href="#"
                className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
                aria-label="GitHub"
              >
                <Github size={18} className={isDarkMode ? "text-gray-300" : "text-gray-600"} />
              </a>
              <a
                href="#"
                className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
                aria-label="Twitter"
              >
                <Twitter size={18} className={isDarkMode ? "text-gray-300" : "text-gray-600"} />
              </a>
              <a
                href="#"
                className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
                aria-label="Mail"
              >
                <Mail size={18} className={isDarkMode ? "text-gray-300" : "text-gray-600"} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h3
              className={`font-semibold mb-5 text-lg ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                  className={`text-sm hover:${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } transition-colors`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className={`text-sm hover:${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } transition-colors`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('privacy');
                  }}
                  className={`text-sm hover:${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } transition-colors`}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('terms');
                  }}
                  className={`text-sm hover:${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } transition-colors`}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className={`text-sm hover:${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } transition-colors`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="text-center md:text-left">
            <h3
              className={`font-semibold mb-5 text-lg ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Features
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start text-sm">
                <div className={`flex items-center justify-center h-6 w-6 rounded-full ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} mr-3`}>
                  <Shield size={14} className="text-green-500" />
                </div>
                <span>Secure Encryption</span>
              </li>
              <li className="flex items-center justify-center md:justify-start text-sm">
                <div className={`flex items-center justify-center h-6 w-6 rounded-full ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} mr-3`}>
                  <Heart size={14} className="text-red-500" />
                </div>
                <span>No Account Required</span>
              </li>
              <li className="flex items-center justify-center md:justify-start text-sm">
                <div className={`flex items-center justify-center h-6 w-6 rounded-full ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} mr-3`}>
                  <Lock size={14} className="text-blue-500" />
                </div>
                <span>Password Protection</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-10 pt-6 border-t ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          } text-center text-sm`}
        >
          <p className={isDarkMode ? "text-gray-400" : "text-gray-500"}>
            &copy; {new Date().getFullYear()} DirectDrop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
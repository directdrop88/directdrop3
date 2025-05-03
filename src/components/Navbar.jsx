import React, { useState } from "react";
import { Sun, Moon, Upload, Menu, X } from "lucide-react";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isDarkMode 
        ? 'bg-gray-900 text-white border-gray-700' 
        : 'bg-white text-gray-800 border-gray-200'
      } border-b backdrop-blur-md bg-opacity-90 shadow-md`}
    >
      <div className="flex items-center">
        <div className={`flex items-center justify-center h-10 w-10 rounded-lg ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white mr-3`}>
          <Upload size={20} />
        </div>
        <h1 className="text-2xl font-bold">
          Direct<span className="text-blue-500">Drop</span>
        </h1>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-md ${
            isDarkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <button 
          onClick={() => scrollToSection('home')}
          className={`font-medium hover:text-blue-500 transition-colors ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className={`font-medium hover:text-blue-500 transition-colors ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('privacy')}
          className={`font-medium hover:text-blue-500 transition-colors ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}
        >
          Privacy
        </button>
        <button 
          onClick={() => scrollToSection('terms')}
          className={`font-medium hover:text-blue-500 transition-colors ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}
        >
          Terms
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className={`font-medium hover:text-blue-500 transition-colors ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}
        >
          Contact
        </button>
        
        {/* Light/Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors duration-300 flex items-center justify-center ${
            isDarkMode 
            ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
          aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full py-4 px-6 shadow-lg ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}>
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className={`font-medium text-left py-2 hover:text-blue-500 transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium text-left py-2 hover:text-blue-500 transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('privacy')}
              className={`font-medium text-left py-2 hover:text-blue-500 transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => scrollToSection('terms')}
              className={`font-medium text-left py-2 hover:text-blue-500 transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Terms of Service
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium text-left py-2 hover:text-blue-500 transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsofService";
import ContactUs from "./components/ContactUs";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main id="home" className="flex-grow flex items-center justify-center w-full px-4 pt-24 pb-16">
        <div className="w-full max-w-4xl">
          <FileUpload isDarkMode={isDarkMode} />
        </div>
      </main>
      <div id="about">
        <AboutSection isDarkMode={isDarkMode} />
      </div>
      <PrivacyPolicy isDarkMode={isDarkMode} />
      <TermsOfService isDarkMode={isDarkMode} />
      <ContactUs isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
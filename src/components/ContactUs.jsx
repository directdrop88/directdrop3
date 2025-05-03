import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className={`py-16 w-full ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-700" : "bg-white"} shadow-md h-fit`}>
            <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`p-2 rounded-full ${isDarkMode ? "bg-gray-600" : "bg-blue-50"} mr-4`}>
                  <Mail size={20} className={isDarkMode ? "text-blue-400" : "text-blue-500"} />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Email</h4>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>support@directdrop.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-2 rounded-full ${isDarkMode ? "bg-gray-600" : "bg-blue-50"} mr-4`}>
                  <Phone size={20} className={isDarkMode ? "text-blue-400" : "text-blue-500"} />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Phone</h4>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>+91 9826******</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-2 rounded-full ${isDarkMode ? "bg-gray-600" : "bg-blue-50"} mr-4`}>
                  <MapPin size={20} className={isDarkMode ? "text-blue-400" : "text-blue-500"} />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Address</h4>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    130 Bahadhurganj<br />
                    Ujjain,  456001<br />
                    Madhya Pradesh , India
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                <h4 className={`font-medium mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Support Hours</h4>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Monday - Friday: 10am - 6pm IST<br />
                  Saturday: 11am - 3pm IST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-700" : "bg-white"} shadow-md`}>
            <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
              Send us a Message
            </h3>
            
            {submitSuccess ? (
              <div className={`p-4 mb-6 rounded-lg ${isDarkMode ? "bg-green-800 text-green-100" : "bg-green-100 text-green-800"}`}>
                Thank you for your message! We'll get back to you shortly.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-1 text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:outline-none ${
                      isDarkMode 
                        ? "bg-gray-600 border-gray-500 text-white focus:ring-blue-500" 
                        : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
                    }`}
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block mb-1 text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:outline-none ${
                      isDarkMode 
                        ? "bg-gray-600 border-gray-500 text-white focus:ring-blue-500" 
                        : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
                    }`}
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className={`block mb-1 text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:outline-none ${
                      isDarkMode 
                        ? "bg-gray-600 border-gray-500 text-white focus:ring-blue-500" 
                        : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
                    }`}
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block mb-1 text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:outline-none ${
                      isDarkMode 
                        ? "bg-gray-600 border-gray-500 text-white focus:ring-blue-500" 
                        : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
                    }`}
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center w-full px-5 py-3 mt-2 text-sm font-medium text-white rounded-lg ${
                      isSubmitting
                        ? "bg-gray-500 cursor-not-allowed"
                        : isDarkMode
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-blue-500 hover:bg-blue-600"
                    } transition-colors`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
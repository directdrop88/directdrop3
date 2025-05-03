import React from "react";

const PrivacyPolicy = ({ isDarkMode }) => {
  return (
    <section id="privacy" className={`py-16 w-full ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
          Privacy Policy
        </h2>
        
        <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-700" : "bg-white"} shadow-md`}>
          <div className="space-y-6">
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                1. Information We Collect
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                DirectDrop collects minimal information necessary to provide our service. This includes:
              </p>
              <ul className={`list-disc pl-5 mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>Uploaded file data (temporarily stored during sharing)</li>
                <li>Basic access logs (IP addresses, browser type, date/time)</li>
                <li>Optional password if you choose to protect your file</li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                2. How We Use Your Information
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                We use collected information solely to:
              </p>
              <ul className={`list-disc pl-5 mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>Provide and maintain our file-sharing service</li>
                <li>Ensure security and prevent abuse of our platform</li>
                <li>Improve our service based on usage patterns</li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                3. File Storage and Deletion
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                Files uploaded to DirectDrop are automatically deleted after 7 days or after they've been downloaded, whichever comes first. We do not maintain permanent copies of your files on our servers.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                4. Security
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className={`list-disc pl-5 mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>End-to-end encryption during file transfer</li>
                <li>Secure storage with AES-256 encryption</li>
                <li>Optional password protection for shared files</li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                5. Data Sharing
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                We do not sell, trade, or otherwise transfer your information to outside parties. We may share anonymous, aggregated information for service improvement and analysis.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                6. Changes to This Policy
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                We may update our Privacy Policy from time to time. We will notify users of any changes by posting the new Privacy Policy on this page.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                7. Contact Us
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                If you have any questions about our Privacy Policy, please contact us through our Contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
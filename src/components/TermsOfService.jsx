import React from "react";

const TermsOfService = ({ isDarkMode }) => {
  return (
    <section id="terms" className={`py-16 w-full ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
          Terms of Service
        </h2>
        
        <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-50"} shadow-md`}>
          <div className="space-y-6">
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                1. Acceptance of Terms
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                By accessing or using DirectDrop, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                2. Description of Service
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                DirectDrop provides temporary file sharing services allowing users to upload files and share them via generated links. Files are automatically deleted after 7 days or after download, whichever comes first.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                3. User Responsibilities
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                You are responsible for all content uploaded through our service and agree not to use DirectDrop for:
              </p>
              <ul className={`list-disc pl-5 mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>Uploading illegal, harmful, or infringing content</li>
                <li>Distributing malware or any malicious software</li>
                <li>Attempting to compromise our servers or security</li>
                <li>Harassing or harming others through shared content</li>
                <li>Any activity that violates applicable laws or regulations</li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                4. Intellectual Property
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                DirectDrop respects intellectual property rights and expects users to do the same. You must only upload content that you own or have proper permission to distribute. We reserve the right to remove content that allegedly infringes on others' intellectual property rights.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                5. Limitation of Liability
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                DirectDrop provides its service on an "as is" and "as available" basis. We do not guarantee that:
              </p>
              <ul className={`list-disc pl-5 mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>The service will always be available or error-free</li>
                <li>Files will never be lost or corrupted</li>
                <li>The service will meet all specific user requirements</li>
              </ul>
              <p className={`mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                We are not liable for any indirect, incidental, or consequential damages resulting from your use of our service.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                6. Service Modifications
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                We reserve the right to modify or discontinue the service temporarily or permanently with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                7. Termination
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                We may terminate or suspend your access to our service immediately, without prior notice, for any reason including without limitation if you breach the Terms of Service.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                8. Governing Law
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which DirectDrop operates, without regard to its conflict of law provisions.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                9. Changes to Terms
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                We reserve the right to update or change these Terms at any time. We will notify users of any changes by posting the new Terms on this page. Your continued use of the service after any changes indicates your acceptance of the new Terms.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                10. Contact Us
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                If you have any questions about these Terms, please contact us through our Contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
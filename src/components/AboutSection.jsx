import React from "react";
import { Shield, Lock, Zap, ArrowDownToLine, QrCode, Clock, Link2, File } from "lucide-react";

const AboutSection = ({ isDarkMode }) => {
  const features = [
    {
      icon: <Shield className="text-green-500" size={24} />,
      title: "Secure File Transfer",
      description: "Your files are automatically encrypted during transfer with state-of-the-art security protocols to ensure maximum protection."
    },
    {
      icon: <Lock className="text-blue-500" size={24} />,
      title: "Password Protection",
      description: "Add an optional password to your shared files for an additional layer of security, perfect for sensitive documents."
    },
    {
      icon: <QrCode className="text-purple-500" size={24} />,
      title: "QR Code Generation",
      description: "Every upload automatically generates a shareable QR code, making it easy to share access via mobile devices."
    },
    {
      icon: <Link2 className="text-indigo-500" size={24} />,
      title: "Direct Link Sharing",
      description: "Get an instant shareable link for every uploaded file that can be copied with one click and shared anywhere."
    },
    {
      icon: <Zap className="text-yellow-500" size={24} />,
      title: "Real-time Upload Progress",
      description: "Monitor your upload speed, progress percentage, and estimated time remaining in real-time as your files upload."
    },
    {
      icon: <File className="text-red-500" size={24} />,
      title: "Multiple File Types",
      description: "Support for a wide range of file formats including documents, images, audio, video, and archive files."
    },
    {
      icon: <ArrowDownToLine className="text-orange-500" size={24} />,
      title: "No-Registration Downloads",
      description: "Recipients can download shared files instantly without creating an account or installing software."
    },
    {
      icon: <Clock className="text-teal-500" size={24} />,
      title: "Simple Interface",
      description: "Clean, intuitive drag-and-drop interface makes uploading and sharing files effortless for users of all skill levels."
    }
  ];

  return (
    <section className={`py-16 w-full ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div className="max-w-4xl mx-auto px-6">
        {/* About Intro */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            About <span className="text-blue-500">DirectDrop</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            DirectDrop is a secure, user-friendly file sharing service that makes transferring and sharing 
            files quick and hassle-free. Our platform eliminates the need for accounts or subscriptions while 
            maintaining top-tier security.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className={`text-2xl font-semibold mb-6 text-center ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            How It Works
          </h3>
          <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
            <ol className="space-y-6">
              <li className="flex">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                  isDarkMode ? "bg-blue-600" : "bg-blue-500"} text-white font-medium`}>
                  1
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-1 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Upload Your File
                  </h4>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Drag and drop any file into the upload area or click to browse your files. 
                    DirectDrop supports documents, images, videos, audio files, and more.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                  isDarkMode ? "bg-blue-600" : "bg-blue-500"} text-white font-medium`}>
                  2
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-1 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Set Optional Password
                  </h4>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    For sensitive files, you can add password protection. Your recipient will need this 
                    password to access the file, adding an extra layer of security.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                  isDarkMode ? "bg-blue-600" : "bg-blue-500"} text-white font-medium`}>
                  3
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-1 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Get Shareable Link & QR Code
                  </h4>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Once uploaded, DirectDrop generates both a direct link and QR code for your file. 
                    Copy the link with one click or share the QR code for mobile access.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                  isDarkMode ? "bg-blue-600" : "bg-blue-500"} text-white font-medium`}>
                  4
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-1 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Recipients Download Instantly
                  </h4>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    The person receiving your file simply clicks the link or scans the QR code to download. 
                    No account creation or software installation required.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className={`text-2xl font-semibold mb-8 text-center ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`p-5 rounded-xl transition-all duration-300 ${
                  isDarkMode 
                    ? "bg-gray-800 hover:bg-gray-750" 
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${
                  isDarkMode ? "bg-gray-700" : "bg-white shadow-sm"
                }`}>
                  {feature.icon}
                </div>
                <h4 className={`text-lg font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  {feature.title}
                </h4>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
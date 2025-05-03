import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import QRCode from "react-qr-code";
import { FileIcon, Upload, Copy, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";

const DirectDrop = ({ isDarkMode }) => {
  const [file, setFile] = useState(null);
  const [fileLink, setFileLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(null);
  const [estimatedTime, setEstimatedTime] = useState(null);
  const [password, setPassword] = useState("");
  const [generatedLink, setGeneratedLink] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFile(file);
    setGeneratedLink(false);
    setUploaded(true);
  };

  const uploadFile = async (file) => {
    setLoading(true);
    setErrorMessage("");
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("password", password);

    const xhr = new XMLHttpRequest();
    const startTime = Date.now();

    xhr.open("POST", "http://localhost:5000/upload", true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setProgress(percent);

        const elapsedTime = (Date.now() - startTime) / 1000;
        const speed = (event.loaded / elapsedTime) / 1024; 
        setUploadSpeed(speed.toFixed(2));

        const timeLeft = ((event.total - event.loaded) / (speed * 1024)) / 60;
        setEstimatedTime(timeLeft.toFixed(2));
      }
    };

    xhr.onload = () => {
      setLoading(false);
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setFileLink(response.download_link);
        setGeneratedLink(true);
      } else {
        setErrorMessage("Failed to upload file");
      }
    };

    xhr.onerror = () => {
      setLoading(false);
      setErrorMessage("Error uploading file");
    };

    xhr.send(formData);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.txt'],
      'application/pdf': ['.pdf'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'application/zip': ['.zip'],
      'audio/mpeg': ['.mp3'],
      'audio/wav': ['.wav'],
      'audio/ogg': ['.ogg'],
      'video/mp4': ['.mp4'],
      'video/quicktime': ['.mov'],
      'video/x-msvideo': ['.avi'],
      'video/webm': ['.webm']
    }
  });

  const copyToClipboard = () => {
    if (fileLink) {
      navigator.clipboard.writeText(fileLink)
        .then(() => {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000);
        })
        .catch((err) => console.error("Failed to copy link: ", err));
    }
  };

  const handleGenerateLink = () => {
    if (!file) {
      setErrorMessage("Please upload a file first.");
      return;
    }
    uploadFile(file);
  };

  const getFileTypeColor = (fileName) => {
    if (!fileName) return "bg-gray-400";
    const extension = fileName.split('.').pop().toLowerCase();
    
    switch(extension) {
      case 'pdf': return "bg-red-500";
      case 'jpg':
      case 'jpeg':
      case 'png': return "bg-green-500";
      case 'zip': return "bg-yellow-500";
      case 'txt': return "bg-blue-500";
      case 'mp3':
      case 'wav':
      case 'ogg': return "bg-purple-500";
      case 'mp4':
      case 'mov':
      case 'avi':
      case 'webm': return "bg-orange-500";
      default: return "bg-gray-400";
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-white to-gray-100 text-gray-800'}`}>
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute left-1/4 top-1/6 h-32 w-32 rounded-full bg-blue-500 opacity-10 blur-xl"></div>
        <div className="absolute right-1/4 top-1/5 h-40 w-40 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
        <div className="absolute left-1/5 bottom-1/4 h-36 w-36 rounded-full bg-green-500 opacity-10 blur-xl"></div>
        <div className="absolute right-1/6 bottom-1/5 h-28 w-28 rounded-full bg-yellow-500 opacity-10 blur-xl"></div>
      </div>
      
      {/* Main content container */}
      <div className={`z-10 w-full max-w-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl p-8`}>
        <div className="flex items-center justify-center mb-8">
          <div className={`flex items-center justify-center h-12 w-12 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white mr-3`}>
            <Upload size={24} />
          </div>
          <h1 className={`text-4xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Direct<span className="text-blue-500">Drop</span>
          </h1>
        </div>

        <div 
          {...getRootProps()} 
          className={`
            border-3 border-dashed rounded-xl 
            ${isDragActive ? 'border-blue-500 bg-blue-50' : isDarkMode ? 'border-gray-600 hover:border-blue-500 hover:bg-gray-700' : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'} 
            p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 mb-6
          `}
        >
          <input {...getInputProps()} />
          <div className={`h-16 w-16 mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`}>
            <FileIcon size={64} />
          </div>
          {isDragActive ? (
            <p className="text-xl font-medium text-blue-500">Drop your file here...</p>
          ) : (
            <div className="text-center">
              <p className="text-xl font-medium mb-2">Drag and drop your file here</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>or click to browse files</p>
              <p className={`mt-3 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                Supports: .txt, .pdf, .jpg, .png, .zip
              </p>
            </div>
          )}
        </div>

        {uploaded && file && (
          <div className={`flex items-center p-4 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center text-white ${getFileTypeColor(file.name)}`}>
              <FileIcon size={20} />
            </div>
            <div className="ml-3 flex-grow">
              <p className="font-medium truncate">{file.name}</p>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <CheckCircle size={20} className="text-green-500" />
          </div>
        )}

        {uploaded && (
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock size={16} className={isDarkMode ? "text-gray-400" : "text-gray-500"} />
            </div>
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Set a password (optional)"
              className={`w-full pl-10 pr-10 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-gray-50 border-gray-200 text-gray-800'
              } border`}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
            >
              {passwordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        )}

        {loading && (
          <div className="w-full mb-6">
            <div className="flex justify-between mb-1">
              <span className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Uploading...</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div 
                className="h-full bg-blue-500 transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Speed: {uploadSpeed} KB/s</span>
              <span>ETA: {estimatedTime} min</span>
            </div>
          </div>
        )}

        <button
          onClick={handleGenerateLink}
          disabled={!file || loading}
          className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center
            ${!file || loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : isDarkMode 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-blue-500 hover:bg-blue-600'} 
            text-white transition-all duration-300`}
        >
          <Upload size={18} className="mr-2" />
          Generate Link and QR
        </button>

        {generatedLink && fileLink && (
          <div className={`mt-8 p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Share your file</h3>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-600 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                Ready to share
              </div>
            </div>
            
            <div className="mb-6">
              <p className={`mb-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Download Link:</p>
              <div className="flex items-center">
                <input 
                  type="text" 
                  readOnly 
                  value={fileLink} 
                  className={`flex-grow py-2 px-3 rounded-l-lg border-r-0 focus:outline-none ${
                    isDarkMode 
                    ? 'bg-gray-800 border-gray-600 text-gray-100' 
                    : 'bg-white border-gray-200 text-gray-800'
                  } border`}
                />
                <button 
                  onClick={copyToClipboard} 
                  className={`px-4 py-2 rounded-r-lg border-l-0 flex items-center ${
                    isDarkMode 
                    ? 'bg-gray-600 hover:bg-gray-500 border-gray-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-700'
                  } border transition-colors`}
                >
                  {copySuccess ? <CheckCircle size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Scan QR Code:</p>
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-white' : 'bg-white'} shadow-lg`}>
                <QRCode value={fileLink} size={180} />
              </div>
              {password && (
                <div className="mt-4 flex items-center text-sm">
                  <Lock size={14} className="mr-1 text-yellow-500" />
                  <span className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                    Password protected
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="mt-4 p-3 rounded-lg bg-red-100 border border-red-200 text-red-600">
            {errorMessage}
          </div>
        )}
      </div>
      
      <p className={`mt-6 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        Secure, simple file sharing for everyone
      </p>
    </div>
  );
};

export default DirectDrop;
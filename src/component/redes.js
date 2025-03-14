"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa6";

export default function FloatingSocial() {
  return (
    <div className="fixed left-0 top-1/3 z-50 flex flex-col shadow-lg rounded-r-lg overflow-hidden">
      <a 
        href="#" 
        className="bg-blue-700 p-3 text-white hover:bg-blue-800 transition-all duration-300 flex items-center justify-center border-b border-white/10"
      >
        <FaFacebookF size={20} />
      </a>
      <a 
        href="#" 
        className="bg-pink-500 p-3 text-white hover:bg-pink-600 transition-all duration-300 flex items-center justify-center border-b border-white/10"
      >
        <FaInstagram size={20} />
      </a>
      <a 
        href="#" 
        className="bg-sky-500 p-3 text-white hover:bg-sky-600 transition-all duration-300 flex items-center justify-center border-b border-white/10"
      >
        <FaTwitter size={20} />
      </a>
      <a 
        href="#" 
        className="bg-red-600 p-3 text-white hover:bg-red-700 transition-all duration-300 flex items-center justify-center border-b border-white/10"
      >
        <FaYoutube size={20} />
      </a>
      <a 
        href="#" 
        className="bg-gray-700 p-3 text-white hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
      >
        <FaEnvelope size={20} />
      </a>
    </div>
  );
};



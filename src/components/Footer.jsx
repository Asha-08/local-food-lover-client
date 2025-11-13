import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { SiX } from 'react-icons/si'


const Footer = () => {
  
  return (
      <footer className="bg-gray-900 text-gray-200 py-8 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold bg-linear-to-r from-red-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          <span className="text-red-700 animate-pulse">🔥</span> Flavor Hub
        </div>

        {/* Navigation Text */}
        <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-300">
          <span>About</span>
          <span>Menu</span>
          <span>Contact</span>
          <span>Privacy Policy</span>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 text-gray-400 text-xl">
          <FaFacebookF />
          <SiX /> {/* X logo */}
          <FaInstagram />
          <FaLinkedinIn />
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Flavor Hub. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
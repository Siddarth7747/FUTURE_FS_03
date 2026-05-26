import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 mt-20 border-t border-yellow-500">
      
      {/* Logo / Title */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 tracking-wide">
          URBAN BREW
        </h1>

        <p className="text-zinc-400 mt-3 text-lg">
          Premium Coffee House
        </p>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-12 space-y-3">
        <h2 className="text-2xl font-bold text-yellow-400">
          Contact
        </h2>

        <p className="text-zinc-300">
          📞 +91 98765 43210
        </p>

        <p className="text-zinc-300">
          ✉️ support@urbanbrew.com
        </p>

        <p className="text-zinc-300">
          📍 Coimbatore, Tamil Nadu
        </p>
      </div>

      {/* Quick Links */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-yellow-400 mb-5">
          Quick Links
        </h2>

        <div className="flex justify-center gap-6 flex-wrap text-zinc-300">
          <a href="#" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            Menu
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mt-12">
        
        <div className="bg-yellow-500 text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
          <FaFacebookF />
        </div>

        <div className="bg-yellow-500 text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
          <FaInstagram />
        </div>

        <div className="bg-yellow-500 text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
          <FaLinkedinIn />
        </div>

        <div className="bg-yellow-500 text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
          <FaWhatsapp />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-12 text-zinc-500 text-sm">
        © 2026 Urban Brew Coffee Shop. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
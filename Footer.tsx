import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>123 Serenity Lane, Paradise Valley, PV 45678</p>
          <p>Email: contact@sereneescapes.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram size={24} /></a>
          <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter size={24} /></a>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Serene Escapes. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
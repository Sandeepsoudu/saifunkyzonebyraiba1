import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-violet-500 py-16 text-white border-t border-pink-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-3xl font-extrabold text-white-800 mb-4">SaiFashionZone by Raiba</h4>
          <p className="text-gray-200 mb-4 text-center md:text-left">
            Your one-stop destination for thoughtful and unique gifts.
          </p>
          <div className="flex space-x-6 text-3xl mt-4">
            <FaFacebook className="text-white-600 hover:text-white-800 transition cursor-pointer" />
            <FaInstagram className="text-white-600 hover:text-white-800 transition cursor-pointer" />
            <FaTwitter className="text-black-600 hover:text-black-800 transition cursor-pointer" />
          </div>
        </div>
        <div className="text-center md:text-right">
          <h5 className="text-2xl font-bold text-white-800 mb-4">Contact Us</h5>
          <p className="text-gray-200">
            Dilsukhnagar, Hyderabad, India
            <br />
            Email: support@SaiFashionZone by Raiba.com
            <br />
            Phone: +91 1234567890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Footer.js
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto text-center">
      &copy; {new Date().getFullYear()} SaiFashionZone by Raiba. All rights reserved.
    </div>
  </footer>
);

export default Footer;

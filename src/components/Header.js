// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="text-2xl font-bold text-gray-800">
        SaiFashionZone by Raiba
      </Link>
      <nav>
        <Link to="/products" className="mx-2 text-gray-600 hover:text-gray-800">
          Products
        </Link>
        <Link to="/cart" className="mx-2 text-gray-600 hover:text-gray-800">
          Cart
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;

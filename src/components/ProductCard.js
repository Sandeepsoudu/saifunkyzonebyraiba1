// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg">
    <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <Link to={`/products/${product.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        View Details
      </Link>
    </div>
  </div>
);

export default ProductCard;

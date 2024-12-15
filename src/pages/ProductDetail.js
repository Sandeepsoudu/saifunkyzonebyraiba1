// src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api'; // You need to implement this function

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then(data => setProduct(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <img src={product.imageUrl} alt={product.name} className="w-full md:w-1/2 h-auto object-cover" />
      <div className="md:ml-6 mt-4 md:mt-0">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl text-gray-700">${product.price}</p>
        <p className="mt-4">{product.description}</p>
        {/* Add to Cart button and other functionalities */}
      </div>
    </div>
  );
};

export default ProductDetail;

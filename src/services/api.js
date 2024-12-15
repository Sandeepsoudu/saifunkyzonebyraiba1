// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://your-backend-api.com/api'; // Replace with your backend URL

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Add more API functions as needed

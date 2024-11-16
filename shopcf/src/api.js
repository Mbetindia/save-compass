// src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const getProducts = () => axios.get(`${API_URL}/products`);
export const addProductToCart = (productId, quantity) =>
  axios.post(`${API_URL}/cart`, { product_id: productId, quantity });
export const updateCartItem = (cartId, quantity) =>
  axios.put(`${API_URL}/cart/${cartId}`, { quantity });
export const deleteCartItem = (cartId) => axios.delete(`${API_URL}/cart/${cartId}`);
export const getCartItems = () => axios.get(`${API_URL}/cart`);

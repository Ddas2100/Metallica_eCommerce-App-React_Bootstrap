import axios from 'axios';

const baseUrl =
  'https://crudcrud.com/api/3da28576101b448abb4f4c0b6f3f78b5/cart_data';

export const getUserCart = async (userEmail) => {
  return axios.get(`${baseUrl}${userEmail}`);
};

export const addToCart = async (userEmail, item) => {
  return axios.post(`${baseUrl}${userEmail}`, item);
};

export const deleteFromCart = async (userEmail, _id) => {
  return axios.delete(`${baseUrl}${userEmail}/${_id}`);
};
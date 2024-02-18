// import axios from "axios";

// const baseUrl =
//   'https://crudcrud.com/api/7ede35c4860347efa0324caf2cf6c182/cart_data'; 

// export const getUserCart = async (userEmail) => {
//   return axios.get(`${baseUrl}${userEmail}`); 
// };

// export const addToCart = async (userEmail, item) => {
//   return axios.post(`${baseUrl}${userEmail}`, item);
// };

// export const deleteFromCart = async (userEmail, _id) => {
//   return axios.delete(`${baseUrl}${userEmail}/${_id}`);  
// };


const baseUrl =
  'https://crudcrud.com/api/3cb4f56c3e0c4836a2ac30775cb34b80/cart_data';

export const getUserCart = async (userEmail) => {
  const response = await fetch(`${baseUrl}${userEmail}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user cart');
  }
  return response.json(); 
};

export const addToCart = async (userEmail, item) => {
  const response = await fetch(`${baseUrl}${userEmail}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error('Failed to add item to cart');
  }
  return response.json();
};

export const deleteFromCart = async (userEmail, _id) => {
  const response = await fetch(`${baseUrl}${userEmail}/${_id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete item from cart');
  }
};


// let cartData = {};

// export const getUserCart = async (userEmail) => {
//   if (cartData[userEmail]) {
//     return Promise.resolve({ data: cartData[userEmail] });
//   } else {
//     return Promise.reject(new Error('User cart not found'));
//   }
// };

// export const addToCart = async (userEmail, item) => {
//   if (!cartData[userEmail]) {
//     cartData[userEmail] = [];
//   }
//   cartData[userEmail].push(item);
//   return Promise.resolve({ data: item });
// };

// export const deleteFromCart = async (userEmail, _id) => {
//   if (cartData[userEmail]) {
//     const index = cartData[userEmail].findIndex((item) => item._id === _id);
//     if (index !== -1) {
//       const deletedItem = cartData[userEmail].splice(index, 1)[0];
//       return Promise.resolve({ data: deletedItem });
//     }
//   }
//   return Promise.reject(new Error('Item not found in cart'));
// };

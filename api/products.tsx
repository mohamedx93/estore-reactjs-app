import API from './init_axios';

export const fetchProducts = () => API.get(`/products`);

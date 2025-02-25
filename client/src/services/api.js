import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (data) => api.post('/auth/register', data);
export const getTaxData = () => api.get('/tax/data');

export default api;

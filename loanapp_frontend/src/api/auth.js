import axios from '../utils/axiosInstance';

export const login = (credentials) => axios.post('/auth/login', credentials);
export const signup = (data) => axios.post('/auth/signup', data);
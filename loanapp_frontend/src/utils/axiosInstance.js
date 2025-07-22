import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your backend API base URL
  withCredentials: true, // Include credentials (cookies) in requests if needed
});

export default instance;
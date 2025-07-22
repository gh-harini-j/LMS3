import React, { useState, useContext } from 'react';
import { login } from '../../api/auth'; // API call for login
import { AuthContext } from '../../context/AuthContext'; // Context for authentication
import { useNavigate } from 'react-router-dom';
import ToastNotification from '../notifications/ToastNotification'; // Toast notifications for feedback

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(form); // Call login API
      setAuth(data); // Save user data in context
      ToastNotification.success('Login successful!');
      navigate('/'); // Redirect to home page
    } catch (err) {
      ToastNotification.error('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
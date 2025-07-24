
import React, { useState } from 'react';
import axios from '../../utils/axiosInstance';
 import './signup.css'; // Assuming you have a CSS file for styling

import ToastNotification from '../notifications/ToastNotification'; // Toast notifications for feedback
 
export default function RegistrationPage() {
    // State for password visibility
    const [showPassword, setShowPassword] = useState(false);
    // State management for each input field, now including the role
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        role: 'CUSTOMER' // Default role is CUSTOMER
    });
 
    // State for handling loading and error messages
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
 

    // Track if username field has been touched
    const [userNameTouched, setUserNameTouched] = useState(false);

    // Handles changes in any input field and updates the state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (name === 'userName') setUserNameTouched(true);
    };

    // Username validation: starts with a letter, only letters, numbers, -, _ allowed
    const isValidUsername = (username) => {
        return /^[A-Za-z][A-Za-z0-9_-]*$/.test(username);
    };
 


    // Handles the form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default browser refresh on form submission
        setError(null);
        setLoading(true);
        console.log('Submitting registration data:', formData);
       
        // Senior Dev Note: In a production environment, allowing public role selection
        // can be a security risk. A more secure pattern is to have this form always
        // register users as 'CUSTOMER' on the backend, and have a separate,
        // admin-only interface for creating 'LOAN_OFFICER' accounts.
        // This requires updating the backend RegisterRequest DTO to accept a role.
       
        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', formData);
            console.log('Registration successful:', response.data);
            ToastNotification.success('Registration successful! Please proceed to login.');
            // Here you would typically redirect the user to the login page
        } catch (err) {
            console.error('Registration error:', err);
            // Set a default error message
            let errorMessage = 'An unexpected error occurred. Please try again.';
            // If the server responded with an error (e.g., 400 or 500 status)
            if (err.response) {
                // Use the error message from the server response, if available
                errorMessage = err.response.data.message || 'Failed to register.';
            } 
            // If the request was made but no response was received (network error, CORS, etc.)
            else if (err.request) {
                errorMessage = 'Could not connect to the server. Please ensure the backend is running and that CORS is configured correctly.';
            } 
            // For other errors (e.g., client-side errors)
            else {
                errorMessage = err.message;
            }
            setError(errorMessage);
            ToastNotification.error(errorMessage);
        } finally {
            setLoading(false); // Stop the loading indicator
            // form data reset can be done here if needed
            setFormData({
                userName: '',
                email: '',
                password: '',
                role: 'CUSTOMER'
            });
        }

    };
        
    
 
    return (
      <>
            <div className="registration-container">
                <div className="registration-wrapper">
                    <div className="header">
                        <h1 className="header-title">LoanFlow</h1>
                        <p className="header-subtitle">Create Your Account</p>
                    </div>
 
                    <div className="form-card">
                        <h2 className="form-title">Sign Up</h2>
                        <p className="form-subtitle">Join us to get started with your loan application.</p>
                       
                        <form onSubmit={handleSubmit}>
                            <div className="form-fields">
                                <div>
                                    <label htmlFor="userName" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="userName"
                                        name="userName"
                                        value={formData.userName}
                                        onChange={handleChange}
                                        onBlur={() => setUserNameTouched(true)}
                                        required
                                        className="form-input"
                                        placeholder="Enter your username"
                                        autoComplete="username"
                                        inputMode="text"
                                    />
                                    {userNameTouched && formData.userName && !isValidUsername(formData.userName) && (
                                        <div className="error-message" style={{ color: 'red', fontSize: '0.7em', marginTop: '0.25rem' }}>
                                            Username must start with a letter and can only contain letters, numbers, hyphens (-), and underscores (_).
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="form-label">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        minLength="8"
                                        className="form-input"
                                        placeholder="Enter a secure password"
                                        style={{ paddingRight: '2.5rem' }}
                                    />
                                    <button
                                        type="button"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        onClick={() => {
                                            setShowPassword(true);
                                            setTimeout(() => setShowPassword(false), 2000);
                                        }}
                                        style={{
                                            position: 'absolute',
                                            right: '0.5rem',
                                            top: '60%',
                                            transform: 'translateY(-50%)',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: 0,
                                            outline: 'none',
                                            height: '24px',
                                            width: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 2
                                        }}
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#6a93cb"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#bfc9d9"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.137-3.362M6.634 6.634A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.132 5.255M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l18 18"/></svg>
                                        )}
                                    </button>
                                </div>
                                <div>
                                    <label htmlFor="role" className="form-label">
                                        Register as
                                    </label>
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="form-input"
                                    >
                                        <option value="CUSTOMER">Customer</option>
                                        <option value="LOAN_OFFICER">Loan Officer</option>
                                    </select>
                                </div>
                            </div>
 
                            <div className="button-container">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="submit-button"
                                >
                                    {loading ? 'Creating Account...' : 'Create Account'}
                                </button>
                            </div>
                        </form>
 
                        {error && <p className="error-message">{error}</p>}
 
                        <p className="footer-link">
                            Already have an account?{' '}
                            <a href="/login">
                                Sign In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
      </>
    );    
}
 
 
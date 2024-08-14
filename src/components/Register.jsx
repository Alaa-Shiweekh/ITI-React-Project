import React, { useState } from 'react';
import './Login.css';
import sign from '../assets/sign.jpg';

export default function Register({ onRegisterSuccess }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (username.length < 3 || username.length > 20) {
      newErrors.username = "Username must be between 3 and 20 characters.";
    }

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!validatePhone(phone)) {
      newErrors.phone = "Invalid phone number.";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Registration successful:', { username, email, phone, password });
      onRegisterSuccess();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <button className="close-btn" onClick={() => window.history.back()}>✕</button>
        <div className="login-header">
          <img src={sign} alt="Register Banner" />
          <span>Create An Account</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username*"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

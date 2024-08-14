import React, { useState } from 'react';
import './Login.css';
import sign from '../assets/sign.jpg';

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login successful:', { username, password });
    onLoginSuccess();
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <button className="close-btn" onClick={() => window.history.back()}>✕</button>
        <div className="login-header">
          <img src={sign} alt="Login Banner" />
          <span>Sign In</span>
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
          <a href="#" className="forgot-password">Lost your password?</a>
          <button type="submit" className="signin-btn">Sign In</button>
          <button type="button" className="create-account-btn" onClick={() => window.location.href = '/register'}>Create An Account</button>
        </form>
      </div>
    </div>
  );
}

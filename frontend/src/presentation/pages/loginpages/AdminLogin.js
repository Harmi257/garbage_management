import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/admins', {
        method: 'GET',
      });

      const admins = await response.json();

      // Match email and password from the list
      const matchingAdmin = admins.find(
        (admin) => admin.email === email && admin.password === password
      );

      if (matchingAdmin) {
        alert('Login successful');
        navigate('/admin/home');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed: ' + error.message);
    }
  };

  const goToRegister = () => {
    navigate('/admin/register');
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 10,
          left: 7,
          width: '98%',
          height: '97%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/assets/admin.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="form-container">
        <h2>Login Admin</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>

        <p style={{ marginTop: '15px' }}>
          Don't have an account?{' '}
          <button
            onClick={goToRegister}
            style={{
              color: 'blue',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Register Here
          </button>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;

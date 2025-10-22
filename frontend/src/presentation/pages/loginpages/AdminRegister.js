import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Assuming you want consistent styling with login

function AdminRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5001/api/admins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      alert('Registration successful');
      navigate('/admin/login');
    } else {
      alert('Registration failed');
    }
  };

  const goToLogin = () => {
    navigate('/admin/login');
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
      {/* Background Video */}
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

      {/* Form Container */}
      <div className="form-container">
        <h2>Register Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <button type="submit">Register</button>
        </form>

        <p style={{ marginTop: '15px' }}>
          Already have an account?{' '}
          <button
            onClick={goToLogin}
            style={{
              color: 'blue',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Login Here
          </button>
        </p>
      </div>
    </div>
  );
}

export default AdminRegister;

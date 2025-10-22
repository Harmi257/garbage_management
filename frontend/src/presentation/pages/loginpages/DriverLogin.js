import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DriverLogin() {
  const [email, setEmail] = useState('');
  const [idNum, setIdNum] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/drivers', {
        method: 'GET',
      });

      const drivers = await response.json();

      // Check if any driver matches the entered credentials
      const matchedDriver = drivers.find(
        (driver) => driver.email === email && driver.idNum === idNum
      );

      if (matchedDriver) {
        localStorage.setItem('driverEmail', email);
        alert('Login successful');
        navigate('/driver/home');
      } else {
        alert('Invalid email or ID number');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  const goToRegister = () => {
    navigate('/driver/register');
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '99.5vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/assets/driver.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <h2>Login Driver</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>ID Number:</label>
            <input
              type="text"
              value={idNum}
              onChange={(e) => setIdNum(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
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

export default DriverLogin;

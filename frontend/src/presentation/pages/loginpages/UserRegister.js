import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserRegister = () => {
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/users', {
        username,
        userEmail,
        mobile,
        city,
      });

      if (response.status === 201 || response.status === 200) {
        alert('User registered successfully!');
        navigate('/user/login');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Error registering user. Please check the console for more details.');
      console.error('Registration error:', error);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
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
          zIndex: -1, // Keeps the video in the background
        }}
      >
        <source src="/assets/userlogin.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          zIndex: 1, // Ensures the form stays on top of the video
        }}
      >
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Mobile</label>
            <input
              type="text"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;

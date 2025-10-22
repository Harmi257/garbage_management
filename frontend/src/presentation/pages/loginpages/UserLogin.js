import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = ({ setUserEmail }) => {
  const [emailInput, setEmailInput] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:5001/api/users', {
        params: { email: emailInput, password },
      });

      setUserEmail(emailInput); // Set email in parent state
      alert('Login successful!');
      navigate('/user/home');
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <video autoPlay loop muted style={styles.video}>
        <source src="/assets/userlogin.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={styles.formContainer}>
        <h2>User Login</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/user/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '97%',
    height: '97%',
    objectFit: 'cover',
    zIndex: -1,
  },
  formContainer: {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
};

export default UserLogin;

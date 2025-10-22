import React, { useState } from 'react';

function DriverRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    address: '',
    area: '',
    binId: '',
    idNum: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/drivers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Driver registered successfully');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Error occurred during registration');
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
        <source src="/assets/driver.mp4" type="video/mp4" />
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
        <h2>Driver Registration</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile No:</label>
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Area:</label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Bin ID:</label>
            <input
              type="text"
              name="binId"
              value={formData.binId}
              onChange={handleChange}
              required
              placeholder="Paste valid Bin ObjectId"
            />
          </div>

          <div className="form-group">
            <label>ID Number:</label>
            <input
              type="text"
              name="idNum"
              value={formData.idNum}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default DriverRegister;

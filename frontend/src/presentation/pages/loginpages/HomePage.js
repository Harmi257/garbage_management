import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      <video autoPlay muted loop className="video-background">
        <source src="/assets/Garbage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-content">
        <h1>Welcome to the Garbage Management System</h1>
        <div className="buttons">
          <Link to="/admin/login"><button className="btn btn-primary">Admin</button></Link>
          <Link to="/driver/login"><button className="btn btn-primary">Driver</button></Link>
          <Link to="/user/login"><button className="btn btn-primary">User</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

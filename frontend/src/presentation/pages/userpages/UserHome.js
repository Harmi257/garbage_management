import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExclamationCircle, FaClipboardList, FaUser } from 'react-icons/fa';
import './UserHome.css';

function UserPage({ userEmail }) {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path, { state: { userEmail } });
  };

  return (
    <div className="user-page-container">
      <div className="overlay">
        <div className="content">
          <h1>User Dashboard</h1>
          <p style={{ marginBottom: '20px' }}>Welcome, {userEmail}</p>

          <div className="navigation">
            <button
              type="button"
              onClick={() => goTo('/new-complaint')}
              className="nav-button"
            >
              <FaExclamationCircle size={20} style={{ marginRight: '10px' }} />
              New Complaint
            </button>
            <button
              type="button"
              onClick={() => goTo('/my-complaints')}
              className="nav-button"
            >
              <FaClipboardList size={20} style={{ marginRight: '10px' }} />
              My Complaints
            </button>
            <button
              type="button"
              onClick={() => goTo('/my-profile')}
              className="nav-button"
            >
              <FaUser size={20} style={{ marginRight: '10px' }} />
              My Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;

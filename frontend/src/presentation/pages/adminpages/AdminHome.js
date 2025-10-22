import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminHome.css';
import {
  FaTrash,
  FaRecycle,
  FaUserPlus,
  FaIdBadge,
  FaComments,
  FaClipboardList,
  FaUserCircle,
  FaHome,
  FaPowerOff,
} from 'react-icons/fa';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  return (
    <div className="admin-container">
      <nav className="navbar">
        <h2><FaRecycle className="logo-icon" /> Garbage Management System</h2>
      </nav>
       <br></br>
       <br></br> 
      <h2>Admin Dashboard</h2>

      <div className="card-row">
        <Link to="/admin/create-bin" className="card">
          <FaTrash className="icon yellow" />
          <p>Create Bin</p>
        </Link>
        <Link to="/admin/update-bin" className="card">
          <FaRecycle className="icon red" />
          <p>Update Bin</p>
        </Link>
        <Link to="/admin/add-driver" className="card">
          <FaUserPlus className="icon green" />
          <p>Add Driver</p>
        </Link>
        <Link to="/admin/view-driver" className="card">
          <FaIdBadge className="icon orange" />
          <p>View Driver</p>
        </Link>
        <Link to="/admin/view-complaints" className="card">
          <FaComments className="icon blue" />
          <p>View Complaints</p>
        </Link>
        <Link to="/admin/view-work-report" className="card">
          <FaClipboardList className="icon teal" />
          <p>View Work report</p>
        </Link>
        <Link to="/admin/user-details" className="card">
          <FaUserCircle className="icon dark-blue" />
          <p>User Details</p>
        </Link>
      </div>

      <footer className="footer">
        <Link to="/" className="footer-icon">
          <FaHome />
          <p>Home</p>
        </Link>
        <div className="footer-icon logout-icon" onClick={handleLogout} title="Logout">
          <FaPowerOff />
          <p>Logout</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;

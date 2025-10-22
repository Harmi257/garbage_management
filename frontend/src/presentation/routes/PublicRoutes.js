// src/presentation/routes/PublicRoutes.js
import React, { useState } from 'react'; // ✅ FIXED: Added useState import
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/loginpages/HomePage';
import UserLogin from '../pages/loginpages/UserLogin';
import UserRegister from '../pages/loginpages/UserRegister';
import UserHome from '../pages/userpages/UserHome';
import NewComplaint from '../pages/userpages/NewComplaint';
import MyComplaints from '../pages/userpages/MyComplaints';
import MyProfile from '../pages/userpages/MyProfile';

const PublicRoutes = () => {
  const [userEmail, setUserEmail] = useState('');

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/login" element={<UserLogin setUserEmail={setUserEmail} />} />
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/home" element={<UserHome userEmail={userEmail} />} />
      <Route path="/new-complaint" element={<NewComplaint />} />
      <Route path="/my-complaints" element={<MyComplaints />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  );
};

export default PublicRoutes;

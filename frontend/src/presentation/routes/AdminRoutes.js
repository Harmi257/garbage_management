// src/presentation/routes/AdminRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminLogin from '../pages/loginpages/AdminLogin';
import AdminRegister from '../pages/loginpages/AdminRegister';
import AdminHome from '../pages/adminpages/AdminHome';
import CreateBin from '../pages/adminpages/CreateBin';
import UpdateBin from '../pages/adminpages/UpdateBin';
import AddDriver from '../pages/adminpages/AddDriver';
import ViewDriver from '../pages/adminpages/ViewDriver';
import ViewComplaints from '../pages/adminpages/ViewComplaints';
import ViewWorkReport from '../pages/adminpages/ViewWorkReport';
import UserDetails from '../pages/adminpages/UserDetails';

const AdminRoutes = () => (
  <Routes>
    <Route path="login" element={<AdminLogin />} />
    <Route path="register" element={<AdminRegister />} />
    <Route path="home" element={<AdminHome />} />
    <Route path="create-bin" element={<CreateBin />} />
    <Route path="update-bin" element={<UpdateBin />} />
    <Route path="add-driver" element={<AddDriver />} />
    <Route path="view-driver" element={<ViewDriver />} />
    <Route path="view-complaints" element={<ViewComplaints />} />
    <Route path="view-work-report" element={<ViewWorkReport />} />
    <Route path="user-details" element={<UserDetails />} />
  </Routes>
);

export default AdminRoutes;

// src/presentation/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import AdminRoutes from './AdminRoutes';
import DriverRoutes from './DriverRoutes';

const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/driver/*" element={<DriverRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
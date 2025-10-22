// src/presentation/routes/DriverRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DriverLogin from '../pages/loginpages/DriverLogin';
import DriverRegister from '../pages/loginpages/DriverRegister';
import DriverHome from '../pages/driverpages/DriverHome';

const DriverRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<DriverLogin />} />
      <Route path="register" element={<DriverRegister />} />
      <Route path="home" element={<DriverHome />} />
    </Routes>
  );
};

export default DriverRoutes;
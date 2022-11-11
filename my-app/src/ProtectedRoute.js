import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    let logged_in = false;
    return logged_in ? <Outlet /> : <Navigate to="/login" />

}

export default ProtectedRoute;

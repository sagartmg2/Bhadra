import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './App';

const ProtectedRoute = () => {
    const auth = useContext(AuthContext);

    let logged_in = auth.status
    return logged_in ? <Outlet /> : <Navigate to="/login" />

}

export default ProtectedRoute;

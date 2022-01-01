import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate,useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user,isLoading}=useAuth();
    let location=useLocation();
    const adminLogIn = localStorage.getItem("login");
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }

    if(!adminLogIn)
    {
        return <Navigate to="/" state={{from:location}}/>
        
    }
    return children;
    
};

export default AdminRoute;
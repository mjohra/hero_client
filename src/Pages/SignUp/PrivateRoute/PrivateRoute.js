import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation,Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    
    let location=useLocation();
    const loggedIn = localStorage.getItem("login");
  if (!loggedIn) {
    return <Navigate to='/admin' state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
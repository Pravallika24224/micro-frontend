import React from 'react';
import {Navigate } from 'react-router-dom';
import { useAuth } from 'surveyDashboard/authContext';

const ProtectedRoute = ({ children }: any) => {
  const {auth} = useAuth();

  if (auth.isAuthenticated == false) {
    return <Navigate replace={true} to='/' />
  }
  return (
    <React.Fragment>
      {auth.isAuthenticated ? children : null}
    </React.Fragment>
  );
};

export default ProtectedRoute;

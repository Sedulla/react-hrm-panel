import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  let authenticated = isAuthenticated;

  return <>{authenticated ? children : navigate('/session/signin')}</>;
};

export default AuthGuard;

import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

localStorage.setItem(
  'User1',
  JSON.stringify({
    username: 'admin',
    password: 'admin123',
  })
);

export const PrivateRoute = ({ children }) => {
  let location = useLocation();

  return localStorage.getItem('User1') ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

import { useAuth } from "hooks"
import { Navigate } from "react-router-dom";
import React from 'react';
// eslint-disable-next-line react/prop-types
export const PublicRouter = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
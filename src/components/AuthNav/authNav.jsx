import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {

  return (
      <div>
 
              <NavLink aria-label="Register" to="/register">
                Register
              </NavLink>
      
     
              <NavLink aria-label="Login" to="/login">
                Login
              </NavLink>
           
      </div>
  );
};
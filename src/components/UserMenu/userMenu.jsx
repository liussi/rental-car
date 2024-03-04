import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';


export const UserMenu = () => {
  const dispatch = useDispatch();
  
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
     
      <button
        type="button"
        onClick={handleLogOut}
        
      >
        Logout
      </button>
    </div>
  );
};
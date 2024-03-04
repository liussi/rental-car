import { Header } from "components/Header/header";
import React from 'react';

import { useAuth } from 'hooks';
import { AuthNav } from "components/AuthNav/authNav";
import { UserMenu } from "components/UserMenu/userMenu";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
      <div>
           <Header />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

   </div>
     
  );
};
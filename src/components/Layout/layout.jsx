import React from "react";
import { Outlet, NavLink } from 'react-router-dom';



export const Layout = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="favorites">Favorites</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};


import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader/loader';
import { Header } from './Header/header';
import { PrivateRoute } from './PrivateRouter';
import { Register } from 'pages/Register/register';
import { Login } from 'pages/Login/login';
import { PublicRouter } from './PublicRouter';

const Home = lazy(() => import('../pages/Home/home'));
const Catalog = lazy(() => import('../pages/Catalog/catalog'));
const Favorites = lazy(() => import('../pages/Favorites/favorites'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
           <Route
            path="register"
            element={
              <PublicRouter component={Register} redirectTo="/catalog" />
            }
          />
          <Route
            path="login"
            element={
              <PublicRouter component={Login} redirectTo="/catalog" />
            }
          />
        <Route
          path="/catalog"
          element={
            <Suspense fallback={<Loader />}>
              <PrivateRoute component={Catalog} redirectTo="/login" />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Loader />}>
              <PrivateRoute component={Favorites} redirectTo="/login" />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;

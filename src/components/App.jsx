// App.jsx
import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader/loader';
import { Header } from './Header/header';

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
          path="/catalog"
          element={
            <Suspense fallback={<Loader />}>
              <Catalog />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Loader />}>
              <Favorites />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;

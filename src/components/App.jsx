import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Home from '../pages/Home/home';
import Catalog from '../pages/Catalog/catalog';
import Favorites from '../pages/Favorites/favorites';
import Loader from './Loader/loader';
import { Layout } from './Layout/layout';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
      </Route>
    </Routes>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import About from './components/About';
import Notfound from './components/Notfound';
import Login from './components/Login';
import Register from './components/Register';
import ProductDeatail from './components/ProductDeatail';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleRegisterSuccess = () => {
    setIsRegistered(true);
    setIsLoggedIn(true);
  };

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
        { path: 'productdetails/:id', element: <ProductDeatail /> },
        { path: 'login', element: <Login onLoginSuccess={handleLoginSuccess} /> },
        { path: 'register', element: <Register onRegisterSuccess={handleRegisterSuccess} /> },
        {
          path: 'buy',
          element: isRegistered ? (isLoggedIn ? <Navigate to="/purchase" /> : <Navigate to="/login" />) : <Navigate to="/register" />
        },
        { path: '*', element: <Notfound /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login';
import Registar from './components/Registar';
import Home from './components/Home';
import AuthProvider from './providers/AuthProvider';
import Profile from './components/Profile';
import PrivetRoute from './components/PrivetRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registar',
        element: <Registar></Registar>
      },
      {
        path: '/profile',
        element: <PrivetRoute><Profile></Profile></PrivetRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

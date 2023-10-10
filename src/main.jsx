import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Home from './layout/Home';
import AuthProvider from './provider/AuthProvider';
import Login from './component/Login';
import Register from './component/Register';
import { ToastContainer } from 'react-toastify';
import TeamMate from './component/TeamMate';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Contact from './component/Contact';
import ServiceDetails from './component/ServiceDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Blog from './component/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : ()=> fetch('/service.json')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute> ,
        loader : ()=> fetch('/service.json')
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
      },
      {
        path: "/teammate",
        element: <PrivateRoute><TeamMate></TeamMate></PrivateRoute>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)

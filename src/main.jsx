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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path :"/",
        element : <Home></Home>
      },
      {
        path :"/login",
        element : <Login></Login>
      },
      {
        path :"/register",
        element : <Register></Register>
      },
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

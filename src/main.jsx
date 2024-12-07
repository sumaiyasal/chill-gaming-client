import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddReview from './components/AddReview.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import AuthProvider from './components/Authprovider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children: [
      {
        path: "/addReview",
        element: <AddReview/>,
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
 <AuthProvider>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </AuthProvider>,
)

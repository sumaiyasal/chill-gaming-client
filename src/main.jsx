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
import AuthProvider from './components/AuthProvider.jsx';
import Privateroutes from './components/Privateroutes.jsx';
import Myreviews from './Myreviews.jsx';
import Mywatchlist from './Mywatchlist.jsx';
import Allreviews from './components/Allreviews.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children: [
      {
        path: "/addReview",
        element: <Privateroutes>
          <AddReview/>
        </Privateroutes>
        ,
      },
      {
        path: "/myReviews",
        element: <Privateroutes>
          <Myreviews></Myreviews>
        </Privateroutes>
        ,
      },
      {
        path: "/myWatchlist",
        element: <Privateroutes>
          <Mywatchlist></Mywatchlist>
        </Privateroutes>
        ,
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/allreviews",
        element: <Allreviews></Allreviews>,
        loader:()=>fetch('http://localhost:5000/reviews')
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

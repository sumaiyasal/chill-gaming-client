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
import Sreview from './Sreview';
import Updatereview from './Updatereview.jsx';
import Error from './Error.jsx';
import Dashboard from './components/Dashboard.jsx';
import DashboardLayout from './components/DashboardLayout.jsx';
import Overview from './components/Overview.jsx';
import Profile from './components/Profile.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<Error></Error>,
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
        </Privateroutes>,
        
        
      },
      
      {
        path: "/myWatchlist",
        element: <Privateroutes>
          <Mywatchlist></Mywatchlist>
        </Privateroutes>,
        
    
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/allreviews",
        element: <Allreviews></Allreviews>,
        loader:()=>fetch(`https://chill-gaming-server.vercel.app

/reviews`)
      },
      {
        path: "/allreviews/:id",
        element: <Sreview></Sreview>,
        loader:({params})=>fetch(`https://chill-gaming-server.vercel.app

/reviews/${params.id}`)
      },
      {
        path: "/updateReview/:id",
        
        element:<Privateroutes>
           <Updatereview></Updatereview>
        </Privateroutes>
        ,
        loader:({params})=>fetch(`https://chill-gaming-server.vercel.app

/reviews/${params.id}`)
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
  
     {
 
  path: "/dashboardlayout",
  element: <Privateroutes><DashboardLayout /></Privateroutes>,
  children: [
    { index: true, element: <Overview /> },              // Loads at /dashboard
   
    { path: "profile", element: <Profile></Profile> },
    { path: "myReviews", element:<Myreviews></Myreviews> },
    { path: "addReview", element: <AddReview/>},
    { path: "myWatchlist", element: <Mywatchlist></Mywatchlist>}
  ]
}


  
]);

createRoot(document.getElementById('root')).render(
 <AuthProvider>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
       <ToastContainer position="top-center" />
       <Toaster position="top-center" />
    </AuthProvider>
    </AuthProvider>,
)

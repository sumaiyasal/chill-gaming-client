import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
   
      <div className="w-64 bg-base-100 border-r p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="menu">
          <li><NavLink to="/dashboardlayout">Overview</NavLink></li>
          <li><NavLink to="/dashboardlayout/profile">Profile</NavLink></li>
          <li><NavLink to="/dashboardlayout/myReviews">My Reviews</NavLink></li>
          <li><NavLink to="/dashboardlayout/addReview">Add Review</NavLink></li>
          <li><NavLink to="/dashboardlayout/myWatchlist">Watchlist</NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
      </div>

     
   
  );
};

export default Dashboard;

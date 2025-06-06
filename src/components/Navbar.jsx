import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

import { Tooltip } from 'react-tooltip'
const Navbar = () => {
  const{user,signout,toggleTheme}=useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleLinkClick = () => {
    setDropdownOpen(false);
  };
    
  
 
    const links=<>
    <li><NavLink to='/'style={({ isActive }) => ({
          backgroundColor: isActive ? '#ff3333' : '#e2e6ea', 
          color: isActive ? 'white' : '#333', 
          marginRight:'8px',
         
        })}onClick={handleLinkClick}  >Home</NavLink></li>
    <li><NavLink to='/allreviews'style={({ isActive }) => ({
          backgroundColor: isActive ? '#ff3333' : '#e2e6ea', 
          color: isActive ? 'white' : '#333', 
          marginRight:'8px',
         
        })}onClick={handleLinkClick}>All Reviews</NavLink></li>
        <li><NavLink to='/addReview'style={({ isActive }) => ({
          backgroundColor: isActive ? '#ff3333' : '#e2e6ea', 
          color: isActive ? 'white' : '#333', 
          marginRight:'8px',
        })}onClick={handleLinkClick}>Add Reviews</NavLink></li>
    <li><NavLink to='/myReviews'style={({ isActive }) => ({
          backgroundColor: isActive ? '#ff3333' : '#e2e6ea', 
          color: isActive ? 'white' : '#333', 
          marginRight:'8px',
        })}onClick={handleLinkClick}>My Reviews</NavLink></li>
    <li><NavLink to='/myWatchlist'style={({ isActive }) => ({
          backgroundColor: isActive ? '#ff3333' : '#e2e6ea', 
          color: isActive ? 'white' : '#333', 
          marginRight:'8px',
        })}onClick={handleLinkClick}>Game WatchList</NavLink></li>
    
    </>
    
    return (
        <div className="absolute">
            <div className="navbar bg-slate-100 text-black dark:bg-black dark:text-white shadow-orange-100 shadow-md fixed top-0 left-0 w-full z-50  ">
  <div className="navbar-start lg:px-8 ">
    <div className="dropdown relative">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {dropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute"
              >
                {links}
              </ul>
            )}
          </div>
    <span className="lg:text-2xl text:xl font-bold text-red-500">Chill Gamer</span>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  {user && user?.email ? (
         <div className="navbar-end lg:mr-8 mr-0 flex  gap-2  text-black dark:text-white">
  
  <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" onClick={toggleTheme} />

  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
<div className="dropdown dropdown-end  text-black">
        <div tabIndex={0} role="button" className=" "><div className="avatar">
  <div className="w-10 rounded-full">

   <img src={user.photoURL?user.photoURL:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3Mk-vKpOPglmhuwPLivuDRJUU5T1QIPCAg&s`} className="w-[50px] h-[50px] picimg" />
  </div>
</div></div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-slate-100 text-black rounded-box z-[1] mt-4 w-52 p-2 shadow">
          <li className="pl-4">{user.displayName}</li>
          <li><NavLink to='/dashboardlayout'style={({ isActive }) => ({
          backgroundColor: isActive ? '#ff5733' : '#e2e6ea', 
          color: isActive ? 'white' : '#333', 
          marginRight:'8px',
        })}>Dashboard</NavLink></li>
          <li onClick={signout}><a>Logout</a></li>
        </ul>
      </div>
    
            </div>
         
        ) : (
          <div className="navbar-end flex gap-2 mr-8">
          
          <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" onClick={toggleTheme} />

  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10 fill-current "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
<NavLink to="/login" className="btn bg-red-400 text-white">Login</NavLink>
          </div>
        )}

      
</div>
        </div>
    );
};

export default Navbar;
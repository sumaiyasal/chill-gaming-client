import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Navbar = () => {
  const{user,signout}=useContext(AuthContext)
    const links=<>
    <li><NavLink to='/'style={({ isActive }) => ({
          backgroundColor: isActive ? '#ff5733' : '#e2e6ea', 
          color: isActive ? 'white' : '#333', 
          marginRight:'8px',
         
        })}  >Home</NavLink></li>
    <li><NavLink to='/allreviews'style={({ isActive }) => ({
          backgroundColor: isActive ? '#ff5733' : '#e2e6ea', 
          color: isActive ? 'white' : '#333', 
          marginRight:'8px',
         
        })}>All Reviews</NavLink></li>
        <li><NavLink to='/addReview'style={({ isActive }) => ({
          backgroundColor: isActive ? '#ff5733' : '#e2e6ea', 
          color: isActive ? 'white' : '#333', 
          marginRight:'8px',
        })}>Add Reviews</NavLink></li>
    <li><NavLink to='/myReviews'style={({ isActive }) => ({
          backgroundColor: isActive ? '#ff5733' : '#e2e6ea', 
          color: isActive ? 'white' : '#333', 
          marginRight:'8px',
        })}>My Reviews</NavLink></li>
    <li><NavLink to='/'style={({ isActive }) => ({
          backgroundColor: isActive ? '#ff5733' : '#e2e6ea', 
          color: isActive ? 'white' : '#333', 
          marginRight:'8px',
        })}>Game WatchList</NavLink></li>
    
    </>
    
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Chill Gaming</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  {user && user?.email ? (
          <div className="navbar-end flex gap-2">
             <button onClick={signout} className="btn bg-orange-300 rounded-xl ">
            Log-Out
          </button>
            </div>
         
        ) : (
          <div className="navbar-end flex gap-2">
          <NavLink to="/login" className="btn bg-sky-300">Login</NavLink>
          <NavLink to="/signup" className="btn bg-orange-300">Sign Up</NavLink>
          </div>
        )}
</div>
        </div>
    );
};

export default Navbar;
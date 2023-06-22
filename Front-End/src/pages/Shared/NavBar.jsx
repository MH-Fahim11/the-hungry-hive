import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuhtProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-gray-300 sticky top-0 z-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/blog" className="justify-between">
                Blog
              </Link>
            </li>
           
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-serif"> <span className=" text-orange-500">T</span>he <span className=" text-orange-500">Hunger</span> Hive</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className=" hover:text-orange-500 font-serif">
            <NavLink to="/">Home</NavLink>
          </li>
          <li tabIndex={0} className="hover:text-orange-500 font-serif">
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
         {user && (
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
        )} 
        </div>
        
        <div>
          {user ? (
            <button
              className=" px-3 py-2 bg-orange-400 rounded-xl font-bold text-white font-serif hover:bg-orange-500"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className=" px-3 py-2 bg-orange-400 rounded-xl font-bold text-white font-serif hover:bg-orange-500">
                LogIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

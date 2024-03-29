import { useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../../Provider/AuthProvider";
import "./Navbar.css";

import logo from "/logo1.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/toys">All Toys</Link>
      </li>
      {user && (
        <li>
          <Link to="/my-toys">My Toys</Link>
        </li>
      )}
      {user && (
        <li>
          <Link to="/add-toy">Add Toy</Link>
        </li>
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-10 bg-gray-100 drop-shadow-1 py-4 px-0 md:px-3">
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
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-[42px] hidden md:block" src={logo} alt="" />
          <h2 className="text-2xl md:text-3xl font-bold ms-0 md:ms-1">
            Toy Trackers
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              data-tooltip-id="user-name"
              data-tooltip-content={user.displayName}
              style={{ width: "56px", height: "53px" }}
              src={user.photoURL}
              className="mr-3 rounded-full"
            />
            <Tooltip id="user-name" />
            <button onClick={handleLogOut} className="btn btn-outline btn-info">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline btn-info">Login</button>
          </Link>
        )}

        {/* <button className="btn btn-outline btn-info">Login</button> */}
      </div>
    </div>
  );
};

export default Navbar;

import React, { use, useEffect, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaUser, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="navbar mx-auto min-h-0 sticky top-0 z-50 shadow-lg bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 backdrop-blur-md">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex items-center justify-between w-full">
          
          {/* Left - Mobile Menu & Logo */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm md:hidden text-white hover:bg-white/20">
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
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-50 mt-3 w-52 p-2 shadow-xl border border-base-content/10"
              >
                <li>
                  <NavLink 
                    to={"/"} 
                    className={({ isActive }) => isActive ? "bg-gradient-to-r from-orange-500 to-red-500 text-white" : ""}
                  >
                    <GoHomeFill />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to={"/all-reviews"}
                    className={({ isActive }) => isActive ? "bg-gradient-to-r from-orange-500 to-red-500 text-white" : ""}
                  >
                    All Reviews
                  </NavLink>
                </li>
                {user && (
                  <li>
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </li>
                )}
                <li>
                  <NavLink 
                    to={"/about"}
                    className={({ isActive }) => isActive ? "bg-gradient-to-r from-orange-500 to-red-500 text-white" : ""}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to={"/contact"}
                    className={({ isActive }) => isActive ? "bg-gradient-to-r from-orange-500 to-red-500 text-white" : ""}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to={"/privacy"}
                    className={({ isActive }) => isActive ? "bg-gradient-to-r from-orange-500 to-red-500 text-white" : ""}
                  >
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <Link to={"/"} className="flex items-center gap-2">
              <div className="relative">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center transform rotate-12 shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=100&auto=format&fit=crop" 
                    alt="Flavor Hub" 
                    className="w-full h-full object-cover transform -rotate-12"
                  />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">
                Flavor Hub
              </span>
            </Link>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1 text-white font-medium">
              <li>
                <NavLink 
                  to={"/"} 
                  className={({ isActive }) => 
                    isActive 
                      ? "bg-white/20 text-white rounded-lg" 
                      : "hover:bg-white/10 rounded-lg"
                  }
                >
                  <GoHomeFill />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to={"/all-reviews"}
                  className={({ isActive }) => 
                    isActive 
                      ? "bg-white/20 text-white rounded-lg" 
                      : "hover:bg-white/10 rounded-lg"
                  }
                >
                  All Reviews
                </NavLink>
              </li>
              {user && (
                <li>
                  <Link to={"/dashboard"} className="hover:bg-white/10 rounded-lg">
                    Dashboard
                  </Link>
                </li>
              )}
              <li>
                <NavLink 
                  to={"/about"}
                  className={({ isActive }) => 
                    isActive 
                      ? "bg-white/20 text-white rounded-lg" 
                      : "hover:bg-white/10 rounded-lg"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to={"/contact"}
                  className={({ isActive }) => 
                    isActive 
                      ? "bg-white/20 text-white rounded-lg" 
                      : "hover:bg-white/10 rounded-lg"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to={"/privacy"}
                  className={({ isActive }) => 
                    isActive 
                      ? "bg-white/20 text-white rounded-lg" 
                      : "hover:bg-white/10 rounded-lg"
                  }
                >
                  Privacy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right - Theme Toggle & Auth */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle with Icons */}
            <label className="swap swap-rotate btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20">
              <input
                type="checkbox"
                onChange={(e) => handleTheme(e.target.checked)}
                defaultChecked={localStorage.getItem("theme") === "dark"}
              />
              <FaSun className="swap-off w-5 h-5" />
              <FaMoon className="swap-on w-5 h-5" />
            </label>

            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-white/50 transition-all"
                >
                  <div className="w-9 rounded-full ring-2 ring-white">
                    <img
                      alt="User avatar"
                      referrerPolicy="no-referrer"
                      src={
                        user.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={-1}
                  className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-50 mt-3 w-52 p-2 shadow-xl border border-base-content/10"
                >
                  <div className="px-3 py-2 border-b border-base-content/10">
                    <p className="text-sm font-bold text-base-content">{user.displayName}</p>
                    <p className="text-xs text-base-content/70 truncate">{user.email}</p>
                  </div>
                  <li className="mt-2">
                    <Link to={"/add-reviews"} className="hover:bg-orange-500 hover:text-white">
                      <FaUser /> Add Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to={"/my-reviews"} className="hover:bg-orange-500 hover:text-white">
                      My Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to={"/my-favorites"} className="hover:bg-orange-500 hover:text-white">
                      My Favorites
                    </Link>
                  </li>
                  <li>
                    <Link to={"/dashboard"} className="hover:bg-orange-500 hover:text-white">
                      Dashboard
                    </Link>
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={signOutUser}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-red-500 hover:to-orange-500"
                    >
                      <IoLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to={"/auth/login"}
                  className="btn btn-sm rounded-full bg-white text-orange-500 border-0 hover:bg-white/90 font-semibold"
                >
                  <IoLogIn /> Login
                </Link>
                <Link
                  to={"/auth/register"}
                  className="btn btn-sm rounded-full bg-white/20 text-white border border-white/30 hover:bg-white hover:text-orange-500 font-semibold hidden sm:flex"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
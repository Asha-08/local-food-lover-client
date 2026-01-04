import { NavLink, Outlet, Link } from "react-router";
import {
  FaBars,
  FaHome,
  FaStar,
  FaHeart,
  FaPlusCircle,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { IoLogOut } from "react-icons/io5";

const DashboardLayout = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* ================= TOP NAVBAR ================= */}
      <nav className="bg-[#eb2323] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleSidebar}
                className="lg:hidden  focus:outline-none"
              >
                <FaBars className="text-2xl" />
              </button>
              <Link to="/" className="text-2xl font-bold text-white">
               User Dashboard
              </Link>
            </div>

            {/* Right - Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-50 text-orange-500 rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
              >
                <li className="font-semibold text-2xl">
                  <span>{user?.displayName}</span>
                </li>
                <li>
                  <Link to="/dashboard/profile">
                    <FaUser></FaUser>
                    Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard">
                  <GoHomeFill />
                  Dashboard Home</Link>
                </li>
                <li>
                  <button onClick={signOutUser}>
                    <IoLogOut />Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= BODY ================= */}
      <div className="flex  mx-auto">
        {/* -------- SIDEBAR (Desktop) -------- */}
        <aside className="hidden lg:block w-64 bg-[#eb2323] shadow-lg min-h-[calc(100vh-4rem)] sticky top-16">
          <ul className="menu p-4 space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 bg-orange-100 text-orange-600 font-semibold"
                    : "flex items-center gap-3 hover:bg-orange-100 hover:text-orange-600"
                }
              >
                <FaHome className="text-xl" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 bg-orange-100 text-orange-600 font-semibold"
                    : "flex items-center gap-3 hover:bg-orange-100 hover:text-orange-600"
                }
              >
                <GoHomeFill className="text-xl" />
                Dashboard Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-reviews"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 bg-orange-100 text-orange-600 font-semibold"
                    : "flex items-center gap-3 hover:hover:bg-orange-100 hover:text-orange-600"
                }
              >
                <FaStar className="text-xl" />
                My Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-favorites"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 bg-orange-100 text-orange-600 font-semibold"
                    : "flex items-center gap-3 hover:bg-orange-100 hover:text-orange-600"
                }
              >
                <FaHeart className="text-xl" />
                My Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-review"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 bg-orange-100 text-orange-600 font-semibold"
                    : "flex items-center gap-3 hover:bg-orange-100 hover:text-orange-600"
                }
              >
                <FaPlusCircle className="text-xl" />
                Add Review
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* -------- MAIN CONTENT -------- */}
        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div className="lg:hidden">
        {/* Backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
            onClick={closeSidebar}
          ></div>
        )}

        {/* Mobile Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-[#eb2323] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold ">Menu</h2>
          </div>
          <ul className="menu p-4 space-y-2">
            <li>
              <NavLink
                to="/"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 bg-blue-100 text-blue-600 font-semibold"
                    : "flex items-center gap-3 hover:bg-orange-100 hover:text-orange-600"
                }
              >
                <FaHome className="text-xl" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                end
                onClick={closeSidebar}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 bg-orange-100 text-orange-600 font-semibold"
                    : "flex items-center gap-3 hover:bg-orange-100 hover:text-orange-600"
                }
              >
                <GoHomeFill className="text-xl" />
                Dashboard Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-reviews"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 bg-orange-100 text-orange-600 font-semibold"
                    : "flex items-center gap-3 hover:bg-orange-100 hover:text-orange-600"
                }
              >
                <FaStar className="text-xl" />
                My Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-favorites"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 bg-orange-100 text-orange-600 font-semibold"
                    : "flex items-center gap-3 hover:bg-orange-100 hover:text-orange-600"
                }
              >
                <FaHeart className="text-xl" />
                My Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-reviews"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 bg-orange-100 text-orange-600 font-semibold"
                    : "flex items-center gap-3 hover:bg-orange-100 hover:text-orange-600"
                }
              >
                <FaPlusCircle className="text-xl" />
                Add Review
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
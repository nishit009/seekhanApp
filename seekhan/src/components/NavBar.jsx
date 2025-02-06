import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthorContext";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion
import logoimg1 from "./assets/updated_logo.png";
import profileLogo from "./assets/R.png";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const openSignup = () => {
    navigate("/Signup");
  };

  const { isLoggedIn, logout, isAdmin, username } = useContext(AuthContext);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    ...(isAdmin ? [{ name: "Git", path: "/Git" }] : []),
    ...(isLoggedIn ? [{ name: "Quiz", path: "/quiz" }] : []),
  ];

  return (
    <nav className="w-full h-[80px] px-[50px] flex items-center justify-between bg-[#002D62] text-white">
      {/* Logo Section */}
      <div>
        <img src={logoimg1} className="h-[30px] w-auto" alt="Logo" />
      </div>

      {/* Center Navigation Links */}
      <ul className="relative flex space-x-[50px]">
        {navLinks.map((link) => (
          <li key={link.path} className="font-bold cursor-pointer relative">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-white relative"
                  : "text-gray-300 hover:text-white"
              }
            >
              {link.name}
              {/* Motion underline */}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-[#59AACF]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Profile Section */}
      <div className="relative flex items-center space-x-5">
        {isLoggedIn && (
          <>
            {/* Profile Dropdown */}
            <div className="relative">
              <img
                src={profileLogo}
                alt="Profile"
                onClick={toggleDropdown}
                className={`h-[40px] w-[40px] rounded-full cursor-pointer bg-blue-800 ${
                  isDropdownOpen ? "hover:bg-blue-400" : "hover:bg-gray-400"
                }`}
              />
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-[#002D62] text-white rounded shadow-lg z-50"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="block w-full text-left px-4 py-2 bg-black">
                    Welcome {username}!
                  </div>
                  <button
                    onClick={() => navigate("/history")}
                    className="block w-full text-left px-4 py-2 hover:bg-black"
                  >
                    History
                  </button>
                  <button
                    onClick={() => navigate("/ChangePassword")}
                    className="block w-full text-left px-4 py-2 hover:bg-black"
                  >
                    Change Password
                  </button>
                </div>
              )}
            </div>

            {/* Logout Button */}
            <button
              onClick={logout}
              className="font-bold cursor-pointer hover:underline"
            >
              Logout
            </button>
          </>
        )}

        {!isLoggedIn && (
          <button
            className="outline-none bg-[#59AACF] hover:bg-[#011732] w-fit h-fit px-4 font-bold py-2"
            onClick={openSignup}
          >
            SignUp
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
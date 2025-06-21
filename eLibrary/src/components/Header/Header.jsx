import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-lg sticky z-50 top-0">
      <nav className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-b-xl w-full h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: AI Tutor Logo/Title */}
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold hover:text-orange-400 transition duration-300">
            AI Tutor
          </Link>
        </div>

        {/* Center: Desktop Navigation (hidden on small screens) */}
        <div className="hidden md:flex justify-center flex-1 space-x-8">
          <Link
            to="/leaderboard"
            className="text-white text-lg font-medium hover:text-orange-400 transition duration-300"
          >
            Leaderboard
          </Link>
        </div>

        {/* Right: Login & Sign Up Buttons (desktop) */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            to="/login"
            className="text-white border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-slate-700 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white bg-orange-600 px-4 py-1 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 rounded-lg shadow-md py-4 transition-all duration-300 ease-in-out mt-2">
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/leaderboard"
              onClick={toggleMenu} // Close menu on click
              className="text-white text-lg font-medium hover:text-orange-400 transition duration-300 py-2 w-full text-center"
            >
              Leaderboard
            </Link>
            <Link
              to="/login"
              onClick={toggleMenu}
              className="text-white border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-slate-700 transition duration-300 w-11/12 text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={toggleMenu}
              className="text-white bg-orange-600 px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-300 w-11/12 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
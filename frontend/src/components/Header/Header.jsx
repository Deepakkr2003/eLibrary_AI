import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/eLibrary_Logo.jpeg';

function Header({ isAuthenticated, setIsAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');   // clear token
    setIsAuthenticated(false);          // update auth state
    navigate('/login');                 // redirect to login
  };

  return (
    <header className="shadow-lg sticky z-50 top-0">
      <nav className="bg-gradient-to-r from-slate-900 to-slate-900 rounded-b-xl w-full h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-full mr-2" />
        
          <Link to="/" className="text-white text-2xl font-bold hover:text-orange-400 transition duration-300">
            AI Tutor
          </Link>
        </div>

        

        {/* Right: Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4 items-center">
          

          {!isAuthenticated ? (
            <>
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
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center text-white border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-slate-700 transition duration-300"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png"
                alt="Logout"
                className="w-5 h-5 mr-2"
              />
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 rounded-lg shadow-md py-4 transition-all duration-300 ease-in-out mt-2">
          <div className="flex flex-col items-center space-y-4">
            

            {!isAuthenticated ? (
              <>
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
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="flex items-center justify-center text-white border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-slate-700 transition duration-300 w-11/12 text-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png"
                  alt="Logout"
                  className="w-5 h-5 mr-2"
                />
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

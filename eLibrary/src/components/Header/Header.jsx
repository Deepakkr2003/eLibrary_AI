import React from 'react';

function Header() {
  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-slate-600 rounded-b-xl border-gray-600 w-screen h-16 flex items-center justify-between px-4">
          {/* Left: AI Tutor */}
          <div className="text-white text-xl font-semibold">
            AI Tutor
          </div>

          {/* Center: Leaderboard */}
          <div className="hidden md:flex justify-center flex-1">
            <a
              href="/leaderboard"
              className="text-white text-lg font-medium hover:text-orange-400"
            >
              Leaderboard
            </a>
          </div>

          {/* Right: Login & Sign Up */}
          <div className="flex space-x-4">
            <a
              href="/login"
              className="text-white border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-slate-600 transition"
            >
              Login
            </a>
            <a
              href="/signup"
              className="text-white bg-orange-600 px-4 py-1 rounded-lg hover:bg-orange-700 transition"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

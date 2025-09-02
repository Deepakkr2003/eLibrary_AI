import React from "react";
import companyLogo from "../../assets/ApnaSarthi.jpeg"
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-blue-600  border-y  mt-6 rounded-xl">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={companyLogo}
                className="mr-3 h-16 w-32 rounded-xl"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/review" className="hover:underline">
                    Review
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/support" className="hover:underline">
                    Support
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/query" className="hover:underline">
                    Query
                  </Link>
                </li>

                <li>
                  <Link to="/cancel" className="hover:underline">
                    Cancel Booking
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064558009326&mibextid=ZbWKwL"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook transform transition-transform duration-300 hover:scale-125 text-2xl"></i>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://x.com/Apnasarthitech?t=9pamu_Uku5h6-HQciPP6_Q&s=08"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter transform transition-transform duration-300 hover:scale-125 text-2xl"></i>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/apnasarthioffical?igsh=amRic2ZwN3RubHVu"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram transform transition-transform duration-300 hover:scale-125 text-2xl"></i>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=" https://www.linkedin.com/company/apnasarthi-solutions-private-limited/"
                    className="hover:underline block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin transform transition-transform duration-300 hover:scale-125 text-2xl"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/term" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-2 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2024
            <a href="#" className="hover:underline">
              apnasarthi
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;










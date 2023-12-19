import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="bg-invisible">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex md:px-24 md:py-12 h-16 items-center justify-between">
            <div className="flex items-center">
             <Link to="/">
                <img
                  className="block h-10 px-3 md:h-8 w-auto"
                  src="https://www.ombrulla.com/logo.svg"
                  alt="Ombrulla"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="" className="font-bold text-primary hover:text-blue-500">
                Home
              </Link>
              <div className="group relative">
                <Link to="" className="font-bold text-black hover:text-blue-500">
                  <span>
                    Services <i className="fa-solid fa-angle-down"></i>
                  </span>
                </Link>
                <div className="absolute text-base left-0 z-50 hidden pt-5 space-y-2 group-hover:block font-semibold transition duration-300 ease-in-out w-64 text-left">
                  <ul className="bg-white">
                    <Link className="block">
                      <li className="border-b border-gray-300 px-4 py-2 font-semibold text-black hover:text-primary">
                        AI Visual Inspection
                      </li>
                    </Link>
                    <Link className="block">
                      <li className="border-b border-gray-300 px-4 py-2 font-semibold text-black hover:text-primary">
                        AI Infrastructure Inspection
                      </li>
                    </Link>
                    <Link className="block">
                      <li className="border-b border-gray-300 px-4 py-2 font-semibold text-black hover:text-primary">
                        AI People Tracking
                      </li>
                    </Link>
                    <Link className="block">
                      <li className="border-b border-gray-300 px-4 py-2 font-semibold text-black hover:text-primary">
                        AI Data Analytics
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="group relative">
                <Link
                  href="#"
                  className="font-bold text-black hover:text-blue-500 flex items-center"
                >
                  <span>
                    Product <i className="fa-solid fa-angle-down"></i>
                  </span>
                </Link>
                <div className="absolute text-base font-sans left-0 z-50 hidden pt-5 space-y-2 group-hover:block font-semibold transition ease-in-out w-72 text-left">
                  <ul className="bg-white">
                    <Link className="block">
                      <li className="border-b border-gray-300 p-4 text-black hover:text-primary">
                        Asset Performance Management
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <Link to={'/about'} className="font-bold text-black hover:text-blue-500">About</Link>
              <Link to={'/blog'} className="font-bold text-black hover:text-blue-500">Blog</Link>
              <Link className="font-bold text-black hover:text-blue-500">Contact</Link>
            </div>
            <div className="flex md:hidden">
              {/* <!-- menu button --> */}
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                id="mobile-menu-button"
                type="button"
                onClick={handleMobileMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                <i
                  id="menu-icon"
                  className={`fas ${
                    isMobileMenuOpen ? "fa-times" : "fa-bars"
                  } block text-lg`}
                ></i>{" "}
              </button>
              {/* <!-- mobile menu --> */}
              <div
        
              id="mobile-menu"
              className={`fixed z-10 left-0 top-0 w-[70%] h-full bg-white ${
                isMobileMenuOpen ? '' : 'hidden'
              } md:hidden`}
            >
                <div className="bg-gray-100 px-16 py-10">
                  <Link to={'/'}><img src="https://www.ombrulla.com/logo.svg" alt="" /></Link>
                </div>
                <div className="">
                  <ul className="mobilenav">
                    <li className="px-4">
                      <div className="pb-4 pt-3 ps-4 border-b-2"><Link to={'/'}>Home</Link></div>
                    </li>
                    <li className="px-4">
                      <div className="pb-4 pt-3 ps-4 flex justify-between border-b-2">
                        <Link>Services</Link>
                        <span className="bg-blue-600 text-center w-8 h-8 rounded-circle text-lg text-white">
                          +
                        </span>
                      </div>
                      {/* <ul style="padding-left: 1rem;">
                          <li className="pb-4 border-b-2">AI Visual Inspection</li>
                          <li className="pb-4 border-b-2">AI Infrastructure Inspection</li>
                          <li className="pb-4 border-b-2">AI People Tracking</li>
                          <li className="pb-4 border-b-2">AI Data Analytics</li>
                        </ul> */}
                    </li>
                    <li className="px-4">
                      <div className="pb-4 pt-3 ps-4 flex justify-between border-b-2">
                        Products
                        <span className="bg-blue-600 text-center w-8 h-8 rounded-circle text-lg text-white">
                          +
                        </span>
                      </div>
                      {/* <ul style="padding-left: 1rem;">
                          <li className="pb-4 border-b-2">Asset Performance Management</li>
                        </ul>  */}
                    </li>
                    <li className="px-4">
                      <div className="pb-4 pt-3 ps-4 border-b-2"><Link to={'/about'}>About</Link></div>
                    </li>
                    <li className="px-4">
                      <div className="pb-4 pt-3 ps-4 border-b-2"><Link to={'/blog'}>Blog</Link></div>
                    </li>
                    <li className="px-4">
                      <div className="px-4 pt-3"><Link>Contact</Link></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

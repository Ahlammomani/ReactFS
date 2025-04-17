import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // يمكن تغيير هذه الحالة بناءً على حالة المصادقة الفعلية
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    // هنا يمكنك إضافة منطق تسجيل الخروج
    setIsUserLoggedIn(false);
    setIsProfileDropdownOpen(false);
    navigate('/login');
  };

  return (
    <nav className="bg-[#FCF8F3] border-b border-[#E7CCCC] shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-20" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#97BE5A]">FruitandSeeds</span>
        </Link>
        
        {/* User Profile / Join Us Button Section */}
        <div className="flex items-center md:order-2">
          {isUserLoggedIn ? (
            <div className="relative">
              <button 
                type="button" 
                className="flex text-sm bg-[#C1CFA1] rounded-full focus:ring-4 focus:ring-[#A5B68D]" 
                onClick={toggleProfileDropdown}
                aria-expanded={isProfileDropdownOpen}
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
              </button>
              
              {/* Dropdown menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-48 bg-[#EDE8DC] rounded-lg shadow-lg divide-y divide-[#E7CCCC]">
                  <div className="px-4 py-3">
                    <span className="block text-sm font-medium text-[#A5B68D]">Bonnie Green</span>
                    <span className="block text-sm text-[#A5B68D] truncate">name@flowbite.com</span>
                  </div>
                  <ul className="py-2">
                    <li>
                      <Link to="/settings" className="block px-4 py-2 text-sm text-[#A5B68D] hover:bg-[#E7CCCC] hover:text-[#A5B68D]" onClick={() => setIsProfileDropdownOpen(false)}>
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" className="block px-4 py-2 text-sm text-[#A5B68D] hover:bg-[#E7CCCC] hover:text-[#A5B68D]" onClick={() => setIsProfileDropdownOpen(false)}>
                        Cart
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-[#A5B68D] hover:bg-[#E7CCCC] hover:text-[#A5B68D]">
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link 
              to="/signup"
              className="bg-[#A5B68D] hover:bg-[#E7CCCC] text-[#EDE8DC] font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-200"
            >
              Join Us
            </Link>
          )}
          
          {/* Hamburger Menu Button (only visible on mobile) */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-[#A5B68D] rounded-lg md:hidden hover:bg-[#E7CCCC] focus:outline-none focus:ring-2 focus:ring-[#C1CFA1] ml-2"
            onClick={toggleMenu}
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        
        {/* Navigation Links */}
        <div 
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'} md:block`} 
          id="navbar-menu"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#E7CCCC] rounded-lg bg-[#EDE8DC] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link 
                to="/" 
                className="block py-2 px-3 text-[#A5B68D] bg-[#C1CFA1] rounded-lg md:bg-transparent md:text-[#A5B68D] md:font-bold md:p-0" 
                aria-current="page"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/aboutus" 
                className="block py-2 px-3 text-[#A5B68D] rounded-lg hover:bg-[#E7CCCC] md:hover:bg-transparent md:hover:text-[#E7CCCC] md:p-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link 
                to="/menu" 
                className="block py-2 px-3 text-[#A5B68D] rounded-lg hover:bg-[#E7CCCC] md:hover:bg-transparent md:hover:text-[#E7CCCC] md:p-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                to="/contactus" 
                className="block py-2 px-3 text-[#97BE5A] rounded-lg hover:bg-[#E7CCCC] md:hover:bg-transparent md:hover:text-[#E7CCCC] md:p-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
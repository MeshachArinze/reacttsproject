import { useState } from "react";
import { defaultUser } from "../utils/helpers";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("login");

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleTabChange = (tab: string) => {
      setActiveTab(tab);
    };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-semibold">Logo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {defaultUser.desktop.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-md mr-2 sm:w-48"
            />
            <div className="hidden md:block">
              <button
                onClick={() => handleTabChange('login')}
                className={`${
                  activeTab === 'login'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:text-white'
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Login
              </button>
              <button
                onClick={() => handleTabChange('signup')}
                className={`${
                  activeTab === 'signup'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:text-white'
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {defaultUser.mobile.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => handleTabChange('login')}
            className={`${
              activeTab === 'login'
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:text-white'
            } block w-full text-left px-3 py-2 rounded-md text-base font-medium`}
          >
            Login
          </button>
          <button
            onClick={() => handleTabChange('signup')}
            className={`${
              activeTab === 'signup'
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:text-white'
            } block w-full text-left px-3 py-2 rounded-md text-base font-medium`}
          >
            Sign Up
          </button>
        </div>
      </div>
      {activeTab === 'login' && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            {/* Login form */}
          </div>
        </div>
      )}
      {activeTab === 'signup' && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            {/* Signup form */}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const name = localStorage.getItem("userName") || "A";

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (menuOpen) {
      setMenuOpen(!menuOpen);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (dropdownOpen) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <nav className=" border-b-2 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link to={"/blogs"}>
          <span className=" cursor-pointer text-3xl font-bold text-slate-800">
            ScriptLife
          </span>
        </Link>

        <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
            onClick={toggleDropdown}
          >
            <div className="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gradient-to-br from-black to-slate-500 rounded-full ">
              <span className="font-bold text-2xl text-white ">
                {name[0].toUpperCase()}
              </span>
            </div>
          </button>
          {/* Dropdown menu */}
          {dropdownOpen && (
            <div
              className="absolute top-7 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-md shadow-slate-400"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 ">{name}</span>
                <span className="block text-sm text-gray-500 truncate">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <Link to={"/"}>
                  <li className="block px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:scale-110">
                    Sign out
                  </li>
                </Link>
              </ul>
            </div>
          )}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 "
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            menuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="w-full flex flex-col text-lg font-bold p-4 md:p-0 mt-4 border-2 border-gray-400 rounded-lg bg-gray-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a
                href="/blogs"
                className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent 
                hover:text-white hover:bg-blue-700 md:hover:text-blue-700 md:p-0 transition-all duration-700 hover:scale-105"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/blog/publish"
                className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent 
                hover:text-white hover:bg-blue-700 md:hover:text-blue-700 md:p-0 transition-all duration-700 hover:scale-105"
              >
                New Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 transition-all duration-500 hover:scale-105"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

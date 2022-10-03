import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo_em_svg.svg";
import { useThemeContext } from "../hooks/useTheme";
import Navbar from "./Navbar";

export default function Header() {
  const { setDarkMode, theme, setTheme, darkMode } = useThemeContext();

  const onHandleThemeChange = (event) => {
    event.preventDefault();
    setDarkMode(event.target.value);
    console.log(event.target.value);
    console.log(darkMode);
  };

  return (
    // header
    <div className={`${darkMode}`}>
      <header className="py-2 shadow-sm bg-white dark:bg-[#111827] transition">
        <div className="max-w-[1280px] flex items-center justify-between mx-auto">
          {/* logo */}
          <Link to="/">
            <a href="">
              <img src={logoImg} className="w-32" />
            </a>
          </Link>

          {/* searchbar */}
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class="md:hidden text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
          <div class="hidden relative md:block">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          {/* icons */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-center text-gray-700 hover:text-red-700 transition relative"
            >
              <div className="text-2xl">
                <i className="far fa-heart"></i>
              </div>
              <div className="text-xs leading-3">Wish List</div>
              <span className="absolute right-0 top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-800 text-white text-xs">
                8
              </span>
            </a>
          </div>
          <select
            onChange={onHandleThemeChange}
            name=""
            id=""
            value={darkMode}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg p-3.5"
          >
            <option value="">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </header>
      <Navbar />
    </div>
  );
}

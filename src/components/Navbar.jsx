import { Link } from "react-router-dom";
import clockIcon from "../assets/1363176.png";
import stack from '../assets/Stack.svg'
import user from '../assets/User.svg'
import plus from '../assets/Plus.svg'
import config from '../assets/Settings-alt.svg'
import { useThemeContext } from "../hooks/useTheme";

export default function Navbar() {
  const { darkMode } = useThemeContext();

  return (
    <>
      <nav class="bg-white border border-b-1 border-gray-200 dark:border-gray-600 dark:bg-[#000000] px-8">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <div className="px-8 py-4 bg-[#001227] hover:bg-[#001227f1] text-black flex items-center cursor-pointer rounded-xl relative group transition dark:bg-[#6366f1] dark:hover:text-white">
          <span className="text-white"></span>
          <span className="capitalize ml-2 text-white">
           Todas Categorias
          </span>
          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 hidden group-hover:block transition duration-500">
            <Link to="/consult-request">
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={stack} className="w-5 h-5 object-contain" alt="" />
              <span className="ml-6 text-gray-600 text-sm dark:text-yellow-500">Administrar Pedidos</span>
            </a>
            </Link>
            <Link to="/consult-user">
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={user} className="w-5 h-5 object-contain" alt="" />
              <span className="ml-6 text-gray-600 text-sm">Consultar Clientes</span>
            </a>
            </Link>
            <Link to="/add-product">
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={plus} className="w-5 h-5 object-contain" alt="" />
              <span className="ml-6 text-gray-600 text-sm">Adicionar Produto</span>
            </a>
            </Link>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={config} className="w-5 h-5 object-contain" alt="" />
              <span className="ml-6 text-gray-600 text-sm">Configurações</span>
            </a>
          </div>
        </div>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#28395e]focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="mega-menu-full"
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          >
            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-16 uppercase font-inter md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/consult-request">
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Administrar Pedidos
                </a>
                </Link>
              </li>
              <li>
                <Link to="/consult-user">
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Administrar Clientes
                </a>
                </Link>
              </li>
              <li>
                <Link to="add-product">
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Adicionar Produto
                </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Configurações
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

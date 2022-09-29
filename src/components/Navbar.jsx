import clockIcon from "../assets/1363176.png";
import { useThemeContext } from "../hooks/useTheme";

export default function Navbar() {  
  const { darkMode } = useThemeContext()

  return (
    <nav className={`${darkMode} bg-[#001227] dark:bg-[#3b3b43] transition`}>
      <div className="max-w-[1280px] flex mx-auto">
        {/* all category */}
        <div className="px-8 py-4 bg-teal-600 flex items-center cursor-pointer relative group transition dark:bg-[#6366f1]">
          <span className="text-white"></span>
          <span className="capitalize ml-2 text-white hover:text-slate-900">
            All Categories
          </span>
          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 hidden group-hover:block transition duration-500">
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={clockIcon} className="w-5 h-5 object-contain" alt="" />
              <span className="ml-6 text-gray-600 text-sm">Relógio</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={clockIcon} className="w-5 h-5 object-contain" alt="" />
              <span className="ml-6 text-gray-600 text-sm">Relógio</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={clockIcon} className="w-5 h-5 object-contain" alt="" />
              <span className="ml-6 text-gray-600 text-sm">Relógio</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={clockIcon} className="w-5 h-5 object-contain" alt="" />
              <span className="ml-6 text-gray-600 text-sm">Relógio</span>
            </a>
          </div>
        </div>
        {/* navbar links */}
        <div className="flex items-center justify-between flex-grow pl-12 ">
          <div>
            <div className="flex items-center space-x-12 capitalize">
              <a href="#" className="text-gray-200 hover:text-slate-400 up">
                Home
              </a>
              <a href="#" className="text-gray-200 hover:text-slate-400">
                Marcas
              </a>
              <a href="#" className="text-gray-200 hover:text-slate-400">
                Novidades
              </a>
              <a href="#" className="text-gray-200 hover:text-slate-400">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import logoImg from "../assets/logo_em_svg.svg";
import  Navbar  from './Navbar'

export default function Header() {
  return (
    // header
    <>
    <header className="py-2 shadow-sm bg-white">
      <div className="max-w-[1280px] flex items-center justify-between mx-auto">
        {/* logo */}
        <a href="#">
          <img src={logoImg} className="w-32" />
        </a>

        {/* searchbar */}
        <div className="w-full max-w-xl relative flex">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            className="w-full border border-black border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
            placeholder="Pesquise um relógio"
          />
          <button className="bg-[#001227] border border-black text-white px-8 rounded-r-md hover:bg-transparent hover:text-[#00418D] transition">
            Pesquisar
          </button>
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
      </div>
    </header>
    <Navbar />
    </>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-[#00418D]">
      <div className="max-w-[1280px] flex mx-auto">
        {/* all category */}
        <div className="px-8 py-4 bg-teal-600 flex items-center cursor-pointer ">
            <span className="text-white">
            </span>
            <span className="capitalize ml-2 text-white hover:text-slate-900">All Categories</span>
        </div>
        {/* navbar links */}
        <div className="flex items-center justify-between flex-grow pl-12 ">
            <div>   
                <div className="flex items-center space-x-12 capitalize">
                    <a href="#" className="text-gray-200 hover:text-slate-900 up">Home</a>
                    <a href="#" className="text-gray-200 hover:text-slate-900">Marcas</a>
                    <a href="#" className="text-gray-200 hover:text-slate-900">Novidades</a>
                    <a href="#" className="text-gray-200 hover:text-slate-900">Contato</a>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
}

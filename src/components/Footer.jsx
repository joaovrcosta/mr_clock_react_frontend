import logoImg from "../assets/logo_em_svg.svg";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100 max-w-[1280px] flex mx-auto">
      <div className="container grid grid-cols-3">
        {/* footer text */}
        <div className="col-span-1 space-y-8">
          <img src={logoImg} alt="" className="w-32" />
          <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
          <div className="flex space-x-6">
            <a href="#">
              <img src="" alt="" />
            </a>
            <a href="#">
              <img src="" alt="" />
            </a>
            <a href="#">
              <img src="" alt="" />
            </a>
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
        </div>
        {/* footer links */}
      </div>
    </footer>
  );
}

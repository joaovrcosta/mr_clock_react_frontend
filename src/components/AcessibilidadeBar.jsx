import { Link } from "react-router-dom";

export default function AcessibilidadeBar() {
  return (
    <div className="py-2 shadow-sm bg-[#1a1d24] sticky w-full z-10 top-0 transition">
      <div className="max-w-[1280px] flex mx-auto ">
        <div className="space-x-8">
          <a href="#cabecario" className="text-white">
            Ir para o menu [1]
          </a>
          <a href="#products" className="text-white">
            Ir para o conteúdo [2]
          </a>
          <a href="#rodape" className="text-white">
            Ir para o rodapé [3]
          </a>
        </div>
        <div className="space-x-8 text-right ml-8">
          <Link to="/acessibilidade">
            <a href="" className="text-white">
              Acessiblidade
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

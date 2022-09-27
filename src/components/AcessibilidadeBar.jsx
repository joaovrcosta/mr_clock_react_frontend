export default function AcessibilidadeBar() {
  return (
    <div className="bg-[#001227]">
      <div className="max-w-[1280px] flex mx-auto ">
        <div className="space-x-4">
          <a href="#" className="text-white">
            Ir para o menu [1]
          </a>
          <a href="#" className="text-white">
            Ir para o conteúdo [2]
          </a>
          <a href="#" className="text-white">
            Ir para o rodapé [3]
          </a>
        </div>
        <div className="space-x-4 text-right ">
          <a href="#" className="text-white">
            A+
          </a>
          <a href="#" className="text-white">
            A-
          </a>
          <a href="#" className="text-white">
            Acessiblidade
          </a>
        </div>
      </div>
    </div>
  );
}

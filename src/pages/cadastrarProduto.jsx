import { Link } from "react-router-dom";

export default function RegisterProduct() {
  return (
    <form className="bg-white">
      <div className="max-w-[1280px] items-center block mx-auto py-6 px-20">
      <h1 className="text-2xl text-gray-600">Cadastrar Produto</h1>
      <div className="py-8">
        <div className="mb-6 space-x-4 text-blue-900">
            <span className="rounded-full w-6 h-6 justify-center font-semibold">1.</span>
            <span className="text-gray-700 font-semibold">Informações Gerais</span>
        </div>
        <div>
            <label className="text-gray-600 font-light" htmlFor="">Nome do produto</label>
            <input className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900" type="text" placeholder="Digite o nome do produto" />

            <label className="text-gray-600 font-light" htmlFor="">Nome do produto</label>
            <input className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900" type="text" placeholder="Digite o nome do produto" />

            <label className="text-gray-600 font-light" htmlFor="">Nome do produto</label>
            <input className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900" type="text" placeholder="Digite o nome do produto" />

            <label className="text-gray-600 font-light" htmlFor="">Nome do produto</label>
            <input className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900" type="text" placeholder="Digite o nome do produto" />
        </div>
        <div>
          <Link to="/consult-product">
          <a href="">
          <button className="text-lg bg-blue-700 p-2 text-white rounded-sm">Consultar Produto</button>
          </a>
          </Link>
        </div>
      </div>
      </div>
    </form>
  );
}

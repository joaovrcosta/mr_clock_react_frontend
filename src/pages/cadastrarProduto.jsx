import { Link } from "react-router-dom";

export default function RegisterProduct() {
  return (
    <form className="bg-white">
      <div className="max-w-[1280px] items-center block mx-auto py-6 px-20">
        <h1 className="text-2xl text-gray-600">Adicionar Produto</h1>
        <div className="py-8">
          <div className="mb-6 space-x-4 text-blue-900">
            <span className="rounded-full w-6 h-6 justify-center font-semibold">
              1.
            </span>
            <span className="text-gray-700 font-semibold">
              Informações Gerais
            </span>
          </div>
          <div>
            <label className="text-gray-600 font-light" htmlFor="">
              Nome do produto
            </label>
            <input
              className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
              type="text"
              placeholder="Digite o nome"
            />

            <label className="text-gray-600 font-light" htmlFor="">
              Quantidade em estoque
            </label>
            <input
              className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
              type="text"
              placeholder="Digite a quantidade"
            />

            <label className="text-gray-600 font-light" htmlFor="">
              Preço do produto
            </label>
            <input
              className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
              type="text"
              placeholder="Digite o preço"
            />
            <div class="flex justify-center items-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full h-48 mb-5 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <a href="">
                <button
                  type="button"
                  class="text-white bg-[#142136] hover:bg-[#28436f] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cadastrar Produto
                </button>
              </a>
              <Link to="/consult-product">
                <button
                  type="button"
                  class="text-white bg-[#cd9621] hover:bg-[#b98514] focus:outline-none focus:ring-4 focus:ring-[#ffd780]  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-[#b98514] "
                >
                  Consultar Produtos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

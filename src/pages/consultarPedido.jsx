export default function ConsultRequest() {
  return (
    <div className="max-w-[1280px mx-auto bg-white">
      <div class="text-gray-900 bg-white ">
        <div class="p-6 px-12 flex">
          <h1 class="text-3xl">Consulta de Pedidos</h1>
        </div>
        <div class="px-12 flex justify-center rounded-xl">
          <table class="w-full text-md bg-white shadow-md rounded-xl mb-4">
            <tbody>
              <tr class="border-b">
                <th class="text-left p-3 px-5">Descrição do Pedido</th>
                <th class="text-left p-3 px-5">Valor do Pedido</th>
                <th class="text-left p-3 px-5">Quantidade</th>
              </tr>
              <tr class="border-b hover:bg-blue-100 bg-gray-100">
                <td class="p-3 px-5">Smartwatch de Luxo - Modern Iron</td>
                <td class="p-3 px-5 text-green-600">R$ 594,00</td>
                <td class="p-3 px-5">2</td>
                <td class="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    class="mr-3 text-sm bg-blue-700 hover:bg-blue-800 font-medium focus:ring-4 focus:ring-blue-300 text-white py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    class="mr-3 text-sm bg-red-700 hover:bg-red-800 font-medium focus:ring-4 focus:ring-blue-300 text-white py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr class="border-b hover:bg-blue-100">
                <td class="p-3 px-5">Relógio Ferrari Smart</td>
                <td class="p-3 px-5 text-green-600">R$ 1050,00</td>
                <td class="p-3 px-5">3</td>
                <td class="p-3 px-5 flex justify-end">
                <button
                    type="button"
                    class="mr-3 text-sm bg-blue-700 hover:bg-blue-800 font-medium focus:ring-4 focus:ring-blue-300 text-white py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    class="mr-3 text-sm bg-red-700 hover:bg-red-800 font-medium focus:ring-4 focus:ring-blue-300 text-white py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>

              <tr class="border-b hover:bg-blue-100 bg-gray-100">
                <td class="p-3 px-5">Smartwatch de Luxo - Modern Iron</td>
                <td class="p-3 px-5 text-green-600">R$ 297,00</td>
                <td class="p-3 px-5">1</td>
                <td class="p-3 px-5 flex justify-end">
                <button
                    type="button"
                    class="mr-3 text-sm bg-blue-700 hover:bg-blue-800 font-medium focus:ring-4 focus:ring-blue-300 text-white py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    class="mr-3 text-sm bg-red-700 hover:bg-red-800 font-medium focus:ring-4 focus:ring-blue-300 text-white py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr class="border-b hover:bg-blue-100">
                <td class="p-3 px-5">Relógio Curren Executive Premium</td>
                <td class="p-3 px-5 text-green-600">R$ 177,00</td>
                <td class="p-3 px-5">1</td>
                <td class="p-3 px-5 flex justify-end">
                <button
                    type="button"
                    class="mr-3 text-sm bg-blue-700 hover:bg-blue-800 font-medium focus:ring-4 focus:ring-blue-300 text-white py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    class="mr-3 text-sm bg-red-700 hover:bg-red-800 font-medium focus:ring-4 focus:ring-blue-300 text-white py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr class="border-b bg-gray-100">
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    class=" bg-transparent mr-3 text-sm bg-white text-gray-100 py-1 px-2 rounded focus:outline-none focus:shadow-outline trasn"
                  >
                    Editar
                  </button>
                </td>
              </tr>
              <tr class="border-b ">
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    class=" bg-transparent mr-3 text-sm bg-white text-gray-100 py-1 px-2 rounded focus:outline-none focus:shadow-outline trasn"
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr class="border-b bg-gray-100">
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    class=" bg-transparent mr-3 text-sm bg-white text-gray-100 py-1 px-2 rounded focus:outline-none focus:shadow-outline trasn"
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr class="bg-[#6366f1] border-b rounded-ful">
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5 text-white font-bold">R$ 2118,00</td>
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    class=" bg-transparent mr-3 text-sm bg-[#6366f1]  text-[#6366f1] py-1 px-2 rounded focus:outline-none focus:shadow-outline trasn"
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

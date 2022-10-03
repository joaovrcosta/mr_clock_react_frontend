export default function ConsultUser() {
    return (
      <div className="max-w-[1280px mx-auto bg-white">
      <div class="text-gray-900 bg-white ">
      <div class="p-6 px-12 flex">
          <h1 class="text-3xl">
              Consulta de Clientes
          </h1>
      </div>
      <div class="px-12 flex justify-center">
          <table class="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                  <tr class="border-b">
                      <th class="text-left p-3 px-5">Nome</th>
                      <th class="text-left p-3 px-5">Data de Cadastro</th>
                      <th class="text-left p-3 px-5">Endereço</th>
                      <th class="text-left p-3 px-5">Quantidade</th>
                  </tr>
                  <tr class="border-b hover:bg-orange-100 bg-gray-100">
                      <td class="p-3 px-5">João Victor Ribeiro Costa</td>
                      <td class="p-3 px-5">22/08/2022, 10:02:45 GMT</td>
                      <td class="p-3 px-5">Avenida dos Latinos, 1668</td>
                      <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Editar</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                  </tr>
                  <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5">Rafael Olantra Silva</td>
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5">
                          <select value="user.role" class="bg-transparent">
                          <option value="user">Sim</option>
                              <option value="admin">Não</option>
                          </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Editar</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                  </tr>
                  
                  <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5">
                          <select value="user.role" class="bg-transparent">
                          <option value="user">Sim</option>
                              <option value="admin">Não</option>
                          </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                  </tr>
                  <tr class="border-b hover:bg-orange-100 bg-gray-100">
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5">
                          <select value="user.role" class="bg-transparent">
                          <option value="user">Sim</option>
                              <option value="admin">Não</option>
                          </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                  </tr>
                  <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5">
                          <select value="user.role" class="bg-transparent">
                          <option value="user">Sim</option>
                              <option value="admin">Não</option>
                          </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                  </tr>
                  <tr class="border-b hover:bg-orange-100 bg-gray-100">
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5">
                          <select value="user.role" class="bg-transparent">
                          <option value="user">Sim</option>
                              <option value="admin">Não</option>
                          </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                  </tr>
                  <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5">
                          <select value="user.role" class="bg-transparent">
                          <option value="user">Sim</option>
                              <option value="admin">Não</option>
                          </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                  </tr>
                  <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5"></td>
                      <td class="p-3 px-5">
                          <select value="user.role" class="bg-transparent">
                          <option value="user">Sim</option>
                              <option value="admin">Não</option>
                          </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
  </div>
    );
  }
  
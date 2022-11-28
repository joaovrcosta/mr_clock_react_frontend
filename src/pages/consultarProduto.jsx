import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ConsultProduct() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    window.location.reload();
  };

  return (
    <div className="max-w-[1280px] mx-auto bg-white p-12">
      <div class="text-gray-900 bg-white ">
        <div class="p-6 px-12 flex">
          <h1 class="text-3xl">Consulta de Produtos</h1>
        </div>
        <div class="px-12 flex justify-center">
          <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr class="border-b">
                <th class="text-left p-3 px-5 uppercase">Nome</th>
                <th class="text-left p-3 px-5 uppercase">Preço</th>
                <th class="text-left p-3 px-5 uppercase">Quantidade</th>
              </tr>
              {products.map((product) => {
                return (
                  <tr class="border-b hover:bg-[#ededed] bg-gray-100 cursor-pointer">
                    <td className="p-3 px-5 truncate">{product.name}</td>
                    <td class="p-3 px-5">{product.price}</td>
                    <td class="p-3 px-5">{product.quantity}</td>
                    <td class="p-3 px-5 flex justify-end">
                      <button
                        type="button"
                        class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          deleteProduct(product.id);
                        }}
                        type="button"
                        class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export default function RegisterProduct() {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const types = ["image/png", "image/jpeg"];

  // const productImageHandler = (e) => {
  //   let selectedFile = e.target.files[0];
  //   if (selectedFile && types.includes(selectedFile.type)) {
  //     setProductImage(selectedFile);
  //     setError("");
  //   } else {
  //     setProductImage(null);
  //     setError("Por favor selecione uma imagem valida (PNG, JPEG)");
  //   }
  // };

  const productsCollectionRef = collection(db, "products");

  const HandleCreateNewProduct = async (e) => {
    e.preventDefault();
    try {
      console.log(productName, productQuantity, productPrice, productImage);
      await addDoc(productsCollectionRef, {
        name: productName,
        quantity: productQuantity,
        price: productPrice,
        image: productImage,
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form className="bg-white" onSubmit={HandleCreateNewProduct}>
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
                onChange={(event) => setProductName(event.target.value)}
                className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
                type="text"
                placeholder="Digite o nome"
                required
              />

              <label className="text-gray-600 font-light" htmlFor="">
                Quantidade em estoque
              </label>
              <input
                onChange={(e) => setProductQuantity(e.target.value)}
                className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
                type="text"
                placeholder="Digite a quantidade"
                required
              />

              <label className="text-gray-600 font-light" htmlFor="">
                Preço do produto
              </label>
              <input
                onChange={(e) => setProductPrice(e.target.value)}
                className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
                type="text"
                placeholder="Digite o preço"
                required
              />
              <label className="text-gray-600 font-light" htmlFor="">
                Imagem do Produ
              </label>
              <input
                onChange={(e) => setProductImage(e.target.value)}
                className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
                type="text"
                placeholder="Cole o Link da Imagem"
                required
              />
            </div>
            <div>
              <div className="flex items-center justify-center">
                <a href="">
                  <button
                    type="submit"
                    className="text-white bg-[#142136] hover:bg-[#28436f] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      {/* {error && <span>{error}</span>} */}
    </div>
  );
}

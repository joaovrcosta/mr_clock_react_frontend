import Banner from "../components/Banner";

import clockOne from "../assets/smartwatch-goldentec-plus-preto-01.webp";
import clockTwo from "../assets/101db-relogio-inteligente-smartwatch-5-azul-01-1500x1500.jpg";
import clockThree from "../assets/95afa4003df9b111f4b049e6d77c2065.jpg";
import clockFor from "../assets/smartwatch-goldentec-plus-rosa-01.webp";

import freeFrete from "../assets/Map-location.svg";
import ConvenioIcon from "../assets/Pulse.svg";
import qualityIcon from "../assets/Fire.png";

import star from "../assets/star-icon.webp";
import { useThemeContext } from "../hooks/useTheme";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export function Home() {
  const { darkMode } = useThemeContext();

  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const formatValue = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <main className={`${darkMode}`}>
      <div className="bg-white dark:bg-[#000000]">
        <Banner />
        {/* feature section */}
        <div
          className={`max-w-[1535px] flex mx-auto pb-16 pt-16 bg-white dark:bg-[#000000] `}
        >
          <div className="w-10/12 grid grid-cols-1 gap-6 mx-auto justify-center sm:grid-cols-3">
            {/* sectionGrid */}
            <div className="border border-[#6366f1] rounded-md px-3 py-6 flex justify-center items-center gap-5 bg-white dark:bg-[#111827] hover:border-[#2863d2] hover:bg-gray-100 cursor-pointer">
              <img
                src={freeFrete}
                alt=""
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="font-medium capitalize text-lg text-[#0f12ad] dark:text-[#6366f1]">
                  Frete Gratis
                </h4>
                <p className="text-gray-500 text-sm dark:text-white">
                  Acima de $200
                </p>
              </div>
            </div>

            {/* sectionGrid */}
            {/* <Link to="/medical-insurance"> */}
            <a href="">
              <div className="border border-[#6366f1] rounded-md px-3 py-6 flex justify-center items-center gap-5 bg-white dark:bg-[#111827] hover:border-[#2863d2] hover:bg-gray-100 cursor-pointer">
                <img
                  src={ConvenioIcon}
                  alt=""
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h4 className="font-medium capitalize text-lg text-[#0f12ad] dark:text-[#6366f1]">
                    Convênio
                  </h4>
                  <p className="text-gray-500 text-sm dark:text-white">
                    Plano de 6 meses
                  </p>
                </div>
              </div>
            </a>
            {/* </Link> */}

            {/* sectionGrid */}
            <div className="border border-[#6366f1] rounded-md px-3 py-6 flex justify-center items-center gap-5 bg-white dark:bg-[#111827] hover:border-[#2863d2] hover:bg-gray-100 cursor-pointer">
              <img
                src={qualityIcon}
                alt=""
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="font-medium capitalize text-lg text-[#0f12ad] dark:text-[#6366f1]">
                  Alta Qualidade
                </h4>
                <p className="text-gray-500 text-sm dark:text-white">
                  Melhor qualidade do mercado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* product wrapper */}
        <div className="max-w-[1280px] flex mx-auto pb-16">
          {/* <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Novidades
        </h2> */}

          {/* product grid */}
          <div
            id="products"
            className="grid px-8 grid-cols-1 gap-6 md:grid-cols-4 sm:grid-cols-2  w-full "
          >
            {/* single product */}
            {products.map((product) => {
              return (
                <div className="bg-gray-100 shadow rounded overflow-hidden group dark:bg-[#142136]">
                  {/* product image */}
                  <div className="relative bg-white">
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-60 object-contain p-6"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition cursor-pointer">
                      <a
                        href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-[#6366f1] flex items-center justify-center hover:bg-[#474ae5] transition"
                      >
                        <i className="fas fa-search"></i>
                      </a>
                      <a
                        href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-[#6366f1] flex items-center justify-center hover:bg-gray-800 transition"
                      >
                        <i className="fas fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  {/* product content */}
                  <div className="">
                    <div className="pt-4 pb-3 px-4">
                      <a href="#">
                        <h4 className="uppercase text-base mb-2 text-gray-800 font-bold dark:text-white truncate">
                          {product.name}
                        </h4>
                      </a>
                      <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl font-semibold text-[#46ac33]">
                          {formatValue.format(product.price)}
                        </p>
                        <p className="text-sm text-gray-400 line-through">
                          R$55,00
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                          <span>
                            <img src={star} className="w-5 h-5" alt="" />
                          </span>
                          <span>
                            <img src={star} className="w-5 h-5" alt="" />
                          </span>
                          <span>
                            <img src={star} className="w-5 h-5" alt="" />
                          </span>
                          <span>
                            <img src={star} className="w-5 h-5" alt="" />
                          </span>
                          <span>
                            <img src={star} className="w-5 h-5" alt="" />
                          </span>
                        </div>
                        <div className="text-xs text-red-500 ml-3 dark:text-white">
                          (150)
                        </div>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="block w-full py-2 text-center text-white border border-[#001227] bg-[#001227] roundeed-b hover:bg-transparent hover:text-black dark:bg-orange-500 rounded-md"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      ;
    </main>
  );
}

import { useContext, useEffect, useState } from "react";
import { UseCart } from "../hooks/useCart";


export default function Cart() {
  const { cart, handleSetTotal, total, removeProduct, handleProductIncrement, handleProductDecrement } = useContext(UseCart);

  return (
    <div className="max-w-[1280px] flex mx-auto mt-6 px-6">
      <div className="p-12 bg-[#6365f144] w-full mb-6 rounded-lg border border-dashed border-blue-300 cursor-pointer hover:shadow-xl transition">
        <h1 className="text-xl font-bold">Carrinho Vazio</h1>
        <p className="mt-4">Items no carrinho(0)</p>
      </div>
    </div>
  );
}

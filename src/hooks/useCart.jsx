import { createContext, useState } from "react";

export const UseCart = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function handleAddItemCart(item) {
    //Procuro um id no carrinho que seja igual ao que estou adicionando
    const alreadyExits = cart.findIndex((cartItem) => item.id === cartItem.id);

    //Se already exist for diferente de menos 1 ele existe (Se ele existe ele já esta no carrinho)
    if (alreadyExits !== -1) {
      return setCart((state) => {
        console.log(state[alreadyExits]);
        state[alreadyExits].quantity += 1;
        return state;
      });
    }
    setCart((state) => [...state, { ...item, quantity: 1 }]);
  }

  function handleProductIncrement(item) {
    setCart((state) => {
      console.log(state);
      return state.map((cartItem) => {
        if (cartItem.id != item.id) {
          return cartItem;
        }
          return { ...cartItem, quantity: cartItem.quantity + 1 };
      });
    });
  }

  function handleProductDecrement(item) {
    setCart((state) => {
      console.log(state);
      return state.map((cartItem) => {
        if (cartItem.id != item.id) {
          return cartItem;
        }
        if (cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
    });
  }

  function handleSetTotal(amount) {
    setTotal(amount);
  }

  function removeProduct(productItem) {
    const productExists = cart.filter((carts) => carts.id !== productItem);
    setCart([...productExists]);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <UseCart.Provider
      value={{
        cart,
        handleAddItemCart,
        clearCart,
        handleSetTotal,
        total,
        removeProduct,
        handleProductIncrement,
        handleProductDecrement,
      }}
    >
      {children}
    </UseCart.Provider>
  );
};
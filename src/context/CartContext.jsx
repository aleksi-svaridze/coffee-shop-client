import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(coffee) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === coffee.id);

      if (existing) {
        return prev.map((item) =>
          item.id === coffee.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [...prev, { ...coffee, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

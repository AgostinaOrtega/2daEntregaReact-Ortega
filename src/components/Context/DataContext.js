import React, { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const buyProducts = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat) {
      setCart(
        cart.map((item) => (item.id === product.id ? { ...product, quanty: productRepeat.quanty + 1 } : item))
      );
    } else {
      setCart([...cart, { ...product, quanty: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <dataContext.Provider value={{ cart, setCart, buyProducts, removeFromCart, clearCart }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;

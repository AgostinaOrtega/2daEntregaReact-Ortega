import React, { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";

import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts, cart, clearCart, removeFromCart } = useContext(dataContext);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);

  const handleAddToCart = (product, quantity) => {
    buyProducts({ ...product, quantity });
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const getProductQuantityInCart = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <>
      {data.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.img} alt="img-product-card" />
          <h3>{product.name}</h3>
          <h4>{product.price}$</h4>
          {cart.some((item) => item.id === product.id) ? (
            <div className="product-details">
              <div className="quantity-container">
                <button onClick={() => handleAddToCart(product, getProductQuantityInCart(product.id) - 1)} disabled={getProductQuantityInCart(product.id) === 0}>
                  -
                </button>
                <span>{getProductQuantityInCart(product.id)}</span>
                <button onClick={() => handleAddToCart(product, getProductQuantityInCart(product.id) + 1)}>+</button>
              </div>
              <button onClick={() => handleRemoveFromCart(product.id)}>Eliminar del carrito</button>
              <button onClick={handleClearCart}>Vaciar carrito</button>
            </div>
          ) : (
            <button onClick={() => handleAddToCart(product, 1)}>COMPRAR</button>
          )}
        </div>
      ))}
    </>
  );
};

export default Products;


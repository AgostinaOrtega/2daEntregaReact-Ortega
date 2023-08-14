import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../Context/DataContext"; // Ajusta la ruta según tu estructura

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";

import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <div className="cart-content-container">
          <CartElements />
          <CartTotal />
          <div className="finalize-button-container">
            <Link to="/checkout" className="finalize-button">
              Finalizar Compra
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-message-center">
          <h2>TU CARRITO ESTÁ VACÍO</h2>
        </div>
      )}
    </>
  );
};

export default CartContent;

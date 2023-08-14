
import React, { useState } from "react";

const ItemDetailContainer = ({ product, onAddToCart, onRemoveFromCart, onClearCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(product.id);
  };

  const handleClearCart = () => {
    onClearCart();
  };

  return (
    <div className="item-detail-container">
      <img src={product.img} alt="product-img" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <div className="quantity-container">
        <button onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)} disabled={quantity === 1}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}>+</button>
      </div>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
      <button onClick={handleRemoveFromCart}>Eliminar del carrito</button>
      <button onClick={handleClearCart}>Vaciar carrito</button>
    </div>
  );
};

export default ItemDetailContainer;




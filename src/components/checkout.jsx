import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from './Context/DataContext'; // Ajusta la ruta según tu estructura
import { Button, TextField, Typography, Box, Grid } from '@mui/material';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(dataContext);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    mail: '',
    direccion: '',
    tel: '',
  });

  const [terminoPedido, setTerminoPedido] = useState(false);
  const [codigoPedido, setCodigoPedido] = useState('');
  const [disableButton, setDisableButton] = useState(false);

  const validateEmail = (email) => {
    // Implementa la validación del email si es necesario
  };

  const handleSubmit = () => {
    setTerminoPedido(false);
    setDisableButton(true);

    const pedido = {
      buyer: formData,
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        stock: product.stock,
      })),
      total: totalPrice,
    };

    const db = getFirestore();
    const pedidosColeccion = collection(db, 'ordenes'); // Ajusta según tu estructura en Firebase

    addDoc(pedidosColeccion, pedido)
      .then(({ id }) => {
        setCodigoPedido(id);
        setTerminoPedido(true);
        clearCart();
      })
      .catch((error) => {
        console.error('Error al crear la orden:', error);
        setDisableButton(false);
      });
  };

  return (
    <div className="checkout-container">
      {terminoPedido ? (
        <div className="checkout-message">
          <h3>El pedido ha sido creado</h3>
          <p>Su código de seguimiento es: {codigoPedido}</p>
          <Link to="/" className="back-to-shop-link">
            Volver a la tienda
          </Link>
        </div>
      ) : (
        <div className="checkout-form">
          <h3>Completa tus datos</h3>
          <form>
            <TextField
              label="Nombre"
              variant="outlined"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
            />
            <TextField
              label="Apellido"
              variant="outlined"
              value={formData.apellido}
              onChange={(e) =>
                setFormData({ ...formData, apellido: e.target.value })
              }
            />
            <TextField
              label="Email"
              variant="outlined"
              value={formData.mail}
              onChange={(e) =>
                setFormData({ ...formData, mail: e.target.value })
              }
            />
            <TextField
              label="Dirección"
              variant="outlined"
              value={formData.direccion}
              onChange={(e) =>
                setFormData({ ...formData, direccion: e.target.value })
              }
            />
            <TextField
              label="Teléfono"
              variant="outlined"
              value={formData.tel}
              onChange={(e) =>
                setFormData({ ...formData, tel: e.target.value })
              }
            />
          </form>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={disableButton}
          >
            Finalizar Compra
          </Button>
        </div>
      )}
    </div>
  );
};

export default Checkout;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./components/Context/DataContext"; // Importa DataProvider como valor predeterminado
import Home from "./components/Home/Home";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import CartContent from "./components/CartContent/CartContent";
import Checkout from "./components/checkout"; // Asegúrate de que estás importando correctamente Checkout

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

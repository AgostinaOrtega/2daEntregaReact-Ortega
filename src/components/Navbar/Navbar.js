import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to={"/"}>
          <h1 className='navbar-logo'>Mob Digital</h1>
        </Link>


          {/* Agregar enlace para "Contactos" */}
          <Link to={"/contact"} className="nav-link">
          Contactos
        </Link>

        {/* Agregar enlace para "Nosotros" */}
        <Link to={"/about"} className="nav-link">
          Nosotros
        </Link>
        <Link className='seeCarrito' to={"/cart"}>
          🛒
          {cart.length > 0 ? <TotalItems /> : null}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/NavBar.css"
import ShoppingCartIcon from "../assets/iconoCarrito"

function NavBar() {

  return (
    
    <nav className="nav">
        <ul className="ul">
            <li className="li"><Link to="/"> Inicio</Link></li>
            <li className="li"><Link to="/productos">Productos</Link></li>
            <li className="li"><Link to="/servicios">Servicios</Link></li>
            <li className="li"><Link to="/carrito"><ShoppingCartIcon size={24} color="#e3e3e3" /></Link></li>
            <li className="li"><Link to="/nosotros">Nosotros</Link></li>
            <li className="li"><Link to="/contacto">Contacto</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
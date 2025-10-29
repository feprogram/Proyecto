import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/NavBar.css"
import ShoppingCartIcon from "../assets/iconoCarrito"
import { useAppContext } from '../context/AppContext'

function NavBar() {
  
  const { isAuthenticated, usuario, carrito, cerrarSesion } = useAppContext();

  return (
    
    <nav className="nav">
        <ul className="ul">
            <li className="li"><Link to="/"> Inicio</Link></li>
            <li className="li"><Link to="/productos">Productos</Link></li>
            <li className="li"><Link to="/servicios">Servicios</Link></li>
            <li className="li"><Link to="/carrito"><ShoppingCartIcon size={24} color="#e3e3e3"/><span>{carrito.length === 0 ? "" : carrito.length}</span></Link></li>
            <li className="li"><Link to="/nosotros">Nosotros</Link></li>
            <li className="li"><Link to="/contacto">Contacto</Link></li>
            <li>{!isAuthenticated ? (<Link to="/iniciarSesion">Iniciar Sesión</Link>) :(
              <div>
                <span>Hola, {usuario.nombre}</span>
                <hr />
                <button onClick={cerrarSesion}>Cerrar Sesión</button>
              </div>
          )}</li>
        </ul>
    </nav>
  )
}

export default NavBar
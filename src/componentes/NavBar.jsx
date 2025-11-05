import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/NavBar.css"
import ShoppingCartIcon from "../assets/iconoCarrito"
import { useAuthContext } from '../context/AuthContext'

function NavBar() {
  
  const { isAuthenticated, usuario, carrito, cerrarSesion } = useAuthContext();

  return (
    
    <nav className="nav">
        <ul className="ul">
            <li className="li"><Link to="/"> Inicio</Link></li>
            <li className="li"><Link to="/productos">Productos</Link></li>
            <li className="li"><Link to="/servicios">Servicios</Link></li>
            {/* <li className="li"><Link to="/carrito"><ShoppingCartIcon size={24} color="#e3e3e3"/><span>{carrito.length === 0 ? "" : carrito.length}</span></Link></li> */}
            <li className="li"><Link to="/carrito"><ShoppingCartIcon size={24} color="#e3e3e3"/></Link></li>
            <li className="li"><Link to="/nosotros">Nosotros</Link></li>
            <li className="li"><Link to="/contacto">Contacto</Link></li>
            {/* <li>{!isAuthenticated ? (<Link to="/iniciarSesion">Iniciar Sesión</Link>) :(
              <div>
                <span>Hola, {usuario.nombre}</span>
                <hr />
                <button onClick={cerrarSesion}>Cerrar Sesión</button>
              </div>
          )}</li> */}

 <li>
          {isAuthenticated ? (
            <div>
              <span>Hola, {usuario.nombre}</span>
             
              {/* ENLACE DASHBOARD solo para admin */}
              {usuario.nombre === "admin" && (
                <Link to="/dashboard" style={{margin: '0 10px'}}>
                  Dashboard
                </Link>
              )}
              <button onClick={cerrarSesion}>
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <Link to="/iniciarSesion">IniciarSesión</Link>
          )}
        </li>

        </ul>
    </nav>
  )
}

export default NavBar
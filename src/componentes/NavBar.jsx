import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import "../styles/NavBar.css"
import ShoppingCartIcon from "../assets/iconoCarrito"
import { useAuthContext } from '../context/AuthContext'
import { useCartContext } from '../context/CartContext'

function NavBar() {
  
  const { isAuthenticated, usuario, carrito, cerrarSesion } = useAuthContext();
  const { vaciarCarrito } = useCartContext();
  const navigate = useNavigate();

 const manejarCerrarSesion = () => {
    navigate("/productos");

    // Tiempo 1'' para asegurar la navegación
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 100);
  };


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
           <li>{isAuthenticated ? (
            <div >
              <span style={{color: "white"}}>{usuario.nombre}  </span>
             
              {/* ENLACE DASHBOARD solo para admin */}
              {usuario.nombre === "admin" && (
                <Link to="/dashboard" style={{margin: '0 10px'}}>
                  Dashboard
                </Link>
              )}
              <button onClick={manejarCerrarSesion} style={{padding: "5px", marginLeft: "10px", cursor: "pointer"}}>
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <Link to="/iniciarSesion">Iniciar sesión</Link>
          )}
        </li>

        </ul>
    </nav>
  )
}

export default NavBar
import { Link, useNavigate } from "react-router-dom";
// import "../styles/NavBar.css"
import ShoppingCartIcon from "../assets/iconoCarrito";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import styled from "styled-components";
import logoTalento from "../assets/logotalento.png"

function NavBar() {
  const { isAuthenticated, usuario, cerrarSesion } = useAuthContext();
  const { vaciarCarrito, carrito } = useCartContext();
  const navigate = useNavigate();

  const totalItemsCarrito = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  const manejarCerrarSesion = () => {
    navigate("/productos");

    // Tiempo 1'' para asegurar la navegación
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 100);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-sm bg-body-tertiary ">
      <div className="container-fluid">

     <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logoTalento} 
            alt="Logo Talento Relojería" 
            height="50" // Ajusta la altura del logo
            className="d-inline-block align-text-top me-2" 
          />
          <div className="fw-bold text-dark fs-5">Talento</div> {/* Opcional: Nombre de la marca junto al logo */}
        </Link>


        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mb-2 mb-lg-0 navbar-nav-scroll me-auto"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <NavLinkHover className="nav-link active" aria-current="page" to="/">
                {" "}
                Inicio
              </NavLinkHover>
            </li>
            <li className="nav-item">
              <NavLinkHover className="nav-link" to="/productos">
                Productos
              </NavLinkHover>
            </li>
            <li className="nav-item">
              <NavLinkHover className="nav-link" to="/servicios">
                Servicios
              </NavLinkHover>
            </li>

            <li className="nav-item">
              <NavLinkHover className="nav-link" to="/nosotros">
                Nosotros
              </NavLinkHover>
            </li>
            <li className="nav-item">
              <NavLinkHover className="nav-link" to="/contacto">
                Contacto
              </NavLinkHover>
            </li>
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
            <ContenedorCarrito className="nav-item me-5">
              <Link className="nav-link" to="/carrito">
                <MdOutlineShoppingCart size={24} />
                <ContadorCarrito>{totalItemsCarrito}</ContadorCarrito>
              </Link>
            </ContenedorCarrito>

            <li className="nav-item">
              {isAuthenticated ? (
                <div className="d-flex align-items-center">
                  {" "}
                  {/* Usar flex para alinear */}
                  <span style={{ color: "white" }}>{usuario.nombre} </span>
                  {/* Componente de Iniciar Sesión / Info de Usuario */}
                  {/* ENLACE DASHBOARD solo para admin */}
                  {usuario.nombre === "admin" && (
                    <Link
                      className="btn btn-primary"
                      to="/dashboard"
                      style={{ margin: "0 10px" }}
                    >
                      Dashboard
                    </Link>
                  )}
                  <button
                    className="btn btn-secondary"
                    onClick={manejarCerrarSesion}
                    style={{
                      padding: "5px",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
               <div></div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


const ContenedorCarrito = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const ContadorCarrito = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const NavLinkHover = styled(Link)`
  /* Hereda el color base de Bootstrap para el nav-link */
  color: var(--bs-navbar-color); 
  text-decoration: none; /* Asegura que no haya subrayado */
  
  /* Agrega padding y bordes redondeados para un área de hover más grande y suave */
  padding: 8px 12px;
  border-radius: 6px;
  margin-right: 5px; /* Pequeña separación entre enlaces */
  
  /* Configuración de la transición para suavidad */
  transition: all 0.3s ease-in-out; 

  &:hover {
    /* 2. EFECTO DE HOVER FUERTE Y DELICADO */
    
    /* Fondo: Un azul primario (de Bootstrap) con baja opacidad */
    background-color: rgba(13, 110, 253, 0.1); 
    
    /* Color de texto: El azul primario de Bootstrap */
    color: var(--bs-primary) !important; 
    
    /* Opcional: Una sombra sutil para darle una sensación de "elevación" */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  /* Estilo especial para el link activo (solo si necesitas un color diferente) */
  &.active {
    font-weight: bold;
    color: var(--bs-primary) !important;
  }
`;
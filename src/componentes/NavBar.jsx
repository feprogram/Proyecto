import { Link, useNavigate } from "react-router-dom";
// import "../styles/NavBar.css"
import ShoppingCartIcon from "../assets/iconoCarrito";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import styled from "styled-components";

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
              <Link className="nav-link active" aria-current="page" to="/">
                {" "}
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">
                Servicios
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
            <ContenedorCarrito className="nav-item">
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
                <Link className="nav-link" to="/IniciarSesion">
                  Iniciar sesión
                </Link>
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

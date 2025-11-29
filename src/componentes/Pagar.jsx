import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Pagar.css";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";
import { formatearPrecio } from "../context/ProductsContext";

export default function Pagar() {
  const { usuario, cerrarSesion } = useAuthContext();
  const { carrito, total, vaciarCarrito } = useCartContext();
  // const location = useLocation();
  const navigate = useNavigate();
  const tokenActual = localStorage.getItem('authtoken');


  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito(); // Vacia el carrito después de comprar
    navigate("/productos");
  };

  return (
    <div className="contenedor-pagar">
      <div>
        <h2>Hola: {usuario.nombre}</h2>
        <p>Email: {usuario.email}</p>
       
        {/* Estilo para el Token */}
        <div style={{
          background: '#f0f0f0',
          padding: '8px',
          borderRadius: '4px',
          margin: '10px 0',
          fontSize: '12px',
          wordBreak: 'break-all'
        }}>
          <strong>Token:</strong> {tokenActual}
        </div>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
        <hr />
      </div>
    
    {/* Este es el Carrito */}

      <div>
      
        <h2 className="mb-2">Tu compra:</h2>

        {carrito.length > 0 ? (
          <>
            {carrito.map((producto) => {
              const cantidad = Number(producto.cantidad || 1);
              const precioUnitario = Number(producto.precio || 0);
              const subtotal = cantidad * precioUnitario;
              return (
                <div
                  key={producto.id} className="container"
                >
                  <div className="row row-cols-2 justify-content-md-center gap-5">
                  <div className="col-md-auto align-self-center">
                  <img  src={producto.avatar} alt={producto.nombre} width="60" />
                  </div>
                  <div className="col">
                    <div className=" row fs-5 fw-bold text-danger">{producto.nombre}</div>
                    <div className="row align-items-start">
                      Precio unidad: ${formatearPrecio(precioUnitario)}
                    </div>
                    <div className="row align-items-start">Cantidad: {cantidad}</div>
                    <div className="row align-items-start fw-bold">

                     Subtotal: {formatearPrecio(subtotal)}


                    </div>
                  </div>
                </div>
                </div>
              );
            })}
            <h5 className="fw-bold">Total a pagar: ${formatearPrecio(total)}</h5>
          </>
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </div>

      <div>
        <button onClick={comprar}>Confirmar y Pagar</button>
        <button onClick={() => navigate("/productos")}>
          {carrito.length > 0 ? "Seguir Comprando" : "Volver a Productos"}
        </button>
      </div>
    </div>
  );
}

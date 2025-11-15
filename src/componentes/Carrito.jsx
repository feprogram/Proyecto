import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function CarritoCompras() {
  const { carrito, vaciarCarrito, agregarCantidad, quitarCantidad, total } =
    useCartContext();

  const navigate = useNavigate();

  //useLocation para obtener la ruta actual. Esto nos ayuda a condicionar la renderización del botón "Seguir Comprando". Es decir: si
  //en el path "productos" no muestra el botón seguir comprando pero si estamos en el path "carrito" si lo muestra.
  const location = useLocation();
  const currentPath = location.pathname;

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

  // const total = carrito.reduce((sum, item) => sum + Number(item.precio), 0);

  return (
    <div style={{ margin: "2rem", marginTop: "4rem" }}>
      <hr />
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item) => (
            <div key={item.id}>
              {item.nombre} - ${Number(item.precio).toFixed(3)}
              (Cantidad: {item.cantidad || 1})
              <button onClick={() => quitarCantidad(item.id)}>-</button>

              <button onClick={() => agregarCantidad(item.id)}>+</button>
            </div>
          ))}
          <div>
            <hr />
            Total: ${Number(total).toFixed(3)}
          </div>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button onClick={irAPagar}>Pagar</button>

          {/* Este boton sirve para seguir comprando pero tiene la carateristica de que solo se muestra si estamos en la ruta "/carrito"
         Para eso usamos useLocation para obtener la ruta actual. Esto nos ayuda a condicionar la renderización del botón "Seguir Comprando". Es decir: si
         en el path "productos" no muestra el botón seguir comprando pero si estamos en el path "carrito" si lo muestra.Mostrar el botón solo si estamos en "/carrito" */}
          <div>
            {currentPath === "/carrito" && (
              <button onClick={() => navigate("/productos")}>
                Seguir Comprando
              </button>
            )}
          </div>
        </>
      )}
      <hr />
    </div>
  );
}

function DetalleDeLaCompra() {
  return (
    <div>
      <h1 style={{ margin: "7rem" }}>Detalle de mi Compra</h1>
      <hr />
      <Link to="/productos">
        <button>Seguir Comprando</button>
      </Link>
    </div>
  );
}

export { DetalleDeLaCompra };

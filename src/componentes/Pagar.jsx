import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Pagar.css";
import { useAppContext } from "../context/AppContext";

export default function Pagar() {
  const { usuario, cerrarSesion, carrito, vaciarCarrito } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();

  // // Calculo del total
  // const total = carrito.reduce(
  //     (suma, producto) => suma + Number(producto.precio),
  //     0
  // );

  // Calculo del total
  // Calcula el total x cantidad y muestra precio x unidad
  const total = carrito.reduce((suma, producto) => {
    const cantidad = Number(producto.cantidad || 1);
    const precioUnitario = Number(producto.precio || 0);
    return suma + cantidad * precioUnitario;
  }, 0);

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito(); // Vacia el carrito después de comprar
    navigate("/productos");
  };

  return (
    <div className="contenedor-pagar">
      {/* <div className="datos-usuario">
                <h2 >Hola: {usuario.nombre}</h2>
                <h3> {usuario.email}</h3>
            <button onClick={cerrarSesion}>Cerrar sesión</button>

            </div> */}

      <div className="detalle-compra">
        <hr />
        <h2>Tu compra:</h2>

        {carrito.length > 0 ? (
          <>
            {carrito.map((producto) => {
              const cantidad = Number(producto.cantidad || 1);
              const precioUnitario = Number(producto.precio || 0);
              const subtotal = cantidad * precioUnitario;
              return (
                <div
                  key={producto.id}
                  style={{ display: "flex", gap: 12, alignItems: "center" }}
                >
                  <img src={producto.avatar} alt={producto.nombre} width="60" />
                  <div>
                    <div>{producto.nombre}</div>
                    <div>
                      Precio unidad: ${Number(precioUnitario).toFixed(3)}
                    </div>
                    <div>Cantidad: {cantidad}</div>
                    <div>
                      <strong>Subtotal: ${Number(subtotal).toFixed(3)}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
            <h3>Total a pagar: ${Number(total).toFixed(3)}</h3>
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

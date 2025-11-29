// Importa componentes y hooks de react-router-dom para navegación y gestión de rutas.
// Link: Para navegación declarativa.
// useNavigate: Para navegación programática (cambio de ruta por código).
// useLocation: Para obtener información sobre la URL actual.
import { Link, useNavigate, useLocation } from "react-router-dom";
// Importa el hook personalizado para acceder al contexto del carrito (estado global).
import { useCartContext } from "../context/CartContext";
import { formatearPrecio} from "../context/ProductsContext";


/**
 * @component CarritoCompras
 * @description Componente principal que muestra los ítems del carrito, permite modificar cantidades,
 * vaciar el carrito y proceder al pago.
 */
export default function CarritoCompras() {
  // 1. Acceso al Estado Global (CartContext)
  // Desestructura los valores y funciones necesarios del contexto del carrito.
  const { carrito, vaciarCarrito, agregarCantidad, quitarCantidad, total } =
    useCartContext();

  // 2. Hooks de Navegación y Ruta
  // Hook para la navegación programática (ej. al hacer clic en "Pagar").
  const navigate = useNavigate();

  // Hook para obtener la información de la ruta actual (URL, pathname, etc.).
  const location = useLocation();
  // Obtiene el path actual para controlar condicionalmente la renderización de botones.
  const currentPath = location.pathname;

  // 3. Funciones Manejadoras
  /**
   * @function irAPagar
   * @description Navega a la ruta "/pagar" y pasa el estado actual del carrito
   * como un objeto de estado para ser accesible en el componente de pago.
   */
  const irAPagar = () => {
    // El segundo argumento ({ state: { carrito } }) es el estado que se pasa a la nueva ruta.
    navigate("/pagar", { state: { carrito } });
  };
  /*
  // La función 'total' se está obteniendo directamente del contexto (useCartContext), lo cual es más eficiente
  // ya que evita recalcular el total en cada render si ya se calcula en el contexto.
  */

  // 4. Renderización del Componente
  return (
    <div style={{ margin: "2rem", marginTop: "4rem" }}>
      <hr />
      <h2>Carrito de Compras</h2>
      {/* Renderización condicional: Si el carrito está vacío, muestra un mensaje. */}
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {/* Mapea y renderiza cada ítem del carrito */}
          {carrito.map((item) => (
            // La key es crucial para la eficiencia de React al renderizar listas.
            <div key={item.id}>
              {/* Muestra el nombre y el precio del ítem. toFixed(3) formatea el precio. */}
              {item.nombre} - ${formatearPrecio(item.precio)}
            

              {/* Muestra la cantidad actual. */}
              (Cantidad: {item.cantidad || 1})
              {/* Botón para quitar una unidad. Llama a la función del contexto. */}
              <button onClick={() => quitarCantidad(item.id)}>-</button>
              {/* Botón para agregar una unidad. Llama a la función del contexto. */}
              <button onClick={() => agregarCantidad(item.id)}>+</button>
            </div>
          ))}
          {/* Muestra el total de la compra */}
          <div>
            <hr />
            Total: $ {formatearPrecio(total)}
          </div>
          {/* Botones de acción principales */}
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button onClick={irAPagar}>Pagar</button>

          {/* Renderización condicional del botón "Seguir Comprando" */}
          <div>
            {/* El botón solo se muestra si el path actual es exactamente "/carrito".
                Esto previene que se muestre en rutas donde ya no es necesario (ej. en /productos). */}
            {currentPath === "/carrito" && (
              // Navega a la ruta /productos cuando se hace clic.
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



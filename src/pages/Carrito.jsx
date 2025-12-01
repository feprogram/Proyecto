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

  const seguirComprando = () => {
    navigate("/productos");
  }
  /*
  // La función 'total' se está obteniendo directamente del contexto (useCartContext), lo cual es más eficiente
  // ya que evita recalcular el total en cada render si ya se calcula en el contexto.
  */

  // 4. Renderización del Componente
  return (
    <div className="container my-5"> {/* Contenedor centrado y con margen */}

    <div className="card shadow-lg border-0"> {/* Tarjeta con sombra sutil y sin borde */}
      
      <div className="card-header bg-white border-bottom py-3"> 
          <h2 className="mb-0 fs-4">🛍️ Carrito de Compras</h2>
        </div>
      

      <div className="card-body p-4">

      {carrito.length === 0 ? (
        <div className="text-center py-5">

        <p className="lead text-muted">El carrito está vacío</p>
        </div>
      ) : (
        <>
          <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr className="text-muted">
                    <th scope="col">Producto</th>
                    <th scope="col" className="text-center">Cantidad</th>
                    <th scope="col" className="text-end">Precio Unitario</th>
                    <th scope="col" className="text-end">Subtotal</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="fw-semibold">{item.nombre}</div>
                        <small className="text-muted d-block">ID: {item.id}</small> 
                      </td>

                      <td className="text-center">
                        <div className="btn-group btn-group-sm" role="group">
                          <button 
                            onClick={() => quitarCantidad(item.id)}
                            className="btn btn-outline-secondary"
                          >
                            -
                          </button>
        
                          {/* Muestra la cantidad actual */}
                          <span className="btn btn-light border">
                            {item.cantidad || 1}
                          </span>
                          <button 
                            onClick={() => agregarCantidad(item.id)}
                            className="btn btn-outline-secondary"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="text-end">
                        ${formatearPrecio(item.precio)}
                      </td>

                      <td className="text-end fw-bold">
                        ${formatearPrecio(item.precio * item.cantidad)}
                      </td>

                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


         <hr className="my-4" /> {/* Separador moderno */}

         {/* Resumen y Botones de Acción */}
            <div className="d-flex justify-content-end mb-3">
                <h4 className="me-3">Total:</h4>
                <h4 className="fw-bold text-success">${formatearPrecio(total)}</h4>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                
                {/* Botón para seguir comprando (a la izquierda) */}
                {currentPath === "/carrito" && (
                    <button 
                        onClick={seguirComprando} 
                        className="btn btn-outline-secondary me-2"
                    >
                        &larr; Seguir Comprando
                    </button>
                )}
                
                {/* Botones de acción (a la derecha) */}
                <div className="d-grid gap-2">
                    
                    {/* Botón principal (Pagar) con énfasis */}
                    <button
                        onClick={irAPagar} 
                        className="btn btn-success"
                        type="button"
                    >
                        Proceder al Pago &rarr;
                    </button>

<button 
                        onClick={vaciarCarrito} 
                        className="btn btn-outline-danger me-2"
                        type="button"
                    >
                        Vaciar Carrito
                    </button>

                </div>
            </div>
          </>
        )}
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { formatearPrecio } from '../context/ProductsContext';

/**
 * @component MiniCarrito
 * @description Muestra un resumen compacto del carrito para usar en una barra lateral o modal.
 */
export default function MiniCarrito() {
  const { carrito, total, quitarCantidad, agregarCantidad } = useCartContext();

  // Si el carrito está vacío, muestra un mensaje simple.
  if (carrito.length === 0) {
    return (
      <div className="card p-3 shadow-sm mt-5">
        <h5 className="mb-3">🛒 Resumen del Carrito</h5>
        <p className="text-muted mb-0">No hay productos en el carrito.</p>
       
      </div>
    );
  }

  // Si hay productos, muestra la lista y el total.
  return (
    // Usa sticky-top para que la barra lateral se mantenga visible al hacer scroll.
    <div className="card shadow-sm mt-5">
      <h5 className="mb-3">🛒 Resumen del Carrito</h5>
      
      {/* Lista Compacta de Items */}
      <ul className="list-group list-group-flush mb-3">
        {carrito.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center p-2">
            
            {/* Nombre y Cantidad */}
            <div className="flex-grow-1 me-2">
              <div className="fw-semibold text-truncate" style={{ maxWidth: '150px' }}>
                {item.nombre}
              </div>
              <small className="text-muted">
                {item.cantidad} x ${formatearPrecio(item.precio)}
              </small>
            </div>
            
            {/* Botones de control (más compactos) */}
            <div className="btn-group btn-group-sm" role="group">
              <button 
                onClick={() => quitarCantidad(item.id)}
                className="btn btn-outline-secondary p-1"
                style={{ width: '25px', height: '25px' }}
              >
                -
              </button>
              <button 
                onClick={() => agregarCantidad(item.id)}
                className="btn btn-outline-secondary p-1"
                style={{ width: '25px', height: '25px' }}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Total y Botón para ir a la página principal del carrito */}
      <div className="d-flex justify-content-between align-items-center mb-3 pt-2 border-top">
        <span className="fw-bold">Total:</span>
        <span className="fw-bold text-success">${formatearPrecio(total)}</span>
      </div>

      <Link to="/carrito" className="btn btn-primary btn-sm">
        Ir a pagar ({carrito.length} {carrito.length === 1 ? 'ítem' : 'ítems'})
      </Link>
    </div>
  );
}
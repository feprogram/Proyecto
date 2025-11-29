import { Link, useParams, useLocation } from "react-router-dom";
import { formatearPrecio } from "../context/ProductsContext";
import "../styles/DetallesDelProducto.css";

const ProductoDetalle = () => {
 
    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;
 
if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/carrito">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }
 
  return(
    
    <div className="contenedor-detalles">
  
    <h2>Detalles del Producto</h2>
    <ul>
        <li key={producto.id} style={{ listStyle: "none" }}>
            <strong>{producto.nombre}</strong> - (SKU 759 {id})
            <br />
            <p><strong>Descripción: </strong>{producto.descripcion}</p>
            <p><strong>Precio:</strong> ${formatearPrecio(producto.precio)}</p>
            <img src={producto.avatar} alt={producto.nombre} width="30%" />
        </li>
        
        <Link to={`/productos`}><button>Volver</button></Link>
    </ul>

    

    </div>
    
  );
}; export default ProductoDetalle;
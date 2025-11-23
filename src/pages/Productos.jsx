import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Productos.css";
import CarritoCompras from "../componentes/Carrito";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts} from "../context/ProductsContext";

export default function Productos() {
  const { productos, cargando, error } = useProducts();
  const { agregarAlCarrito } = useCartContext();
  const { esAdmin } = useAuthContext();
  const navigate = useNavigate();
  const [limite, setLimite] = useState(8); // Cantidad de productos visibles

  const manejarEliminar = (producto) => {
    // Navegar a la página de confirmación de eliminación
    navigate("/eliminarproductos", { state: { producto } });
  };

  const manejarEditar = (producto) => {
    // Navegar al formulario de edición
    navigate("/formulario-producto", { state: { producto } });
  };

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  const productosVisibles = productos.slice(0, limite);

  return (
    <>
      <div className="contenedor">
        <div className="productos">
          <ul id="lista-productos">
            {productosVisibles.map((producto) => (
              <ProductoItem
                key={producto.id}
                producto={producto}
                esAdmin={esAdmin}
                onEditar={() => manejarEditar(producto)}
                onEliminar={() => manejarEliminar(producto)}
                onAgregarCarrito={() => agregarAlCarrito(producto)}
              />
            ))}
          </ul>

          {/* Botón "Ver más" solo aparece si hay más productos */}
          {limite < productos.length && (
            <button
              onClick={() => setLimite(limite + 10)}
              style={{
                padding: "10px 20px",
                marginTop: "20px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Cargar más
            </button>
          )}
          <CarritoCompras />
        </div>
      </div>
    </>
  );
}

const ProductoItem = ({
  producto,
  esAdmin,
  onEditar,
  onEliminar,
  onAgregarCarrito,
}) => (
  <li id="lista-productos li">
    <h2 style={{ margin: "0" }}>{producto.nombre}</h2>
    <p style={{ margin: "0" }}>Descripción: {producto.descripcion}</p>
    <img src={producto.avatar} alt={producto.nombre} width="80%" />
    <p>
      <strong>Precio: ${producto.precio}</strong>
    </p>

    <Link to={`/productos/${producto.id}`} state={{ producto }}>
      <button>Más detalles</button>
    </Link>

    <button onClick={onAgregarCarrito}>Comprar</button>

    {/* BOTONES ADMIN - Agregar contenedor */}
    {esAdmin && (
      <div>
        <hr />
        <button onClick={onEditar}>
          Editar
        </button>
        <button onClick={onEliminar}>
          Eliminar
        </button>
      </div>
    )}
  </li>
);

// Autenticación

//   const productosVisibles = productos.slice(0, limite);

//   return (
//     <div className="contenedor">
//       <div className="productos">
//         <ul id="lista-productos">
//           {productosVisibles.map((producto) => (
//             <li id="lista-productos li" key={producto.id}>
//               <h3 style={{ margin: "0" }}>{producto.nombre}</h3>
//               <p style={{ margin: "0" }}>
//                 <strong>
//                   <i>{producto.categoria}</i>
//                 </strong>
//               </p>
//               <p style={{ margin: "0" }}>{producto.descripcion}</p>
//               <img
//                 src={producto.avatar}
//                 style={{ width: "50%" }}
//                 alt={producto.nombre}
//               />
//               <p style={{ width: "100%", margin: "0", fontWeight: "bold" }}>
//                 $ {producto.precio}
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: "5px",
//                   padding: "0px",
//                   margin: "0",
//                 }}
//               >
//                 <Link
//                   to={`/productos/${producto.categoria || "Sin Categoria"}/${
//                     producto.id
//                   }`}
//                   state={{ producto }}
//                 >
//                   <button style={{ backgroundColor: "#4fe460ff" }}>
//                     +Info
//                   </button>
//                 </Link>
//                 <button onClick={() => agregarAlCarrito(producto)}>
//                   Comprar
//                 </button>

//                 {/* Botón Editar - SOLO visible para admin */}
//                 {esAdmin && (
//                   <div>
//                     <button
//                       onClick={() =>
//                         navigate("/editarproductos", {
//                           state: { producto: producto },
//                         })
//                       }
//                       style={{
//                         backgroundColor: "#28a745",
//                         color: "white",
//                         marginRight: "10px",
//                       }}
//                     >
//                       Editar
//                     </button>

//                     <button
//                       onClick={() =>
//                         navigate("/eliminarproductos", {
//                           state: { producto: producto },
//                         })
//                       }
//                       style={{
//                         backgroundColor: "red",
//                         color: "white",
//                         marginRight: "10px",
//                       }}
//                     >
//                       Eliminar
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Botón "Ver más" solo aparece si hay más productos */}
//         {limite < productos.length && (
//           <button
//             onClick={() => setLimite(limite + 10)}
//             style={{
//               padding: "10px 20px",
//               marginTop: "20px",
//               fontSize: "16px",
//               cursor: "pointer",
//             }}
//           >
//             Cargar más
//           </button>
//         )}
//       </div>

//       {!esAdmin && (
//         <div className="carrito">
//           <Carrito carrito={carrito} setCarrito={setCarrito} />
//         </div>
//       )}
//     </div>
//   );
// }

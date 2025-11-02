import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Productos.css";
import Carrito from "../componentes/Carrito";
import { useCartContext } from "../context/CartContext";


export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [limite, setLimite] = useState(8); // Cantidad de productos visibles
  const { agregarAlCarrito, carrito, setCarrito} = useCartContext();
  

  useEffect(() => {
    fetch("https://68d9c26590a75154f0db169b.mockapi.io/Api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {
          console.error("Error!,", error);
        }
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);
  

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  const productosVisibles = productos.slice(0, limite);

  return (
    <div className="contenedor">
      <div className="productos">
        <ul id="lista-productos">
          {productosVisibles.map((producto) => (
            <li id="lista-productos li" key={producto.id}>
              <h3 style={{ margin: "0" }}>{producto.nombre}</h3>
              <p style={{ margin: "0" }}>{producto.descripcion}</p>
              <img
                src={producto.avatar}
                style={{ width: "50%" }}
                alt={producto.nombre}
              />
              <p style={{ width: "100%", margin: "0", fontWeight: "bold" }}>
                $ {producto.precio}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                  padding: "0",
                  margin: "0",
                }}
              >
                <Link to={`/productos/${producto.categoria || "Sin Categoria" }/${producto.id}`} state={{ producto }}>
                  <button>+Info</button>
                </Link>
                <button onClick={() => agregarAlCarrito(producto)}>
                  Comprar
                </button>
              </div>
            </li>
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
      </div>
      <div className="carrito">
        <Carrito carrito={carrito} setCarrito={setCarrito} />
      </div>
    </div>
  );
}

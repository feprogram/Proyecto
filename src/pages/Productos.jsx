import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CarritoCompras from "./Carrito";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts, formatearPrecio } from "../context/ProductsContext";
import styled from "styled-components";

export default function Productos() {
  const { productos, cargando, error } = useProducts();
  const { agregarAlCarrito } = useCartContext();
  const { esAdmin } = useAuthContext();
  const navigate = useNavigate();
  const [limite, setLimite] = useState(8); // Cantidad de productos visibles

  useEffect(() => {
    document.title = "Relojes | Productos";

    // Función para actualizar meta tags
    const updateMetaTag = (name, content, attribute = "name") => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Meta tags básicos
    updateMetaTag(
      "description",
      "Explora el catálogo de relojes. Encuentra relojes clásicos y modernos."
    );
    updateMetaTag("keywords", "relojes, relojes clásicos, relojes modernos");
    updateMetaTag("author", "@webmaster");
    updateMetaTag("robots", "index, follow");

    // Open Graph
    updateMetaTag("og:title", "Reloj", "property");
    updateMetaTag(
      "og:description",
      "Explora el catálogo de relojes.",
      "property"
    );
    updateMetaTag("og:type", "website", "property");
    updateMetaTag("og:image", "https://tudominio.com/logo.jpg", "property");
    updateMetaTag("og:url", window.location.href, "property");
  }, []);

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
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-sm-9 mb-2 mb-sm-0">
          <div className="row">
            {productosVisibles.map((producto) => (
              <div key={producto.id} className="col-md-4 col-sm-6 mb-4">
                <ProductoItem
                  producto={producto}
                  esAdmin={esAdmin}
                  onEditar={() => manejarEditar(producto)}
                  onEliminar={() => manejarEliminar(producto)}
                  onAgregarCarrito={() => agregarAlCarrito(producto)}
                />
              </div>
            ))}
          </div>

          {/* Botón "Ver más" solo aparece si hay más productos */}
          {limite < productos.length && (
            <button
              className="btn btn-secondary btn-sm mb-4"
              onClick={() => setLimite(limite + 10)}
            >
              Cargar más
            </button>
          )}
        </div>

        <div className="col-3 mt-4 d-none d-md-block">
          {/* Este div interno es el que manejaremos con CSS */}
          <div
            style={{
              position: "fixed", // Lo fija a la ventana
              top: "60px", // Ajusta la posición debajo del Navbar (ajusta este valor)
              width: "21.5%", // Crucial: define el ancho fijo igual al ancho de col-3 (ajusta si la columna es diferente)
              maxWidth: "300px", // Opcional: define un ancho máximo para pantallas muy grandes
            }}
          >
            <CarritoCompras />
          </div>
        </div>
      </div>
    </div>
  );
}

const ProductoItem = ({
  producto,
  esAdmin,
  onEditar,
  onEliminar,
  onAgregarCarrito,
}) => (
  <div
    className="card shadow-lg  h-100"
    style={{
      alignItems: "center",
      borderRadius: "16px",
      boxShadow: "0 0 15px hsla(0deg 0% 0% 0.5)",
      display: "flex",
      height: "250px",
      justifyContent: "center",
    }}
  >
    <img
      className="card-img-top"
      src={producto.avatar}
      alt={producto.nombre}
      style={{ height: "200px", objectFit: "cover" }}
    />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{producto.nombre}</h5>
      <p className="card-text text-muted">{producto.descripcion}</p>
      <p className="card-text mt-auto mb-3">
        <strong>Precio: $ {formatearPrecio(producto.precio)}</strong>
      </p>

      {!esAdmin && (
        <div className="d-flex justify-content-between mb-2">
          <Link to={`/productos/${producto.id}`} state={{ producto }}>
            <button className="btn btn-secondary btn-sm w-100">
              Más detalles
            </button>
          </Link>

          <button
            className="btn btn-primary btn-sm"
            style={{ width: "48%" }}
            onClick={onAgregarCarrito}
          >
            Comprar
          </button>
        </div>
      )}

      {/* BOTONES ADMIN - Agregar contenedor */}
      {esAdmin && (
        <div className="d-flex justify-content-between pt-2 border-top">
          {/* d-grid gap-2: Agrupa los botones y les da espacio
                       justify-content-md-center: Centra el grupo en el div */}

          <button
            className="btn btn-info btn-sm"
            style={{ width: "48%" }}
            onClick={onEditar}
          >
            Editar
          </button>
          <button
            className="btn btn-danger btn-sm"
            style={{ width: "48%" }}
            onClick={onEliminar}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  </div>
);

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <p className="heading">Popular this month</p>
        <p>Powered By</p>
        <p>Uiverse</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 190px;
    height: 254px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 264px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
  }

  .card p:not(.heading) {
    font-size: 14px;
  }

  .card p:last-child {
    color: #e81cff;
    font-weight: 600;
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
`;

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MiniCarrito from "../componentes/MiniCarrito";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts, formatearPrecio } from "../context/ProductsContext";
import styled from "styled-components";

export default function Productos() {
  const { productos, cargando, error } = useProducts();
  const { agregarAlCarrito } = useCartContext();
  const { esAdmin } = useAuthContext();
  const navigate = useNavigate();
  // const [limite, setLimite] = useState(8); // Cantidad de productos visibles
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

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
    updateMetaTag(
      "og:image",
      "https://proyecto-beta-one.vercel.app/",
      "property"
    );
    updateMetaTag("og:url", window.location.href, "property");
  }, []);

  const productosPorPagina = 6;

  const manejarEliminar = (producto) => {
    // Navegar a la página de confirmación de eliminación
    navigate("/eliminarproductos", { state: { producto } });
  };

  const manejarEditar = (producto) => {
    // Navegar al formulario de edición
    navigate("/formulario-producto", { state: { producto } });
  };

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      (producto.categoria &&
        producto.categoria.toLowerCase().includes(busqueda.toLowerCase()))
  );

  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productosFiltrados.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );

  // Cambiar de página
  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  // Resetear a página 1 con búsquedas
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
    setPaginaActual(1);
  };

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  // const productosVisibles = productos.slice(0, limite);

  return (
    <>
      <div className="container" style={{ marginTop: "60px" }}>
        {/* Barra de búsqueda */}
        <div className="row mb-4">
          <div className="col-12 col-md-6">
            <label className="form-label fw-bold"></label>
            <input
              type="text"
              placeholder="Buscar por nombre o categoría..."
              className="form-control"
              value={busqueda}
              onChange={manejarBusqueda}
            />
            {busqueda && (
              <small className="text-muted">
                Mostrando {productosFiltrados.length} de {productos.length}{" "}
                productos
              </small>
            )}
          </div>
        </div>
      </div>

      <div className="container mt-4" >
        <div className="row">
          <div className="col-sm-9 mb-2 mb-sm-0">
            <div className="row">
              {productosActuales.map((producto) => (
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
            {/* {limite < productos.length && (
              <button
                className="btn btn-secondary btn-sm mb-4"
                onClick={() => setLimite(limite + 10)}
              >
                Cargar más
              </button>
            )} */}
          </div>

          <div className="col-3 mt-4 d-none d-md-block">
            <div
              style={{
                position: "fixed", // Lo fija a la ventana
                top: "60px", // Ajusta la posición debajo del Navbar (ajusta este valor)
                width: "21.5%", // Crucial: define el ancho fijo igual al ancho de col-3 (ajusta si la columna es diferente)
                maxWidth: "300px", // Opcional: define un ancho máximo para pantallas muy grandes
              }}
            >
              <MiniCarrito />
            </div>
          </div>
        </div>

{/* Paginador - Estilo simplificado */}
        {productosFiltrados.length > productosPorPagina && (
          <div className="d-flex justify-content-center my-4">
            {Array.from({ length: totalPaginas }, (_, index) => (
              <button
                key={index + 1}
                className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => cambiarPagina(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}


        {/* Información de la página actual */}
        {productosFiltrados.length > 0 && (
          <div className="text-center text-muted mt-2">
            <small>
              Mostrando {productosActuales.length} productos
              (página {paginaActual} de {totalPaginas})
            </small>
          </div>
        )}
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
  <StyledProductoCard className="h-100">
    <img
      className="card-img-top"
      src={producto.avatar}
      alt={producto.nombre}
      style={{ height: "100px", width: "100px" }}
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
            className="btn btn-secondary btn-sm"
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
  </StyledProductoCard>
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
    background-color: #fff; /* Fondo blanco solicitado */
    color: #000; /* Texto oscuro para contraste en fondo blanco */
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

const StyledProductoCard = styled.div`
  /* Estilo Moderno (Glassmorphism Oscuro) */
  background: rgba(237, 236, 245, 0.7); /* Fondo semi-transparente */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  border-radius: 16px;
  /* Borde blanco muy sutil */
  border: 1px solid rgba(255, 255, 255, 0.05);
  /* Sombra definida */
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.7);

  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  color: #f0f0f0; /* Texto claro */
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  height: 380px;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    /* Efecto de brillo sutil en hover */
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8),
      0 0 20px rgba(255, 255, 255, 0.1);
  }

  .card-img-top {
    /* Estilo para la imagen del reloj */
    height: 120px;
    width: 120px;
    object-fit: contain;
    margin-bottom: 1rem;
    border-radius: 50%;
    border: 2px solid rgba(201, 160, 79, 0.1); /* Mantiene un sutil halo dorado */
  }

  .card-body {
    padding: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .card-title {
    color: #000; /* Título en color dorado más suave */
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .card-text {
    color: #000;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }

  strong {
    color: #000;
  }

  /* Nuevo Estilo para el Botón Comprar (btn-primary) */
  .btn-primary {
    /* Botón Comprar: Plateado/Blanco Elegante */
    background-color: #ffffff;
    border-color: #ffffff;
    color: #1a1a1a; /* Texto oscuro para contraste */
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      background-color: #e0e0e0;
      border-color: #e0e0e0;
      transform: translateY(-1px);
    }
  }

  .btn-secondary {
    /* Botón de detalle */
    background-color: transparent;
    border-color: #555;
    color: #000;
    &:hover {
      background-color: #555;
      border-color: #555;
    }
  }

  .btn-info,
  .btn-danger {
    /* Botones de Admin */
    font-size: 0.8rem;
  }
`;

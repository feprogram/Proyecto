// Inicio.jsx
import { Link } from "react-router-dom";
import Pattern from "../componentes/Pattern";

function Inicio() {
  return (
    <Pattern>
      <h1
        style={{
          fontSize: "2.8rem",
          letterSpacing: "1px",
          marginBottom: "1.5rem",
          color: "#f1f1f1",
        }}
      >
        Elegancia en Cada Segundo
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          color: "blanchedalmond",
          lineHeight: 1.6,
          marginBottom: "2.5rem",
          opacity: 0.85,
        }}
      >
        Relojes decididamente contemporáneos para personas dinámicas. Estilo
        atemporal, diseño premium y precisión suiza en cada detalle.
      </p>

      <Link to="/productos" style={{ textDecoration: "none" }}>
        <button
          style={{
            padding: "0.9rem 2.4rem",
            background: "#ffffff",
            color: "#000000",
            border: "none",
            borderRadius: "30px",
            fontSize: "1.1rem",
            cursor: "pointer",
            fontWeight: "600",
            transition: "0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          Ver Colección
        </button>
      </Link>
    </Pattern>
  );
}

export default Inicio;

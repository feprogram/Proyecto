import React from "react";
import { Link } from "react-router-dom";
import "../styles/Inicio.css";
import Loader from "../componentes/Loader";


function Inicio() {
  return (

    <>
    
    <div className="seccion-principal">
      
     
      <h1 style={{ marginTop: "4rem" }}>Encontrá tu reloj en Talento</h1> 
      <span style={{ margin: "2rem", fontSize: "1.2rem" }}>
        La elegancia hasta en el más mínimo detalle. Relojes decididamente
        contemporáneos para personas dinámicas con estilo atemporal con cada
        detalle.  
      </span>
      <Loader/>
      
      <br />
      <br />
      <button><Link to="/productos" style={{ color: "black" }}>Elegí el tuyo</Link></button>

    </div>


</>
  );
}

export default Inicio;

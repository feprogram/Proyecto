import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import "./App.css";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import NavBar from "./componentes/NavBar";
import Contacto from "./componentes/Contacto";
import CarritoCompras, { DetalleDeLaCompra } from "./componentes/Carrito";
import Pagar from "./componentes/Pagar";
import RutaProtegida from "./pages/RutaProtegida";
import IniciarSesion from "./componentes/IniciarSesion";
import ProductoDetalle from "./pages/DetallesDelProducto";
import Footer from "./componentes/Footer";
import { AppProvider } from "./context/AppContext";


function App() {
  return (
    <AppProvider>
      <div className="container">
        <NavBar />

        <Routes className="content">
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:categoria/:id" element={<ProductoDetalle />}/>
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/carrito" element={<CarritoCompras/>} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/IniciarSesion" element={<IniciarSesion />} />
          <Route path="/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>}/>
        </Routes>
        <Footer />
      </div>
    </AppProvider>
  );
}




export default App;

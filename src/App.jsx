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
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Dashboard from "./pages/Dasboard";
import FormularioProducto from "./componentes/FormularioProducto";

// Combinando ambos proveedores en uno solo para simplificar


function App() {
  return (
    <AuthProvider>
      <CartProvider>
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
          <Route path="/dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida>} />
          <Route path="/agregar-producto" element={<RutaProtegida soloAdmin={true}><FormularioProducto/></RutaProtegida>} />
          
        </Routes>
        <Footer />
      </div>
        </CartProvider>
        </AuthProvider>

  );
}




export default App;

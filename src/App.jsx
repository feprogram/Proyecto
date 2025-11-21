import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import "./App.css";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import NavBar from "./componentes/NavBar";
import Contacto from "./componentes/Contacto";
import CarritoCompras from "./componentes/Carrito";
import Pagar from "./componentes/Pagar";
import RutaProtegida from "./componentes/RutaProtegida";
import IniciarSesion from "./componentes/IniciarSesion";
import ProductoDetalle from "./componentes/DetallesDelProducto";
import Footer from "./componentes/Footer";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Dashboard from "./pages/Dasboard";
import AgregarProducto from "./componentes/AgregarProducto";
import EditarProductos from "./componentes/EditarProductos";
import EliminarProductos from "./componentes/EliminarProductos";
import { WhatsAppButton } from "./componentes/WhatApp1";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



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
          <Route path="/editarproductos" element={<RutaProtegida soloAdmin={true}><EditarProductos/></RutaProtegida>} />
          <Route path="/agregar-producto" element={<RutaProtegida soloAdmin={true}><AgregarProducto/></RutaProtegida>} />
          <Route path="/eliminarproductos" element={<RutaProtegida soloAdmin={true}><EliminarProductos/></RutaProtegida>} />
        </Routes>
        <Footer />
      </div>
        </CartProvider>
        </AuthProvider>

  );
}

export default App;

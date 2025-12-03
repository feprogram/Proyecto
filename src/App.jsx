import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import "./App.css";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import NavBar from "./componentes/NavBar";
import Contacto from "./componentes/Contacto";
import CarritoCompras from "./pages/Carrito";
import Pagar from "./componentes/Pagar";
import Dashboard from "./pages/Dasboard";
import RutaProtegida from "./componentes/RutaProtegida";
import IniciarSesion from "./componentes/IniciarSesion";
import ProductoDetalle from "./componentes/DetallesDelProducto";
import Footer from "./componentes/Footer";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import FormularioProducto from "./componentes/FormularioProducto";
import EliminarProductos from "./componentes/EliminarProductos";
import WhatsAppButton from "./componentes/WhatApp1";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider >
      <CartProvider>
        <ProductsProvider>
          <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <WhatsAppButton/>
            <div  className="flex-grow-1">
            <Routes>

              //Rutas públicas a las que cualquier usuario puede acceder
              <Route path="/" element={<Inicio />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/productos/:id" element={<ProductoDetalle />}/>
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/carrito" element={<CarritoCompras />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/IniciarSesion" element={<IniciarSesion />} />

              //Rutas privadas, solo accesibles para usuarios autenticados
              <Route path="/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>}
              />
              <Route path="/dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida>}/>
              <Route
                path="/formulario-producto"
                element={
                  <RutaProtegida>
                    <FormularioProducto />
                  </RutaProtegida>
                }
              />
              <Route
                path="/eliminarproductos"
                element={
                  <RutaProtegida>
                    <EliminarProductos />
                  </RutaProtegida>
                }
              />
              <Route path="*" element={<h2>Página no encontrada</h2>} />
             
            </Routes>
            </div>
            <Footer />
                <ToastContainer
                  position="bottom-right"
                  autoClose={700}
                  hideProgressBar={false} 
                  closeOnClick
                  draggable
                  pauseOnHover
                />
          </div>


          
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

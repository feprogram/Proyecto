import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import "./App.css";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import NavBar from "./componentes/NavBar";
import Contacto from "./componentes/Contacto";
import Carrito, { DetalleDeLaCompra } from "./pages/Carrito";
import Pagar from "./pages/Pagar";
import RutaProtegida from "./pages/RutaProtegida";
import IniciarSesion from "./pages/IniciarSesion";
import ProductoDetalle from "./pages/DetallesDelProducto";
import Footer from "./componentes/Footer";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({nombre:"", email:""});

  return (
    <div className="container">
      <NavBar/>

      <Routes className="content">
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos/>} />
        <Route path='/productos/:categoria/:id' element={<ProductoDetalle />}/>
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/carrito" element={<DetalleDeLaCompra />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} /> 
        <Route path="/IniciarSesion" element={<IniciarSesion
            setIsAuthenticated={setIsAuthenticated}
            setUsuario={setUsuario} />   
        } />

        <Route path="/pagar" element={ <RutaProtegida isAuthenticated={isAuthenticated}>
              <Pagar
                setIsAuthenticated={setIsAuthenticated}
                setUsuario={setUsuario}
                usuario={usuario}
              />
            </RutaProtegida>
          }
        />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;

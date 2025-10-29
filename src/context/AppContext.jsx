/* useContext: contexto global donde se colocan variables de estado
que son de uso general en más de un componente*/
import { createContext, useContext, useState } from "react";


// Creo el contexto
export const AppContext = createContext();

// Creo la función para usar el contexto. Esta función hace el delivery de las funciones globales
 
export const AppProvider = ({ children }) => {

    //Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({nombre:"", email:""});

    //Estado del carrito
  const [carrito, setCarrito] = useState([]);

  // Funciones para manejar el carrito

  //  const agregarAlCarrito = (producto) => {
  //   setCarrito([...carrito, producto]);
  //   alert(`${producto.nombre} ha sido agregado al carrito.`);}


const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);
     
      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
    alert(`Producto ${producto.nombre} agregado.`);
  };

    // const vaciarCarrito = (productoId) => {
    //   setCarrito(carrito.filter((item) => item.id !== productoId) );
    // };

    const vaciarCarrito = () => {
    setCarrito([]);
    };

    // Función para cerrar sesión
    const cerrarSesion = () => {
      setIsAuthenticated (false);
      setUsuario ({nombre:"", email:""});
      setCarrito ([]);
    };

    const value = {

      //Datos de autenticación
      isAuthenticated,
      setIsAuthenticated,
      usuario,
      setUsuario,
      cerrarSesion,

      //Datos del carrito
      carrito,
      setCarrito,
      agregarAlCarrito,
      vaciarCarrito,
    };

    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );

  }

  export function useAppContext() {

    const context = useContext(AppContext);

    if (!context) {
      throw new Error("useAppContext debe usarse dentro de un AppProvider");
    }

    return context;
  }

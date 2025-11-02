/* useContext: contexto global donde se colocan variables de estado
vinculadas a la autenticación que son de uso general en más de un componente*/
import React, { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Proveedor de autenticación
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  // Verificar token al cargar la aplicación
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const emailGuardado = localStorage.getItem("authEmail");
    if (token) {
      const username = token.replace("fake-token-", "");
      setUsuario({
        nombre: username,
        email: emailGuardado || "",
      });
    }
  }, []);

  // Función para iniciar sesión
  const iniciarSesion = (username) => {
    const token = `fake-token-${username}`;
    localStorage.setItem("authToken", token);

    const emailGuardado = localStorage.getItem("authEmail");
    setUsuario({
      nombre: username,
      email: emailGuardado || "",
    });
  };

  // Función para cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authEmail");
    setUsuario(null);
  };

  const value = {
    usuario,
    iniciarSesion,
    cerrarSesion,
    isAuthenticated: !!usuario, // ← Propiedad computada. !! transforma a isAuthenticated en booleano. Si nos fijamos mas arriba la propiedad
    // usuario es null o un objeto. Entonces al poner un dato en la propiedad usuario deja de ser null para pasar a ser booleano.
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe usarse dentro de AuthProvider");
  }
  return context;
}
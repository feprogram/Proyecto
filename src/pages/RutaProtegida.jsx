import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';


function RutaProtegida({children }) {

  const { isAuthenticated } = useAppContext();

  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/IniciarSesion" state={location.state} replace />;
  }
  return children;
}
export default RutaProtegida;
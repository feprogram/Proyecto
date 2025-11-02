import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/IniciarSesion.css"
import { useAuthContext } from '../context/AuthContext';


export default function IniciarSesion() {
  const { iniciarSesion } = useAuthContext();
  const navigate = useNavigate();
  const ubicacion = useLocation();
 
  const [formulario, setFormulario] = useState({ nombre: '', email: '' });


  const manejarEnvio = (e) => {
    e.preventDefault();

    // Verifica las credenciales de administrador y abre la pantalla que permite cargar datos (admin/1234@admin)
    if (formulario.nombre === "admin" && formulario.email === "1234@admin") {
      // Guarda el email ingresado y pasa nombre para el token admin
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion("admin");
      navigate("/dashboard");
    }
    
    //si el que ingresa no pone las credenciales de admin, el sistema iniciar sesión como un usuario/cliente en este caso normal  
    else if (
      formulario.nombre &&
      formulario.email &&
      formulario.nombre !== "admin"
    ) {

      // Guarda el email ingresado en el local Storage del navegador (El local storage se puede ver en 
      // Inspeccionar -> Aplicación -> Local storage)
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion(formulario.nombre);
      
     
      // Si venía del carrito, redirige a pagar
      if (ubicacion.state?.carrito) {
        navigate('/pagar', { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate('/productos');
      }
    } else {
      alert('Credenciales de administrador incorrectas. Usa: admin / 1234@admin o ingresa un nombre y email válidos para usuario normal.');
    }
  };

  return (
    <div className='contenedor-iniciar'>
      <h1>Inicia sesión para continuar</h1>
      <form className='gap' onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={formulario.nombre}
          onChange={(e) => setFormulario({...formulario, nombre: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) => setFormulario({...formulario, email: e.target.value})}
          required
        />
        
        <button type="submit">Iniciar Sesión</button>
        <strong> </strong>
        <button type="button" onClick={() => navigate('/productos')}>
          Cancelar
        </button>
        
      </form>
      <p style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
        <strong>Credenciales de prueba para Dashboard:</strong>
        <br />
        Nombre: admin
        <br />
        Email: 1234@admin
      </p>


    </div>
  );
}
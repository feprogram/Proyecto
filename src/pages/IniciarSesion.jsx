import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
      iniciarSesion("admin", formulario.email);
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
      iniciarSesion(formulario.nombre, formulario.email);
      
     
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

<div className='container-sm' style={{marginTop: "150px"}}>

<div className="row justify-content-center">
      
      <div className=" col-12 col-md-5 border p-4 rounded shadow-sm">
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Iniciar Sesión</h1>
      <form className="px-1" onSubmit={manejarEnvio}>
        <div className='mb-3'>
        <input
          className="form-control"
          type="text"
          placeholder="Nombre completo"
          value={formulario.nombre}
          onChange={(e) => setFormulario({...formulario, nombre: e.target.value})}
          required/>
        </div>

        <div className='mb-3'>
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) => setFormulario({...formulario, email: e.target.value})}
          required
        />
        </div>

        <div className="d-flex justify-content-between gap-2 mt-3">
        
        <button type="submit" className='btn btn-primary flex-grow-1'>Iniciar Sesión</button>
      
        <button type="button" className='btn btn-outline-secondary flex-grow-1' onClick={() => navigate('/productos')}>
          Cancelar
        </button>
        
        </div>

      </form>
      </div>
      <div className='col-12 col-md-5 mt-3 mt-md-0 ps-md-4'>
      <p style={{ fontSize: "12px", color: "#666" }}>
        <strong>Credenciales de prueba para Dashboard:</strong>
        <br />
        Nombre: admin
        <br />
        Email: 1234@admin
      </p>
      </div>

</div>
</div>
    
  );
}





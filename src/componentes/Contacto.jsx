import { Link } from "react-router-dom";

import { useState } from "react";
import ContadorCaracteres from "./MensajeContacto";
import styled from "styled-components";
import { toast } from "react-toastify";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    console.log("Datos enviados:", { nombre, correo, mensaje });

    // Esto es para limpiar los campos después de ejecutar el evento onSubmit
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <div className="container-sm" style={{ marginTop: "150px" }}>
      <div className="row justify-content-center">
        <div className=" col-12 col-md-5 border p-4 rounded shadow-sm">
          <h2 tyle={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Formulario de contacto
          </h2>

          <StyledForm onSubmit={manejarEnvio}>
            <FormControlGroup>
              <StyledInput
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Escribe tu nombre"
                required
              />
            </FormControlGroup>

            <FormControlGroup>
              <StyledInput
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="@correo"
                required
              />
            </FormControlGroup>

            <ContadorCaracteres
              limite={200}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />

            <StyledButton type="submit" className="btn btn-primary flex-grow-1">
              Enviar
            </StyledButton>
          </StyledForm>
        </div>
      </div>
    </div>
  );
}

export default Contacto;


const AppleColors = {
  blue: '#007aff', // Azul principal para enfoque y botones
  lightGrey: '#f5f5f7', // Gris muy claro para fondos sutiles
  borderGrey: '#d1d1d6', // Gris para bordes de inputs
  errorRed: '#3037ffff', // Rojo para alertas y estados inválidos
  text: '#1c1c1e', // Color de texto oscuro
};

// 1. Estiliza el input (StyledInput)
const StyledInput = styled.input`
  /* Estilos base */
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${AppleColors.text};
  background-color: white;
  
  /* Esquinas redondeadas y borde sutil */
  border: 1px solid ${AppleColors.borderGrey};
  border-radius: 8px; /* Ligeramente más redondeado */
  
  /* Transiciones suaves */
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  /* Estilo para el estado de enfoque (focus) */
  &:focus {
    border-color: ${AppleColors.blue};
    /* Sombra exterior sutil para el enfoque */
    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.1); 
    outline: none; /* Eliminar el contorno por defecto del navegador */
  }

  /* Pseudo-clase :invalid para validación fallida */
  &:invalid {
    border-color: ${AppleColors.errorRed};
    /* Sombra sutil para el error */
    box-shadow: 0 0 0 4px rgba(255, 59, 48, 0.1);
  }
`;

// 2. Estiliza el botón (StyledButton)
const StyledButton = styled.button`
  /* Estilos base */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* El botón ocupa todo el ancho */
  font-weight: 600; /* Un poco más de peso */
  text-align: center;
  user-select: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.05rem;
  line-height: 1.5;
  cursor: pointer;
  
  /* Color primario (Azul de Apple) */
  color: white;
  background-color: ${AppleColors.blue};
  border: 1px solid ${AppleColors.blue};
  border-radius: 12px; /* Más redondeado para el botón */
  
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &:hover {
    /* Oscurecer el azul ligeramente al pasar el ratón */
    background-color: #0070e2; 
    border-color: #0070e2;
  }
  
  &:active {
    /* Un ligero efecto de "presionar" */
    opacity: 0.8;
  }
  
  &:disabled {
    background-color: #a8a8a8;
    border-color: #a8a8a8;
    cursor: not-allowed;
  }
`;

// 3. Estiliza el formulario (StyledForm)
const StyledForm = styled.form`
  /* Estilos base para el contenedor */
  padding: 1rem;
  background-color: white; /* Fondo blanco para la tarjeta del formulario */
  border-radius: 15px; /* Bordes suaves para el contenedor principal */
  /* Sombra sutil para darle profundidad */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); 
`;

// 4. Estiliza el contenedor de cada campo (FormControlGroup)
const FormControlGroup = styled.div`
  margin-bottom: 1.25rem; /* Espacio sutil entre grupos de control */
`;

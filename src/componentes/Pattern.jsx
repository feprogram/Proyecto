// Pattern.jsx
import styled from 'styled-components';

const Pattern = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;

  .container {
    width: 100%;
    min-height: 100vh;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

 background-color: #0d0d0d; /* Negro muy oscuro como base */
    background-image: 
      /* 1. Gradiente radial sutil para un "brillo" central de enfoque */
      radial-gradient(
        circle at 50% 50%,
        rgba(30, 30, 30, 0.9) 0%,
        rgba(13, 13, 13, 1) 100%
      ),
      repeating-linear-gradient(
        0deg,
        #1e1e1e, /* Línea oscura */
        #1e1e1e 1px,
        transparent 1px,
        transparent 20px
      ),
          repeating-linear-gradient(
        90deg,
        #1e1e1e, /* Línea oscura */
        #1e1e1e 1px,
        transparent 1px,
        transparent 20px
      );
  }



 .content {
    max-width: 700px;
    width: 90%;
    
    /* Efecto Glassmorphism oscuro y refinado */
    background: rgba(13, 13, 13, 0.4); 
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    
    padding: 3.5rem 2.5rem;
    border-radius: 16px;
    
    /* Borde fino con un toque de color dorado/latón */
    border: 1px solid rgba(201, 160, 79, 0.3); 
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
    
    color: #f0f0f0; /* Texto claro para contraste */
    text-align: center;
    transition: all 0.3s ease-in-out;

    /* Estilo para simular un borde interior de reloj */
    &:before {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 14px;
        pointer-events: none;
    }
  }

  /* Responsive para móvil */
  @media (max-width: 640px) {
    .content {
      padding: 2rem 1.5rem;
    }
  }
`;

export default Pattern;

/**
 * Componente que muestra un botón flotante de WhatsApp.
 * Adaptado para usarse sin Tailwind CSS, utilizando Bootstrap y CSS en línea. 
 * El posicionamiento fijo se realiza mediante el prop 'style' combinado.
 */

// URL de ejemplo para WhatsApp: reemplaza '5491155555555' con tu número de teléfono
// y el texto con el mensaje predefinido que desees (asegúrate de codificar los espacios con %20).
const WHATSAPP_LINK = 'https://wa.me/5491155555555?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.';

const WhatsAppButton = () => {
  // Estilos CSS en línea para posicionamiento fijo (Se combinan en el 'style' final)
  const fixedButtonStyle = {
    position: 'fixed',
    bottom: '24px', // Posicionamiento en la parte inferior
    right: '24px',  // Posicionamiento en la derecha
    zIndex: 1050,   // Asegura que esté por encima de la mayoría de los elementos
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      // Clases de Bootstrap para el diseño (círculo, sombra, centrado)
      className="btn rounded-circle shadow-lg d-flex justify-content-center align-items-center"
      aria-label="Chatear con nosotros por WhatsApp"
      
      // Control de efectos hover usando JavaScript para simular transiciones CSS
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#1eaa5a'; // Verde más oscuro en hover
        e.currentTarget.style.transform = 'scale(1.08)'; // Efecto de escala
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#25D366'; // Vuelve al verde normal
        e.currentTarget.style.transform = 'scale(1.0)';
      }}
      
      // Propiedad 'style' combinada: une el posicionamiento con los estilos visuales
      style={{
        ...fixedButtonStyle,
        backgroundColor: '#25D366', // Color verde de WhatsApp
        width: '60px',  // Tamaño del botón
        height: '60px', // Tamaño del botón
        transition: 'transform 0.3s ease-in-out, background-color 0.3s',
      }}
    >
      {/* Icono SVG del Logo de WhatsApp */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        style={{ width: '32px', height: '32px', color: 'white' }} // Tamaño y color del icono
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.63.4 3.2 1.17 4.63l-1.2 4.34 4.44-1.16a9.88 9.88 0 0 0 4.28.98c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm.01 17.56a7.61 7.61 0 0 1-4.14-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a7.61 7.61 0 0 1-1.18-3.95c0-4.18 3.4-7.58 7.58-7.58 2.05 0 3.98.8 5.43 2.24 1.45 1.45 2.24 3.38 2.24 5.43s-.79 3.98-2.24 5.43c-1.45 1.45-3.38 2.24-5.43 2.24zm3.62-5.45c-.2-.1-.8-.4-.9-.44-.1-.04-.17-.06-.24.06-.08.12-.3.44-.36.5-.06.06-.11.08-.2.03-.7-.27-1.16-.5-2.2-.95-1.7-.75-2.23-1.66-2.5-2.12-.27-.47-.03-.72.04-.78.07-.06.16-.14.24-.2-.02-.03-.04-.08-.06-.11l-.18-.32c-.1-.18-.2-.44-.24-.62-.04-.18 0-.3.04-.44.04-.14.36-.88.49-1.2.14-.32.07-.58 0-.61-.07-.03-.24-.07-.4-.07s-.34.03-.52.24c-.18.2-.7 1-.7 2.44 0 1.44.73 2.82 1.05 3.25.3.42 1.43 2.23 3.53 3.06 1.4.54 2.12.5 2.58.42.5-.08.8-.48.92-.76.12-.28.12-.52.08-.47z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
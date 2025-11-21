import React from 'react';

// URL de ejemplo para WhatsApp: reemplaza '1234567890' con el número de teléfono
// y el texto con el mensaje predefinido que desees.
const WHATSAPP_LINK = 'https://wa.me/5491155555555?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.';

/**
 * Componente que muestra un botón flotante de WhatsApp
 * en la esquina inferior derecha de la pantalla.
 * Utiliza un ícono SVG del logo de WhatsApp para alta calidad.
 */
export const WhatsAppButton = () => {
  return (
    // El contenedor principal usa 'fixed' para mantener el botón en la misma posición
    // incluso al hacer scroll. 'bottom-6' y 'right-6' lo posicionan en la esquina.
    // 'z-50' asegura que esté por encima de otros elementos.
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
      aria-label="Chatear con nosotros por WhatsApp"
    >
      {/* Icono SVG del Logo de WhatsApp */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-8 h-8 md:w-10 md:h-10"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.63.4 3.2 1.17 4.63l-1.2 4.34 4.44-1.16a9.88 9.88 0 0 0 4.28.98c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm.01 17.56a7.61 7.61 0 0 1-4.14-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a7.61 7.61 0 0 1-1.18-3.95c0-4.18 3.4-7.58 7.58-7.58 2.05 0 3.98.8 5.43 2.24 1.45 1.45 2.24 3.38 2.24 5.43s-.79 3.98-2.24 5.43c-1.45 1.45-3.38 2.24-5.43 2.24zm3.62-5.45c-.2-.1-.8-.4-.9-.44-.1-.04-.17-.06-.24.06-.08.12-.3.44-.36.5-.06.06-.11.08-.2.03-.7-.27-1.16-.5-2.2-.95-1.7-.75-2.23-1.66-2.5-2.12-.27-.47-.03-.72.04-.78.07-.06.16-.14.24-.2-.02-.03-.04-.08-.06-.11l-.18-.32c-.1-.18-.2-.44-.24-.62-.04-.18 0-.3.04-.44.04-.14.36-.88.49-1.2.14-.32.07-.58 0-.61-.07-.03-.24-.07-.4-.07s-.34.03-.52.24c-.18.2-.7 1-.7 2.44 0 1.44.73 2.82 1.05 3.25.3.42 1.43 2.23 3.53 3.06 1.4.54 2.12.5 2.58.42.5-.08.8-.48.92-.76.12-.28.12-.52.08-.47z"/>
      </svg>
    </a>
  );
};
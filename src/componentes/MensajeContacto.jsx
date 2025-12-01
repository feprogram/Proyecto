export default function ContadorCaracteres({value, onChange, limite = 250 }) {
  // 1. Estado para almacenar el valor actual del campo de texto


  // 3. Lógica para el feedback visual (cambio de color del contador)
  const longitudActual = value.length;
  const porcentaje = (longitudActual / limite) * 100;
  
  // Clase de Bootstrap para el color: Rojo si se acerca al 90% del límite
  const claseContador = porcentaje >= 90 ? 'text-danger fw-bold' : 'text-muted';

  return (
    <div className="mb-3">
      
      <textarea
        className="form-control"
        placeholder="Escribe tu mensaje..."
        rows="4"
        value={value}
        onChange={(onChange)}
        maxLength={limite} 
        required
      />
      
      {/* Contador visual con clases de Bootstrap */}
      <div id="contador" className={`form-text ${claseContador} text-end`}>
        {longitudActual} / {limite} caracteres
      </div>
    </div>
  );
}
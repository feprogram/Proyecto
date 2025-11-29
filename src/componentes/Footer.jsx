import "../styles/Footer.css";

function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {anio} - Mi Aplicación React - Tienda Online - Todos los derechos
        reservados
      </p>
    </footer>
  );
}
export default Footer;

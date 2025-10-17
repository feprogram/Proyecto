import { useLocation, useNavigate } from "react-router-dom";
import  "../styles/Pagar.css"

export default function Pagar({
    isAuthenticated,
    setIsAuthenticated,
    usuario,
    setUsuario,
}) {
    const location = useLocation();
    const navigate = useNavigate();

    // Datos del carrito
    const carrito = location.state?.carrito || [];
    // Calculo del total
    const total = carrito.reduce(
        (suma, producto) => suma + Number(producto.precio),
        0
    );

    // Función para finalizar compra
    const comprar = () => {
        alert("¡Compra realizada con éxito!");
        navigate("/productos");
    };

    // Función para cerrar sesión
    const cerrarSesion = () => {
        setIsAuthenticated(false);
        setUsuario({nombre:"",email:""});
    };

    return (
        <div className="contenedor-pagar">
            <div className="datos-usuario">
                <h2 >Hola: {usuario.nombre}</h2>
                <h3> {usuario.email}</h3>
            <button onClick={cerrarSesion}>Cerrar sesión</button>

            </div>

            
                
            <div className="detalle-compra"> 
                <hr />
                <h2>Tu compra:</h2>

                {carrito.map((producto) => (
                    <div key={producto.id}>
                        {/* <img src={producto.avatar} alt={producto.nombre} width="60" /> */}
                        <span>{producto.nombre}</span> {" "}
                        <strong>$ {producto.precio}</strong>
                    </div>
                ))}

                <h3>Total a pagar: ${total}</h3>
            </div>

            <div>
                <button onClick={comprar}>Confirmar y Pagar</button>
                <button onClick={() => navigate("/productos")}>Cancelar</button>
            </div>
        </div>
    );
}

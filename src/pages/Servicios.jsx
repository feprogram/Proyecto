import React from 'react'
import { Link } from 'react-router-dom'

function Servicios() {
  return (
    <div>
        <h1 style ={{margin: "4rem",}}>Servicios</h1>
        <hr />
        <Link to="/"><button>Volver al inicio</button></Link>
    </div>
  )
}

export default Servicios
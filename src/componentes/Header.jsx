import React from 'react'
import Nav from './Nav'

function Header() {
    return (
        <header style={{
            backgroundColor: "#4CAF50",
            padding: "10px",
            textAlign: "center",
            color: "white",
            width: "100%",
        }}>

            <Nav />

            <h1>Bienvenidos a mi App React</h1>

           
        </header>
    );
}

export default Header;
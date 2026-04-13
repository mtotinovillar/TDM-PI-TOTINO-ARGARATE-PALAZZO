import React from "react";
import './menu.css';
import {Link} from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Menu() {
    let sesion = cookies.get("user-auth-cookie");

    let elementos = [
        {name: "Home", path: "/"},
        {name: "Películas", path: "/Peliculas"},
        {name: "Series", path: "/Series"}
    ];

    if (sesion){
        elementos.push({name:"Favoritas", path:"/Favoritas"});
    } else {
        elementos.push(
            {name:"Registro", path: "/register"},
            {name: "Login", path: "/login"}
        );
    }

    return (
        <nav>
        <ul className="main-nav">
            {
                elementos.map((elemento, idx) => (
                    <li
                        key={elemento.name + idx}
                        className={
                            elemento.name === "Registro" || elemento.name == "Login"
                            ? "nav-item ml-auto" : "nav-item"}
                    >
                        <Link to={elemento.path}>{elemento.name}</Link>
                    </li>
                ))
            }
        </ul>
        </nav>
    )
}
export default Menu
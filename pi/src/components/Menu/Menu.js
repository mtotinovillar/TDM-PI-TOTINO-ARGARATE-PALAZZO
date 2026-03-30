import React from "react";
import './menu.css';
import {Link} from 'react-router-dom';


function Menu() {
    let elementos = [{
        name: "Home",
        path: "/"
    },
    {
        name: "Películas",
        path: "/Peliculas"
    },
    {
        name: "Series",
        path: "/Series"
    },
     {
        name: "Favoritas",
        path: "/Favoritos"
    },
 {
        name: "Registro",
        path: "/Register"
    },
 {
        name: "Login",
        path: "/Login"
    }];

    return (
        <nav>
        <ul className="main-nav">
            {
                elementos.map((elemento, idx) => (
                    <li
                        key={elemento.name + idx}
                        className={elemento.name === "Registro" ? "nav-item ml-auto" : "nav-item"}
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
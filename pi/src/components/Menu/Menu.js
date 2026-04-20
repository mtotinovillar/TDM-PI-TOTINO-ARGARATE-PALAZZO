import React from "react";
import './menu.css';
import { Link } from 'react-router-dom';

function Menu(props) {

    let elementos = [
        { name: "Home", path: "/" },
        { name: "Películas", path: "/Peliculas" },
        { name: "Series", path: "/Series" }
    ];

    if (props.sesion) {
        elementos.push(
            { name: "Favoritas", path: "/favoritos" },
            { name: "Logout", path: "/logout" });

        console.log("sesion:", props.sesion);
    } else {
        elementos.push(
            { name: "Registro", path: "/register" },
            { name: "Login", path: "/login" }
        );
    }

    return (
            <ul className="main-nav">
                {
                    elementos.map((elemento, idx) => (
                        <li
                            key={elemento.name + idx}
                            className={
                                elemento.name === "Registro" || elemento.name === "Logout"
                                    ? "nav-item ml-auto"
                                    : "nav-item"
                            }
                        >
                            <Link to={elemento.path}>{elemento.name}</Link>
                        </li>
                    ))
                }
            </ul>
    );
}

export default Menu;
import React from "react";
import { useState, useEffect } from "react";
import './menu.css';
import { Link } from 'react-router-dom';

function Menu(props) {
    const base = [
        { name: "Home", path: "/" },
        { name: "Películas", path: "/Peliculas" },
        { name: "Series", path: "/Series" }]
    const [elementos, setElementos] = useState([])

    useEffect(() => {
        if (props.sesion) {
            setElementos([
                ...base,
                { name: "Favoritas", path: "/favoritos" },
                { name: "Logout", path: "/logout" }

            ])
        } else {
            setElementos([
                ...base,
                { name: "Registro", path: "/register" },
                { name: "Login", path: "/login" }
            ]);
        }
    }, [props.sesion]);

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
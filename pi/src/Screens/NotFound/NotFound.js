import React from "react";
import "./notFound.css";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="notfound">
            <h1 className="notfound-titulo">404</h1>
            <h2 className="notfound-subtitulo">Contenido inexistente</h2>
            <p className="notfound-texto">
                La página que intentaste buscar no existe.
            </p>

            <Link to="/" className="notfound-link">
                Volver al inicio
            </Link>
        </div>
    );
}

export default NotFound;
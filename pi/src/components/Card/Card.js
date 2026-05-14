import { useState, useEffect } from 'react';
import "./card.css";
import { Route, Link } from 'react-router-dom';
import Favs from "../Favs/Favs"

function Card(props) {
    const [verMas, setVerMas] = useState([false]);

    function mostrarInfo() {
        setVerMas({
            verMas: !this.state.verMas
        });
    }

    return (
        <article className="single-card-movie">
            <img
                className="card-img-top"
                src={"https://image.tmdb.org/t/p/w342/" + props.imagen} alt={props.titulo} />
            <div className="cardBody">
                <div className="titulo-favorito">
                    <h5 className="card-title">{props.titulo}</h5>
                    <Favs id={props.id} tipo={props.tipo} />
                </div>

                {verMas ? <p className="descripcion">{props.descripcion}</p> : ""}

                <button className="btn-descripcion" onClick={() => this.mostrarInfo()}>
                    {verMas ? "Ocultar descripción" : "Ver descripción"}
                </button>

                <Link to={`/Detalle/${props.tipo}/${props.id}`} className="btn btn-primary">Ir a detalle</Link>

            </div>
        </article>
    );
}


export default Card;

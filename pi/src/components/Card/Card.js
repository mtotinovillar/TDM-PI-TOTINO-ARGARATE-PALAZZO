import React, { Component } from "react";
import "./card.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <article className="single-card-movie">
                <img
                    className="card-img-top"
                    src={"https://image.tmdb.org/t/p/w342/" + this.props.imagen} alt={this.props.titulo} />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <p className = "card-text">{this.props.descripcion}</p> 
                    <button className="btn btn-primary" onClick={() => this.mostrarInfo}>Ver más</button>
                </div>
            </article>
        );
    }
}

export default Card;


/*
falta: 
Link o botón “ir a detalle” para navegar hasta la página de detalle del elemento.
Link, botón o ícono "agregar / quitar de favoritos", solamente disponible si la cookie de sesión existe.
*/
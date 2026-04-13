import React, { Component } from "react";
import "./card.css";
import { Route, Link } from 'react-router-dom';
import Favs from "../Favs/Favs";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verMas: false
        };
    }

    mostrarInfo() {
        this.setState({
            verMas: !this.state.verMas
        });
    }

    render() {
        return (
            <article className="single-card-movie">
                <img
                    className="card-img-top"
                    src={"https://image.tmdb.org/t/p/w342/" + this.props.imagen} alt={this.props.titulo} />
                <div className="cardBody">
                    <div className="titulo-favorito">
                        <h5 className="card-title">{this.props.titulo}</h5>
                        <Favs id={this.props.id} tipo={this.props.tipo}/>
                    </div>

                    {this.state.verMas ? <p className="descripcion">{this.props.descripcion}</p> : ""}

                    <button className="btn-descripcion" onClick={() => this.mostrarInfo()}>
                        {this.state.verMas ? "Ocultar descripción" : "Ver descripción"}
                    </button>
                   
                    <Link to={`/Detalle/${this.props.tipo}/${this.props.id}`} className="btn btn-primary">Ir a detalle</Link>
                     
                </div>
            </article>
        );
    }
}

export default Card;

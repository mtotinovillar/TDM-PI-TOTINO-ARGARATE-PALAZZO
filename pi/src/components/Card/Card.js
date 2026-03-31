import React, { Component } from "react";

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
      <article className="card">
        <img
          className="imagen"
          src={"https://image.tmdb.org/t/p/w342/" + this.props.imagen} alt={this.props.titulo}
        />

        <h2 className="titulo">{this.props.titulo}</h2>

        {this.state.verMas ? <p>{this.props.descripcion}</p> : null}

        <button className="more" onClick={() => this.mostrarInfo}>
          {this.state.verMas ? "Ver menos" : "Ver más"}
        </button>
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
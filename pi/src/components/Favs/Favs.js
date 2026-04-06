import React, { Component } from "react";
import "../Favs/favs.css"

class Favs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esFav: false
    };
  }

  agregarFav(id) {
    let storage = localStorage.getItem("favPelis");
    let storageParseado = JSON.parse(storage);

    if (storageParseado === null) {
      let primerValor = [id];
      let primerValorString = JSON.stringify(primerValor);
      localStorage.setItem("favPelis", primerValorString);
    } else {
      storageParseado.push(id);
      let storageString = JSON.stringify(storageParseado);
      localStorage.setItem("favPelis", storageString);
    }

    this.setState({ esFav: true });
  }

  render() {
    return (
      <div>
        <button className= "favorito" onClick={() => this.agregarFav(this.props.id)}>
          ♥
        </button>
      </div>
    );
  }
}

export default Favs;
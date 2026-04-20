import React, { Component } from "react";
import "../Favs/favs.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Favs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esFav: false
    };
  }



  componentDidMount() {
    let clave = this.props.tipo === "movie" ? "favPelis" : "favSeries";
    let storage = localStorage.getItem(clave);
    let storageParseado = JSON.parse(storage);
  
    if (storageParseado !== null) {
      let existe = storageParseado.filter(elemento => elemento == (this.props.id));
  
      if (existe.length > 0) {
        this.setState({
          esFav: true
        });
      }
    }
  }

  agregarFav(id) {

    let clave = this.props.tipo === "movie" ? "favPelis" : "favSeries";
    let storage = localStorage.getItem(clave)
    let storageParseado = JSON.parse(storage);

    if (storageParseado === null) {
      let primerValor = [id];
      let primerValorString = JSON.stringify(primerValor);
      localStorage.setItem(clave, primerValorString);
    } else {
      storageParseado.push(id);
      let storageString = JSON.stringify(storageParseado);
      localStorage.setItem(clave, storageString);
    }

    this.setState({ esFav: true });
  }

  sacarFav(id) {
    let clave = this.props.tipo === "movie" ? "favPelis" : "favSeries";
    let storage = localStorage.getItem(clave);
    let storageParseado = JSON.parse(storage);

    if (storageParseado !== null) {
      let storageFiltrado = storageParseado.filter(elemento => elemento !== id);
      let storageString = JSON.stringify(storageFiltrado);
      localStorage.setItem(clave, storageString);
    }

    this.setState({ esFav: false });
  }

  render() {

    console.log(this.props);
    

    let sesion = cookies.get("user-auth-cookie");

    if (!sesion) {
      return null;
    }

    return (
      <button
        className={this.state.esFav ? "favorito activo" : "favorito"}
        onClick={() =>
          this.state.esFav
            ? this.sacarFav(this.props.id)
            : this.agregarFav(this.props.id)
        }
      >
        ♥
      </button>

    );
  }
}

export default Favs;

import React, {Component} from "react";
import './buscador.css';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
        busqueda: ""
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState({
        busqueda: event.target.value
    });
  }

  render() {
    return (
     <form className= "search-form" onSubmit={(event)=>this.evitarSubmit(event)}>
       <input 
        type="text" 
        name= "busqueda" 
        placeholder ="Buscar..."
        value={this.state.busqueda} 
        onChange={(event)=>this.controlarCambios(event)} 
        />
       <button class="btn btn-success btn-sm" type="submit">Buscar</button>
     </form>
    );
  }
}

export default Formulario
import React, {Component} from "react";
import './buscador.css';
import { withRouter } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
        search: ""
    };
  }

  evitarSubmit(event) {
    event.preventDefault()
    this.props.history.push(`/busqueda/${this.state.search}`)
  }

  controlarCambios(event) {
    this.setState(
      {search: event.target.value},
      () => console.log('log desde el setState extendidos:',this.setState.search)
      );
  }

  render() {
    return (
     <form className= "search-form" onSubmit={(event)=>this.evitarSubmit(event)}>
       <input 
        type="text" 
        name= "busqueda" 
        placeholder ="Buscar..."
        value={this.state.search} 
        onChange={(event)=>this.controlarCambios(event)} 
        />
       <button className="btn btn-success btn-sm" type="submit">Buscar</button>
     </form>
    );
  }
}

export default withRouter (Buscador)
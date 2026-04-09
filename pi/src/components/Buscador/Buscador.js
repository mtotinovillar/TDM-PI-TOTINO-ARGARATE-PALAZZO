import React, {Component} from "react";
import './buscador.css';
import { withRouter } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
        search: "",
        tipo: "movie"
    };
  }

  evitarSubmit(event) {
    event.preventDefault()
    this.props.history.push(`/busqueda/${this.state.tipo}/${this.state.search}`)
  }

  controlarCambios(event) {
    this.setState(
      {search: event.target.value},
      () => console.log('state:',this.state.search)
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
        <select onChange = {(event)=> this.setState({tipo: event.target.value})}>
          <option value= "movie">Películas</option>
          <option value= "tv">Series</option>
        </select>
       <button className="btn btn-success btn-block" type="submit">Buscar</button>
     </form>
    );
  }
}

export default withRouter (Buscador)
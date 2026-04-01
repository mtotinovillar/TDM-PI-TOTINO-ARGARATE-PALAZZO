import React, {Component} from "react";

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
     <form onSubmit={(event)=>this.evitarSubmit(event)}>
       <label>Buscar:</label>
       <input 
        type="text" 
        name= "busqueda" 
        value={this.state.busqueda} 
        onChange={(event)=>this.controlarCambios(event)} 
        />
       <button type="submit">Buscar</button>
     </form>
    );
  }
}

export default Formulario
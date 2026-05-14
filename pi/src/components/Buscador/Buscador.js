import { useState, useEffect, useRef, useContext, use } from "react";
import './buscador.css';
import { withRouter } from "react-router-dom";

function Buscador (props) {
  
  const [search, setSearch] = useState("");
  const [tipo, setTipo] = useState("movie");
  
  
  

  function evitarSubmit(event) {
    event.preventDefault()
    props.history.push(`/busqueda/${tipo}/${search}`)
  }

  function controlarCambios(event) {
    search(
      { search: event.target.value },
      () => console.log('state:', search)
    );
  }

 
    return (
      <form className="search-form" onSubmit={(event) => evitarSubmit(event)}>
        <input
          type="text"
          name="busqueda"
          placeholder="Buscar..."
          value={search}
          onChange={(event) => controlarCambios(event)}
        />
        <select onChange={(event) => tipo({ tipo: event.target.value })}>
          <option value="movie">Películas</option>
          <option value="tv">Series</option>
        </select>
        <button className="btn btn-success btn-block" type="submit">Buscar</button>
      </form>
    );
  }


export default withRouter(Buscador)
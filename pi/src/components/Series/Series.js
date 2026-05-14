import Card from "../Card/Card";
import "./Series.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext, use } from "react";

function Series(props) {

    const [datos, setDatos] = useState([]);
    const [urlApi, setUrlApi] = useState("https://api.themoviedb.org/3/trending/tv/week?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d");


useEffect(() => {
    fetch(urlApi)
        .then(response => response.json())
        .then(data => setDatos(data.results))
        .catch(error => console.log("error"))
}, [urlApi])



return (
    <div>
        <div className="titulo-peliculas">
            <h2 className="titulo-series"> Popular TV shows this week</h2>
            <Link to="/Series" className="ver-todas">Ver todas las Series</Link>
        </div>
        <section className="row cards" id="movies">
            {datos.length === 0 ? <h3> Cargando...</h3> : datos.filter((movie, i) => i < 4).map(
                (movie) => (
                    <Card
                        key={movie.id}
                        imagen={movie.poster_path}
                        titulo={movie.name}
                        descripcion={movie.overview}
                        id={movie.id}
                        tipo="tv"
                    />))
            }
        </section>
    </div>
)

}

export default Series


import React, {Component} from "react";
import Card from "../Card/Card";
import "./peliculas.css";
import { Link } from "react-router-dom";

class Peliculas extends Component{
    constructor(props){
        super(props)
        this.state = {
            datos: [],
            urlApi: "https://api.themoviedb.org/3/movie/popular?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d"
        }
    }

    componentDidMount() {
    fetch (this.state.urlApi)
    .then(response => response.json())
    .then (data => this.setState({
        datos: data.results

    }))

    .catch(error => console.log ("error"))
    }

    render() {
        return(
            <div>
                <div className="titulo-peliculas">
                <h2 className = "alert alert-primary"> Popular movies this week</h2>
                <Link to="/Peliculas" className="ver-todas">Ver todas las películas</Link>
                </div>

                <section className = "row cards" id = "movies">
                    {this.state.datos.length === 0 ? <h3> Cargando...</h3> : this.state.datos.filter((movie, i) => i < 4).map(
                        (movie) => (
                            <Card
                                key = {movie.id}
                                imagen = {movie.poster_path}
                                titulo = {movie.title}
                                descripcion = {movie.overview}
                                id = {movie.id}
                            />))
                    }
                </section>
            </div>
        )
    }

}



export default Peliculas


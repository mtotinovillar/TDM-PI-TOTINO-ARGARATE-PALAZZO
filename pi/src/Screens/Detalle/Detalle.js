import React, { Component } from 'react';
import Favs from "../../components/Favs/Favs"


class Detalle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: Number(this.props.match.params.id),
            tipo: this.props.match.params.tipo,
            datos: ''
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/${this.state.tipo}/${this.state.id}?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    datos: data
                }
            ))
            .catch(error => console.log(error));
    }

    render() {
        const esPelicula = this.state.tipo === "movie";
        return (
            this.state.datos === '' ? (<h3>Cargando...</h3>) :
                (<>
                    <h2 className="alert alert-primary">
                        {esPelicula ? this.state.datos.title : this.state.datos.name}
                    </h2>

                    <section className="row">
                        <img className="col-md-6"
                            src={`https://image.tmdb.org/t/p/w500${this.state.datos.poster_path}`}
                            alt={esPelicula ? this.state.datos.title : this.state.datos.name} />

                        <section className="col-md-6 info">
                            <h3> Descripción</h3>

                            <p className="description">{this.state.datos.overview}</p>

                            <p>
                                <strong>Fecha de estreno: </strong>
                                {esPelicula ? this.state.datos.release_date : this.state.datos.first_air_date}
                            </p>

                            {esPelicula ? (
                                <p>
                                    <strong>Duración:</strong> {this.state.datos.runtime} min
                                </p>) : null}

                            <p>
                                <strong> Puntuación:</strong> {this.state.datos.vote_average} ⭐ </p>

                            <p>
                                <strong>Géneros: </strong>
                                {this.state.datos.genres.map((genero, i) =>
                                    i === 0 ? genero.name : ", " + genero.name
                                )}
                            </p>
                            <div className="favoritos-container">
                                <span><strong>Agregar a favoritos: </strong></span>
                                <Favs id={this.state.id} tipo={this.state.tipo} />
                            </div>
                        </section>
                    </section>

                </>)
        )
    }
}

export default Detalle


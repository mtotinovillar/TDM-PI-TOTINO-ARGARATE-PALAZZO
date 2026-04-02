import React, { Component } from 'react';


class Detalle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            datos: ''
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    datos: data
                }
            ))
            .catch(error => console.log(error));
    }

    render() {
        return (
            this.state.datos === '' ? (<h3>Cargando...</h3>) :
                (<>
                    <h2 className="alert alert-primary">{this.state.datos.title}</h2>
                    <section className="row">
                        <img className="col-md-6" src={`https://image.tmdb.org/t/p/w500${this.state.datos.poster_path}`} alt={this.state.datos.title} />
                        <section className="col-md-6 info">
                            <h3> Descripción</h3>
                            <p className="description">{this.state.datos.overview}</p>
                            <p> <strong>Fecha de estreno:</strong> {this.state.datos.release_date}</p>
                            <p><strong> Duración:</strong> {this.state.datos.runtime}</p>
                            <p><strong> Puntuación:</strong> {this.state.datos.vote_average}</p>
                        </section>
                    </section>

                </>)
        )
    }
}

export default Detalle


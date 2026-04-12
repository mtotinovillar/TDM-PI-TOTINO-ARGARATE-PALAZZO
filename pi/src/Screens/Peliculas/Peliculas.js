import React, { Component } from "react";
import Card from "../../components/Card/Card";
import "./peliculas.css";


class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            page: 1
        }
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d&page=1')
            .then(response => response.json())
            .then(data => this.setState(
                {
                    datos: data.results,
                }
            ))
            .catch(error => console.log(error));
    }
    cargarMas = () => {
        let nuevaPage = this.state.page + 1;
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d&page=${nuevaPage}`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    datos: this.state.datos.concat(data.results),
                    page: nuevaPage
                }
            ))
            .catch(error => console.log(error));

    }

    render() {
        return (
            <div >
                <h2 className="alert alert-primary">Todas las películas</h2>

                <form className="filter-form px-0 mb-3" onSubmit={(event) => this.evitarSubmit(event)}>
                    <input
                        type="text"
                        name="busqueda"
                        placeholder="Buscar dentro de la lista"
                        value={this.state.search}
                        onChange={(event) => this.controlarCambios(event)}
                    />
                </form>

                <button onClick={this.cargarMas} className="cargarMas">Cargar más </button>

                <section className="row cards" >
                    {this.state.datos.length === 0 ?
                        <h3>Cargando...</h3> :
                        this.state.datos.map((movie) => (

                            <Card
                                imagen={movie.poster_path}
                                titulo={movie.title}
                                descripcion={movie.overview}
                                id={movie.id}
                                tipo = "movie"
                            />

                        ))
                    }
                </section>
            </div>
        )
    }
}


export default Peliculas
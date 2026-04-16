import React, { Component } from "react";
import Card from "../../components/Card/Card";
import "./peliculas.css";
import Filtro from "../../components/Filtro/Filtro";


class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            backup: [],
            page: 1,
            noResultados: false
        }
    }

    filtrarCard(texto) {
        const datosFiltrados = this.state.backup.filter((elemento) =>
            elemento.title.toLowerCase().includes(texto.toLowerCase())

        )

        this.setState({ 
            datos: datosFiltrados, noResultados: datosFiltrados.length === 0
        })
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d&page=1')
            .then(response => response.json())
            .then(data => this.setState(
                {
                    datos: data.results,
                    backup: data.results
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
                    backup: this.state.datos.concat(data.results),
                    page: nuevaPage
                }
            ))
            .catch(error => console.log(error));

    }

    render() {
        return (
            <div >
                <h2 className="alert alert-primary">Todas las películas</h2>

                <Filtro tipo="movie" filtrarCard={(texto) => this.filtrarCard(texto)} />

                

                <section className="row cards" >
                    {this.state.noResultados ? ( 
                        <h3>No hay resultados</h3> 
                    ): ( 
                        this.state.datos.map((movie) => (

                            <Card
                                imagen={movie.poster_path}
                                titulo={movie.title}
                                descripcion={movie.overview}
                                id={movie.id}
                                tipo = "movie"
                            />
                            
                        ))
                    )}
                </section>

                <button onClick={this.cargarMas} className="cargarMas">Cargar más </button>
                
            </div>
        )
    }
}


export default Peliculas
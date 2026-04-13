import React, { Component } from "react";
import Card from "../../components/Card/Card";
import "./series.css";
import Filtro from "../../components/Filtro/Filtro";


class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            backup: [],
            page: 1
        }
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d&page=1')
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
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d&page=${nuevaPage}`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    datos: this.state.datos.concat(data.results),
                    backup: this.state.backup.concat(data.results),
                    page: nuevaPage
                }
            ))
            .catch(error => console.log(error));

    }

    filtrarCard(texto) {
        const datosFiltrados = this.state.backup.filter((elemento) =>
            elemento.name.toLowerCase().includes(texto.toLowerCase())
        )

        this.setState({ datos: datosFiltrados })
    }

    render() {
        return (
            <div >
                <h2 className="alert alert-warning">Todas las series</h2>


               <Filtro tipo="tv" filtrarCard={(texto) => this.filtrarCard(texto)} />

                <section className="row cards" >
                    {this.state.datos.length === 0 ?
                        <h3>Cargando...</h3> :
                        this.state.datos.map((serie) => (
                            <Card
                                imagen={serie.poster_path}
                                titulo={serie.name}
                                descripcion={serie.overview}
                                id={serie.id}
                                tipo = "tv"
                            />

                            

                        ))

                        
                    }
                </section>
                <button onClick={this.cargarMas} className="cargarMasss">Cargar más </button>
            </div>
        )
    }
}


export default Series
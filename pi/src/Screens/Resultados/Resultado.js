import React, { Component } from 'react';
import Card from "../../components/Card/Card";

class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: []
        };
    }
    componentDidMount() {
        const tipo = this.props.match.params.tipo;
        const query = this.props.match.params.busqueda;

        fetch(`https://api.themoviedb.org/3/search/${tipo}?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d&query=${query}`)
            .then(response => response.json())
            .then(data => this.setState({
                resultados: data.results
            }))
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <h2>Resultados de: {this.props.match.params.busqueda}</h2>

                <section className="row cards">
                    {this.state.resultados.length === 0 ? (
                        <h3>Cargando...</h3>
                    ) : (
                        this.state.resultados.map((item, i) => (
                            <Card
                                key={i}
                                imagen={item.poster_path}
                                titulo={this.props.match.params.tipo === "movie" ? item.title : item.name}
                                descripcion={item.overview}
                                id={item.id}
                                tipo={this.props.match.params.tipo}
                            />
                        ))
                    )}
                </section>

            </div>
        )
    }
}
export default Resultados
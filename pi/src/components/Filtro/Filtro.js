import React, { Component } from "react";
import "./filtro.css";

class Filtro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verMas: false,
            search: [],
            noResultados: false
        };
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {
        const texto = event.target.value;

        this.setState(
            { search: texto },
            () => {
                if (this.props.filtrarCard) {
                    this.props.filtrarCard(texto);
                }
            }
        );
    }

    render() {
        return (
            <div className="filtro">
                <form className="search-form" onSubmit={(event) => this.evitarSubmit(event)}>
                    <input
                        type="text"
                        name="busqueda"
                        placeholder={`Filtrar ${this.props.tipo}`}
                        value={this.state.search}
                        onChange={(event) => this.controlarCambios(event)}
                    />
                </form>
            </div>
        );
    }
}

export default Filtro;
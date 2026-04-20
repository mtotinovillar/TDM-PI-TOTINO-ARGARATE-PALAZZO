import React, { Component } from "react";
import Favs from "../../components/Favs/Favs"
import Card from "../../components/Card/Card";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFav: [],
            seriesFav: [],
            autorizado: false
        };
    }

    componentDidMount() {
        let sesion = cookies.get("user-auth-cookie");

        if (!sesion) {
            this.props.history.push("/login");
            return;
        }

        let pelisStorage = localStorage.getItem("favPelis");
        let seriesStorage = localStorage.getItem("favSeries");

        let pelisParseadas = pelisStorage ? JSON.parse(pelisStorage) : [];
        let seriesParseadas = seriesStorage ? JSON.parse(seriesStorage) : [];

        this.setState({ autorizado: true });

        let peliculasFav = [];

        pelisParseadas.map(id =>
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d`)
                .then(response => response.json())
                .then(data => {

                    peliculasFav.push(data);

                    this.setState({
                        peliculasFav: peliculasFav
                    });
                })
                .catch(error => console.log(error))
        );

        const seriesFav = [];

        seriesParseadas.map(id =>
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d`)
                .then(response => response.json())
                .then(data => {

                    seriesFav.push(data);

                    this.setState({
                        seriesFav: seriesFav
                    });
                })
                .catch(error => console.log(error))
        );
    }

    render() {

        return (
            <div>
                <h2>Películas favoritas</h2>
                <section className="row cards">
                    {this.state.peliculasFav.length === 0 ? (
                        <p>No hay películas favoritas</p>
                    ) : (
                        this.state.peliculasFav.map(movie => (
                            <Card
                                key={movie.id}
                                imagen={movie.poster_path}
                                titulo={movie.title}
                                descripcion={movie.overview}
                                id={movie.id}
                                tipo="movie"
                            />
                        ))
                    )}
                </section>

                <h2>Series favoritas</h2>
                <section className="row cards">
                    {this.state.seriesFav.length === 0 ? (
                        <p>No hay series favoritas</p>
                    ) : (
                        this.state.seriesFav.map(serie => (
                            <Card
                                key={serie.id}
                                imagen={serie.poster_path}
                                titulo={serie.name}
                                descripcion={serie.overview}
                                id={serie.id}
                                tipo="tv"
                            />
                        ))
                    )}
                </section>
            </div>
        );
    }
}

export default Favoritos;
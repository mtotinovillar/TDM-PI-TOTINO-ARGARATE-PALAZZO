import { useState, useEffect, useRef, useContext, use } from "react";
import Card from "../../components/Card/Card";

function Resultados(props) {
    const [resultados, setResultados] = useState([]);
    const [cargando, setCargando] = useState(true);



    useEffect(() => {
        const query = props.match.params.busqueda
        const tipo = props.match.params.tipo
        fetch(`https://api.themoviedb.org/3/search/${tipo}?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d&query=${query}`)
            .then(response => response.json())
            .then(data => setResultados(data.results))
            .catch(error => {
                console.log(error)
                setResultados([])
            }, setCargando(false))
})





        return (
            <div>
                <h2>Resultados de: {props.match.params.busqueda}</h2>

                <section className="row cards">
                    {this.state.cargando ? (
                        <h3>Cargando...</h3>
                    ) : resultados.length > 0 ? (
                        resultados.map((item, i) => (
                            <Card
                                key={i}
                                imagen={item.poster_path}
                                titulo={props.match.params.tipo === "movie" ? item.title : item.name}
                                descripcion={item.overview}
                                id={item.id}
                                tipo={props.match.params.tipo}
                            />
                        ))
                    ) : (
                        <h3>No se encontraron resultados para "{this.props.match.params.busqueda}"</h3>
                    )}
                </section>

            </div>
        )
    }


export default Resultados
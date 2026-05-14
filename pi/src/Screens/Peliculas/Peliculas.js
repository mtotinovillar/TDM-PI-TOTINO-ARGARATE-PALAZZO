import { useState, useEffect } from 'react';
import Card from "../../components/Card/Card";
import "./peliculas.css";
import Filtro from "../../components/Filtro/Filtro";

function Peliculas(props) {
    const [datos, setDatos] = useState([]);
    const [backup, setBackup] = useState([]);
    const [page, setPage] = useState(1);
    const [noResultados, setNoResultados] = useState(false);

    function filtrarCard(texto) {
        const datosFiltrados = backup.filter((elemento) =>
            elemento.title.toLowerCase().includes(texto.toLowerCase())

        )
        setDatos(datosFiltrados);
        setNoResultados(datosFiltrados.length === 0)
    }



    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d&page=1')
            .then(response => response.json())
            .then(data => {
                setDatos(data.results);
                setBackup(data.results);
            })
            .catch(error => console.log(error));
    }, [])
    const cargarMas = () => {
        let nuevaPage = page + 1;
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=58a3f6c11dcbcb7cce9ae7dea3f91e3d&page=${nuevaPage}`)
            .then(response => response.json())
            .then(data => {
                setDatos(datos.concat(data.results));
                setBackup(datos.concat(data.results));
                setPage(nuevaPage);
            })
            .catch(error => console.log(error));

    }


    return (
        <div >
            <h2 className="alert alert-primary">Todas las películas</h2>

            <Filtro tipo="movie" filtrarCard={(texto) => filtrarCard(texto)} />



            <section className="row cards" >
                {noResultados ? (
                    <h3>No hay resultados</h3>
                ) : (
                    datos.map((movie) => (

                        <Card
                            imagen={movie.poster_path}
                            titulo={movie.title}
                            descripcion={movie.overview}
                            id={movie.id}
                            tipo="movie"
                        />

                    ))
                )}
            </section>

            <button onClick={cargarMas} className="cargarMas">Cargar más </button>

        </div>
    )
}



export default Peliculas
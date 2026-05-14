import { useState, useEffect, useRef, useContext, use } from "react";
import "./filtro.css";

    function Filtro (props){
        const [search, setSearch] = useState([]);
        const [verMas, setVerMas] = useState(false);
        const [noResultados, setNoResultados] = useState(false);
            
        

    function evitarSubmit(event) {
        event.preventDefault();
    }

    function controlarCambios(event) {
        const texto = event.target.value;

        setSearch(
            { search: texto },
            () => {
                if (props.filtrarCard) {
                    props.filtrarCard(texto);
                }
            }
        );
    }

    
        return (
            <div className="filtro">
                <form className="search-form" onSubmit={(event) => evitarSubmit(event)}>
                    <input
                        type="text"
                        name="busqueda"
                        placeholder={`Filtrar ${props.tipo}`}
                        value={search}
                        onChange={(event) => controlarCambios(event)}
                    />
                </form>
            </div>
        );
    }

export default Filtro;
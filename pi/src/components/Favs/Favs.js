import { useState, useEffect } from 'react';
import "../Favs/favs.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Favs(props) {
  const [esFav, setEsFav] = useState([false])

  useEffect(() => {
    let clave = props.tipo === "movie" ? "favPelis" : "favSeries";
    let storage = localStorage.getItem(clave);
    let storageParseado = JSON.parse(storage);

    if (storageParseado !== null) {
      let existe = storageParseado.filter(elemento => elemento == (props.id));

      if (existe.length > 0) {
        setEsFav({
          esFav: true
        });
      }
    }
  })

  function agregarFav(id) {

    let clave = props.tipo === "movie" ? "favPelis" : "favSeries";
    let storage = localStorage.getItem(clave)
    let storageParseado = JSON.parse(storage);

    if (storageParseado === null) {
      let primerValor = [id];
      let primerValorString = JSON.stringify(primerValor);
      localStorage.setItem(clave, primerValorString);
    } else {
      storageParseado.push(id);
      let storageString = JSON.stringify(storageParseado);
      localStorage.setItem(clave, storageString);
    }

    setEsFav({ esFav: true });
  }

  function sacarFav(id) {
    let clave = props.tipo === "movie" ? "favPelis" : "favSeries";
    let storage = localStorage.getItem(clave);
    let storageParseado = JSON.parse(storage);

    if (storageParseado !== null) {
      let storageFiltrado = storageParseado.filter(elemento => elemento !== id);
      let storageString = JSON.stringify(storageFiltrado);
      localStorage.setItem(clave, storageString);
    }

    setEsFav({ esFav: false });
  }


  console.log(this.props);


  let sesion = cookies.get("user-auth-cookie");

  if (!sesion) {
    return null;
  }
  return (


    <button
      className={esFav ? "favorito activo" : "favorito"}
      onClick={() =>
        esFav
          ? this.sacarFav(props.id)
          : this.agregarFav(props.id)
      }
    >
      ♥
    </button>

  );
}


export default Favs;

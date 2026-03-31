import React from "react";

function Card(props) {
  return (
    <article className="card">
      <img className="imagen"
        src={"https://image.tmdb.org/t/p/w342/" + props.imagen}  alt={props.titulo} />

  <h2 className="titulo">{props.titulo}</h2>

      <p>{props.descripcion}</p>

    

    </article>

  );
}

export default Card;


/*
falta: 
Link o botón "ver descripción" que debe mostrar/ ocultar la descripción.
Link o botón “ir a detalle” para navegar hasta la página de detalle del elemento.
Link, botón o ícono "agregar / quitar de favoritos", solamente disponible si la cookie de sesión existe.
*/
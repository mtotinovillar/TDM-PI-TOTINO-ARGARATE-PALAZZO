import React from "react";
import Peliculas from "../../components/Peliculas/Peliculas";
import Buscador from "../../components/Buscador/Buscador";
import Series from "../../components/Series/Series";

function Home() {
  return (
    <>
    
      <Buscador />
      <Peliculas />
      <Series />

    </>
  );
}

export default Home;
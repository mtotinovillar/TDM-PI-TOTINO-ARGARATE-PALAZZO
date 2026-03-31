import React from "react";
import Header from "./components/Header/Header";
import Home from "./Screens/Home/Home";
import Detalles from "./Screens/Detalles/Detalles";
import Favoritos from "./Screens/Favoritos/Favoritos";
import Login from "./Screens/Login/Login";
import Registro from "./Screens/Register/Register";
import Footer from "./components/Footer/Footer"
import Peliculas from "./Screens/Peliculas/Peliculas";
import Series from "./Screens/Series/Series";
import NotFound from "./Screens/NotFound/NotFound";
import {Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Footer/>
   </React.Fragment>

  );
}

export default App;

import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Home from "./Screens/Home/Home";
import Detalle from "./Screens/Detalle/Detalle";
import Favoritos from "./Screens/Favoritos/Favoritos";
import Log_in from "./Screens/Log_in/Log_in";
import Registro from "./Screens/Registro/Registro";
import Series from "./Screens/Series/Series";
import NotFound from "./Screens/NotFound/NotFound";
import { Route, Link, Switch } from 'react-router-dom';
import Resultados from './Screens/Resultados/Resultado';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/register" component={Registro} />
          <Route path="/login" component={Log_in} />
          <Route path="/detalle/:tipo/:id" component={Detalle} />
          <Route path = "/busqueda/:busqueda" component={Resultados}/>
        </Switch>
      </div>

      <Footer />
    </React.Fragment>

  );
}

export default App;

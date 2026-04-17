import React, {Component} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Home from "./Screens/Home/Home";
import Detalle from "./Screens/Detalle/Detalle";
import Favoritos from "./Screens/Favoritos/Favoritos";
import Log_in from "./Screens/Login/Login";
import Registro from "./Screens/Register/Register";
import Peliculas from "./Screens/Peliculas/Peliculas";
import Series from "./Screens/Series/Series";
import Logout from "./Screens/Logout/Logout";
import NotFound from "./Screens/NotFound/NotFound";
import { Route, Link, Switch } from 'react-router-dom';
import Resultados from './Screens/Resultados/Resultado';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      logeado: false
    }
  }

  actualizarSesion(valor) {
    this.setState({logeado: valor})
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header sesion={this.state.logeado} />
  
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/register" component={Registro} />
            <Route path="/login" >
              <Log_in actualizarSesion={(valor) => this.actualizarSesion(valor)}/>
            </Route>
            <Route path="/detalle/:tipo/:id" component={Detalle} />
            <Route path = "/busqueda/:tipo/:busqueda" component={Resultados}/>
            <Route path = "/favoritos" component={Favoritos}/>
            <Route path = "/Peliculas" component = {Peliculas}/>
            <Route path = "/Series" component = {Series}/>
            <Route path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </div>
  
        <Footer />
      </React.Fragment>
  
    );
  }
}

export default App;

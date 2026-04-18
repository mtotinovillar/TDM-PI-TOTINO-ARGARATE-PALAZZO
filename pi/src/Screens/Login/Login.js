import React, { Component } from "react";
import Cookies from "universal-cookie";
import { Link, withRouter } from "react-router-dom";
import "./login.css"
const cookies = new Cookies();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      aprobado: ""
    };
  }

  componentDidMount() {
    console.log('props login', this.props)
  }

  controlarCambios = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.setState({
      error: "",
      aprobado: ""
    });

    let usersStorage = localStorage.getItem("users");
    let users = usersStorage ? JSON.parse(usersStorage) : [];

    let userFiltrado = users.filter(user => user.email === this.state.email && user.password === this.state.password);

    if (userFiltrado.length === 0) {
      this.setState({
        error: "Credenciales incorrectas"
      });
      return;
    }

    cookies.set("user-auth-cookie", this.state.email);

    this.setState({
      aprobado: "Login correcto",
      email: "",
      password: ""
    });

    this.props.actualizarSesion(true)
    this.props.history.push("/");

  }

  render() {
    return (
      <div>
        <div>
          <h2 className="alert alert-primary">Login</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={this.onSubmit} >
              <div className="form-group">
                <label className="email">Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Ingresá tu email"
                  value={this.state.email}
                  onChange={this.controlarCambios}
                />
              </div>
              <div className="form-group">
                <label className="password">Contraseña</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Ingresá tu contraseña"
                  value={this.state.password}
                  onChange={this.controlarCambios}
                />
              </div>

              <button className="btn btn-primary btn-block" type="submit">Ingresar</button>

              {this.state.error !== "" ?
                <p>{this.state.error}</p>
                :
                null
              }

              {this.state.aprobado !== "" ?
                <p>{this.state.aprobado}</p>
                :
                null
              }
            </form>
            <p className="mt-3 text-center">¿No tenés cuenta?
              <Link to="/register" className="link">Registrate</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
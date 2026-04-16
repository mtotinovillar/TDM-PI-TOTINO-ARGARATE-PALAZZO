import React, { Component } from "react";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom";

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

  componentDidMount(){
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
      <div className="form-group">
        <h2>Login</h2>

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.controlarCambios}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.controlarCambios}
          />

          <button type="submit">Ingresar</button>

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
      </div>
    );
  }
}

export default withRouter(Login);
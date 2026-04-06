import React, { Component } from "react";

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

  evitarSubmit(event) {
    event.preventDefault();

    let { email, password } = this.state;

    this.setState({
      error: "",
      aprobado: ""
    });

    if (email === "" || password === "") {
      this.setState({
        error: "Credenciales incorrectas"
      });
      return;
    }

    let usuariosGuardados = localStorage.getItem("usuarios");
    let usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

    let validandoUsuario = false;

    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email === email && usuarios[i].password === password) {
        validandoUsuario = true;
      }
    }

    if (validandoUsuario !== true) {
      this.setState({
        error: "Credenciales incorrectas"
      });
      return;
    }

    this.setState({
      aprobado: "Login correcto",
      email: "",
      password: ""
    });
  }

    guardarEmail(event) {
    this.setState({
        email: event.target.value
    });
    }

    guardarPassword(event) {
    this.setState({
        password: event.target.value
    });
    }

  render() {
    return (
      <div>
         <p>Iniciar sesión</p>
        <form onSubmit={(event) => this.evitarSubmit(event)}>

          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={(event) => this.guardarEmail(event)}
          />

          <label>Contraseña: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={(event) => this.guardarPassword(event)}
          />

          <button type="submit">Login</button>
        </form>

      </div>
    );
  }
}

export default Login;
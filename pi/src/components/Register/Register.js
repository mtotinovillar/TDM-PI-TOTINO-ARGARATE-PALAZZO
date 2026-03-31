import React, {Component} from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        usuario: "",
        error: "",
        aprobado:""
    };
  }

  evitarSubmit(event) {
    event.preventDefault();

    let { email, password } = this.state;

    // limpiar mensajes anteriores
    this.setState({
    error: "",
    aprobado: "",
    })

    if (email === "" || password === "") {
        this.setState({
            error: "Todos los campos son obligatorios"
        })
        return
    }

    if (password.length < 6){
        this.setState({
            error: "La contraseña debe tener al menos 6 caracteres"
        })
        return
    }

   let usuariosGuardados = localStorage.getItem("usuarios")
   let usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : []

   let usuarioExistente = false
   for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            usuarioExistente = true
            
        }
    }

   if (usuarioExistente){
        this.setState({
            error: "Este email ya está registrado"
        });
        return
   }

   let agregarUsuario = {
        email: email,
        password: password
    }

    usuarios.push(agregarUsuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

  }

  guardarCambios(event) {
  this.setState({
    [event.target.name]: event.target.value
  });
}

  render() {
    return (
        <div>
            <p>Registrarse</p>
            <form onSubmit={(event)=>this.evitarSubmit(event)}>

                <label>Usuario: </label>
                <input
                    type="text"
                    name="usuario"
                    value={this.state.usuario}
                    onChange={(event) => this.guardarCambios(event)}
                />

                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={(event) => this.guardarCambios(event)}
                />

                <label>Contraseña: </label>
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={(event) => this.guardarCambios(event)}
                />

                <button type="submit">Registrarse</button>
            </form>
        </div>
     
    );
  }
}

export default Register
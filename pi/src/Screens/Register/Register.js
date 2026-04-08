import React, { Component } from "react";

class Register extends Component {
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
            aprobado: "",
        })

        if (email === "" || password === "") {
            this.setState({
                error: "Todos los campos son obligatorios"
            })
            return
        }

        if (password.length < 6) {
            this.setState({
                error: "La contraseña debe tener al menos 6 caracteres"
            })
            return
        }

        let usuariosGuardados = localStorage.getItem("usuarios")
        let usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : []

        let usuarioExistente = usuarios.filter(function (usuario) {
            return usuario.email === email;
        });

        if (usuarioExistente.length > 0) {
            this.setState({
                error: "Este email ya está registrado"
            });
            return;
        }

        let agregarUsuario = {
            email: email,
            password: password
        }

        usuarios.push(agregarUsuario)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        console.log("guardado:", localStorage.getItem("usuarios"))


        this.setState({
            email: "",
            password: "",
            aprobado: "Usuario registrado correctamente"
        })

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
            <div className="form-group">
                <h2>Registro</h2>
                <form onSubmit={(event) => this.evitarSubmit(event)}>

                    <label className="email">Email: </label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Ingresa tu mail"
                        value={this.state.email}
                        onChange={(event) => this.guardarEmail(event)}
                    />

                    <label className="password">Contraseña: </label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Ingresa tu contraseña"
                        value={this.state.password}
                        onChange={(event) => this.guardarPassword(event)}
                    />

                    <button className="btn btn-primary btn-block" type="submit">Registrarse</button>
                </form>

            </div>

        );
    }
}

export default Register
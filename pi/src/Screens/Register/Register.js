import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./register.css"
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            password: "",
            error: "",
        };
    }

    controlarCambios = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = (event) => {
        event.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password,

        };

        if (this.state.password.length < 6) {
            this.setState({ error: "La contraseña tener mínimo 6 caracteres" })
            return;
        };

        let usersStorage = localStorage.getItem("users");

        if (usersStorage !== null) {

            let usersParseado = JSON.parse(usersStorage);

            let usersFiltrado = usersParseado.filter(user => user.email === this.state.email);

            if (usersFiltrado.length > 0) {
                this.setState({ error: "Ya existe un usuario con el email ingresado" })
                return;
            }

            usersParseado.push(user);

            let usersEnJson = JSON.stringify(usersParseado);

            localStorage.setItem("users", usersEnJson);

        } else {

            let usersInicial = [user];

            let usersEnJson = JSON.stringify(usersInicial);

            localStorage.setItem("users", usersEnJson)

        }

        this.props.history.push("/login");
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className="alert alert-primary">Registrarse</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={this.submit} >
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
                            <button className="btn btn-primary btn-block" type="submit">Registrarse</button>

                            {this.state.error !== "" ?
                                <p>{this.state.error}</p>
                                :
                                null
                            }
                        </form>
                        <p className="mt-3 text-center">¿Ya tenés cuenta?
                            <Link to="/login" className="link">Iniciar sesión</Link>
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Register
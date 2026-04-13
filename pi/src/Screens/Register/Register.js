import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:"",
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

        let  user = {
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

        cookies.set("user-auth-cookie", this.state.email);
        this.props.history.push("/login");
    }



    


    render() {
        return (
            <div className="form-group">
                <h2>Register</h2>

                <form onSubmit={this.submit}>

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

                    <button type="submit">Registrarse</button>

                    {this.state.error !== "" ?
                        <p>{this.state.error}</p>
                        :
                        null
                    }

                </form>
                

            </div>

        );
    }
}

export default Register
import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Logout extends Component {

    componentDidMount() {
        cookies.remove("user-auth-cookie");

        this.props.history.push("/");
    }

    render() {
        return <p>Cerrando sesión...</p>;
    }
}

export default Logout;
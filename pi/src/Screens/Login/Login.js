import React, { Component } from "react";
import Cookies from "universal-cookie";

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


  

  render() {
    return (
      <div/>
    );
  }
}

export default Login;
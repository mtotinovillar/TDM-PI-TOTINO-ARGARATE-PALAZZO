import React, { Component } from "react";
import Menu from "../Menu/Menu";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sesion: cookies.get("user-auth-cookie")
        };
    }
    componentDidMount() {
        let sesion = cookies.get("user-auth-cookie");

        this.setState({
            sesion: sesion
        })
        console.log('header didMount')
    }

    componentDidUpdate() {
        console.log('header didUpdate')

        let sesion = cookies.get("user-auth-cookie");

        if (sesion !== this.state.sesion) {
            this.setState({
                sesion: sesion
            });
        }
    }

    render() {
        return (
            <>
                <h1>Udesa Movies</h1>
                <Menu sesion={this.state.sesion} />
            </>
        );
    }
}

export default Header;
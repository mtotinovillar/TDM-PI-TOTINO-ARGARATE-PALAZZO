import { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Header(props) {
    const [sesion, setSesion] = useState(cookies.get("user-auth-cookie"))

    useEffect(() => {
        let sesionCookie = cookies.get("user-auth-cookie")
        setSesion(sesionCookie)
        console.log("Header didMount")

    }, [])

    useEffect(() => {
        let sesionCookie = cookies.get("user-auth-cookie")
        if (sesion != sesionCookie) {
            setSesion(sesionCookie)
        }
    }, [sesion])

    return (
        <>
            <h1>Udesa Movies</h1>
            <nav>

                <Menu sesion={props.sesion} />

            </nav>
        </>
    );
}

export default Header
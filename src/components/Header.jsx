import { Link } from "react-router-dom";
import "../styles/header.css"

function Header() {
    return (
        <div className="header">
            <h1 className="headerTittle">Barbercite</h1>
            <ul className='headerMenu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/mis-citas" >Mis Citas</Link>
                </li>
                <li>
                    <Link to="/crear-citas">Crear cita</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
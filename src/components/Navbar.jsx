import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import md5 from 'md5';

const isLoggedIn = Cookies.get('isLoggedIn');

function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Restaurant</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            profile <i class="fa-solid fa-user"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-link" to="/profile">Profile</Link>
                            {
                                isLoggedIn ? (
                                    <Link className="dropdown-link" to="/logout">Logout</Link>
                                ) : (
                                    <Link className="dropdown-link" to="/login">Login</Link>
                                )
                            }
                            <Link className="dropdown-link" to="/register">Register</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}

export default Navbar;
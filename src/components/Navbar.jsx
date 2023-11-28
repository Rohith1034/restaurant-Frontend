import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const userId = Cookies.get("userId");

  const removeCookie = () => {
    Cookies.remove("userId");
    navigate("/");
  };

  const isLoggedIn = () => {
    console.log(Cookies.get("userId"));
    if (Cookies.get("userId") === undefined) {
      return <a className="nav-link" href="/login">Login</a>;
    } else {
      return (
        <a className="nav-link" href=" " onClick={() => removeCookie()}>
          Logout
        </a>
      );
    }
  };

  useEffect(() => {
    if (userId !== undefined) {
      navigate("/dashboard");
    }
  }, [navigate, userId]);

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
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        {isLoggedIn()}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/register'>Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}

export default Navbar;
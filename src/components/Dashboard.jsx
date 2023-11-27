import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"
import img3 from "../resources/img4.jpg"
import img4 from "../resources/img11.jpg"
import img6 from "../resources/img6.jpg"

function Dashboard() {

    const navigate = useNavigate();

    const isLogged = async () => {
        const userid = Cookies.get("userId");
        console.log(userid);
        if (userid === undefined) {
            navigate("/login")
        }
    }

    const handleLogout = () => {
        Cookies.remove('userId')
        navigate('/Login')
      }

    useEffect(() => {
        isLogged();
    }, []);

    return <div>
        <section id="nav">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                        <a className="nav-link" href="/" onClick={handleLogout}>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </section>
        <section id="carousel" className="caros">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img3} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={img6} className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    </div>


}

export default Dashboard;
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function DashboardNav() {

    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("userId");
        navigate("/");
    }

    return <section id="dashboard-nav">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginRight: "3%", display: "flex", justifyContent: "center" }} >
                        <li className="nav-item" style={{ marginRight: "50px" }}>
                            <a className="nav-link" style={{ fontSize: "22px" }} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item" style={{ marginRight: "50px" }}>
                            <a className="nav-link" style={{ fontSize: "22px" }} href="#categories">Menu</a>
                        </li>
                        <li className="nav-item" style={{ marginRight: "50px" }}>
                            <a className="nav-link" style={{ fontSize: "22px" }} href="/restaurant/register">Add Restaturant</a>
                        </li>
                        <li className="nav-item" style={{ marginRight: "20px" }}>
                            <a className="nav-link" style={{ fontSize: "22px" }} href="#contact">Contact us</a>
                        </li>

                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto" style={{ display: 'flex', alignItems: 'center' ,flexDirection:"row"}}>
                        <a href="user/wishlist"><i class="fa-solid fa-heart" style={{  marginTop: "9px" }}></i></a>
                        <div className="dropdown">
                            <a className="btn btn-sm dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-user"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="user/profile">Profile</a></li>
                                <li><a className="dropdown-item" href="/">Orders</a></li>
                                <li><a className="dropdown-item" href="/editprofile">Edit profile</a></li>
                                <li><a className="dropdown-item" href=" " onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
}

export default DashboardNav;
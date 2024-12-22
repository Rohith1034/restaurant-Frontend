import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DashboardNav() {

    const navigate = useNavigate();
    

    const handleLogout = () => {
        Cookies.remove("userId");
        navigate("/");
    }
    const sendData = async () => {
        try {
            const userId = Cookies.get("userId");
            const res = await axios.post("https://restaurant-backend-yubq.onrender.com/profiledata", { userId });
            if (res.status === 200) {
                navigate("/editprofile");
            } else {
                console.error("Unexpected response status:", res.status);
            }
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    const navigateTOWishlist = () => {
        navigate("/user/wishlist");
    }

    const navigateTORestaurant = () => {
        navigate("/restaurant/login")
    }
    
    const navigateToOrders =() => {
        navigate("/orders")
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
                            <a className="nav-link" style={{ fontSize: "22px" }} href="/restaurant/login" onClick={navigateTORestaurant}>About us</a>
                        </li>
                        <li className="nav-item" style={{ marginRight: "20px" }}>
                            <a className="nav-link" style={{ fontSize: "22px" }} href="#contact">Contact us</a>
                        </li>

                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto" style={{ display: 'flex', alignItems: 'center' ,flexDirection:"row"}}>
                        <a href="#" onClick={navigateTOWishlist}><i class="fa-solid fa-heart" style={{  marginTop: "9px" }}></i></a>
                        <div className="dropdown">
                            <a className="btn btn-sm dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-user"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="user/profile">Profile</a></li>
                                <li><a className="dropdown-item" href="/orders" >Orders</a></li>
                                <li><a className="dropdown-item" href="/editprofile" onClick={(e) => {
                                sendData();
                                }} >Edit profile</a></li>
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
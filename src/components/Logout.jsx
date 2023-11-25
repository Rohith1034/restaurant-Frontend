import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Home from "./Home";


function Logout() {
    Cookies.remove('isLoggedIn');
    const navigate = useNavigate();
    navigate("/");
    return <Home />;    
}

export default Logout;

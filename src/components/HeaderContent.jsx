import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function HeaderContent() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/dashboard");
    }

    const userId = Cookies.get("userId");

    return <div className="header-content">
<<<<<<< HEAD
        <h1 className="header-heading">Elevate Your Dining Experience at our Restaurant</h1>
=======
        <h1 className="header-heading">Elevate Your Dining Experience Here</h1>
>>>>>>> 54eeb39 (major commit)
        <div className="btn-container">
            <button className="btn" onClick={handleRedirect()}>Get started</button>
        </div>
    </div>
}

export default HeaderContent;

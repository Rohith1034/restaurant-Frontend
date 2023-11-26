import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HeaderContent() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/dashboard");
    }

    useEffect(() => {
        handleRedirect();
      }, []);

    return <div className="header-content">
        <h1 className="header-heading">Elevate Your Dining Experience at our Restaurant</h1>
        <div className="btn-container">
            <button className="btn" onClick={handleRedirect()}>Get started</button>
        </div>
    </div>
}

export default HeaderContent;

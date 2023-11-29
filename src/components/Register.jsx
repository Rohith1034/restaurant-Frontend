import "./CSS/Register.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";


function Register() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",

    });

    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const userId = Cookies.get("userId");
    useEffect(() => {
        if (userId !== undefined) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (data.password === data.confirmPassword) {
                //https://restaurant-backend-yubq.onrender.com/data
                const response = await axios.post("https://restaurant-backend-yubq.onrender.com/data", data);
                if (response.data.result === "Not Registered") {
                    setErrorMessage("Email alredy exist");
                }
                else {
                    navigate("/login");
                }

            } else {
                setErrorMessage("Passwords did not match!");
            }
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    return <div className="container">
        <div className="form-container">
            <h1 className="main-heading">Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-item">
                    <span className="item-heading">Name:</span>
                    <input className="input-box" type="text" placeholder="Enter name" name="name" onChange={handleChange} required />
                </div>
                <div className="form-item">
                    <span className="item-heading">Email:</span>
                    <input className="input-box" type="email" placeholder="Enter mail" name="email" onChange={handleChange} required />
                </div>
                <div className="form-item">
                    <span className="item-heading">Phone:</span>
                    <input className="input-box" type="tel" placeholder="Enter phone number" name="phone" onChange={handleChange} required />
                </div>
                <div className="form-item">
                    <span className="item-heading">Password:</span>
                    <input className="input-box" type="password" placeholder="Enter password" name="password" onChange={handleChange} required />
                </div>
                <div className="form-item">
                    <span className="item-heading">confirm Password:</span>
                    <input className="input-box" type="password" placeholder="Enter confirm password" name="confirmPassword" onChange={handleChange} required />
                </div>
                <div className="form-item">
                    <span className="item-heading">Street:</span>
                    <input className="input-box" type="text" placeholder="Enter street" name="street" onChange={handleChange} required />
                </div>
                <div className="form-item">
                    <span className="item-heading">City:</span>
                    <input className="input-box" type="text" placeholder="Enter city" name="city" onChange={handleChange} required />
                </div>
                <div className="form-item">
                    <span className="item-heading">State:</span>
                    <input className="input-box" type="text" placeholder="Enter state" name="state" onChange={handleChange} required />
                </div>
                <div className="form-item">
                    <span className="item-heading">Zipcode:</span>
                    <input className="input-box" type="text" placeholder="Enter zipcode" name="zipcode" onChange={handleChange} required />
                </div>
                <div className="form-item">
                    <span className="item-heading">Country:</span>
                    <input className="input-box" type="text" placeholder="Enter country" name="country" onChange={handleChange} required />
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" required></input>
                    <span>I agree to all terms and conditions </span>
                    <a className="term-link" href="/">Term and conditions</a>
                </div>
                <div className="links-container">
                    <a className="link" href="/">Already have account?</a>
                </div>
                {errorMessage !== null && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}

                <div className="btn-container">
                    <input className="submit-btn" type="submit"></input>
                </div>
            </form>
        </div>
    </div>
}

export default Register;
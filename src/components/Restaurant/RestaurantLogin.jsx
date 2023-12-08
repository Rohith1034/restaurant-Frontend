import "../CSS/Login.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import md5 from "md5";
import Cookies from "js-cookie";
function RestaurantLogin() {

    const navigate = useNavigate();
    const [status, setStatus] = useState(false);
  
    const [data, setData] = useState({
      username: '',
      password: ''
    });
  
    const restaurantId = Cookies.get("restaurantId");
    useEffect(() => {
      if (restaurantId !== undefined) {
        navigate("restaurant/dashboard");
      }
    }, [navigate]);
  
    const navigateToDashboard = () => {
      navigate("restaurant/dashboard");
    }
  
    const { username, password } = data;
    const [errorMessage, setErrorMessage] = useState(null);
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: [e.target.value] })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("https://restaurant-backend-yubq.onrender.com/restaurant/login", data);
        console.log(response);
        if (response.data.loginStatus === "success") {
          console.log(response.data.loginStatus);
          Cookies.set("restaurantId", response.data.restaurantid, { expires: 20 });
          navigate("restaurant/dashboard");
          setStatus(true);
        }
        else {
          setErrorMessage(response.data.error);
        }
      }
      catch (error) {
        console.log(error);
      }
    };
  
    return <div className="container">
      <div className="img-container">
        <img className="img" src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
      </div>
      <div className="form-container">
        <h1 className="main-heading">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <span className="item-heading">Username:</span>
            <input className="input-box" type="text" placeholder="Enter username" name="username" onChange={handleChange} required />
          </div>
          <div className="form-item">
            <span className="item-heading">Password:</span>
            <input className="input-box" type="password" placeholder="Enter password" name="password" onChange={handleChange} required />
          </div>
          <div className="checkbox-item">
            <input type="checkbox" required></input>
            <span>I agree to all terms and conditions </span>
            <a className="term-link" href="/">Term and conditions</a>
          </div>
          <div className="links-container">
            <a className="link" href="/">forget password</a>
            <a className="link" href="/register">Don't have account</a>
          </div>
          {errorMessage !== null && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <div className="btn-container">
            <input className="submit-btn" type="submit" ></input>
          </div>
        </form>
      </div>
    </div>
  }

  export default RestaurantLogin;
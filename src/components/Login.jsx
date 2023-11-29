import "./CSS/Login.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import md5 from "md5";
import Cookies from "js-cookie";


function Login() {

  const navigate = useNavigate();
  const [status, setStatus] = useState(false);

  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const userId = Cookies.get("userId");
  useEffect(() => {
    if (userId !== undefined) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const navigateToDashboard = () => {
    navigate("/dashboard");
  }

  const { username, password } = data;
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://restaurant-backend-yubq.onrender.com/userdata", data);
      if (response.data.loginStatus === "success") {
        console.log(response.data.loginStatus);
        Cookies.set("userId", response.data.userid, { expires: 20 });
        navigate("/dashboard");
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
      <img className="img" src="https://images.unsplash.com/photo-1625242661157-e9e5708ffe5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""></img>
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

export default Login;
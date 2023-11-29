import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./CSS/Dashboard.css";
import DashboardNav from "./DashboardNav";
import { RiArrowRightUpLine } from "react-icons/ri";
import headerImg from "../resources/header-img.png";
import Category from "./Category";
import FoodCard from "./FoodCard";
import axios from "axios";

function Dashboard() {

  const navigate = useNavigate();
  const [menuData, setMenuData] = useState([])

  const getData = async () => {
    const response = await axios.post("https://restaurant-backend-yubq.onrender.com/menudata");
    setMenuData(response.data);
  }

  getData();

  useEffect(() => {
    const isLogged = async () => {
      const userid = Cookies.get("userId");
      if (userid === undefined) {
        navigate("/");
      }
    };
    getData();
    isLogged();
  }, [navigate]);

  return (
    <div>
      <DashboardNav />
      <section id="dashboard-header">
        <div className="dashboard-header-container">
          <div className="dashboard-left-container">
            <h1 className="dashboard-header-heading">
              Order Tasty & Fresh Food{" "}
              <span className="header-highlight-color">anytime!</span>
            </h1>
            <p className="dashboard-header-content">
              Just confirm your order and enjoy our delicious fastest delivery
            </p>
            <div className="header-btn-container">
              <button className="order-btn">Order Now</button>
              <a className="see-menu" href=" ">
                See Menu
              </a>
              <RiArrowRightUpLine style={{ color: "#caa55e" }} />
            </div>
          </div>
          <div className="dashboard-right-container">
            <img className="header-img" src={headerImg} alt=""></img>
          </div>
        </div>
      </section>
      <section id="categories">
        <Category />
      </section>
      <div className="popular-items">
        <h1 className="popular-items-heading">Popular Items</h1>
        <a className="see-more" href="/food">See more</a>
        <RiArrowRightUpLine style={{ color: "#caa55e" }} />
      </div>
      <section id="popular-items">
        {menuData.slice(0, 4).map(foodData => (
          <div className="space-in-btw" key={foodData._id}>
            <FoodCard foodData={foodData} />
          </div>
        ))}

      </section>
    </div>
  );
}

export default Dashboard;

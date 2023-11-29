import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./CSS/Dashboard.css";
import DashboardNav from "./DashboardNav";
import { RiArrowRightUpLine } from "react-icons/ri";
import headerImg from "../resources/header-img.png";
import Category from "./Category";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = async () => {
      const userid = Cookies.get("userId");
      if (userid === undefined) {
        navigate("/");
      }
    };

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
    </div>
  );
}

export default Dashboard;

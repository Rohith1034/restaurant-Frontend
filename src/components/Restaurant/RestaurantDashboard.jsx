import RestaurantNav from "./RestaurantNav";
import "../CSS/RestaurantDashboard.css";
import { RiArrowRightUpLine } from "react-icons/ri";
import headerImg from "./header-img.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import CardSkeleton from "../CardSkeleton";
import FoodCard from "../FoodCard";
import RestaurantFoodCard from "./RestaurantFoodCard";

function RestaurantDashboard() {

    const navigate = useNavigate();

    const [menuData, setMenuData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [restaurantLoading, setRestaurantLoading] = useState(true);
    const [restaurantData, setRestaurantData] = useState([]);
    const restaurantid = Cookies.get("restaurantId");

    const getData = async () => {
        const response = await axios.post(`https://restaurant-backend-yubq.onrender.com/restaurantfooditems/${restaurantid}`);
        setMenuData(response.data);
        setIsLoading(false);
    }

    const getRestaurantData = async () => {
        const response = await axios.post(`https://restaurant-backend-yubq.onrender.com/restaurant/details/${restaurantid}`);
        setRestaurantData(response.data);
        setRestaurantLoading(false);
    }

    useEffect(() => {
        const isLogged = async () => {
            const userid = Cookies.get("restaurantId");
            if (userid === undefined) {
                navigate("/");
            }
        };
        getData();
        isLogged();
        getRestaurantData();
    }, [navigate]);

    const navigateToFoodItems = () => {
        navigate(`/restaurantfooditems/${restaurantid}`);
    }

    const renderView = () => {
        return restaurantLoading ? (
            <p>Loading</p>
        ) : restaurantData?.foodItems?.length > 0 ? (
            <div>
                <div className="popular-items">
                    <h1 className="popular-items-heading">Popular Items</h1>
                    <a className="see-more" href="/fooditems">See more</a>
                    <RiArrowRightUpLine style={{ color: "#caa55e" }} onClick={navigateToFoodItems} />
                </div>
                <section id="popular-items">
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <div className="space-in-btw" key={index}>
                                <CardSkeleton />
                            </div>
                        ))
                    ) : (
                        menuData.slice(0, 4).map((foodData) => (
                            foodData ? (  // Add this check to ensure foodData is not null
                                <div className="space-in-btw" key={foodData._id}>
                                    <RestaurantFoodCard foodData={foodData} />
                                </div>
                            ) : null
                        ))
                    )}
                </section>
            </div>
        ) : (
            null
        );
    };
    
    
    console.log(restaurantData);

    return (
        <div>
            <RestaurantNav />
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

            {renderView()}

        </div>
    )
}

export default RestaurantDashboard;
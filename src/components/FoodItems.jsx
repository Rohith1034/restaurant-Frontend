import React, { useEffect, useState } from "react";
import img1 from "../resources/biriyani.jpeg";
import "./CSS/FoodItems.css";
import { useNavigate, useParams } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import axios from "axios";
import CardSkeleton from "./CardSkeleton";
import FoodCard from "./FoodCard";
import { RiArrowRightUpLine } from "react-icons/ri";
import Contact from "./Contact";
import ItemSkeleton from "./ItemSkeleton";
import Skeleton from "react-loading-skeleton";
import Cookies from "js-cookie";

function FoodItems(props) {

    const navigate = useNavigate();
    const [menuData, setMenuData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [itemData, setItemData] = useState([]);
    const [itemLoading, setItemLoading] = useState(true);
    const [ratings,setRatings] = useState();

    const userId = Cookies.get("userId");
    const { id } = useParams();

    const userData = {
        userId,
        id
    };

    const getData = async () => {
        const response = await axios.post("https://restaurant-backend-yubq.onrender.com/menudata");
        setMenuData(response.data);
        setIsLoading(false);
    }

    const navigateToFoodItems = () => {
        navigate("/fooditems")
    }

    const getMenuData = async () => {
        try {
            const response = await axios.post(`https://restaurant-backend-yubq.onrender.com/fooditems/${id}`)
            setItemData(response.data);
            setItemLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleAddTOCart = async() => {
        try {
            const response = await axios.post("https://restaurant-backend-yubq.onrender.com/addItem",userData);
            if (response.data.status) {
                alert("Successfully added");
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
        getMenuData();
        if (itemData.length > 0) {
            var sum = 0;
            for (let i = 0; i < itemData[0].ratings.length; i++) {
                sum = sum + itemData[0].ratings[i];
            }
            setRatings(sum);
        }
    }, []);
    

    return <div>
        <DashboardNav />
        <div className="food-items-container">
            {itemLoading ? (
                <ItemSkeleton />
            ) : (
                <React.Fragment>
                    <div className="food-items-img-container">
                        <img className="food-items-img" src={itemData[0].image} alt=""></img>
                    </div>
                    <div className="food-items-details-container">
                        <h1 className="food-items-heading">{itemData[0].name}</h1>
                        <p className="about-restaurant-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat consectetur leo, sed tempus eros semper a. Vestibulum libero velit, imperdiet mollis lorem et, venenatis tincidunt leo. Integer vitae turpis efficitur, accumsan magna ut, imperdiet metus. Suspendisse potenti. Quisque nec faucibus purus, sed condimentum massa. Suspendisse nibh justo, condimentum at venenatis in, finibus sed erat. Pellentesque facilisis, nibh vel dapibus auctor, leo lectus aliquet massa, dictum consectetur nibh enim eget arcu. Proin porta a est ultrices dapibus. Integer sollicitudin lacinia nulla quis eleifend. Fusce vel nisi quam. Phasellus at molestie libero, a sollicitudin turpis. Nunc non nulla congue, rhoncus felis quis, hendrerit nunc. Integer iaculis ligula id leo pretium, varius tincidunt ligula egestas. Ut venenatis neque tortor, et ultricies lectus congue vel. Nunc in ex pharetra, auctor arcu id, fringilla ex. Sed erat mauris, consectetur eget hendrerit id, elementum vel nulla.Vivamus lobortis nunc ac metus mattis tristique. Sed sollicitudin purus nulla, quis tincidunt risus efficitur at.</p>
                        <div className="food-item-price">
                            <h4 className="food-items-price-heading"><span style={{color:"red"}}>-67%</span> Price:₹{itemData[0].price}</h4>
                        </div>
                        <div className="food-items-btn-container">
                            <button className="food-items-addcart" onClick={handleAddTOCart} >Add to cart</button>
                            <button className="food-items-buynow">Buy Now</button>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>


        <section id="related-items">
            <h1 className="related-items-heading">Products related to this item</h1>
            <section id="popular-items">
                {isLoading ? (
                    Array.from({ length: 4 }).map((_, index) => (
                        <div className="space-in-btw">
                            <CardSkeleton key={index} />
                        </div>
                    ))
                ) : (
                    menuData.slice(0, 4).map((foodData) => (
                        <div className="space-in-btw" key={foodData._id}>
                            <FoodCard foodData={foodData} />
                        </div>
                    ))
                )}
            </section>
        </section>
        <section id="about-restaurant">
            <h1 className="about-restaurant-heading">About Restaurant</h1>
            {isLoading ? (
                <Skeleton  count={9}/>
            ):(
                <p className="about-restaurant-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat consectetur leo, sed tempus eros semper a. Vestibulum libero velit, imperdiet mollis lorem et, venenatis tincidunt leo. Integer vitae turpis efficitur, accumsan magna ut, imperdiet metus. Suspendisse potenti. Quisque nec faucibus purus, sed condimentum massa. Suspendisse nibh justo, condimentum at venenatis in, finibus sed erat. Pellentesque facilisis, nibh vel dapibus auctor, leo lectus aliquet massa, dictum consectetur nibh enim eget arcu. Proin porta a est ultrices dapibus. Integer sollicitudin lacinia nulla quis eleifend. Fusce vel nisi quam. Phasellus at molestie libero, a sollicitudin turpis. Nunc non nulla congue, rhoncus felis quis, hendrerit nunc. Integer iaculis ligula id leo pretium, varius tincidunt ligula egestas. Ut venenatis neque tortor, et ultricies lectus congue vel. Nunc in ex pharetra, auctor arcu id, fringilla ex. Sed erat mauris, consectetur eget hendrerit id, elementum vel nulla.Vivamus lobortis nunc ac metus mattis tristique. Sed sollicitudin purus nulla, quis tincidunt risus efficitur at. Fusce tristique purus non turpis posuere malesuada. Etiam lacinia finibus lorem, at vestibulum leo suscipit in. Nullam pulvinar, justo sed vestibulum ornare, urna ante iaculis purus, vitae efficitur sem tortor at augue.Sed vitae purus luctus, fermentum justo sit amet, efficitur urna. Nunc vehicula interdum purus, a laoreet eros facilisis non. Vestibulum ut dolor in purus varius convallis id vitae dolor.Mauris volutpat aliquam odio eu eleifend. Sed eros magna, venenatis sit amet laoreet et, finibus nec arcu. Sed leo risus, dapibus eu lectus eu, egestas viverra metus.</p>
            )

            }
            
        </section>
        <Contact />
    </div>
}

export default FoodItems;
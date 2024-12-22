import React, { useEffect, useState } from "react";
import "./CSS/Orders.css";
import Cookies from "js-cookie";
import axios from "axios";
import SkeletonWishlistCard from "./SkeletonWishlistCard";
import OrdersCard from "./OrdersCard";

function Orders() {
    const [orderData, setOrderData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        try {
            const userId = Cookies.get("userID");
            const response = await axios.post("https://restaurant-backend-yubq.onrender.com/orderdata", { userId });
            if (response.status === 200) {
                const orderItems = [];
                console.log(response.data[0].items[0]);
                for (let i = 0;i < response.data.length;i++) {
                    for (let j = 0;j < response.data[i].items.length;j++) {
                        orderItems.push(response.data[i].items[j]);
                    }
                }
                setOrderData(orderItems);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
            setIsLoading(false); // Stop loading even if there's an error
        }
    };

    useEffect(() => {
        getData();
    }, []); // Run only once on mount
    return (
        <section id="Orders">
            <div className="orders-container">
                <h1 className="orders-heading">Orders</h1>
                {isLoading ? (
                    <div>
                        <SkeletonWishlistCard />
                        <SkeletonWishlistCard />
                        <SkeletonWishlistCard />
                    </div>
                ) : (
                    orderData.length > 0 ? (
                        orderData.map((item) => (
                            <OrdersCard id={item.itemId} key = {item.itemID} name = {item.name} quantity = {item.quantity} img = {item.img} price ={item.price}/>
                        ))
                    ) : (
                        <div 
                            style={{ 
                                color: "white", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center" 
                            }}
                        >
                            <h1>No orders yet</h1>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}

export default Orders;

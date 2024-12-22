import "./CSS/Wishlist.css"
import img1 from "../resources/biriyani.jpeg"
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import WishlistCard from "./WishlistCard";
import SkeletonWishlistCard from "./SkeletonWishlistCard";

function Wishlist() {

    const [wishlistData, setWishlistData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const userId = Cookies.get("userId");
<<<<<<< HEAD
=======
    const currentDate = new Date();
>>>>>>> 54eeb39 (major commit)

    const getdata = async () => {
        try {
            const response = await axios.post("http://localhost:5000/wishlistdata", { userId });
<<<<<<< HEAD
            setWishlistData(response.data)
=======
            setWishlistData(response.data.cart);
>>>>>>> 54eeb39 (major commit)
            setIsLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

<<<<<<< HEAD
    useEffect(() => {
        getdata();
    }, []);

    console.log(wishlistData);

    return <section id="wishlist">
        <div className="orders-container">
            <h1 className="orders-heading">Wishlist</h1>
=======
    

    const placeOrder = async () => {
        try {
            const ordersDataArray = [];
            for (let i = 0; i < wishlistData.length; i++) {
                const totalItemData = {
                    item: wishlistData[i],
                    date: currentDate.toString(),
                };
                ordersDataArray.push(totalItemData);
            }
    
            const ordersData = {
                id: userId,
                data: ordersDataArray,
            };
    
            const response = await axios.post("http://localhost:5000/placeorder", ordersData);
            if (response.status === 200) {
                alert("Order placed successfully");
            }
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };
    

    useEffect(() => {
        getdata();
    }, [wishlistData]);

    

    return <section id="wishlist">
        <div className="orders-container">
            {
                wishlistData.length > 0 ? (
                    <h1 className="orders-heading">Wishlist</h1>
                ) : (
                    <span></span>
                )
            }
            
>>>>>>> 54eeb39 (major commit)
            {isLoading ? (
                <div>
                    <SkeletonWishlistCard />
                    <SkeletonWishlistCard />
                    <SkeletonWishlistCard />
                </div>

            ) : (
                (wishlistData.length > 0 ? (
                    wishlistData.map((item) => (
                        <WishlistCard
                            key={item._id}
<<<<<<< HEAD
                            img={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                ) : (
                    <h1 style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>Nothing in cart</h1>
                ))
            )}
        </div>
        <div className="price-details-container">
            <h5 className="price-details">PRICE DETAILS</h5>
        </div>
=======
                            id = {item._id}
                            img={item.image}
                            name={item.name}
                            price={item.price}
                            quantity = {item.quantity}
                        />
                    ))
                    
                ) : (
                        <div style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <h1>Nothing in cart</h1>
                        </div>
                ))
            )}
        </div>
        {wishlistData.length > 0 ? (
            <button onClick={placeOrder} className="place-order-btn" >
            Place Order
        </button>
        ) : (
            <h1></h1>
        )}
>>>>>>> 54eeb39 (major commit)
    </section>
}

export default Wishlist;
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

    const getdata = async () => {
        try {
            const response = await axios.post("http://localhost:5000/wishlistdata", { userId });
            setWishlistData(response.data)
            setIsLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    console.log(wishlistData);

    return <section id="wishlist">
        <div className="orders-container">
            <h1 className="orders-heading">Wishlist</h1>
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
    </section>
}

export default Wishlist;
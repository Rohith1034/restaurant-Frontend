import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const userId = Cookies.get("userId");
const deleteItem = async(itemId) => {
    const data = {
        userId,
        itemId
    }
    try {
        const response = await axios.post("https://restaurant-backend-yubq.onrender.com/wishlistdel",{userId,itemId});
    }
    catch (error) {

    }
}

const updateQuantity = async(itemId,quantity) => {
    try {
        const data = {
            userId,
            itemId,
            quantity
        }
        if (quantity === 0) {
            deleteItem(itemId);
        }
        else {
            const response = await axios.post("https://restaurant-backend-yubq.onrender.com/updatequantity",data);
        }
        
    }
    catch (error) {

    }
}

function WishlistCard(props) {
    return <div className="order-details">
    <span style={{fontSize:"0px"}}>{props.id}</span>
    <img className="order-img" src={props.img} alt=""></img>
    <div className="order-details-container">
        <h3 className="order-name">{props.name}</h3>
        <p className="status">in stock</p>
        
        <div className="order-price-container">
            <span className="orginal-price"><s>₹300</s></span>
            <span className="order-price">₹{props.price}</span>
        </div>
        <div className="quantity-details-container">
            <button className="order-delete" onClick={()=>deleteItem(props.id)}><i class="fa-solid fa-trash" style={{marginRight:"5px"}}></i>Delete</button>
            <div className="quantity-container">
                <span className="quantity-minus" onClick={() => updateQuantity(props.id, props.quantity - 1)}>-</span>
                <p className="quantity">{props.quantity}</p>
                <span className="quantity-add" onClick={() => updateQuantity(props.id, props.quantity + 1)}>+</span>
            </div>
        </div>
        
    </div>
</div>
}

export default WishlistCard;
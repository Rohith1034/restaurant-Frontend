<<<<<<< HEAD
import { Link } from "react-router-dom";

function updateQuantity(quantity) {
    document.querySelector(".custom-drop-down").textContent = 'Qty: ' + quantity;
=======
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
        const response = await axios.post("http://localhost:5000/wishlistdel",{userId,itemId});
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
            const response = await axios.post("http://localhost:5000/updatequantity",data);
        }
        
    }
    catch (error) {

    }
>>>>>>> 54eeb39 (major commit)
}

function WishlistCard(props) {
    return <div className="order-details">
<<<<<<< HEAD
=======
    <span style={{fontSize:"0px"}}>{props.id}</span>
>>>>>>> 54eeb39 (major commit)
    <img className="order-img" src={props.img} alt=""></img>
    <div className="order-details-container">
        <h3 className="order-name">{props.name}</h3>
        <p className="status">in stock</p>
<<<<<<< HEAD
=======
        
>>>>>>> 54eeb39 (major commit)
        <div className="order-price-container">
            <span className="orginal-price"><s>₹300</s></span>
            <span className="order-price">₹{props.price}</span>
        </div>
<<<<<<< HEAD
        <button className="order-delete"><i class="fa-solid fa-trash" style={{marginRight:"5px"}}></i>Delete</button>
        <div className="btn-group">
            <button className="btn btn-dark dropdown-toggle custom-drop-down" data-bs-toggle="dropdown" aria-expanded="false">
                Qty: 1
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
            <li><button className="dropdown-item" onClick={() => updateQuantity(1)}>1</button></li>
                <li><button className="dropdown-item" onClick={() => updateQuantity(2)}>2</button></li>
                <li><button className="dropdown-item" onClick={() => updateQuantity(3)}>3</button></li>
                <li><button className="dropdown-item" onClick={() => updateQuantity(4)}>4</button></li>
                <li><button className="dropdown-item" onClick={() => updateQuantity(5)}>5</button></li>
            </ul>
        </div>
=======
        <div className="quantity-details-container">
            <button className="order-delete" onClick={()=>deleteItem(props.id)}><i class="fa-solid fa-trash" style={{marginRight:"5px"}}></i>Delete</button>
            <div className="quantity-container">
                <span className="quantity-minus" onClick={() => updateQuantity(props.id, props.quantity - 1)}>-</span>
                <p className="quantity">{props.quantity}</p>
                <span className="quantity-add" onClick={() => updateQuantity(props.id, props.quantity + 1)}>+</span>
            </div>
        </div>
        
>>>>>>> 54eeb39 (major commit)
    </div>
</div>
}

export default WishlistCard;
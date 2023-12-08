import { Link } from "react-router-dom";

function updateQuantity(quantity) {
    document.querySelector(".custom-drop-down").textContent = 'Qty: ' + quantity;
}

function WishlistCard(props) {
    return <div className="order-details">
    <img className="order-img" src={props.img} alt=""></img>
    <div className="order-details-container">
        <h3 className="order-name">{props.name}</h3>
        <p className="status">in stock</p>
        <div className="order-price-container">
            <span className="orginal-price"><s>₹300</s></span>
            <span className="order-price">₹{props.price}</span>
        </div>
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
    </div>
</div>
}

export default WishlistCard;
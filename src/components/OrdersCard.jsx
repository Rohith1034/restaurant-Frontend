import React from "react";

function OrdersCard(props) {
    return (
         <div className="order-details">
            <span style={{fontSize:"0px"}}>{props.id}</span>
            <img className="order-img" src={props.img} alt=""></img>
            <div className="order-details-container">
                <h3 className="order-name">{props.name}</h3>
                <div className="order-price-container">
                    <span style={{color:"white",fontSize:"20px",marginBottom:"5px"}}>₹{props.price}</span>
                </div>

                <div style={{display:"flex",flexDirection:"row"}} className="order-quantity-container">
                    <span style={{color:"white"}}>Qty:</span>
                    <p style={{backgroundColor:"white",width:"35px",marginLeft:"10px",textAlign:"center",borderRadius:"7px"}}>{props.quantity}</p>
                </div>

                <div className="quantity-details-container">
                    <button className="order-delete">Buy Again</button>
                </div>
        
        </div>
</div>
    )
}

export default OrdersCard;
import { Link } from "react-router-dom";
import "./CSS/FoodCard.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function RestaurantCard(props) {
    const {id, name, description, comments, ratings, image } = props.foodData;
    var sum = 0;

    for (let i = 0; i < ratings.length; i++) {
        sum = sum + ratings[i];
    }

    var newDescription;
    var newHeading;

    if (name.length > 17) {
        newHeading = name.substring(0,15) + "..";
    }
    else {
        newHeading = name;
    }

    if (description.length > 35) {
        newDescription = description.substring(0, 35) + "...";
    } else {
        newDescription = description;
    }

    console.log(id);

    return (
        <div>
            <Link to={`/restaurant/${id}`}>
                <div className="food-card-container">
                    <div className="food-card-image-container">
                        <img
                            className="food-card-img"
                            src={image}
                            alt=" "
                        ></img>
                    </div>
                    <div className="food-card-details-container">
                        <div className="header-and-rating">
                            <h4 className="food-card-heading">{newHeading }</h4>
                            <div className="rating" style={{backgroundColor:"green"}}>
                                <i className="fa-solid fa-star" style={{ fontSize: "10px" }}></i>
                            </div>
                            <span className="rating-number">{(sum / ratings.length).toFixed(1) }</span>
                        </div>
                        <span className="food-card-description">
                            {newDescription }
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default RestaurantCard;

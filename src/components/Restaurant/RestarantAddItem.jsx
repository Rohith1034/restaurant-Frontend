import "../CSS/Register.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const restaurantId = Cookies.get("restaurantId");

function AddFoodItem() {

    const navigate = useNavigate();

    const [foodItemData, setFoodItemData] = useState({
        id: restaurantId,
        name: "",
        price: "",
        category: "",
        description: "",
        quantity: "",
        images: "",
        timeToCook: "",
    });

    const [errorMessage, setErrorMessage] = useState(null);
    function convertToBAse(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setFoodItemData({...foodItemData,images:reader.result});
        };
        reader.onerror = error => {
            console.log("Error: ", error)
        }
    }

    const handleChange = async (e) => {
        if (e.target.name === "images") {
            convertToBAse(e);
        } else {
            setFoodItemData({ ...foodItemData, [e.target.name]: e.target.value });
        }
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(foodItemData);
            const response = await axios.post("https://restaurant-backend-yubq.onrender.com/restaurant/newitem", foodItemData);
            if (response.data.status) {
                navigate("/restaurant/dashboard");
            }

        } catch (error) {
            console.error("Error sending data:", error);
            setErrorMessage("An error occurred while processing the data");
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1 className="main-heading">Add New Food Item</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-item">
                        <span className="item-heading">Name:</span>
                        <input
                            className="input-box"
                            type="text"
                            placeholder="Enter food item name"
                            name="name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-item">
                        <span className="item-heading">Price:</span>
                        <input
                            className="input-box"
                            type="number"
                            placeholder="Enter price"
                            name="price"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-item">
                        <span className="item-heading">Category:</span>
                        <select
                            className="input-box-drop"
                            name="category"
                            onChange={handleChange}
                            value={foodItemData.category}
                            required
                        >
                            <option value="" disabled>Select category</option>
                            <option className="dropdown-option" value="appetizer">Appetizer</option>
                            <option className="dropdown-option" value="mainCourse">Main Course</option>
                            <option className="dropdown-option" value="dessert">Dessert</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <span className="item-heading">Description:</span>
                        <textarea class="form-control" name="description" placeholder="Enter description" onChange={handleChange} id="exampleFormControlTextarea1" style={{ marginTop: "1%", backgroundColor: "black", color: "white" }} rows="4"></textarea>
                    </div>

                    <div className="form-item">
                        <span className="item-heading">Quantity:</span>
                        <input
                            className="input-box"
                            type="text"
                            placeholder="Enter quantity"
                            name="quantity"
                            onChange={handleChange}
                            value={foodItemData.quantity}
                            required
                        />
                    </div>
                    <div className="form-item">
                        <span className="item-heading">Images:</span>
                        <input
                            className="input-box-drop"
                            type="file"
                            name="images"
                            onChange={handleChange}
                            accept="image/*"
                            required
                        />
                    </div>
                    <div className="form-item">
                        <span className="item-heading">Time to Cook:</span>
                        <input
                            className="input-box"
                            type="text"
                            placeholder="Enter time to cook"
                            name="timeToCook"
                            onChange={handleChange}
                            value={foodItemData.timeToCook}
                            required
                        />
                    </div>

                    {errorMessage !== null && (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    )}

                    <div className="btn-container">
                        <input className="submit-btn" type="submit" value="Add Food Item" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddFoodItem;

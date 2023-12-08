import { useState, useEffect } from "react";
import "../CSS/Register.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function RestaurantEditFoodItem() {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [gotData, setGotData] = useState(false);
    const [newData,setNewData] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        quantity: "",
        images: "",
        timeToCook: "",
    })
    const id = useParams();
    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const totalFoodItem = {
                ...(gotData ? { comments: data[0]?.comments, ratings: data[0]?.ratings } : {}),
                name:newData.name,
                price:newData.price,
                category:newData.category,
                description:newData.description,
                quantity:newData.quantity,
                images:newData.images,
                timeToCook:newData.timeToCook,
                _id:id.Id
            };
            console.log(totalFoodItem);
            const response = await axios.post("https://restaurant-backend-yubq.onrender.com/restaurant/edititem",totalFoodItem);
            console.log(response);
            if (response.data.success) {
                navigate("/restaurant/dashboard");
            }
            else {
                setErrorMessage(response.data.message);
            }
        }
       catch(error) {
        console.log(error);
       }
    }

    function convertToBAse(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setNewData({...newData,images:reader.result});
        };
        reader.onerror = error => {
            console.log("Error: ", error)
        }
    }
    

    const handleChange = (e) => {
        if (e.target.name === "images") {
            convertToBAse(e);
        } else {
            setNewData({ ...newData, [e.target.name]: e.target.value });
        }
    }

    const getData = async () => {
        try {
            const response = await axios.post(`http://localhost:5000/fooditems/${id.Id}`)
            setData(response.data);
            setGotData(true);
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getData();
    }, []);

    return (

        <div className="container">
            <div className="form-container">
                <h1 className="main-heading">Edit Food Item</h1>
                {gotData ? (

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
                            <textarea className="form-control" name="description" placeholder="Enter description" onChange={handleChange} id="exampleFormControlTextarea1" style={{ marginTop: "1%", backgroundColor: "black", color: "white" }} rows="4"></textarea>
                        </div>

                        <div className="form-item">
                            <span className="item-heading">Quantity:</span>
                            <input
                                className="input-box"
                                type="text"
                                placeholder="Enter quantity"
                                name="quantity"
                                onChange={handleChange}
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
                                required
                            />
                        </div>

                        {errorMessage !== null && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}

                        <div className="btn-container">
                            <input className="submit-btn" type="submit" value="Save changes" />
                        </div>
                    </form>

                ) : (
                    <Skeleton count={20} height={40}/>
                )}

            </div>
        </div>
    )
};

export default RestaurantEditFoodItem;
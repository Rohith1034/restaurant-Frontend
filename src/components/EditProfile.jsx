import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./CSS/EditProfile.css";
import profileimg from "../resources/profile.png";

const EditProfile = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: {
            country: "",
            street: "",
            city: "",
            state: "",
        },
    });

    const userId = Cookies.get("userId");

    // Fetch profile data when the component mounts
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post("http://localhost:5000/profiledata", { userId });
                setData(response.data); // Set profile data to state
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [userId]); // Dependency on userId to reload data if it changes

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handle nested fields like address.country or address.street
        const nameParts = name.split('.'); // Split name to handle nested fields

        setData((prevData) => {
            let updatedData = { ...prevData };

            // Navigate to the correct part of the state (e.g., address)
            let nestedObj = updatedData;
            for (let i = 0; i < nameParts.length - 1; i++) {
                nestedObj = nestedObj[nameParts[i]];
            }

            // Update the nested property
            nestedObj[nameParts[nameParts.length - 1]] = value;

            return updatedData;
        });
    };

    const handleSaveChanges = async () => {
        try {
            console.log(data);
            const res = await axios.post("http://localhost:5000/updateprofile", data);
            console.log(res.status);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="profile-container">
            <div className="left-container">
                <img className="profile-img" src={profileimg} alt="profile" />
                <div className="navigator">
                    <div className="navigator-link">
                        <a href="/dashboard">
                            <i style={{ paddingRight: "10px" }} className="fa-solid fa-house"></i> Dashboard
                        </a>
                    </div>
                    <div className="navigator-link" style={{ backgroundColor: "white" }}>
                        <a style={{ color: "black" }}>
                            <i style={{ paddingRight: "10px" }} className="fa-solid fa-address-card"></i> Account
                        </a>
                    </div>
                    <div className="navigator-link">
                        <a href="/dashboard">
                            <i style={{ paddingRight: "10px" }} className="fa-solid fa-bag-shopping"></i> Wishlist
                        </a>
                    </div>
                    <div className="navigator-link">
                        <a href="/dashboard">
                            <i style={{ paddingRight: "10px" }} className="fa-solid fa-right-from-bracket"></i> Logout
                        </a>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <h2>Account Settings</h2>
                <div className="form-item">
                    <span className="item-heading">Username:</span>
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter username"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-item">
                    <span className="item-heading">Email:</span>
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-item">
                    <span className="item-heading">Phone number:</span>
                    <input
                        className="input-box"
                        type="phone"
                        placeholder="Enter phone number"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-item">
                    <span className="item-heading">Country:</span>
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter country"
                        name="address.country"
                        value={data.address.country}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-item">
                    <span className="item-heading">Street:</span>
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter Street"
                        name="address.street"
                        value={data.address.street}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-item">
                    <span className="item-heading">City:</span>
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter City"
                        name="address.city"
                        value={data.address.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-item">
                    <span className="item-heading">State:</span>
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter State"
                        name="address.state"
                        value={data.address.state}
                        onChange={handleChange}
                    />
                </div>

                <div className="btn-container">
                    <button style={{ width: "100%" }} className="submit-btn" onClick={handleSaveChanges}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;

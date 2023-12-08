import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import md5 from "md5";

function Profile() {


    const navigate = useNavigate();

    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(true);


    const userId = Cookies.get("userId");



    const getData = async () => {
        try {
            console.log(userId);
            const response = await axios.post("https://restaurant-backend-yubq.onrender.com/user/profile", { userId });
            setUserData(response.data);
            setIsLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    const navigateToEdit = (e) => {
        navigate("/user/editprofile")
    }

    useEffect(() => {
        const isLogged = async () => {
            const userid = Cookies.get("userId");
            if (userid === undefined) {
                navigate("/");
            }
        };
        getData();
        isLogged();
    }, [navigate]);

    console.log(userData);

    return (
        <div>
            {isLoading ? (<div style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
            <h1 style={{color:"white"}}>Hold tight ...</h1>
            </div>) : (
                <div className="container">
                <div className="form-container">
                    <h1 className="main-heading">Profile</h1>
                    <form>
                        <div className="form-item">
                            <span className="item-heading">Name:</span>
                            <input className="input-box" type="text" placeholder="Enter name" name="name" value={userData.name} required />
                        </div>
                        <div className="form-item">
                            <span className="item-heading">Email:</span>
                            <input className="input-box" type="email" placeholder="Enter mail" name="email" value={userData.email} required />
                        </div>
                        <div className="form-item">
                            <span className="item-heading">Phone:</span>
                            <input className="input-box" type="tel" placeholder="Enter phone number" name="phone" value={userData.phone} required />
                        </div>
                        <div className="form-item">
                            <span className="item-heading">Street:</span>
                            <input className="input-box" type="text" placeholder="Enter street" name="street" value={userData.address.street}  required />
                        </div>
                        <div className="form-item">
                            <span className="item-heading">City:</span>
                            <input className="input-box" type="text" placeholder="Enter city" name="city" value={userData.address.city} required />
                        </div>
                        <div className="form-item">
                            <span className="item-heading">State:</span>
                            <input className="input-box" type="text" placeholder="Enter state" name="state" value={userData.address.state} required />
                        </div>
                        <div className="form-item">
                            <span className="item-heading">Zipcode:</span>
                            <input className="input-box" type="text" placeholder="Enter zipcode" name="zipcode" value={userData.address.zipcode}  required />
                        </div>
                        <div className="form-item">
                            <span className="item-heading">Country:</span>
                            <input className="input-box" type="text" placeholder="Enter country" value={userData.address.country} name="country" required />
                        </div>
                        <div className="btn-container">
                            <input className="submit-btn" type="submit" value="Edit" onClick={navigateToEdit}></input>
                        </div>
                    </form>
                </div>
            </div>
            )}
        </div>
    )
}

export default Profile;
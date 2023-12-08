import img1 from "../resources/img4.jpg"
import img2 from "../resources/img14.jpg"
import img3 from "../resources/img11.jpg"
import { Link } from "react-router-dom";

function Carousel() {
    return (
        <section id="carousel">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <Link to="/menu">
                    <div className="carousel-inner">

                        <div className="carousel-item active" >
                            <img src={img1} style={{ borderRadius: "7px" }} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={img2} style={{ borderRadius: "7px" }} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={img3} style={{ borderRadius: "7px" }} className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                </Link>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default Carousel;
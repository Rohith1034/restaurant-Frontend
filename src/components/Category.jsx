import "./CSS/Category.css";
import img1 from "../resources/category-img6.png"
import img2 from "../resources/category-img2.png"
import img3 from "../resources/category-img3.png"
import img4 from "../resources/category-img4.png"
import img5 from "../resources/category-img5.png"
import img7 from "../resources/category-img7.png"
import CategoryCard from "./CategoryCard";

function Category() {
    return <div>
        <h1 className="category-heading">Inspiration for your order</h1>
        <div className="category-container">
            <CategoryCard img={img1} heading = "Paratha"/>
            <CategoryCard img={img2} heading = "Pizza"/>
            <CategoryCard img={img3} heading ="South Indian"/>
            <CategoryCard img={img4} heading = "North Indian" />
            <CategoryCard img={img5} heading = "chinese"/>
            <CategoryCard img={img7} heading = "Icecreamss"/>
        </div>
    </div>
}

export default Category;
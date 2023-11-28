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
        <h1 className="category-heading">Inspiration for your first order</h1>
        <div className="category-container">
            <CategoryCard img={img1} heading="paratha" />
            <CategoryCard img={img2}/>
            <CategoryCard img={img3} />
            <CategoryCard img={img4}  />
            <CategoryCard img={img5} />
            <CategoryCard img= {img7} />
        </div>
    </div>
}

export default Category;
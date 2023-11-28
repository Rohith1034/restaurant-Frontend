import "./CSS/CategoryCard.css"

function CategoryCard(props) {
    return <div className="category-card">
        <div className="category-img-container">
            <img className="category-img" src={props.img} alt=""></img>
        </div>
        <h5 className="category-card-heading">{props.heading}</h5>
    </div>
}

export default CategoryCard;
import biriyani from "../resources/biriyani.jpeg"
function CardDisplay() {
    return <div className="card-container">
        <div className="card">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""></img>
        </div>
        <div className="card">
            <h1 className="card-heading">Pizza?</h1>
            <p className="card-content">Indulge in a slice of culinary heaven at our restaurant as we proudly present our signature pizza. Crafted with passion and precision, our pizzas are a delightful symphony of fresh, locally sourced ingredients and time-honored recipes. Every bite is a journey of taste and tradition, reflecting our commitment to serving the best pizza in town.Join us for an unforgettable pizza experience that will leave your taste buds dancing and your heart craving more.</p>
        </div>
        <div className="card">
            <img src="https://images.unsplash.com/photo-1545396113-20ce94ab6433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""></img>
        </div>
        <div className="card">
        <h1 className="card-heading">Dessert?</h1>
        <p className="card-content">Treat your sweet tooth to a divine experience with our irresistible dessert offerings at our restaurant. Our dessert menu is a testament to our dedication to indulgence, featuring a delectable array of confections that will satisfy even the most discerning palate. From velvety chocolate lava cakes oozing with warmth to delicate fruit tarts adorned with seasonal treasures, our desserts are crafted with the finest ingredients and a touch of artistry.</p>
        </div>
        <div className="card">
            <img src={biriyani} alt=""></img>
        </div>
        <div className="card">
        <h1 className="card-heading">Biriyani?</h1>
            <p className="card-content">At our esteemed establishment, we take immense pride in the artistry of our biryani, a beloved dish that encapsulates the essence of our culinary passion. Our biryani begins with fragrant basmati rice, meticulously selected for its texture and aroma, which forms the canvas for this flavorful masterpiece. The heart of our biryani lies in the tender, marinated meats or vegetables, delicately spiced and slow-cooked to infuse each morsel with an explosion of taste.</p>
        </div>
    </div>;
}

export default CardDisplay;
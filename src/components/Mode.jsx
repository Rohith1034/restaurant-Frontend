function Mode() {
    return <div className="mode">
        <h1 className="mode-heading">Choose option</h1>
        <div className="mode-card-container">
            <a href="/">
                <div className="mode-card">
                    <i class="fa-solid fa-bowl-food icons"></i>
                    <h1 className="mode-card-heading">DINE-IN</h1>
                </div>
            </a>

            <a href="/">
                <div className="mode-card special">
                    <i class="fa-solid fa-motorcycle icons"></i>
                    <h1 className="about-card-heading">HOME DELIVERY</h1>
                </div>
            </a>

            <a href="/">
                <div className="mode-card">
                    <i class="fa-solid fa-phone-volume icons"></i>
                    <h1 className="about-card-heading">REACH US</h1>
                </div>
            </a>

        </div>
    </div>;
}

export default Mode;
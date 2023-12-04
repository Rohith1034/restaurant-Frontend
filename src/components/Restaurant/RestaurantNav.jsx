function RestaurantNav() {
    return (
        <section id="dashboard-nav">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Restaurant</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto" style={{ marginRight: "3%" }}>
                            <li className="nav-item" style={{ marginRight: "50px" }}>
                                <a className="nav-link" style={{ fontSize: "22px" }} aria-current="page" href="/restaurant/dashboard">Home</a>
                            </li>
                            <li className="nav-item" style={{ marginRight: "50px" }}>
                                <a className="nav-link" style={{ fontSize: "22px" }} href="/restaurant/additem">Add items</a>
                            </li>
                            <li className="nav-item" style={{ marginRight: "50px" }}>
                                <a className="nav-link" style={{ fontSize: "22px" }} href="/restaurant/manage">Manage</a>
                            </li>
                            <li className="nav-item" style={{ marginRight: "50px" }}>
                                <a className="nav-link" style={{ fontSize: "22px" }} href="/profile">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: "22px" }} href=" ">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default RestaurantNav;
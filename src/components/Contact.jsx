function Contact() {
    return <div className="contact-container" id="contact">
        <div className="resturant-details">
            <h3 className="name">Sithara</h3>
            <p className="address">11-481 near manju lodge,</p>
            <span className="address">opp SBI bank dharmavram</span>
        </div>

        <div className="menu">
            <h3 className="menu-heading">Navigation</h3>
            <a className="menu-link" href="/">Home</a>
            <a className="menu-link" href="/">Menu</a>
            <a className="menu-link" href="/">Contact us</a>
            <a className="menu-link" href="#about">About us</a>
        </div>

        <div className="link-container">
            <a href="/" className="links">Contact us</a>
            <a href="/" className="links">Join us</a>
        </div>

        <div className="icon-container">
            <div className="contact-icons">
                <a href="/">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </div>
            <div className="contact-icons">
                <a href="/">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
            <div className="contact-icons">
                <a href="/">
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </div>
            <div className="contact-icons">
                <a href="/">
                    <i class="fa-solid fa-envelope"></i>
                </a>
            </div>
        </div>
    </div>;
}

export default Contact;
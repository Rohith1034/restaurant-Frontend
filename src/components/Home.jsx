import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";
import CardDisplay from "./CardDisplay";
import About from "./About";
import Mode from "./Mode";
import Contact from "./Contact";
import "./CSS/Home.css"

function Home() {
    return <div className="home">
         <section id="main">
          <div id="background-container"></div>
          <Navbar />
          <div className="header">
            <HeaderContent />
          </div>
        </section>
        <CardDisplay />
        <About />
        <Mode />
        <Contact />
    </div>
}

export default Home;
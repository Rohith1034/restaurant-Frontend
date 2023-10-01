import Navbar from "./components/Navbar.jsx"
import HeaderContent from "./components/HeaderContent.jsx";
import CardDisplay from "./components/CardDisplay.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Mode from "./components/Mode.jsx";

function App() {
  return (
    <div className="App">
      <section id="main">
      <div id="background-container"></div>
      <Navbar />
      <div class="header">
        <HeaderContent />
      </div>
    </section>
    <CardDisplay />
    <About />
    <Mode />
    <Contact />
    </div>
  );
}

export default App;
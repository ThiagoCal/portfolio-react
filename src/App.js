import "./App.css";
import Banner from "./Components/Banner";
import Project from "./Components/Project";
import Cta from "./Components/Cta";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Cta />
      <Banner />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

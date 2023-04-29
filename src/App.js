import logo from "./logo.svg";
import "./App.css";
import Banner from "./Components/Banner";
import Project from "./Components/Project";
import Cta from "./Components/Cta";

function App() {
  return (
    <div className="App">
      <Cta />
      <Banner />
      <Project />
    </div>
  );
}

export default App;

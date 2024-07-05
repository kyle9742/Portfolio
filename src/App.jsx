import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <div className="container">
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;

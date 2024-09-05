import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
    return (
        <div>
            <Navbar/>
            <div id="home">
                <Home/>
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="skills">
                <Skills/>
            </div>
            <div id="projects">
                <Work/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </div>
    );
}

export default App;

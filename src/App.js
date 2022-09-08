import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from './components/About';
import PortFolio from "./components/PortFolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


 function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <PortFolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;

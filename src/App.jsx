import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./Components/Navigation/Navigation.jsx";

import "./index.css";
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Project';
import Experience from './Pages/Experience';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navigation />
        <main>
          <section id="home">   <Home />       </section>
          <section id="about">  <About />      </section>
          <section id="skills"> <Skills />     </section>
          <section id="projects"><Projects />  </section>
          <section id="experience"><Experience /></section>
          <section id="contact"><Contacts />   </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

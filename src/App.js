import './App.css';
import { motion } from "framer-motion"
import Intro from './Intro/Intro';
import Myself from './Myself/Myself';
import Skills from './Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'
import ParticlesComponent from './Components/backgroundparticles/Bg_particles';
import Projects from './Projects/Projects';
import Nav from './Components/NavBar/Nav';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className='body'>
      <ParticlesComponent id='bg_particales' />
      <Nav />
      <section id='intro'>
        <Intro />
      </section>
      <section id='myself'>
        <Myself />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='skills'>
        <Skills />
        <Footer />
      </section>




    </div>
  );
}

export default App;

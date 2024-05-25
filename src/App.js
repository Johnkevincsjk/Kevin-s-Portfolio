import './App.css';
import { motion } from "framer-motion"
import Intro from './Intro/Intro';
import Myself from './Myself/Myself';
import Skills from './Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'
import ParticlesComponent from './Components/backgroundparticles/Bg_particles';
import Projects from './Projects/Projects';
import Nav from './Components/NavBar/Nav';


function App() {
  return (
    <motion.div className='body'>
      <section id='intro'>
        <ParticlesComponent id='bg_particales' />
        <Nav />
        <Intro />
      </section>





      <section id='myself'>
        <Myself />
      </section>


 

      <section id='skills'>
        <Skills />
      </section>



      <section id='projects'><Projects /></section>
    </motion.div>
  );
}

export default App;

import styles from './style.module.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';

function Exercise16() {
  return (
    <div className={styles.container}>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default Exercise16;

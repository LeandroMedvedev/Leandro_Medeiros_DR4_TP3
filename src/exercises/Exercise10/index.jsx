import styles from './style.module.css';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import WhoWeAre from './components/WhoWeAre';

const { container } = styles;

function Exercise10() {
  return (
    <div className={container}>
      <Header />
      <Home />
      <WhoWeAre />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default Exercise10;

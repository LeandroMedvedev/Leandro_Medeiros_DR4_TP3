import Header from './components/Header';
import Card from './components/Card';

import styles from './style.module.css';
import Footer from './components/Footer';

const { container } = styles;

function Exercise06() {
  return (
    <div className={container}>
      <Header />
      <Card />
      <Card />
      <Footer />
    </div>
  );
}

export default Exercise06;

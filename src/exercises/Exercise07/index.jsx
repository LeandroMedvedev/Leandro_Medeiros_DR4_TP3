import Header from './components/Header';
import Card from './components/Card';

import styles from './style.module.css';
import Footer from './components/Footer';

const { container } = styles;

function Exercise07() {
  return (
    <div className={container}>
      <Header />
      <main>
        <Card />
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default Exercise07;

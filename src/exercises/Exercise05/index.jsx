import Card from './Card';
import styles from './style.module.css';

const { container } = styles;

function Exercise05() {
  return (
    <div className={container}>
      <h1 className="title">Cards</h1>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Exercise05;

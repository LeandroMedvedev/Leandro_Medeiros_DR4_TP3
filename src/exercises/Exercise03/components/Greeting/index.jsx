/* eslint-disable react/prop-types */
import styles from './style.module.css';

function Greeting({ name, age }) {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        Olá, <strong>{name}</strong>! Você tem {age} {age <= 1 ? 'ano' : 'anos'}
        .
      </p>
    </div>
  );
}

export default Greeting;

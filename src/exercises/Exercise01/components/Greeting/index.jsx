import styles from './style.module.css';

function Greeting({ name }) {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        Olá, <strong>{name}</strong>!
      </p>
    </div>
  );
}

export default Greeting;

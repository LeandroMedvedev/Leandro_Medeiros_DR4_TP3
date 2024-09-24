/* eslint-disable react/prop-types */
import styles from './style.module.css';

function Button({ onClick, text }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

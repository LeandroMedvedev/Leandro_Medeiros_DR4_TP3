/* eslint-disable react/prop-types */
import styles from './style.module.css';

function Card({ course, institution, period }) {
  return (
    <div className={styles.container}>
      <h2>{course}</h2>
      <p>{institution}</p>
      <p>{period}</p>
    </div>
  );
}

export default Card;

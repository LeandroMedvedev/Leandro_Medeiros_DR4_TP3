/* eslint-disable react/prop-types */
import styles from './style.module.css';

function Card({
  title,
  description,
  tech,
  imgSrc,
  imgAlt,
  liveLink,
  githubLink,
  spanText,
}) {
  return (
    <>
      <section className={styles.container}>
        <div>
          <header className={styles.sectionHead}>
            <h2>
              <a href={liveLink} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h2>
            <span>
              <strong>{spanText}</strong>
            </span>
            <a href={githubLink} target="_blank" rel="noreferrer">
              <strong>GitHub</strong>
            </a>
          </header>

          <p>{description}</p>
          <span className={styles.technologies}>
            <strong>{tech}</strong>
          </span>
        </div>
        <img src={imgSrc} alt={imgAlt} />

        <span className={styles.borderSpanOne}></span>
        <span className={styles.borderSpanTwo}></span>
        <span className={styles.borderSpanThree}></span>
        <span className={styles.borderSpanFour}></span>
      </section>
      <hr className={styles.effect} />
    </>
  );
}

export default Card;

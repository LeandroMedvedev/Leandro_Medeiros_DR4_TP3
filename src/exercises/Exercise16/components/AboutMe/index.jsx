import me from '../../../../assets/images/leandro/photos/me-01.jpg';
import styles from './style.module.css';

function AboutMe() {
  return (
    <section id="aboutMe" className={styles.container}>
      <img
        className={styles.photo}
        src={me}
        alt="Leandro Medvedev"
        title="Leandro Medvedev"
      />
      <div>
        <span>Olá,</span>
        <p>
          sou o Leandro. Bem-vindo à minha página, espaço em que compartilho um
          pouquinho sobre mim, alguns projetos. Um modo de documentar minha
          evolução no mundo do desenvolvimento. Espero que goste.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;

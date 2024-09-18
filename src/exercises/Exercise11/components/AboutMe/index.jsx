import me from '../../../../assets/images/leandro/me-01.jpg';
import styles from './style.module.css';

const { container, photo } = styles;

function AboutMe() {
  return (
    <section className={container}>
      <img
        className={photo}
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

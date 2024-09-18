import styles from './style.module.css';
import vanessaStudio from '../../../../assets/images/vanessa/cottonbro-studio.jpg';

const { container, containerText } = styles;

function Home() {
  return (
    <div id="home" className={container}>
      <img src={vanessaStudio} alt="Vanessa em seu Salão de Beleza" />
      <div className={containerText}>
        <h2>Vanessa Hair Studio</h2>
        <p>
          Bem-vinda(o) à Vanessa Hair Studio! Aqui, acreditamos que seu cabelo é
          uma extensão de sua identidade. Nossa missão é oferecer uma
          experiência de beleza personalizada, realçando sua confiança e estilo.
          Valorizamos a qualidade no atendimento, atenção aos detalhes e a
          dedicação em trazer o melhor para você.
        </p>
      </div>
    </div>
  );
}

export default Home;

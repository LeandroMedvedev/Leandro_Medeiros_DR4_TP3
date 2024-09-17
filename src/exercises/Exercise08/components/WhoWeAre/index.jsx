import styles from './style.module.css';
import makingBrush from '../../../../assets/images/vanessa-studio/making-brush.jpg';
import colorHair from '../../../../assets/images/vanessa-studio/color-hair.jpg';
import washingHair from '../../../../assets/images/vanessa-studio/washing-hair.jpg';

const { container, containerImages, ourTeamSubtitle } = styles;

function WhoWeAre() {
  return (
    <section id="whoWeAre" className={container}>
      <h2>Quem Somos?</h2>
      <p>
        Vanessa Medeiros sempre teve paixão por transformar vidas através do
        cabelo. Com mais de 12 anos de experiência no mercado, ela fundou seu
        estúdio para oferecer serviços que vão além da estética, promovendo
        bem-estar e autoestima. Ao lado de uma equipe altamente qualificada, ela
        continua a inspirar confiança em cada cliente que adentra seu estúdio.
      </p>
      <h2 id={ourTeamSubtitle}>Nossa Equipe</h2>
      <p>
        Nosso time é composto por especialistas que compartilham a visão de
        Vanessa: tratar cada cliente como único. Nossos profissionais são
        treinados nas últimas tendências e técnicas para garantir um atendimento
        de excelência.
      </p>
      <div className={containerImages}>
        <img
          src={colorHair}
          alt="Cabeleireira segurando uma mecha de cabelo para corte"
        />
        <img
          src={washingHair}
          alt="Cabeleireira segurando uma mecha de cabelo para corte"
        />
        <img
          src={makingBrush}
          alt="Cabeleireira segurando uma mecha de cabelo para corte"
        />
      </div>
    </section>
  );
}

export default WhoWeAre;

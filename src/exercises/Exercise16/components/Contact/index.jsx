import { MAIL_TO } from '../../../../constants';
import styles from './style.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h2>CONTATO</h2>
      <div>
        <p>Leandro Medeiros</p>
        <a href={MAIL_TO}>medvedevleandro@outlook.com</a>
        <p>(21) 98358-6618</p>
      </div>
    </section>
  );
}

export default Contact;

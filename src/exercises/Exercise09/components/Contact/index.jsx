import { IFRAME_URL } from '../../../../constants';
import ScrollToTopIcon from '../ScrollToTopIcon';
import styles from './style.module.css';

const { container, form } = styles;

function Contact() {
  return (
    <div id="contact" className={container}>
      <h2>Contato</h2>
      <ul>
        <li>(11) 97800-1212</li>
        <li>
          <a href="mailto:vanessa.medeiros@hairstudio.com">
            vanessa.medeiros@hairstudio.com
          </a>
        </li>
        <li>Segunda a sábado, das 9h00 às 18h00</li>
        <li>
          <address>
            Rodovia Alkindar Monteiro Junqueira, s/n - Km 53 - Itapechinga,
            Bragança Paulista - SP, 12918-900
          </address>
        </li>
      </ul>
      <iframe
        src={IFRAME_URL}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <h3>Mensagem</h3>
      <form className={form}>
        <label htmlFor="name">Nome</label>
        <input id="name" placeholder="Digite seu nome" />
        <label htmlFor="email">E-mail</label>
        <input id="email" placeholder="Digite seu melhor e-mail" />
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" placeholder="Deixe-nos uma mensagem"></textarea>
        <button type="button">ENVIAR</button>
      </form>
      <ScrollToTopIcon />
    </div>
  );
}

export default Contact;

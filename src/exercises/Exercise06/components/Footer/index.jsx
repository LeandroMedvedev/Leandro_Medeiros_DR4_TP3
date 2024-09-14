import styles from './style.module.css';

const { footer } = styles;

function Footer() {
  return (
    <footer className={footer}>
      <p>&copy; Todos os direitos reservados | Infnet 2024</p>
    </footer>
  );
}

export default Footer;

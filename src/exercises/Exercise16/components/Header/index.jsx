import styles from './style.module.css';
import terminal from '../../../../assets/images/leandro/techs/terminal.svg';
import HamburgerMenu from '../HamburgerMenu';
import Svg from '../Svg';

function Header() {
  return (
    <header className={styles.header}>
      <Svg className={styles.logoIcon} alt="Terminal" src={terminal} />

      <HamburgerMenu />

      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#aboutMe">Sobre mim</a>
          </li>
          <li className={styles.listItem}>
            <a href="#skills">Habilidades</a>
          </li>
          <li className={styles.listItem}>
            <a href="#projects">Projetos</a>
          </li>
          <li className={styles.listItem}>
            <a href="#contact">Contato</a>
          </li>
          <li className={styles.listItem}>
            <a href="#education">Educação</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

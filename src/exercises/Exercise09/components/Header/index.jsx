import styles from './style.module.css';
import HamburgerMenu from '../HamburgerMenu';
import Icon from '../Icon';

const { header, logoIcon, list, listItem } = styles;

function Header() {
  return (
    <header className={header}>
      <Icon className={logoIcon} />

      <HamburgerMenu />

      <nav>
        <ul className={list}>
          <li className={listItem}>
            <a href="#home">Home</a>
          </li>
          <li className={listItem}>
            <a href="#whoWeAre">Quem somos</a>
          </li>
          <li className={listItem}>
            <a href="#products">Produtos</a>
          </li>
          <li className={listItem}>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

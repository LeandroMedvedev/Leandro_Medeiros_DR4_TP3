import styles from './style.module.css';
import womanWithLongHair from '../../../../assets/icons/woman-with-long-hair.svg';
import HamburgerMenu from '../HamburgerMenu';

const { header, list, listItem } = styles;

function Header() {
  return (
    <header className={header}>
      <img src={womanWithLongHair} alt="Female hairs icon" />

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

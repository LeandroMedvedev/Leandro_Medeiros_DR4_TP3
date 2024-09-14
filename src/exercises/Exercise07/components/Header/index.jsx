import SquareIcon from '../../../../assets/icons/x-square.svg';

import styles from './style.module.css';

const { header } = styles;

function Header() {
  return (
    <header className={header}>
      <img src={SquareIcon} alt="X square icon" />
      <span>Header</span>
    </header>
  );
}

export default Header;

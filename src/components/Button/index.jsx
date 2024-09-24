import styles from './style.module.css';
import addIcon from '../../assets/svgs/add-icon.svg';
import Svg from '../Svg';

function Button({ disabled, onClick, text }) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      <Svg className={styles.icon} src={addIcon} alt="Ícone de adição" />
      {text}
    </button>
  );
}

export default Button;

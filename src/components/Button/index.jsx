import styles from './style.module.css';
import Svg from '../Svg';
import { BUTTON_ICON_CONFIG } from '../../constants';

function Button({ disabled, onClick, text }) {
  const lowerText = text.toLowerCase();
  const { className = '', src = '' } = BUTTON_ICON_CONFIG[lowerText] || {};

  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Svg src={src} />
      {text}
    </button>
  );
}

export default Button;

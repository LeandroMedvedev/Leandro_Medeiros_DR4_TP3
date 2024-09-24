import styles from './style.module.css';

function Input({ onChange, placeholder, value }) {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      maxLength={80}
    />
  );
}

export default Input;

import { useState } from 'react';

import Button from '../../../../components/Button';
import styles from './style.module.css';

function TodoItem({ task }) {
  const [isConcluded, setIsConcluded] = useState(false);

  function handleConclude() {
    setIsConcluded(true);
  }

  return (
    <li className={isConcluded ? styles.concluded : styles.todoItem}>
      <span>{task}</span>
      <Button text="Concluir" onClick={handleConclude} />
    </li>
  );
}

export default TodoItem;

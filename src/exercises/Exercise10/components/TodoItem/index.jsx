import { useState } from 'react';

import Button from '../../../../components/Button';
import styles from './style.module.css';

function TodoItem({ onTaskDelete, task }) {
  const [isConcluded, setIsConcluded] = useState(false);

  function handleConclude() {
    setIsConcluded(true);
  }

  function handleDelete() {
    onTaskDelete(task);
  }

  return (
    <li className={isConcluded ? styles.concluded : styles.todoItem}>
      <span>{task}</span>
      <div className={styles.containerButton}>
        <Button
          text="Concluir"
          onClick={handleConclude}
          disabled={isConcluded}
        />
        <Button text="Excluir" onClick={handleDelete} />
      </div>
    </li>
  );
}

export default TodoItem;

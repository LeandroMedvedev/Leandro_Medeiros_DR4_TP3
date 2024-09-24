import { useState } from 'react';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import styles from './style.module.css';

function TodoItem({ onTaskDelete, task }) {
  const [isConcluded, setIsConcluded] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // alternar entre edição e visualização
  const [editedTask, setEditedTask] = useState(task); // armazenar o valor editado da tarefa

  function handleConclude() {
    setIsConcluded(true);
  }

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  function handleTaskChange(event) {
    setEditedTask(event.target.value);
  }

  function handleSaveEdit() {
    setIsEditing(false);
  }

  function handleDelete() {
    onTaskDelete(task);
  }

  return (
    <li className={isConcluded ? styles.concluded : styles.todoItem}>
      {isEditing ? (
        <Input
          className={styles.input}
          value={editedTask}
          onBlur={handleSaveEdit}
          onChange={handleTaskChange}
          placeholder="Editar tarefa"
        />
      ) : (
        <span>{editedTask}</span>
      )}
      <div className={styles.containerButton}>
        <Button
          className={isConcluded && styles.hiddenButton}
          text="Concluir"
          onClick={handleConclude}
          disabled={isConcluded}
        />
        <Button text="Excluir" onClick={handleDelete} />
        <Button text={isEditing ? 'Salvar' : 'Editar'} onClick={handleEdit} />
      </div>
    </li>
  );
}

export default TodoItem;

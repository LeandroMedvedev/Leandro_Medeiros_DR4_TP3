import { useState } from 'react';

import styles from './style.module.css';
import TodoItem from '../TodoItem';
import Button from '../../../../components/Button';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask() {
    if (!!newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }

  function handleTaskInput(event) {
    setNewTask(event.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={newTask}
        onChange={handleTaskInput}
        placeholder="Adicionar nova tarefa"
      />
      <Button onClick={handleAddTask} text="Adicionar" />
      <ul className={styles.container}>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

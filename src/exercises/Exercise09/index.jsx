import { useState } from 'react';

import styles from './style.module.css';
import Button from '../../components/Button';
import TodoList from './components/TodoList';

function Exercise09() {
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
      <h1>Lista de Tarefas</h1>
      <input
        className={styles.input}
        value={newTask}
        onChange={handleTaskInput}
        placeholder="Adicionar nova tarefa"
      />
      <Button
        onClick={handleAddTask}
        text="Adicionar"
        disabled={!newTask.trim()}
      />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default Exercise09;

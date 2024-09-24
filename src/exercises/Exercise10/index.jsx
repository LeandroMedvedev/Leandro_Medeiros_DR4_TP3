import { useState } from 'react';

import styles from './style.module.css';
import Button from '../../components/Button';
import Input from '../../components/Input';
import TodoList from './components/TodoList';

function Exercise10() {
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

  function handleTaskDelete(taskToDelete) {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  }

  return (
    <div className={styles.container}>
      <h1>Lista de Tarefas</h1>
      <Input
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
      <TodoList tasks={tasks} onTaskDelete={handleTaskDelete} />
    </div>
  );
}

export default Exercise10;

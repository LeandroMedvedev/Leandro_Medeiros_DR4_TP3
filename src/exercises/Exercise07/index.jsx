import TodoList from './components/TodoList';
import styles from './style.module.css';

function Exercise07() {
  return (
    <div className={styles.container}>
      <h1>Lista de Tarefas</h1>
      <TodoList />
    </div>
  );
}

export default Exercise07;

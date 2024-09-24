import styles from './style.module.css';
import TodoItem from '../TodoItem';

function TodoList({ onTaskDelete, tasks }) {
  return (
    <div className={styles.container}>
      <ul className={styles.container}>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onTaskDelete={onTaskDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

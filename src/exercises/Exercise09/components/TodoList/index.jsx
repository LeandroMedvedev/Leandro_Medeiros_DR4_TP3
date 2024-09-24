import styles from './style.module.css';
import TodoItem from '../TodoItem';

function TodoList({ tasks }) {
  return (
    <div className={styles.container}>
      <ul className={styles.container}>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

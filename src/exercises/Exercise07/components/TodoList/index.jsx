import styles from './style.module.css';
import { TASKS } from '../../../../constants';
import TodoItem from '../TodoItem';

function TodoList() {
  return (
    <ul className={styles.container}>
      {TASKS.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  );
}

export default TodoList;

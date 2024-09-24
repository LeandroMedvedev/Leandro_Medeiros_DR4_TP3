import List from './components/List';
import style from './style.module.css';
import { NUMBERS } from '../../constants';

function Exercise12() {
  return (
    <div className={style.container}>
      <h1>Lista de Números</h1>
      <List numbers={NUMBERS} />
    </div>
  );
}

export default Exercise12;

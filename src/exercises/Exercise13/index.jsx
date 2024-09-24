import style from './style.module.css';
import Temperature from './components/Temperature';

function Exercise13() {
  return (
    <div className={style.container}>
      <Temperature temperature={25} />
    </div>
  );
}

export default Exercise13;

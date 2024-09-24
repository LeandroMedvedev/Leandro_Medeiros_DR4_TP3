import style from './style.module.css';
import StatusBadge from './components/StatusBadge';

function Exercise16() {
  return (
    <div className={style.container}>
      <StatusBadge status="ativo" />
      {/* <StatusBadge status="inativo" /> */}
      {/* <StatusBadge status="pendente" /> */}
    </div>
  );
}

export default Exercise16;

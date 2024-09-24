import styles from './style.module.css';
import badge from '../../../../assets/svgs/badge.svg';
import Svg from '../../../../components/Svg';

function StatusBadge({ status }) {
  return (
    <div className={styles.container}>
      <Svg
        src={badge}
        className={`${
          status === 'ativo'
            ? styles.active
            : status === 'inativo'
              ? styles.inactive
              : status === 'pendente'
                ? styles.pending
                : null
        }
        `}
      />
    </div>
  );
}

export default StatusBadge;

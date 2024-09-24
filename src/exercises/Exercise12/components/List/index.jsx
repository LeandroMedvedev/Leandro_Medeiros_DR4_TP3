import styles from './style.module.css';
import Svg from '../../../../components/Svg';
import emptyListIcon from '../../../../assets/svgs/depressed-person-sitting-icon.svg';

function List({ numbers }) {
  return (
    <div className={styles.container}>
      {numbers.length ? (
        numbers.map((number, index) => <span key={index}>{number}</span>)
      ) : (
        <>
          <p>A lista está vazia.</p>
          <Svg src={emptyListIcon} />
        </>
      )}
    </div>
  );
}

export default List;

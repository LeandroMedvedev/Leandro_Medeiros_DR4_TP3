import styles from './style.module.css';
import { formatPrice } from '../../../../utils';

function Product({ image, alt, name, description, price }) {
  return (
    <div className={styles.container}>
      <img src={image} alt={alt} />
      <h3>{name}</h3>
      <p>{description ? description : 'Descrição não disponível'}</p>
      <p>
        <strong>{formatPrice(price)}</strong>
      </p>
    </div>
  );
}

export default Product;

import style from './style.module.css';
import Product from './components/Product';
import { PRODUCT } from '../../constants';

function Exercise15() {
  return (
    <div className={style.container}>
      <h1>Vila Romana</h1>
      <Product
        image={PRODUCT.image}
        alt={PRODUCT.alt}
        name={PRODUCT.name}
        description={PRODUCT.description}
        price={PRODUCT.price}
      />
    </div>
  );
}

export default Exercise15;

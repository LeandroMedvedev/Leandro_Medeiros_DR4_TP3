import styles from './style.module.css';

import keune from '../../../../assets/images/vanessa/keune.jpg';
import keuneTintaColor from '../../../../assets/images/vanessa/keune-tinta-color.jpg';
import lamer from '../../../../assets/images/vanessa/lamer.jpg';
import lancome from '../../../../assets/images/vanessa/lancome.jpg';
import lorealLashParadise from '../../../../assets/images/vanessa/loreal-lash-paradise.jpg';
import lorealMask from '../../../../assets/images/vanessa/loreal-mask.jpg';

const { container, containerImages } = styles;

function Products() {
  return (
    <div id="products" className={container}>
      <h2>Produtos</h2>
      <div className={containerImages}>
        <img src={keuneTintaColor} alt="Keune Tinta Color" />
        <img src={lorealLashParadise} alt="L'Oréal Lash Paradise" />
        <img src={keune} alt="Keune shampoo and conditioner" />
        <img src={lancome} alt="Lancome Idôle" />
        <img src={lorealMask} alt="L'Oréal mask" />
        <img src={lamer} alt="Lamer moisturize" />
      </div>
    </div>
  );
}

export default Products;

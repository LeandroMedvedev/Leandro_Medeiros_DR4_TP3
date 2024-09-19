/* eslint-disable react/prop-types */
import { ReactSVG } from 'react-svg';
import styles from './style.module.css';

function Svg({ alt, src }) {
  return (
    <ReactSVG
      className={styles.icon}
      alt={alt}
      src={src}
      onError={(error) => console.error('Error loading SVG:', error)}
    />
  );
}

export default Svg;

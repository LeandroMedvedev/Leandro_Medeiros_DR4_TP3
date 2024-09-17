/* eslint-disable react/prop-types */
import { ReactSVG } from 'react-svg';
import womanWithLongHair from '../../../../assets/icons/woman-with-long-hair.svg';

function Icon({ className }) {
  return (
    <ReactSVG
      src={womanWithLongHair}
      className={className}
      onError={(error) => console.error('Error loading SVG:', error)}
    />
  );
}

export default Icon;

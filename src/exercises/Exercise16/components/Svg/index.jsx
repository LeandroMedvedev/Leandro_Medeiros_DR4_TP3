/* eslint-disable react/prop-types */
import { ReactSVG } from 'react-svg';

function Svg({ alt, className, src }) {
  return (
    <ReactSVG
      className={className}
      alt={alt}
      src={src}
      onError={(error) => console.error('Error loading SVG:', error)}
    />
  );
}

export default Svg;

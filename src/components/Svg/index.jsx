import { ReactSVG } from 'react-svg';

function Svg({ src }) {
  return (
    <ReactSVG
      src={src}
      onError={(error) => console.error('Error loading SVG:', error)}
    />
  );
}

export default Svg;

import styles from './style.module.css';
import Svg from '../../../../components/Svg';
import coldFace from '../../../../assets/svgs/cold-face.svg';
import hotFace from '../../../../assets/svgs/hot-face.svg';

function Temperature({ temperature }) {
  return (
    <div className={styles.container}>
      {temperature > 25 ? (
        <>
          <p>Está quente!</p>
          <Svg src={hotFace} />
        </>
      ) : (
        <>
          <p>Está frio!</p>
          <Svg src={coldFace} />
        </>
      )}
    </div>
  );
}

export default Temperature;

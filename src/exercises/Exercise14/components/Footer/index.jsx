import { SOCIAL_MEDIA_ICON, SOCIAL_MEDIA_URL } from '../../../../constants';
import styles from './style.module.css';
import Svg from '../Svg';

function Footer() {
  return (
    <footer>
      <div className={styles.name}>&copy; 2024 Leandro Medvedev</div>
      <div>
        <div>
          <ul className={styles.socialMedia}>
            <li>
              <a
                href={SOCIAL_MEDIA_URL.facebook}
                rel="noreferrer"
                target="_blank"
              >
                <Svg src={SOCIAL_MEDIA_ICON.facebook} alt="Facebook logo" />
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_MEDIA_URL.linkedIn}
                rel="noreferrer"
                target="_blank"
              >
                <Svg src={SOCIAL_MEDIA_ICON.linkedIn} alt="LinkedIn logo" />
              </a>
            </li>

            <li>
              <a
                href={SOCIAL_MEDIA_URL.gitHub}
                rel="noreferrer"
                target="_blank"
              >
                <Svg src={SOCIAL_MEDIA_ICON.gitHub} alt="GitHub logo" />
              </a>
            </li>

            <li>
              <a href={SOCIAL_MEDIA_URL.x} rel="noreferrer" target="_blank">
                <Svg src={SOCIAL_MEDIA_ICON.x} alt="X logo" />
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_MEDIA_URL.youTube}
                rel="noreferrer"
                target="_blank"
              >
                <Svg src={SOCIAL_MEDIA_ICON.youTube} alt="YouTube logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

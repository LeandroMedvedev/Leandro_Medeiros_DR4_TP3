import styles from './style.module.css';
import { SKILLS, SVG_MAPPING } from '../../../../constants';

const { category, container, icon, skillItem } = styles;

function Skills() {
  return (
    <section id="skills" className={container}>
      <h2>HABILIDADES</h2>
      {Object.keys(SKILLS).map((section) => (
        <div className={category} key={section}>
          <h3>{section}</h3>
          {
            <ul>
              {SKILLS[section].map((skill, index) => {
                const SvgIcon = SVG_MAPPING[skill];
                return (
                  <li className={skillItem} key={index}>
                    {SvgIcon && <SvgIcon className={icon} title={skill} />}
                  </li>
                );
              })}
            </ul>
          }
        </div>
      ))}
    </section>
  );
}

export default Skills;

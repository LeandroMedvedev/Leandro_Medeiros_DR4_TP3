import { COURSES } from '../../../../constants';
import Card from '../Cards/Education';
import styles from './style.module.css';

function Education() {
  return (
    <section id="education" className={styles.container}>
      <h2>EDUCAÇÃO</h2>
      <div>
        {COURSES.map((c, index) => (
          <Card
            key={index}
            course={c.course}
            institution={c.institution}
            period={c.period}
          />
        ))}
      </div>
    </section>
  );
}

export default Education;

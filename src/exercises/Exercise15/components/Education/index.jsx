import { COURSES } from '../../../../constants';
import Card from '../Card';
import styles from './style.module.css';

function Education() {
  return (
    <section className={styles.container}>
      <h1>Educação</h1>
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

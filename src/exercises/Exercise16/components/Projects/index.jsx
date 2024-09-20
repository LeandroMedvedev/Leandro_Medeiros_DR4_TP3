import Card from '../Cards/Project';
import { PROJECT_DATA } from '../../../../constants';
import styles from './style.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <div id={styles.titleContainer}>
        <h2>PROJETOS</h2>
      </div>

      <p id={styles.mainParagraph}>
        Algumas das aplicações desenvolvidas ao longo do meu curso na Kenzie
        Academy e no Instituto Infnet. As imagens mostram a versão{' '}
        <em>mobile</em> da aplicação.
      </p>
      {PROJECT_DATA.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          tech={project.tech}
          imgSrc={project.imgSrc}
          imgAlt={project.imgAlt}
          liveLink={project.liveLink}
          githubLink={project.githubLink}
          spanText={project.spanText}
        />
      ))}
    </section>
  );
}

export default Projects;

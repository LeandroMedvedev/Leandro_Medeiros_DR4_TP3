import styles from '../components/Button/style.module.css';
import addIcon from '../assets/svgs/add-icon.svg';
import completionIcon from '../assets/svgs/completion-icon.svg';
import deleteIcon from '../assets/svgs/delete-icon.svg';

const BUTTON_ICON_CONFIG = {
  adicionar: {
    src: addIcon,
    className: styles.greenButton,
  },
  concluir: {
    src: completionIcon,
    className: styles.greenButton,
  },
  excluir: {
    src: deleteIcon,
    className: styles.redButton,
  },
};

const TASKS = [
  'Aprender sobre componentes',
  'Compreender o estado e props',
  'Utilizar hooks como useState e useEffect',
  'Implementar roteamento com react-router',
  'Gerenciar estado global com Context API ou Redux',
  'Criar formulários e gerenciar eventos',
  'Estilizar componentes com CSS-in-JS ou styled-components',
  'Testar componentes com Jest e React Testing Library',
  'Otimizar performance com memoization e lazy loading',
  'Explorar o uso de TypeScript com React',
];

export { BUTTON_ICON_CONFIG, TASKS };

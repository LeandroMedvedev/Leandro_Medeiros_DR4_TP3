import styles from '../components/Button/style.module.css';
import addIcon from '../assets/svgs/add-icon.svg';
import completionIcon from '../assets/svgs/completion-icon.svg';
import editIcon from '../assets/svgs/edit-icon.svg';
import saveIcon from '../assets/svgs/save-icon.svg';
import deleteIcon from '../assets/svgs/delete-icon.svg';
import tie from '../assets/svgs/tie.svg';

const BUTTON_ICON_CONFIG = {
  adicionar: {
    src: addIcon,
    className: styles.greenButton,
  },
  concluir: {
    src: completionIcon,
    className: styles.greenButton,
  },
  editar: {
    src: editIcon,
    className: styles.blueButton,
  },
  excluir: {
    src: deleteIcon,
    className: styles.redButton,
  },
  salvar: {
    src: saveIcon,
    className: styles.blueButton,
  },
};

const NUMBERS = [];
// const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PRODUCT = {
  image: tie,
  alt: 'Gravata rosa em poliéster',
  name: 'Gravata Regular em Poliéster',
  description:
    'A gravata Vila Romana em jacquard de microfilamentos de poliéster, possui padronagem exclusiva e largura máxima de 7 cm em sua ponta, de modelagem regular. É um acessório essencial no complemento do visual social.',
  price: 169.9,
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

export { BUTTON_ICON_CONFIG, NUMBERS, PRODUCT, TASKS };

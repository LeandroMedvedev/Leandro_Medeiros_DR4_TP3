import { ReactComponent as AngularIcon } from '../assets/images/leandro/techs/angular.svg';
import { ReactComponent as BashIcon } from '../assets/images/leandro/techs/bash.svg';
import { ReactComponent as BootstrapIcon } from '../assets/images/leandro/techs/bootstrap.svg';
import { ReactComponent as ChakraUiIcon } from '../assets/images/leandro/techs/chakra-ui.svg';
import { ReactComponent as CSharpIcon } from '../assets/images/leandro/techs/csharp.svg';
import { ReactComponent as CssIcon } from '../assets/images/leandro/techs/css.svg';
import { ReactComponent as CypressIcon } from '../assets/images/leandro/techs/cypress.svg';
import { ReactComponent as DjangoIcon } from '../assets/images/leandro/techs/django.svg';
import { ReactComponent as DockerIcon } from '../assets/images/leandro/techs/docker.svg';
import { ReactComponent as DotNetIcon } from '../assets/images/leandro/techs/dotnet.svg';
import { ReactComponent as ExpressIcon } from '../assets/images/leandro/techs/express.svg';
import { ReactComponent as FlaskIcon } from '../assets/images/leandro/techs/flask.svg';
import { ReactComponent as GitHubIcon } from '../assets/images/leandro/techs/github.svg';
import { ReactComponent as GunicornIcon } from '../assets/images/leandro/techs/gunicorn.svg';
import { ReactComponent as HerokuIcon } from '../assets/images/leandro/techs/heroku.svg';
import { ReactComponent as HtmlIcon } from '../assets/images/leandro/techs/html.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/images/leandro/techs/javascript.svg';
import { ReactComponent as JestIcon } from '../assets/images/leandro/techs/jest.svg';
import { ReactComponent as LookerStudioIcon } from '../assets/images/leandro/techs/looker-studio.svg';
import { ReactComponent as MarkdownIcon } from '../assets/images/leandro/techs/markdown.svg';
import { ReactComponent as MicrosoftSqlServerIcon } from '../assets/images/leandro/techs/microsoft-sql-server.svg';
import { ReactComponent as MongoDbIcon } from '../assets/images/leandro/techs/mongo-db.svg';
import { ReactComponent as NginxIcon } from '../assets/images/leandro/techs/nginx.svg';
import { ReactComponent as NodeJsIcon } from '../assets/images/leandro/techs/nodejs-02.svg';
import { ReactComponent as PostgreSqlIcon } from '../assets/images/leandro/techs/postgre-sql.svg';
import { ReactComponent as PowerBiIcon } from '../assets/images/leandro/techs/power-bi.svg';
import { ReactComponent as PytestIcon } from '../assets/images/leandro/techs/pytest.svg';
import { ReactComponent as PythonIcon } from '../assets/images/leandro/techs/python.svg';
import { ReactComponent as ReactIcon } from '../assets/images/leandro/techs/react.svg';
import { ReactComponent as RenderIcon } from '../assets/images/leandro/techs/render.svg';
import { ReactComponent as SqlIcon } from '../assets/images/leandro/techs/sql.svg';
import { ReactComponent as SqLiteIcon } from '../assets/images/leandro/techs/sqlite.svg';
import { ReactComponent as StyledComponentsIcon } from '../assets/images/leandro/techs/styled-components.svg';
import { ReactComponent as SwaggerIcon } from '../assets/images/leandro/techs/swagger.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/images/leandro/techs/typescript.svg';
import { ReactComponent as VercelIcon } from '../assets/images/leandro/techs/vercel.svg';

import kenzieShopVintage from '../assets/images/leandro/projects/kenzieshop.png';
import burgerKenzie from '../assets/images/leandro/projects/burgerkenzie.png';
import eventsManagement from '../assets/images/leandro/projects/eventsmanagement.png';
import kenzieHub from '../assets/images/leandro/projects/kenziehub.png';
import habitsChange from '../assets/images/leandro/projects/habitschange.png';

import facebook from '../assets/icons/leandro/social-media/facebook.svg';
import gitHub from '../assets/icons/leandro/social-media/github-circle.svg';
import linkedIn from '../assets/icons/leandro/social-media/linkedin.svg';
import x from '../assets/icons/leandro/social-media/x.svg';
import youTube from '../assets/icons/leandro/social-media/youtube.svg';

const SOCIAL_MEDIA_ICON = {
  facebook,
  gitHub,
  linkedIn,
  x,
  youTube,
};

const SVG_MAPPING = {
  Angular: AngularIcon,
  Bash: BashIcon,
  Bootstrap: BootstrapIcon,
  'Chakra UI': ChakraUiIcon,
  'C#': CSharpIcon,
  CSS: CssIcon,
  Cypress: CypressIcon,
  Django: DjangoIcon,
  Docker: DockerIcon,
  '.NET': DotNetIcon,
  Express: ExpressIcon,
  GitHub: GitHubIcon,
  Gunicorn: GunicornIcon,
  Heroku: HerokuIcon,
  HTML: HtmlIcon,
  JavaScript: JavaScriptIcon,
  Jest: JestIcon,
  'Looker Studio': LookerStudioIcon,
  Markdown: MarkdownIcon,
  Nginx: NginxIcon,
  'Node.js': NodeJsIcon,
  'Power BI': PowerBiIcon,
  Pytest: PytestIcon,
  Python: PythonIcon,
  Flask: FlaskIcon,
  React: ReactIcon,
  Render: RenderIcon,
  SQL: SqlIcon,
  SQLite: SqLiteIcon,
  MongoDB: MongoDbIcon,
  'Microsoft SQL Server': MicrosoftSqlServerIcon,
  PostgreSQL: PostgreSqlIcon,
  'Styled-Components': StyledComponentsIcon,
  Swagger: SwaggerIcon,
  TypeScript: TypeScriptIcon,
  Vercel: VercelIcon,
};

const SKILLS = {
  'Front-End': [
    'Angular',
    'Bootstrap',
    'Chakra UI',
    'CSS',
    'HTML',
    'JavaScript',
    'React',
    'Styled-Components',
    'TypeScript',
  ],
  'Back-End': ['C#', 'Django', 'Express', '.NET', 'Node.js', 'Python', 'Flask'],
  'DevOps / Infraestrutura': [
    'Docker',
    'GitHub',
    'Gunicorn',
    'Heroku',
    'Nginx',
    'Render',
    'Vercel',
  ],
  'Banco de Dados': [
    'SQL',
    'SQLite',
    'MongoDB',
    'Microsoft SQL Server',
    'PostgreSQL',
  ],
  Testes: ['Cypress', 'Jest', 'Pytest'],
  'Linguagens de Script e Utilitários': ['Bash', 'Markdown'],
  'Ferramentas de Análise e Visualização': ['Looker Studio', 'Power BI'],
  'APIs e Documentação': ['Swagger'],
};

const PROJECT_DATA = [
  {
    title: 'Kenzie Shop Vintage',
    description:
      'Kenzie Shop é um e-commerce de duas páginas: uma principal em que são renderizados os produtos, cada qual possuindo um botão para adição ao carrinho; e o carrinho de compras, local em que são renderizados os produtos selecionados.',
    tech: 'JavaScript | React | Context',
    imgSrc: kenzieShopVintage,
    imgAlt: 'Kenzie Shop mobile app image',
    liveLink: 'https://kenzieshop-context-api-eosin.vercel.app/',
    githubLink:
      'https://github.com/Kenzie-Academy-Brasil-Developers/kenzieshop-vintage',
    spanText: 'carrinho de e-commerce',
  },
  {
    title: 'Events Management',
    description:
      'Plataforma que auxilia na administração de bebidas para eventos: casamentos, formaturas, confraternizações. O administrador precisa selecionar quais bebidas vão para cada evento e verificar a lista de cada evento.',
    tech: 'JavaScript | React | Context',
    imgSrc: eventsManagement,
    imgAlt: 'Events Management mobile app image',
    liveLink: 'https://events-management-seven.vercel.app/',
    githubLink:
      'https://github.com/Kenzie-Academy-Brasil-Developers/events-management',
    spanText: 'administração de bebidas para eventos',
  },
  {
    title: 'Hamburgueria Kenzie',
    description:
      'Lista de produtos que podem ser adicionados e posteriormente removidos de um carrinho de compras. Um dos meus primeiros projetos em React.',
    tech: 'JavaScript | React',
    imgSrc: burgerKenzie,
    imgAlt: 'Kenzie Burger mobile app image',
    liveLink: 'https://hamburgueria-kenzie-indol.vercel.app/',
    githubLink:
      'https://github.com/Kenzie-Academy-Brasil-Developers/kenzie-burger',
    spanText: 'e-commerce de hambúrgueres',
  },
  {
    title: 'Kenzie Hub',
    description:
      'Aplicação que permite a desenvolvedores cadastrarem seus projetos e tecnologias aprendidas. Possui uma página inicial de cadastro, outra de login e, por fim, o dashboard.',
    tech: 'JavaScript | React | Context',
    imgSrc: kenzieHub,
    imgAlt: 'Kenzie Hub mobile app image',
    liveLink: 'https://class-2b15-kenziehub.vercel.app/',
    githubLink: 'https://github.com/LeandroMedvedev/kenzie-hub',
    spanText: 'hub de portfólios de programadores',
  },
  {
    title: 'Habits Change',
    description:
      'Plataforma de gestão de hábitos que permite ao usuário gerir seus hábitos e participar de grupos com outras pessoas com a mesma categoria de hábitos e metas.',
    tech: 'JavaScript | React | Context',
    imgSrc: habitsChange,
    imgAlt: 'Habits Change mobile app image',
    liveLink: 'https://habits-1.vercel.app/',
    githubLink: 'https://github.com/LeandroMedvedev/habits-change',
    spanText: 'gestão de hábitos',
  },
];

const MAIL_TO =
  'mailto:medvedevleandro@outlook.com?body=Olá%20Leandro,%0D%0AEspero%20que%20esteja%20bem!';

const IFRAME_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.9998109221574!2d-46.570707625445905!3d-22.9701065401356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec96c707c301b%3A0x916c07d2a7f4bebc!2sBragan%C3%A7a%20Shopping%20Center!5e1!3m2!1spt-BR!2sbr!4v1726464481336!5m2!1spt-BR!2sbr';

const SOCIAL_MEDIA_URL = {
  facebook: 'https://www.facebook.com/leandromedvedev',
  gitHub: 'https://github.com/LeandroMedvedev',
  linkedIn: 'https://www.linkedin.com/in/leandromedvedev/',
  x: 'https://twitter.com/EvLeandr',
  youTube: 'https://www.youtube.com/@leandromedvedev',
};

export {
  IFRAME_URL,
  PROJECT_DATA,
  MAIL_TO,
  SKILLS,
  SOCIAL_MEDIA_ICON,
  SOCIAL_MEDIA_URL,
  SVG_MAPPING,
};

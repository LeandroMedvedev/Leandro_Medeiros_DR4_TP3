import { ReactComponent as AngularIcon } from '../assets/images/leandro/angular.svg';
import { ReactComponent as BashIcon } from '../assets/images/leandro/bash.svg';
import { ReactComponent as BootstrapIcon } from '../assets/images/leandro/bootstrap.svg';
import { ReactComponent as ChakraUiIcon } from '../assets/images/leandro/chakra-ui.svg';
import { ReactComponent as CSharpIcon } from '../assets/images/leandro/csharp.svg';
import { ReactComponent as CssIcon } from '../assets/images/leandro/css.svg';
import { ReactComponent as CypressIcon } from '../assets/images/leandro/cypress.svg';
import { ReactComponent as DjangoIcon } from '../assets/images/leandro/django.svg';
import { ReactComponent as DockerIcon } from '../assets/images/leandro/docker.svg';
import { ReactComponent as DotNetIcon } from '../assets/images/leandro/dotnet.svg';
import { ReactComponent as ExpressIcon } from '../assets/images/leandro/express.svg';
import { ReactComponent as FlaskIcon } from '../assets/images/leandro/flask.svg';
import { ReactComponent as GitHubIcon } from '../assets/images/leandro/github.svg';
import { ReactComponent as GunicornIcon } from '../assets/images/leandro/gunicorn.svg';
import { ReactComponent as HerokuIcon } from '../assets/images/leandro/heroku.svg';
import { ReactComponent as HtmlIcon } from '../assets/images/leandro/html.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/images/leandro/javascript.svg';
import { ReactComponent as JestIcon } from '../assets/images/leandro/jest.svg';
import { ReactComponent as LookerStudioIcon } from '../assets/images/leandro/looker-studio.svg';
import { ReactComponent as MarkdownIcon } from '../assets/images/leandro/markdown.svg';
import { ReactComponent as MicrosoftSqlServerIcon } from '../assets/images/leandro/microsoft-sql-server.svg';
import { ReactComponent as MongoDbIcon } from '../assets/images/leandro/mongo-db.svg';
import { ReactComponent as NginxIcon } from '../assets/images/leandro/nginx.svg';
import { ReactComponent as NodeJsIcon } from '../assets/images/leandro/nodejs-02.svg';
import { ReactComponent as PostgreSqlIcon } from '../assets/images/leandro/postgre-sql.svg';
import { ReactComponent as PowerBiIcon } from '../assets/images/leandro/power-bi.svg';
import { ReactComponent as PytestIcon } from '../assets/images/leandro/pytest.svg';
import { ReactComponent as PythonIcon } from '../assets/images/leandro/python.svg';
import { ReactComponent as ReactIcon } from '../assets/images/leandro/react.svg';
import { ReactComponent as RenderIcon } from '../assets/images/leandro/render.svg';
import { ReactComponent as SqlIcon } from '../assets/images/leandro/sql.svg';
import { ReactComponent as SqLiteIcon } from '../assets/images/leandro/sqlite.svg';
import { ReactComponent as StyledComponentsIcon } from '../assets/images/leandro/styled-components.svg';
import { ReactComponent as SwaggerIcon } from '../assets/images/leandro/swagger.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/images/leandro/typescript.svg';
import { ReactComponent as VercelIcon } from '../assets/images/leandro/vercel.svg';

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

const IFRAME_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.9998109221574!2d-46.570707625445905!3d-22.9701065401356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec96c707c301b%3A0x916c07d2a7f4bebc!2sBragan%C3%A7a%20Shopping%20Center!5e1!3m2!1spt-BR!2sbr!4v1726464481336!5m2!1spt-BR!2sbr';

export { SKILLS, SVG_MAPPING, IFRAME_URL };

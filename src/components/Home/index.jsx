import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  return (
    <div className="container">
      <h1 className="title">Fundamentos do React</h1>
      <h2>Teste de Performance 3</h2>

      <ul>
        <li className="item">
          <Link className="link" to="/exercise-one">
            Exercício 01
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-two">
            Exercício 02
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-three">
            Exercício 03
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-four">
            Exercício 04
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-five">
            Exercício 05
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-six">
            Exercício 06
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-seven">
            Exercício 07
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-eight">
            Exercício 08
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-nine">
            Exercício 09
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-ten">
            Exercício 10
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-eleven">
            Exercício 11
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-twelve">
            Exercício 12
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-thirteen">
            Exercício 13
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-fourteen">
            Exercício 14
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-fifteen">
            Exercício 15
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/exercise-sixteen">
            Exercício 16
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  return (
    <div className="container">
      <h1 className="title">Fundamentos do React | Teste de Performance 2</h1>

      <ul>
        <li className="item">
          <Link to="/exercise-one">Exercício 01</Link>
        </li>
        <li className="item">
          <Link to="/exercise-two">Exercício 02</Link>
        </li>
        <li className="item">
          <Link to="/exercise-three">Exercício 03</Link>
        </li>
        <li className="item">
          <Link to="/exercise-four">Exercício 04</Link>
        </li>
        <li className="item">
          <Link to="/exercise-five">Exercício 05</Link>
        </li>
        <li className="item">
          <Link to="/exercise-six">Exercício 06</Link>
        </li>
        <li className="item">
          <Link to="/exercise-seven">Exercício 07</Link>
        </li>
        <li className="item">
          <Link to="/exercise-eight">Exercício 08</Link>
        </li>
        <li className="item">
          <Link to="/exercise-nine">Exercício 09</Link>
        </li>
        <li className="item">
          <Link to="/exercise-ten">Exercício 10</Link>
        </li>
        <li className="item">
          <Link to="/exercise-eleven">Exercício 11</Link>
        </li>
        <li className="item">
          <Link to="/exercise-twelve">Exercício 12</Link>
        </li>
        <li className="item">
          <Link to="/exercise-thirteen">Exercício 13</Link>
        </li>
        <li className="item">
          <Link to="/exercise-fourteen">Exercício 14</Link>
        </li>
        <li className="item">
          <Link to="/exercise-fifteen">Exercício 15</Link>
        </li>
        <li className="item">
          <Link to="/exercise-sixteen">Exercício 16</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

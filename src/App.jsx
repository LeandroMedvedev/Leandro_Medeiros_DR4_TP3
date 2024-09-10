import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Exercise01 from './exercises/Exercise01';
import Exercise02 from './exercises/Exercise02';
import Exercise03 from './exercises/Exercise03';
import Exercise04 from './exercises/Exercise04';
import Exercise05 from './exercises/Exercise05';
import Exercise06 from './exercises/Exercise06';
import Exercise07 from './exercises/Exercise07';
import Exercise08 from './exercises/Exercise08';
import Exercise09 from './exercises/Exercise09';
import Exercise10 from './exercises/Exercise10';
import Exercise11 from './exercises/Exercise11';
import Exercise12 from './exercises/Exercise12';
import Exercise13 from './exercises/Exercise13';
import Exercise14 from './exercises/Exercise14';
import Exercise15 from './exercises/Exercise15';
import Exercise16 from './exercises/Exercise16';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/exercise01'>Exercício 1</Link>
              </li>
              <li>
                <Link to='/exercise02'>Exercício 2</Link>
              </li>
              <li>
                <Link to='/exercise03'>Exercício 3</Link>
              </li>
              <li>
                <Link to='/exercise04'>Exercício 4</Link>
              </li>
              <li>
                <Link to='/exercise05'>Exercício 5</Link>
              </li>
              <li>
                <Link to='/exercise06'>Exercício 6</Link>
              </li>
              <li>
                <Link to='/exercise07'>Exercício 7</Link>
              </li>
              <li>
                <Link to='/exercise08'>Exercício 8</Link>
              </li>
              <li>
                <Link to='/exercise09'>Exercício 9</Link>
              </li>
              <li>
                <Link to='/exercise10'>Exercício 10</Link>
              </li>
              <li>
                <Link to='/exercise11'>Exercício 11</Link>
              </li>
              <li>
                <Link to='/exercise12'>Exercício 12</Link>
              </li>
              <li>
                <Link to='/exercise13'>Exercício 13</Link>
              </li>
              <li>
                <Link to='/exercise14'>Exercício 14</Link>
              </li>
              <li>
                <Link to='/exercise15'>Exercício 15</Link>
              </li>
              <li>
                <Link to='/exercise16'>Exercício 16</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/exercise01' component={Exercise01} />
            <Route path='/exercise01' component={Exercise02} />
            <Route path='/exercise01' component={Exercise03} />
            <Route path='/exercise01' component={Exercise04} />
            <Route path='/exercise01' component={Exercise05} />
            <Route path='/exercise01' component={Exercise06} />
            <Route path='/exercise01' component={Exercise07} />
            <Route path='/exercise01' component={Exercise08} />
            <Route path='/exercise01' component={Exercise09} />
            <Route path='/exercise01' component={Exercise10} />
            <Route path='/exercise01' component={Exercise11} />
            <Route path='/exercise01' component={Exercise12} />
            <Route path='/exercise01' component={Exercise13} />
            <Route path='/exercise01' component={Exercise14} />
            <Route path='/exercise01' component={Exercise15} />
            <Route path='/exercise01' component={Exercise16} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

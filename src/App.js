import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Exercise01 from "./exercises/Exercise01";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/exercise01">Exercício 1</Link>
              </li>
              <li>
                <Link to="/exercise02">Exercício 2</Link>
              </li>
              <li>
                <Link to="/exercise03">Exercício 3</Link>
              </li>
              <li>
                <Link to="/exercise04">Exercício 4</Link>
              </li>
              <li>
                <Link to="/exercise05">Exercício 5</Link>
              </li>
              <li>
                <Link to="/exercise06">Exercício 6</Link>
              </li>
              <li>
                <Link to="/exercise07">Exercício 7</Link>
              </li>
              <li>
                <Link to="/exercise08">Exercício 8</Link>
              </li>
              <li>
                <Link to="/exercise09">Exercício 9</Link>
              </li>
              <li>
                <Link to="/exercise10">Exercício 10</Link>
              </li>
              <li>
                <Link to="/exercise11">Exercício 11</Link>
              </li>
              <li>
                <Link to="/exercise12">Exercício 12</Link>
              </li>
              <li>
                <Link to="/exercise13">Exercício 13</Link>
              </li>
              <li>
                <Link to="/exercise14">Exercício 14</Link>
              </li>
              <li>
                <Link to="/exercise15">Exercício 15</Link>
              </li>
              <li>
                <Link to="/exercise16">Exercício 16</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/exercise01" component={Exercise01} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

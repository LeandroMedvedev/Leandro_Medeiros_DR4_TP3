import { Route, Routes } from 'react-router-dom';
import {
  Exercise01,
  Exercise02,
  Exercise03,
  Exercise04,
  Exercise05,
  Exercise06,
  Exercise07,
  Exercise08,
  Exercise09,
  Exercise10,
  Exercise11,
  Exercise12,
  Exercise13,
  Exercise14,
  Exercise15,
  Exercise16,
  Home,
} from '../components';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/exercise-one" element={<Exercise01 />} />
      <Route path="/exercise-two" element={<Exercise02 />} />
      <Route path="/exercise-three" element={<Exercise03 />} />
      <Route path="/exercise-four" element={<Exercise04 />} />
      <Route path="/exercise-five" element={<Exercise05 />} />
      <Route path="/exercise-six" element={<Exercise06 />} />
      <Route path="/exercise-seven" element={<Exercise07 />} />
      <Route path="/exercise-eight" element={<Exercise08 />} />
      <Route path="/exercise-nine" element={<Exercise09 />} />
      <Route path="/exercise-ten" element={<Exercise10 />} />
      <Route path="/exercise-eleven" element={<Exercise11 />} />
      <Route path="/exercise-twelve" element={<Exercise12 />} />
      <Route path="/exercise-thirteen" element={<Exercise13 />} />
      <Route path="/exercise-fourteen" element={<Exercise14 />} />
      <Route path="/exercise-fifteen" element={<Exercise15 />} />
      <Route path="/exercise-sixteen" element={<Exercise16 />} />
    </Routes>
  );
}

export default AppRoutes;

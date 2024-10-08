import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

import './App.css';
import {useRoutes, HashRouter as Router} from 'react-router-dom';
import Main from "./sections/Main";
import Sudoku from "./projects/Sudoku/Sudoku";

function App() {
  const routes = useRoutes(
      [{
        path: '/',
        element: <Main />
      }
      , {
          path: '/projects',
          children: [
              {path: "sudoku", element: <Sudoku />}
          ]
      }]
  )

  return routes
}

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;

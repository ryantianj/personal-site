import './App.css';
import {useRoutes, BrowserRouter as Router} from 'react-router-dom';
import Main from "./sections/Main";

function App() {
  const routes = useRoutes(
      [{
        path: '/',
        element: <Main />
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

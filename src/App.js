import React from "react";
import './App.css';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import Main from "./sections/Main";
import Sudoku from "./projects/Sudoku/Sudoku";

function App() {
    const router = createHashRouter([
        {
            path: "/",
            element: <Main />,
        }
        , {
            path: "/sudoku",
            element: <Sudoku />
        }
    ])
  return (
      <React.Fragment>
          <RouterProvider router={router}/>
      </React.Fragment>
  )
}

const AppWrapper = () => {
    return (
        <React.Fragment>
            <App />
        </React.Fragment>
    );
};

export default AppWrapper;

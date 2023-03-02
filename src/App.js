import React from "react";
import './App.css';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import Main from "./sections/Main";

function App() {
    const router = createHashRouter([
        {
            path: "/",
            element: <Main />,
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

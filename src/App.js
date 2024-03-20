// client/src/App.js

import React from 'react';
import './App.css';
import Carousel from "./components/carousel"
import About from './components/about';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element: <Carousel/>
    },
    {
      path: "/about",
      element: <About/>
    }
  ])
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;

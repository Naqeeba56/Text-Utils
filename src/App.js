import './App.css';
import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './MyComponents/Home';
import About from './MyComponents/About';


function App() {
  const [mode, setmode] = useState('light'); // it will set light/dark mode
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null)
    }, 2000);
  };

  const togglemodes = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert('Dark mode has been enabled', 'success');
      document.title = "Text-Utils Dark Mode";
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light mode has been enabled', 'success');
      document.title = "Text-Utils Light Mode";
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home  alert={alert}  mode={mode} togglemodes={togglemodes}  showalert={showalert} />
    },
    {
      path: "/About",
      element: <About alert={alert} mode={mode} togglemodes={togglemodes} showalert={showalert}/>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
  
  
};
export default App;

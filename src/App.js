import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode on", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode on", "success");
    }
  };

  const titleChange = () => {
    setInterval(() => {
      document.title = "Clean Now";
    }, 1000);
    setInterval(() => {
      document.title = "Virus!";
    }, 2500);
    setInterval(() => {
      document.title = "Install TextUtils";
    }, 4000);
  };

  titleChange(); // Call titleChange outside the return statement

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>

        <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<Textform msg="Enter the Text to analyze" mode={mode} showalert={showAlert} />} />
          </Routes>
        </div>
      </Router>
     
    </>
  );
}

export default App;

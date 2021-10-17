// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Alert from "./components/Alert";
import Navbar from './components/Navbar'
import About from './components/About';
import TextForm from "./components/TextForm";
// let name="Aditya"
function App() {
  const [DarkMode, setDarkMode] = useState('light');
  const togglemode=()=>{
    if(DarkMode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor="#000865";
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
      <Router>
        
      <Navbar title="text utils" aboutText="about" togglemode={togglemode} mode={DarkMode} />
      <Alert alert="This is alert"/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
        <TextForm heading="Enter the text to analyze" mode={DarkMode}/>
            
          </Route>
        </Switch>
        {/* <About/> */}
        
      </div>
      </Router>
    </>
  );
}

export default App;

// {/* <>
// {/* <h1> this is heading</h1> */}
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React with aditya
//     </a>
//   </header>
// </div>
// </> */}

import logo from './CMEGroup_2c_RGB.png';
import './App.css';
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="CME-App-logo" alt="logo" />
      </header>
      <SimpleMDE />
    </div>
  );
}

export default App;

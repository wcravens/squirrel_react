import logo from './CMEGroup_2c_RGB.png';
import './Root.css';
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function Root() {
  return (
    <div className="Root">
      <header className="Root-header">
        <img src={logo} className="CME-logo" alt="logo" />
      </header>
      <SimpleMDE />
    </div>
  );
}

export default Root;

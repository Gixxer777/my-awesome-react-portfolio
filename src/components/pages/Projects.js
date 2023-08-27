import React from 'react';
import booksearch from '../images/booksearch.png';
import Marvel from '../images/Marvel.png';
import passwordgenerator from '../images/passwordgenerator.png';
import texteditor from '../images/texteditor.png';

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        <img src={booksearch} alt="Book Search" id="booksearch"></img>
      </div>
      <div id="booksearchtext">
        <a href="https://cryptic-inlet-55873-17b85c4bf208.herokuapp.com/">Book Search App</a>
      </div>
      <div>
        <img src={Marvel} alt="Marvel" id="Marvel"></img>
      </div>
      <div id="firstprojecttext">
        <a  href="https://github.com/sydneyloggins/Marvel-Comics">First Project</a>
      </div>
      <div>
        <img src={passwordgenerator} alt="Password Generator" id="passwordgenerator"></img>
      </div>
      <div id="passgeneratortext">
        <a href="https://gixxer777.github.io/my-super-cool-password-generator/">Password Generator</a>
      </div>
      <div>
        <img src={texteditor} alt="Text Editor" id="texteditor"></img>
      </div>
      <div id="texteditortext">
        <a href="https://pacific-bastion-73306-05908a384be4.herokuapp.com/">Text Editor PWA</a>
      </div>        
    </div>
  );
}

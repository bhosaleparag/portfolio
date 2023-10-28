import React from "react";
import reactLogo from "./assets/react-academy.svg";
import htmlLogo from "./assets/html-1.svg";
import JSLogo from "./assets/javascript-1.svg";
import gitLogo from "./assets/git-icon.svg";
import linuxLogo from "./assets/tux.svg";
import cssLogo from "./assets/css-3.svg";
import vsLogo from "./assets/visual-studio-code-1.svg";
import humanImg from "./assets/human_log.png";

function App() {
  return (
    <div className="App">
      <div className="firstPage">
        <div className="left slide-in-left">
          <span className="mesHi">Hello There,</span>
          <span className="name">I'm Parag</span>
          <span className="discription">
            Passionate React.js developer with a year of experience creating
            clean, engaging interfaces. Eager to collaborate on innovative
            projects.
            <span className="fontColor"> Let's connect!</span>
          </span>
        </div>
        <div className="right slide-in-right">
          <div className="logo">
            <img src={reactLogo} className="reactLogo" />
            <img src={htmlLogo} className="htmlLogo" />
            <img src={JSLogo} className="JSLogo" />
            <img src={vsLogo} className="vsLogo" />
            <img src={cssLogo} className="cssLogo" />
            <img src={linuxLogo} className="linuxLogo" />
            <img src={gitLogo} className="gitLogo" />
          </div>
          <img src={humanImg} className="humanImg" />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import reactLogo from "../assets/react-academy.svg";
import htmlLogo from "../assets/html-1.svg";
import JSLogo from "../assets/javascript-1.svg";
import gitLogo from "../assets/git-icon.svg";
import linuxLogo from "../assets/tux.svg";
import cssLogo from "../assets/css-3.svg";
import vsLogo from "../assets/visual-studio-code-1.svg";

export default function Logo() {
  return (
    <>
      <div className="logo">
        <img src={reactLogo} className="reactLogo" />
        <img src={htmlLogo} className="htmlLogo" />
        <img src={JSLogo} className="JSLogo" />
        <img src={vsLogo} className="vsLogo" />
        <img src={cssLogo} className="cssLogo" />
        <img src={linuxLogo} className="linuxLogo" />
        <img src={gitLogo} className="gitLogo" />
      </div>
      
    </>
  );
}

import React, { useState, useEffect, useMemo } from "react";
import reactLogo from "./assets/react-academy.svg";
import htmlLogo from "./assets/html-1.svg";
import JSLogo from "./assets/javascript-1.svg";
import gitLogo from "./assets/git-icon.svg";
import linuxLogo from "./assets/tux.svg";
import cssLogo from "./assets/css-3.svg";
import vsLogo from "./assets/visual-studio-code-1.svg";
import humanImg from "./assets/human_log.png";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [active, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const newY = Math.round(window.scrollY / 100); 
      setScrollY(newY);
    });
  }, []);
  useEffect(() => {
    console.log(scrollY);
  },[scrollY])
  const shouldActive = useMemo(() => scrollY >  2 && !active,[scrollY, active]);
  const shouldDeavtive = useMemo(() => scrollY < 3 && active,[scrollY, active]);
  if (shouldActive) {
    setIsActive(true);
  }else if(shouldDeavtive){
    setIsActive(false);
  }
  return (
    <div className="App">
      <section className="firstPage">
        <div className={`left  ${active ? "slide-out-left" : "slide-in-left" }`}>
          <span className="mesHi">Hello There,</span>
          <span className="name">I'm Parag</span>
          <span className="discription">
            Passionate React.js developer with a year of experience creating
            clean, engaging interfaces. Eager to collaborate on innovative
            projects.
            <span className="fontColor"> Let's connect!</span>
          </span>
        </div>
        <div className={`right ${active ? "slide-out-right" : "slide-in-right" }`}>
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
      </section>
      <section className="secondPage"></section>
    </div>
  );
}

export default React.memo(App);
import React, { useState, useEffect, useMemo } from "react";
import Logo from "./Logo";
import humanImg from "./assets/human_log.png";
import menu from "./assets/addition.svg";
import feedbackBtn from "./assets/feedback-svgrepo-com.svg";
import aboutBtn from "./assets/about-faq-help-svgrepo-com.svg";
import tataLogo from "./assets/tcs-logo-white-trans.png";
import react from "./assets/react-2.svg";
import aLogo from "./assets/arrow.svg";
import locationLogo from "./assets/location.svg";
import Project1 from "./Project1";
import Project2 from "./Project2";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [menuClick, setMenuClick] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState([false, ""]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const newY = Math.round(window.scrollY / 60);
      setScrollY(newY);
    });
  }, []);
  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);
  const handleButtonClick = (val) => {
    setIsButtonClicked([!isButtonClicked[0], val]);
  };
  const showMenu = () => {
    setMenuClick(!menuClick);
  };
  return (
    <div className="App">
      <div className="menuBar">
        <div
          className={`menuBarFeedbackBtn ${menuClick ? "moveMenuIcon" : ""}`}
          onClick={showMenu}
        >
          <img src={feedbackBtn} />
        </div>
        <div
          className={`menuBarAbout ${menuClick ? "moveMenuIcon" : ""}`}
          onClick={showMenu}
        >
          <img src={aboutBtn} />
        </div>
        <img
          src={menu}
          className={`${menuClick ? "showMenu" : ""}`}
          onClick={showMenu}
        />
      </div>
      <section className="firstPage">
        <div
          className={`left  ${
            scrollY === 0 ? "slide-in-left" : "slide-out-left"
          }`}
        >
          <span className="mesHi">Hello There,</span>
          <span className="name">I'm Parag</span>
          <span className="discription">
            Passionate React.js developer with a year of experience creating
            clean, engaging interfaces. Eager to collaborate on innovative
            projects.
            <span className="fontColor"> Let's connect!</span>
          </span>
        </div>
        <div
          className={`right ${
            scrollY === 0 ? "slide-in-right" : "slide-out-right"
          }`}
        >
          <Logo />
          <img src={humanImg} className="humanImg" />
        </div>
      </section>
      <section className="secondPage">
        <div className={`roller ${scrollY >= 9 ? "falling" : ""}`}>
          <img src={react} />
        </div>
        <header className={`${scrollY >= 1 ? "focus-in-contract" : ""}`}>
          Personal Projects
        </header>
        <div className="project1">
          <div className={`projectCard ${scrollY >= 2 ? "slide-in-left" : ""}`}>
            <Project1 />
          </div>
          <div
            className={`description ${
              scrollY >= 2 &&
              isButtonClicked[0] &&
              isButtonClicked[1] == "first"
                ? "slide-out-fwd-center"
                : scrollY >= 2
                ? "bounce-in-right"
                : ""
            }`}
          >
            <div className="detail">
              Typing Trainer web application using featuring email & password
              login and one-click Google sign-in. The project includes profile
              personalization options, feedback and tips sections, a leaderboard
              system, and two interactive typing games. Firebase ensures secure
              authentication and data storage, while CSS enhances the intuitive
              UI for optimal performance. Technologies that used in it is HTML,
              CSS, JavaScript, React.js, React-Route, Redux, firebase
            </div>
            <div className="moreDetailbtn">
              <button
                className="circular"
                onClick={() => {
                  handleButtonClick("first");
                }}
              >
                <img src={aLogo} height={"25px"} />
              </button>
            </div>
          </div>
        </div>
        <div className="project1">
          <div
            style={{ backgroundColor: "#1c1d27" }}
            className={`projectCard ${scrollY >= 10 ? "slide-in-left" : ""}`}
          >
            <Project2 />
          </div>
          <div
            className={`description ${
              scrollY >= 10 &&
              isButtonClicked[0] &&
              isButtonClicked[1] == "second"
                ? "slide-out-fwd-center"
                : scrollY >= 10
                ? "bounce-in-right"
                : ""
            }`}
          >
            <div className="detail">
              Indulge your senses with Food Info, the cutting-edge food web app
              built using React. Whether you're a foodie searching for new
              culinary experiences or someone looking for convenient meal ideas
              or details, Food Info is your go-to platform for all things
              food-related. It involves complete details about food health
              Labels, calories, Nutrition, ingredients, and digest labels.
              Technologies mostly used is HTML, CSS, JavaScript, React.js,
              React-Route, REST- API.
            </div>
            <div className="moreDetailbtn">
              <button
                className="circular"
                onClick={() => {
                  handleButtonClick("second");
                }}
              >
                <img src={aLogo} height={"25px"} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="thirdPage">
        <header className={`${scrollY >= 21 ? "focus-in-contract" : ""}`}>
          Experience
        </header>
        <div className="experienceCard">
          <img src={tataLogo} className="tataLogo" />
          <div>
            <div className="experienceDate">11/2023 - Present</div>
            <div className="experienceLocation">
              <img src={locationLogo} />
              Navi Mumbai
            </div>
          </div>
          <div className="experienceDetail">
            <ul>
              <li>
                Our team has successfully completed the migration of an SDM
                application for our client, SBI. The application was migrated
                from JSP to React
              </li>
              <li>
                Joined as a fresher and gained diversified experience across
                different domains which used React JS technology
              </li>
              <li>
                Improved efficiency of code development process through
                automation of system build and deployment.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(App);

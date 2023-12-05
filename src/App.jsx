import React, { useState, useEffect, useMemo } from "react";
import Logo from "./pages/Logo";
import humanImg from "./assets/human_log.png";
import menu from "./assets/addition.svg";
import feedbackBtn from "./assets/feedback-svgrepo-com.svg";
import aboutBtn from "./assets/about-faq-help-svgrepo-com.svg";
import react from "./assets/react-2.svg";
import aLogo from "./assets/arrow.svg";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Experience from "./pages/Experience";

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
        <Experience />
      </section>
      <section className="fourPage">
        <header className={`${scrollY >= 33 ? "focus-in-contract" : ""}`}>
          About Me
        </header>
        <p className="aboutMePara">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello there! I'm Parag Bhosale, and I hail from Dighanchi, my mother's
          hometown. My childhood was predominantly spent there, and it's also
          where I completed my high school education. When it came time for
          graduation, I moved to Sangola, where I delved into the world of
          programming languages. During my academic journey, I developed a keen
          interest in coding, which eventually led me to a rewarding opportunity
          at TCS (Tata Consultancy Services). My initial training took place in
          Chennai, where I honed my coding skills and gained valuable insights.
          Post-training, I embarked on a professional journey as a software
          engineer, landing a role on the SBI project located in Navi Mumbai. In
          this role, I specialize in utilizing technologies such as Git, Linux,
          and my personal favorite, React JS. I find immense joy in working with
          React and leveraging its capabilities to create innovative solutions.
          I am passionate about continuously learning and growing in the dynamic
          field of software development. My experiences have equipped me with a
          solid foundation, and I look forward to contributing my skills and
          expertise to future endeavors.
        </p>
      </section>
    </div>
  );
}

export default React.memo(App);

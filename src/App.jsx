import React, { useState, useEffect, useMemo } from "react";
import Logo from "./Logo";
import humanImg from "./assets/human_log.png";
import aLogo from "./assets/arrow.svg";
import score from "./assets/project/score.png";
import navbar from "./assets/project/navbar.png";
import login from "./assets/project/login.png";
import feedback from "./assets/project/feedback.png";
import game1 from "./assets/project/game1.png";
import setting from "./assets/project/setting.png";
import game2 from "./assets/project/game2.png";
import search from "./assets/project/search.png";
import foodDis from "./assets/project/foodDis.png";
import foodHomePage from "./assets/project/foodHomePage.png";
import dishes from "./assets/project/dishes.png";
import url from "./assets/project/url.png";
import ingredient from "./assets/project/ingredient.png";

function App() {
  const [scrollY, setScrollY] = useState(0);
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
  return (
    <div className="App">
    <div className="menuBar"></div>
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
          <div className={`roller ${scrollY >= 9 ? "falling" : ""}`}/>
        <header className={`${scrollY >= 1 ? "focus-in-contract" : ""}`}>
          Personal Projects
        </header>
        <div className="project1">
          <div
            className={`projectCard ${scrollY >= 2 ? "slide-in-left" : ""}`}>
            <p>Typing Trainer</p>
            <div className="projectImg">
              <img src={score} className="projectImgScore" />
              <img src={navbar} className="projectImgNavbar" />
              <img src={login} className="projectImgLogin" />
              <img src={feedback} className="projectImgFeedback" />
              <img src={game1} className="projectImgGame1" />
              <img src={game2} className="projectImgGame2" />
              <img src={setting} className="projectImgSetting" />
            </div>
          </div>
          <div
            className={`description ${
              scrollY >= 2 && isButtonClicked[0] && isButtonClicked[1] == "first" ?  "slide-out-fwd-center" : scrollY >= 2 ? "bounce-in-right" : ""}`}
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
              <button className="circular" onClick={()=>{handleButtonClick("first")}}>
                <img src={aLogo} height={"25px"} />
              </button>
            </div>
          </div>
        </div>
        <div className="project1">
          <div style={{backgroundColor: "#1c1d27"}}
            className={`projectCard ${scrollY >= 10 ? "slide-in-left" : ""}`}
          >
            <p>Food Info</p>
            <div className="projectImg projectImg2">
              <img src={search} className="projectImgsearch" />
              <img src={foodHomePage} className="projectImgfoodHomePage" />
              <img src={ingredient} className="projectImgingredient" />
              <img src={dishes} className="projectImgdishes" />
              <img src={foodDis} className="projectImgfoodDis" />
              <img src={url} className="projectImgUrl" />
            </div>
          </div>
          <div 
            className={`description ${
              scrollY >= 10 && isButtonClicked[0] && isButtonClicked[1] == "second" ? "slide-out-fwd-center" : scrollY >= 10 ? "bounce-in-right" : ""}`}>
            <div className="detail">
            Indulge your senses with Food Info, the cutting-edge food web app built using React. Whether you're a foodie searching for new culinary experiences or someone looking for convenient meal ideas or details, Food Info is your go-to platform for all things food-related. It involves complete details about food health Labels, calories, Nutrition,
              ingredients, and digest labels. Technologies mostly used is HTML, CSS,
              JavaScript, React.js, React-Route, REST- API.
            </div>
            <div className="moreDetailbtn">
              <button className="circular" onClick={()=>{handleButtonClick("second")}}>
                <img src={aLogo} height={"25px"} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="thirdPage">
        <header className={`${scrollY >= 21 ? "focus-in-contract" : ""}`}>
          Achievement
        </header>
      </section>
    </div>
  );
}

export default React.memo(App);
